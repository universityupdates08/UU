import os
import feedparser
from pymongo import MongoClient
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes

# --- 1. CONFIGURATION ---
# We pull these from environment variables for security
BOT_TOKEN = os.environ.get("8783895942:AAEZAZy5MMw5yEFOu0JYdHVDrJDNGwK7304")
MONGO_URI = os.environ.get("mongodb://universityupdates:Adi%401329@ac-z4chm7n-shard-00-00.eqyblxw.mongodb.net:27017,ac-z4chm7n-shard-00-01.eqyblxw.mongodb.net:27017,ac-z4chm7n-shard-00-02.eqyblxw.mongodb.net:27017/?ssl=true&replicaSet=atlas-hjxy0g-shard-0&authSource=admin&appName=UU")

# --- 2. DATABASE SETUP ---
client = MongoClient(MONGO_URI)
db = client["UURSSBot"]
feeds_collection = db["subscriptions"]

# --- 3. TELEGRAM COMMANDS ---
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Sends a welcome message when the user types /start"""
    welcome_text = "Hello! Send `/add <RSS_URL>` to subscribe to a feed."
    await update.message.reply_text(welcome_text, parse_mode='Markdown')

async def add_feed(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Adds a new RSS feed to the database for this user"""
    chat_id = update.message.chat_id
    
    # Check if user provided a URL
    if not context.args:
        await update.message.reply_text("Please provide a URL. Example: `/add https://techcrunch.com/feed/`", parse_mode='Markdown')
        return
    
    url = context.args[0]
    
    # Save the subscription to MongoDB
    feeds_collection.update_one(
        {"chat_id": chat_id, "url": url},
        {"$set": {"last_article_link": ""}}, # Initialize with empty string
        upsert=True # Creates it if it doesn't exist
    )
    
    await update.message.reply_text(f"Successfully subscribed to: {url}")

# --- 4. THE RSS CHECKER (BACKGROUND TASK) ---
async def check_rss_feeds(context: ContextTypes.DEFAULT_TYPE):
    """Loops through the database, checks feeds, and sends new posts"""
    # Find all subscriptions in the database
    for sub in feeds_collection.find():
        chat_id = sub["chat_id"]
        url = sub["url"]
        last_link = sub.get("last_article_link", "")
        
        try:
            # Parse the RSS feed
            feed = feedparser.parse(url)
            if not feed.entries:
                continue
                
            # Get the newest article
            latest_article = feed.entries[0]
            latest_link = latest_article.link
            
            # If the newest article is different from the last one we sent
            if latest_link != last_link:
                # 1. Send the message to Telegram
                message = f"📰 *{latest_article.title}*\n{latest_link}"
                await context.bot.send_message(chat_id=chat_id, text=message, parse_mode='Markdown')
                
                # 2. Update MongoDB so we don't send it again
                feeds_collection.update_one(
                    {"_id": sub["_id"]},
                    {"$set": {"last_article_link": latest_link}}
                )
        except Exception as e:
            print(f"Error checking {url}: {e}")

# --- 5. START THE BOT ---
def main():
    # Build the bot app
    app = Application.builder().token(BOT_TOKEN).build()

    # Add command handlers
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("add", add_feed))

    # Schedule the RSS checker to run every 15 minutes (900 seconds)
    app.job_queue.run_repeating(check_rss_feeds, interval=900, first=10)

    # Start polling Telegram for messages
    print("Bot is running...")
    app.run_polling()

if __name__ == "__main__":
    main()

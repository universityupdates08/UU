// SIMPLE NAV + TOP BUTTON
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const btnAbout = document.getElementById("btn-about");
const mobileAbout = document.getElementById("mobile-about");
const topBtn = document.getElementById("topBtn");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
if (btnAbout && mobileAbout) {
  btnAbout.addEventListener("click", () => {
    mobileAbout.classList.toggle("hidden");
  });
}
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =========================
// QUIZ TOOL LOGIC
// =========================

// B.COM. 1st SEMESTER UNITS & TOPICS FROM SPREADSHEET
const BCOM_1ST_UNIT_TOPICS = {
  "Business Organisation": {
    "Unit 1: Business: Concept, Meaning, Features, Stages of dev...ion & Vocation, Modern Business and their Characteristics.": [],
    "Unit 2: Promotion of Business: Considerations in Establishi... and Public Company, Concept of One Person Company and LPP": [],
    "Unit 3: Plant Location: Concept, Meaning, Importance, Facto...ize. Optimum Size and factors determining the Optimum Size": [],
    "Unit 4: Business Combination: Meaning, Characteristics, Obj...haracteristics, Objectives, Principles, Merits and demerits": []
  },
  "Business Statistics": {
    "Unit 1: Evolution of Statistics in India, contribution of I...of Data Diagrammatical and Graphical Presentation of Data.": [],
    "Unit 2: Measures of Central Tendency Mean, Median, Mode, Ge...s and Dispersion, Its Importance, Co-efficientof Skewness.": [],
    "Unit 3: Correlation- Meaning, application, types and degree...lation, Concurrent method, Probable Error & Standard Error": [],
    "Unit 4: Index Number: Meaning, Types and Uses, Methods of c...e Series: Moving Average Method and Method of Least square.": []
  }
};

// SUBJECT LISTS AND UNIT TOPICS FROM SPREADSHEET (B.A. & B.Sc.)
const BA_1ST_UNIT_TOPICS = {
  "Defence studies": {
    "Unit 1: Conceptual Formulation: Meaning and definition of Defence and Strategic Studies, its relevance...": [],
    "Unit 2: Principles of War; War as an instrument of policy: past, present and future.": [],
    "Unit 3: Modern Warfare: Concept and definition; features of modern warfare.": [],
    "Unit 4: Guerrilla Warfare: Origin and concept; principles, techniques and characteristics of guerrilla...": [],
    "Unit 5: Psychological Warfare: Definition, concept, functions and limitations.": [],
    "Unit 6: Economic Warfare: Concept and definition; basic dimensions; effects of war on national economy.": [],
    "Unit 7: Nuclear Warfare: Beginning of nuclear era and effects of nuclear explosion; nuclear strategies...": [],
    "Unit 8: Chemical and Biological Warfare: Definition and concept; agents, their effect and military use.": []
  },
  "Drawing & Paintings": {
    "Unit 1: Pre-historic Painting.": [],
    "Unit 2: Indus Valley Civilization.": [],
    "Unit 3: Mauryan Period: Pottery, Sculptures & Architectures.": [],
    "Unit 4: Stupas: Sanchi, Bharhut, Amrawati.": [],
    "Unit 5: Gupta Period: Pottery, Sculptures & Architectures.": [],
    "Unit 6: Caves Art: Jogimara, Ajanta.": [],
    "Unit 7: Caves Art: Bagh, Sittanwasal.": [],
    "Unit 8: Caves Art: Ellora & Elephenta.": []
  },
  "Economics": {
    "Unit 1: Basic Concepts: What is economics and why is it important, microeconomics vs macroeconomics;...": [],
    "Unit 2: Demand and Supply: Demand, supply and equilibrium in markets for goods and services; law of...": [],
    "Unit 3: Theory of Consumer Behaviour: Concept of utility – cardinal vs ordinal utility; marginal...": [],
    "Unit 4: Production and Costs: Production function – long run and short run; law of variable proportions,...": [],
    "Unit 5: Perfect Competition: Characteristics, output decisions by perfectly competitive firms, entry and...": [],
    "Unit 6: Imperfect Competition: Features of monopoly, monopolistic competition, oligopoly; price...": [],
    "Unit 7: Factor Markets: Concept of marginal productivity; demand for and supply of labour; wage...": [],
    "Unit 8: Welfare Economics: Basic ideas of Pareto efficiency; market failure; public goods and externalities.": []
  },
  "English": {
    "Unit 1: Prose – Short stories that develop comprehension and critical thinking skills.": [],
    "Unit 2: Poetry – Selected poems focusing on theme, form and figurative language.": [],
    "Unit 3: Grammar – Parts of speech, tenses, subject-verb agreement, articles and prepositions.": [],
    "Unit 4: Writing Skills – Paragraph writing, essay writing, letter writing (formal and informal).": [],
    "Unit 5: Vocabulary – Synonyms, antonyms, idioms and phrases, one-word substitutions.": [],
    "Unit 6: Communication Skills – Listening, speaking, reading and writing (LSRW) practice.": [],
    "Unit 7: Functional English – Comprehension passages and usage in real life situations.": [],
    "Unit 8: Remedial English – Common errors and their correction.": []
  },
  "Geography": {
    "Unit 1: Physical Geography: Origin of the earth; structure of the earth; concept of plate tectonics...": [],
    "Unit 2: Geomorphic Processes: Weathering, mass wasting, erosion and deposition; agents of erosion –...": [],
    "Unit 3: Climatology: Composition and structure of atmosphere; elements of weather and climate; heat...": [],
    "Unit 4: Oceanography: Relief of ocean floor; temperature and salinity of oceans; ocean currents and tides.": [],
    "Unit 5: Human Geography: Man-environment relationship; concepts of determinism and possibilism.": [],
    "Unit 6: Population Geography: Growth, distribution and density of population; population theories.": [],
    "Unit 7: Economic Geography: Agriculture, industry, trade and transport – basic concepts.": [],
    "Unit 8: Regional Geography of India: Physiographic divisions; climate; natural vegetation and soils.": []
  },
  "Hindi": {
    "Unit 1: भारतीय ज्ञान परंपरा के अंतर्गत आदिकालीन एवं मध्यकालीन काव्यधारा की प्रमुख विशेषताएँ।": [],
    "Unit 2: आधुनिक काल की प्रवृत्तियाँ: सामाजिक, सांस्कृतिक एवं राजनीतिक परिप्रेक्ष्य में।": [],
    "Unit 3: निबंध एवं गद्य साहित्य की प्रमुख विधाएँ और उदाहरण।": [],
    "Unit 4: हिंदी व्याकरण: संधि, समास, तत्सम-तद्भव, वाक्य और पदचिह्न।": [],
    "Unit 5: पत्र लेखन: औपचारिक एवं अनौपचारिक पत्र, आवेदन पत्र।": [],
    "Unit 6: अनुवाद: अंग्रेज़ी से हिंदी और हिंदी से अंग्रेज़ी के मूल सिद्धांत।": [],
    "Unit 7: रचनात्मक लेखन: अनुच्छेद, कहानी और संवाद लेखन।": [],
    "Unit 8: हिंदी भाषा का व्यावहारिक उपयोग और रोजगार के अवसर।": []
  },
  "History": {
    "Unit 1: Introduction to Ancient History: Culture & Tradition, Sources of Ancient Indian History.": [],
    "Unit 2: Indus Valley Civilization, Vedic and later Vedic Age – Political, social & economic life.": [],
    "Unit 3: Rise of Magadh Empire and Maurya Dynasty – Chandragupt Maurya, Bindusara, Ashoka.": [],
    "Unit 4: Gupta Dynasty – Chandragupt I, Samudragupt, Chandragupt II ‘Vikramaditya’, Golden Era of Ancient India.": [],
    "Unit 5: Age of Harsh Vardhan and Rise of Rajput States – Pratihar, Chalukya, Parmar and Chauhan.": [],
    "Unit 6: Rise of Feudalism in India.": [],
    "Unit 7: Customs, rituals and beliefs of Hindus.": [],
    "Unit 8: Advent of Islam: Invasion of Mahmood Ghaznavi and Md. Ghori.": []
  },
  "Home Science": {
    "Unit 1: Concept of Home Science: Meaning, scope and relevance in modern life; relation with other...": [],
    "Unit 2: Human Development: Stages of human growth and development from infancy to adolescence.": [],
    "Unit 3: Family Resource Management: Resources – meaning, types and management process; time and...": [],
    "Unit 4: Food and Nutrition: Functions of food; nutrients and their functions; balanced diet.": [],
    "Unit 5: Meal Planning: Principles of meal planning for different age groups and special conditions.": [],
    "Unit 6: Textile Science: Classification of fibres; properties and uses of cotton, wool, silk and...": [],
    "Unit 7: Clothing Construction: Basic stitches, seams and finishes.": [],
    "Unit 8: Housing: Principles of house planning; selection of site and orientation.": []
  },
  "Library Science": {
    "Unit 1: Library: Meaning, definition, objectives and functions; types of libraries.": [],
    "Unit 2: Library Organisation: Structure, sections and their functions.": [],
    "Unit 3: Library Rules and Regulations; library membership and circulation system.": [],
    "Unit 4: Library Classification: Need and purpose; basic knowledge of DDC and UDC.": [],
    "Unit 5: Cataloguing: Meaning, objectives and kinds of catalogues.": [],
    "Unit 6: Reference Service: Need and importance; types of reference services.": [],
    "Unit 7: Information Sources: Primary, secondary and tertiary sources.": [],
    "Unit 8: Role of Libraries in Digital Age: E-resources and digital libraries.": []
  },
  "Music": {
    "Unit 1: Basic concepts of Indian Classical Music – swar, saptak, alankar, that and rag.": [],
    "Unit 2: Classification of Indian Musical Instruments and their brief description.": [],
    "Unit 3: Different gharanas of Indian Classical Music – brief introduction.": [],
    "Unit 4: Important forms of Hindustani vocal music – dhrupad, khayal, thumri.": [],
    "Unit 5: Life and contribution of prominent musicians/composers.": [],
    "Unit 6: Tala system – concept of laya, tala and their varieties.": [],
    "Unit 7: Notation system in Indian Classical Music.": [],
    "Unit 8: Practical aspects – basic alankars, simple compositions (bandish).": []
  },
  "Philosophy": {
    "Unit 1: Introduction to Philosophy: Nature, scope and branches of philosophy.": [],
    "Unit 2: Indian Philosophy: Overview of Vedic, Upanishadic and classical systems.": [],
    "Unit 3: Charvaka, Jainism and Buddhism – basic tenets.": [],
    "Unit 4: Nyaya, Vaisheshika and Sankhya – key concepts.": [],
    "Unit 5: Yoga and Vedanta – basic ideas.": [],
    "Unit 6: Western Philosophy: Pre-Socratic philosophers, Socrates, Plato and Aristotle.": [],
    "Unit 7: Modern Western thinkers – Descartes, Locke, Hume, Kant (brief outlines).": [],
    "Unit 8: Ethics: Nature and theories of ethics; values in personal and social life.": []
  },
  "Physical Education": {
    "Unit 1: Introduction to Physical Education: Meaning, definition, aims and objectives.": [],
    "Unit 2: Physical Fitness and Wellness: Components of physical fitness; health-related fitness.": [],
    "Unit 3: Anatomy and Physiology: Basic structure and function of human body systems.": [],
    "Unit 4: Sports Training: Principles and methods of training.": [],
    "Unit 5: Rules and Regulations of Major Games and Sports.": [],
    "Unit 6: Yoga and its importance; basic asanas and pranayama.": [],
    "Unit 7: Recreation and Leisure Time Activities.": [],
    "Unit 8: Health Education and Nutrition.": []
  },
  "Political Science": {
    "Unit 1: Introduction to Political Science: Meaning, nature, scope and significance.": [],
    "Unit 2: State: Concept, elements and theories of origin of state.": [],
    "Unit 3: Sovereignty: Meaning, characteristics and types.": [],
    "Unit 4: Rights and Duties: Meaning, kinds and safeguards.": [],
    "Unit 5: Democracy: Meaning, types, merits and demerits.": [],
    "Unit 6: Forms of Government: Parliamentary and Presidential; unitary and federal.": [],
    "Unit 7: Constitution of India: Preamble, Fundamental Rights and Duties, Directive Principles.": [],
    "Unit 8: Organs of Government: Legislature, Executive and Judiciary – structure and functions.": []
  },
  "Psychology": {
    "Unit 1: Introduction to Psychology: Definition, nature, branches and methods.": [],
    "Unit 2: Sensation and Perception: Nature, kinds and factors influencing perception.": [],
    "Unit 3: Attention and Learning: Types and theories of learning.": [],
    "Unit 4: Memory and Forgetting: Process, types and causes.": [],
    "Unit 5: Intelligence: Concept, theories and measurement.": [],
    "Unit 6: Personality: Definition, determinants and theories.": []
  },
  "Sanskrit": {
    "Unit 1: प्राचीन संस्कृत साहित्य का परिचय – वेद, उपनिषद्, रामायण, महाभारत।": [],
    "Unit 2: संस्कृत नाटक एवं काव्य की प्रमुख विशेषताएँ।": [],
    "Unit 3: व्याकरण – संधि, समास, कारक और काल।": [],
    "Unit 4: गद्य एवं पद्य पाठ: चयनित अंशों का अध्ययन।": [],
    "Unit 5: निबंध और पत्र-लेखन।": [],
    "Unit 6: संस्कृत भाषा की आधुनिक प्रासंगिकता।": [],
    "Unit 7: श्लोकों का व्याख्यात्मक अध्ययन।": [],
    "Unit 8: अनुवाद – संस्कृत से हिंदी/अंग्रेज़ी और विपरीत।": []
  },
  "Sociology": {
    "Unit 1: Introduction to Sociology: Meaning, nature, scope and importance.": [],
    "Unit 2: Basic Concepts: Society, community, association, institution, social group.": [],
    "Unit 3: Social Structure and Social System.": [],
    "Unit 4: Socialization: Agencies and processes.": [],
    "Unit 5: Social Control: Means and agencies.": [],
    "Unit 6: Social Change: Meaning, factors and theories.": []
  }
};

const BSC_1ST_UNIT_TOPICS = {
  "Botany": {
    "Unit 1: Diversity of Algae: General characters, classification and life cycle examples.": [],
    "Unit 2: Fungi: General characters, classification and economic importance.": [],
    "Unit 3: Bryophytes: General features and life cycle of representative types.": [],
    "Unit 4: Pteridophytes: General characters and life cycle examples.": [],
    "Unit 5: Gymnosperms: General characters and life cycle of representative genera.": [],
    "Unit 6: Angiosperms: Morphology of root, stem, leaf, inflorescence and flower.": [],
    "Unit 7: Plant Anatomy: Internal structure of root, stem and leaf (dicot and monocot).": [],
    "Unit 8: Plant Physiology: Photosynthesis, respiration and transpiration – basic concepts.": []
  },
  "Chemistry": {
    "Unit 1: Atomic Structure: Bohr’s theory, quantum numbers, electronic configuration.": [],
    "Unit 2: Chemical Bonding: Ionic, covalent, coordinate and metallic bonds; VSEPR theory.": [],
    "Unit 3: States of Matter: Gaseous and liquid states; ideal and real gases.": [],
    "Unit 4: Thermodynamics: First law, internal energy, enthalpy and Hess’s law.": [],
    "Unit 5: Chemical Equilibrium: Law of mass action; Le Chatelier’s principle.": [],
    "Unit 6: Ionic Equilibria: pH, buffer solutions, solubility product.": [],
    "Unit 7: Organic Chemistry – Basics: Hybridization, isomerism, nomenclature of organic compounds.": [],
    "Unit 8: Hydrocarbons: Alkanes, alkenes and alkynes – preparation and properties (brief).": []
  },
  "Geology": {
    "Unit 1: Introduction to Geology: Branches, scope and importance of geology.": [],
    "Unit 2: Earth as a Planet: Origin, shape, size and internal structure of the earth.": [],
    "Unit 3: Rocks: Types of rocks – igneous, sedimentary and metamorphic.": [],
    "Unit 4: Minerals: Physical properties and classification.": [],
    "Unit 5: Geological Structures: Folds, faults, joints and unconformities.": [],
    "Unit 6: Weathering and Erosion: Processes and agents.": [],
    "Unit 7: Geological Time Scale – basic idea.": [],
    "Unit 8: Economic Geology: Important metallic and non-metallic minerals of India.": []
  },
  "Mathematics": {
    "Unit 1: Algebra: Sets, relations, functions and complex numbers.": [],
    "Unit 2: Matrices and Determinants: Basic operations and applications.": [],
    "Unit 3: Trigonometry: Trigonometric functions and identities.": [],
    "Unit 4: Differential Calculus: Limits, continuity and derivatives.": [],
    "Unit 5: Applications of Derivatives: Maxima, minima and curve sketching (basic).": [],
    "Unit 6: Integral Calculus: Indefinite and definite integrals (elementary).": [],
    "Unit 7: Coordinate Geometry: Straight lines and circles.": [],
    "Unit 8: Vector Algebra: Basic concepts and operations.": []
  },
  "Physics": {
    "Unit 1: Mechanics: Units and dimensions; vectors; Newton’s laws of motion.": [],
    "Unit 2: Work, Energy and Power; conservation laws.": [],
    "Unit 3: Properties of Matter: Elasticity, surface tension and viscosity (basic).": [],
    "Unit 4: Heat and Thermodynamics: Temperature scales, laws of thermodynamics.": [],
    "Unit 5: Waves and Oscillations: Simple harmonic motion; wave motion.": [],
    "Unit 6: Optics: Reflection, refraction and basic optical instruments.": [],
    "Unit 7: Electricity and Magnetism: Coulomb’s law, electric field and potential (introductory).": [],
    "Unit 8: Modern Physics: Dual nature of matter and radiation; atomic models (brief).": []
  },
  "Statistics": {
    "Unit 1: Introduction to Statistics: Meaning, scope and limitations.": [],
    "Unit 2: Collection and Presentation of Data: Primary and secondary data; tabulation.": [],
    "Unit 3: Measures of Central Tendency: Mean, median, mode.": [],
    "Unit 4: Measures of Dispersion: Range, mean deviation, standard deviation.": [],
    "Unit 5: Correlation and Regression: Basic concepts and simple problems.": [],
    "Unit 6: Probability: Basic rules and simple applications.": [],
    "Unit 7: Index Numbers: Concept and types.": [],
    "Unit 8: Time Series Analysis: Components and basic methods.": []
  },
  "Zoology": {
    "Unit 1: Protozoa: General characteristics and life cycle of representative forms.": [],
    "Unit 2: Porifera and Coelenterata: General characters and examples.": [],
    "Unit 3: Platyhelminthes and Aschelminthes: General characters and examples.": [],
    "Unit 4: Annelida: General characters and economic importance.": [],
    "Unit 5: Arthropoda and Mollusca: General features and examples.": [],
    "Unit 6: Echinodermata: General characters and significance.": [],
    "Unit 7: Chordata: General characters of major groups.": [],
    "Unit 8: Human Physiology: Digestive, respiratory and circulatory systems (introductory).": []
  }
};

const BA_1ST_SUBJECTS = ["Defence studies", "Drawing & Paintings", "Economics", "English", "Geography", "Hindi", "History", "Home Science", "Library Science", "Music", "Philosophy", "Physical Education", "Political Science", "Psychology", "Sanskrit", "Sociology"];
const BSC_1ST_SUBJECTS = ["Botany", "Chemistry", "Geology", "Mathematics", "Physics", "Statistics", "Zoology"];

// CO-CURRICULAR SUBJECTS (simple 4-unit structure)
const CO_CURRICULAR_SUBJECTS = [
  "Food, Nutrition & Hygiene",
  "First Aid & Health",
  "Human Values & Environmental Studies",
  "Physical Education & Yoga",
  "Analytic Ability and Digital Awareness",
  "Communication Skills and Personality Development"
];

// BASE QUIZ DATA (subjects + units)
const quizData = {
  english: {},
  hindi: {}
};

// Add B.COM. + B.A. + B.Sc. subjects (same unit structure for both languages)
Object.assign(quizData.english, BCOM_1ST_UNIT_TOPICS, BA_1ST_UNIT_TOPICS, BSC_1ST_UNIT_TOPICS);
Object.assign(quizData.hindi, BCOM_1ST_UNIT_TOPICS, BA_1ST_UNIT_TOPICS, BSC_1ST_UNIT_TOPICS);

// Helper: add generic units for Co-Curricular only
function addUnitsForSubjects(subjectList, lang, unitsCount) {
  subjectList.forEach((subj) => {
    if (!quizData[lang][subj]) {
      const units = {};
      for (let i = 1; i <= unitsCount; i++) {
        const label = `Unit ${i}`;
        units[label] = [];
      }
      quizData[lang][subj] = units;
    }
  });
}

// Add Co-Curricular subjects (4 units)
addUnitsForSubjects(CO_CURRICULAR_SUBJECTS, "english", 4);
addUnitsForSubjects(CO_CURRICULAR_SUBJECTS, "hindi", 4);

// COURSE / SEMESTER → SUBJECT MAPPING (spreadsheet)
const courseSemesterSubjects = {
  "B.COM.": {
    "1st": {
      english: Object.keys(BCOM_1ST_UNIT_TOPICS),
      hindi: Object.keys(BCOM_1ST_UNIT_TOPICS)
    }
    // 2nd, 4th, 6th not yet configured
  },
  "B.A.": {
    "1st": {
      english: BA_1ST_SUBJECTS,
      hindi: BA_1ST_SUBJECTS
    }
  },
  "B.Sc.": {
    "1st": {
      english: BSC_1ST_SUBJECTS,
      hindi: BSC_1ST_SUBJECTS
    }
  },
  "Co-Curricular": {
    "-": {
      english: CO_CURRICULAR_SUBJECTS,
      hindi: CO_CURRICULAR_SUBJECTS
    }
  }
};

// GLOBAL STATE
let currentLanguage = "english";
let currentCourse = "";
let currentSemester = "";
let currentSubject = "";
let currentUnit = "";
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let questionSet = [];

// Timing state
let quizStartTime = null;
let questionStartTime = null;

// Keep savedQuestions structure but we will NOT use caching (always fresh)
const savedQuestions = {
  english: {},
  hindi: {}
};

// NUMBER_OF_QUESTIONS used for local generation
const NUMBER_OF_QUESTIONS = 25;

// DOM ELEMENTS
const dom = {
  langSwitchBtn: document.getElementById("language-switch-btn"),
  subjectList: document.getElementById("subject-list"),
  unitSection: document.getElementById("unit-section"),
  unitList: document.getElementById("unit-list"),
  quizContainer: document.getElementById("quiz-container"),
  welcomeMessage: document.getElementById("welcome-message"),
  loadingQuestions: document.getElementById("loading-questions"),
  questionCard: document.getElementById("question-card"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),
  checkAnswerBtn: document.getElementById("check-answer-btn"),
  explanationBtn: document.getElementById("explanation-btn"),
  nextQuestionBtn: document.getElementById("next-question-btn"),
  geminiAiBtn: document.getElementById("gemini-ai-btn"),
  geminiBtnText: document.getElementById("gemini-btn-text"),
  feedbackArea: document.getElementById("feedback-area"),
  resultMessage: document.getElementById("result-message"),
  explanationBlock: document.getElementById("explanation-block"),
  explanationText: document.getElementById("explanation-text"),
  geminiAnalysisBlock: document.getElementById("gemini-analysis-block"),
  geminiAnalysisContent: document.getElementById("gemini-analysis-content"),
  geminiSources: document.getElementById("gemini-sources"),
  currentUnitInfo: document.getElementById("current-unit-info"),
  questionCounter: document.getElementById("question-counter"),
  selectorTitle: document.getElementById("selector-title"),
  unitTitle: document.getElementById("unit-title"),
  geminiAnalysisHeading: document.getElementById("gemini-analysis-heading"),
  sourcesHeading: document.getElementById("sources-heading"),
  sourcesList: document.getElementById("sources-list"),

  courseSelect: document.getElementById("course-select"),
  semesterSelect: document.getElementById("semester-select"),
  courseLabel: document.getElementById("course-label"),
  semesterLabel: document.getElementById("semester-label"),
  semesterWrapper: document.getElementById("semester-wrapper"),

  timeInfo: document.getElementById("time-info"),
};

// =========================
// INTERNAL QUESTION GENERATOR (NO API)
// ALWAYS GENERATES NEW 25 QUESTIONS
// =========================

function generateLocalQuestions(subject, unit, language) {
  const isEnglish = language === "english";

  // Pool of templates (25 good ones included) — you can expand this list later
  const genericQuestions = [
    {
      q: isEnglish ? "Which gas is most abundant in Earth's atmosphere?" : "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस होती है?",
      options: isEnglish ? ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"] : ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
      ans: 1,
      exp: isEnglish ? "Nitrogen forms about 78% of Earth's atmosphere." : "नाइट्रोजन पृथ्वी के वायुमंडल का लगभग 78% हिस्सा है।"
    },
    {
      q: isEnglish ? "The SI unit of force is:" : "बल की SI इकाई क्या है?",
      options: isEnglish ? ["Watt", "Pascal", "Newton", "Joule"] : ["वाट", "पास्कल", "न्यूटन", "जूल"],
      ans: 2,
      exp: isEnglish ? "Force is measured in Newtons." : "बल की इकाई न्यूटन होती है।"
    },
    {
      q: isEnglish ? "Which organ purifies blood in the human body?" : "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
      options: isEnglish ? ["Heart", "Lungs", "Liver", "Kidneys"] : ["हृदय", "फेफड़े", "जिगर", "गुर्दे"],
      ans: 3,
      exp: isEnglish ? "Kidneys filter waste from the blood and produce urine." : "गुर्दे रक्त से अपशिष्ट पदार्थों को छानते हैं और मूत्र बनाते हैं।"
    },
    {
      q: isEnglish ? "Who is known as the Father of the Indian Constitution?" : "भारतीय संविधान का जनक किसे कहा जाता है?",
      options: isEnglish ? ["Jawaharlal Nehru", "B.R. Ambedkar", "Mahatma Gandhi", "Rajendra Prasad"] : ["जवाहरलाल नेहरू", "बी.आर. आंबेडकर", "महात्मा गांधी", "राजेंद्र प्रसाद"],
      ans: 1,
      exp: isEnglish ? "B.R. Ambedkar chaired the drafting committee of the Constitution." : "B.R. आंबेडकर संविधान के मसौदा समिति के अध्यक्ष थे।"
    },
    {
      q: isEnglish ? "The process of converting water vapor to liquid is called:" : "जलवाष्प को द्रव में बदलने की प्रक्रिया को क्या कहते हैं?",
      options: isEnglish ? ["Evaporation", "Sublimation", "Condensation", "Vaporization"] : ["वाष्पीकरण", "उत्क्षेपण", "संघनन", "वाष्पीकरण"],
      ans: 2,
      exp: isEnglish ? "Condensation is vapor turning into liquid." : "संघनन वह प्रक्रिया है जिसमें वाष्प द्रव में बदलता है।"
    },
    {
      q: isEnglish ? "Which planet is known as the Red Planet?" : "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
      options: isEnglish ? ["Venus", "Mars", "Jupiter", "Saturn"] : ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
      ans: 1,
      exp: isEnglish ? "Mars appears red due to iron oxide on its surface." : "मंगल ग्रह की सतह पर लौह ऑक्साइड होने के कारण यह लाल दिखाई देता है।"
    },
    {
      q: isEnglish ? "Who invented the telephone?" : "टेलीफ़ोन का आविष्कार किसने किया?",
      options: isEnglish ? ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"] : ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "अल्बर्ट आइंस्टीन"],
      ans: 1,
      exp: isEnglish ? "Alexander Graham Bell is credited with the telephone patent." : "अलेक्जेंडर ग्राहम बेल को टेलीफोन का पेटेंट लेने के लिए जाना जाता है।"
    },
    {
      q: isEnglish ? "The chemical formula of water is:" : "पानी का रासायनिक सूत्र क्या है?",
      options: isEnglish ? ["CO₂", "H₂", "H₂O", "O₂"] : ["CO₂", "H₂", "H₂O", "O₂"],
      ans: 2,
      exp: isEnglish ? "Water is H₂O (two hydrogen atoms and one oxygen)." : "पानी H₂O है (दो हाइड्रोजन और एक ऑक्सीजन)।"
    },
    {
      q: isEnglish ? "Which is the largest continent?" : "सबसे बड़ा महाद्वीप कौन सा है?",
      options: isEnglish ? ["Africa", "Asia", "Europe", "North America"] : ["अफ्रीका", "एशिया", "यूरोप", "उत्तरी अमेरिका"],
      ans: 1,
      exp: isEnglish ? "Asia is the largest continent by area." : "क्षेत्रफल के हिसाब से एशिया सबसे बड़ा महाद्वीप है।"
    },
    {
      q: isEnglish ? "Which day is celebrated as World Environment Day?" : "विश्व पर्यावरण दिवस किस तारीख को मनाया जाता है?",
      options: isEnglish ? ["5 June", "22 April", "10 December", "1 January"] : ["5 जून", "22 अप्रैल", "10 दिसंबर", "1 जनवरी"],
      ans: 0,
      exp: isEnglish ? "World Environment Day is observed on 5 June." : "विश्व पर्यावरण दिवस 5 जून को मनाया जाता है।"
    },
    {
      q: isEnglish ? "What is the currency of Japan?" : "जापान की मुद्रा क्या है?",
      options: isEnglish ? ["Yen", "Dollar", "Won", "Euro"] : ["येन्", "डॉलर", "वोन", "यूरो"],
      ans: 0,
      exp: isEnglish ? "Japan's currency is the Yen." : "जापान की मुद्रा येन है।"
    },
    {
      q: isEnglish ? "Which blood group is known as the universal donor?" : "कौन सा रक्त समूह सार्वभौमिक दाता माना जाता है?",
      options: isEnglish ? ["AB+", "O+", "O−", "AB−"] : ["AB+", "O+", "O−", "AB−"],
      ans: 2,
      exp: isEnglish ? "O− can be given to patients of any blood group in emergencies." : "O− आपातकालीन स्थिति में किसी भी रक्त समूह को दिया जा सकता है।"
    },
    {
      q: isEnglish ? "The longest river in the world is:" : "दुनिया की सबसे लंबी नदी कौन सी है?",
      options: isEnglish ? ["Nile", "Amazon", "Yangtze", "Mississippi"] : ["नील", "अमेज़न", "यांगत्से", "मिसिसिपी"],
      ans: 0,
      exp: isEnglish ? "Nile is commonly cited as the longest, though some measure Amazon longer." : "नील को अक्सर सबसे लंबी माना जाता है; कुछ मापदंडों में अमेज़न लंबी बताई जाती है।"
    },
    {
      q: isEnglish ? "Who discovered gravity?" : "गुरुत्वाकर्षण की खोज किसने की?",
      options: isEnglish ? ["Newton", "Galileo", "Einstein", "Kepler"] : ["न्यूटन", "गैलीलियो", "आइंस्टीन", "केप्लर"],
      ans: 0,
      exp: isEnglish ? "Isaac Newton formulated the laws of gravity." : "आइज़ैक न्यूटन ने गुरुत्वाकर्षण के सिद्धांतों को प्रतिपादित किया।"
    },
    {
      q: isEnglish ? "CPU stands for:" : "CPU का पूरा नाम क्या है?",
      options: isEnglish ? ["Central Power Unit", "Central Processing Unit", "Computer Processing Utility", "Control Program Unit"] : ["सेंट्रल पॉवर यूनिट", "सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूटिलिटी", "कंट्रोल प्रोग्राम यूनिट"],
      ans: 1,
      exp: isEnglish ? "CPU means Central Processing Unit." : "CPU का मतलब सेंट्रल प्रोसेसिंग यूनिट है।"
    },
    {
      q: isEnglish ? "Photosynthesis occurs in which part of the plant?" : "प्रकाश संश्लेषण पौधे के किस भाग में होता है?",
      options: isEnglish ? ["Root", "Stem", "Leaves", "Flower"] : ["जड़", "तना", "पत्तियाँ", "फूल"],
      ans: 2,
      exp: isEnglish ? "Photosynthesis mainly takes place in leaves where chlorophyll is present." : "प्रकाश संश्लेषण मुख्य रूप से पत्तियों में होता है जहाँ क्लोरोफिल होता है।"
    },
    {
      q: isEnglish ? "The hardest natural substance is:" : "प्राकृतिक रूप से सबसे कठोर पदार्थ कौन सा है?",
      options: isEnglish ? ["Iron", "Diamond", "Quartz", "Gold"] : ["लोहा", "हीरा", "क्वार्ट्ज", "सोना"],
      ans: 1,
      exp: isEnglish ? "Diamond is the hardest naturally occurring material." : "हीरा प्राकृतिक रूप से सबसे कठोर पदार्थ है।"
    },
    {
      q: isEnglish ? "The author of 'Ramayana' is:" : "रामायण के रचयिता कौन हैं?",
      options: isEnglish ? ["Tulsidas", "Valmiki", "Ved Vyas", "Kalidas"] : ["तुलसीदास", "वाल्मीकि", "वेद व्यास", "कालिदास"],
      ans: 1,
      exp: isEnglish ? "Valmiki is traditionally credited as the author of the Ramayana." : "वाल्मीकि को पारंपरिक रूप से रामायण का रचयिता माना जाता है।"
    },
    {
      q: isEnglish ? "Which metal is liquid at room temperature?" : "कौन सा धातु सामान्य तापमान पर द्रव रूप में होता है?",
      options: isEnglish ? ["Aluminium", "Mercury", "Copper", "Lead"] : ["एल्यूमीनियम", "पारा", "तांबा", "सीसा"],
      ans: 1,
      exp: isEnglish ? "Mercury is liquid at room temperature." : "पारा सामान्य तापमान पर द्रव अवस्था में होता है।"
    },
    {
      q: isEnglish ? "The longest bone in the human body is:" : "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
      options: isEnglish ? ["Tibia", "Fibula", "Femur", "Humerus"] : ["टिबिया", "फिबुला", "फीमर", "ह्यूमेरस"],
      ans: 2,
      exp: isEnglish ? "Femur (thigh bone) is the longest bone." : "फीमर (जांघ की हड्डी) सबसे लंबी हड्डी है।"
    },
    {
      q: isEnglish ? "The national flower of India is:" : "भारत का राष्ट्रीय फूल कौन सा है?",
      options: isEnglish ? ["Rose", "Lotus", "Lily", "Marigold"] : ["गुलाब", "कमल", "लिली", "गेंदा"],
      ans: 1,
      exp: isEnglish ? "Lotus is the national flower of India." : "कमल भारत का राष्ट्रीय फूल है।"
    },
    {
      q: isEnglish ? "Light travels fastest in:" : "प्रकाश किस माध्यम में सबसे तेज़ चलता है?",
      options: isEnglish ? ["Water", "Glass", "Air", "Vacuum"] : ["पानी", "काँच", "वायु", "रिक्त स्थान (वैक्यूम)"],
      ans: 3,
      exp: isEnglish ? "Light speed is maximum in vacuum." : "प्रकाश की गति वैक्यूम में सबसे अधिक होती है।"
    },
    {
      q: isEnglish ? "What does RAM stand for?" : "RAM का पूरा नाम क्या है?",
      options: isEnglish ? ["Random Access Memory", "Read Access Memory", "Rapid Action Memory", "Remote Access Module"] : ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैपिड एक्शन मेमोरी", "रिमोट एक्सेस मॉड्यूल"],
      ans: 0,
      exp: isEnglish ? "RAM stands for Random Access Memory." : "RAM का पूरा नाम रैंडम एक्सेस मेमोरी है।"
    },
    {
      q: isEnglish ? "The study of earthquakes is called:" : "भूकंपों का अध्ययन किसे कहते हैं?",
      options: isEnglish ? ["Meteorology", "Seismology", "Geology", "Physiology"] : ["मौसम विज्ञान", "भूकंपीय विज्ञान", "भूविज्ञान", "शारीरिक विज्ञान"],
      ans: 1,
      exp: isEnglish ? "Seismology is the study of earthquakes and seismic waves." : "भूकंपीय विज्ञान भूकंपों और भूकंपीय तरंगों का अध्ययन है।"
    },
    {
      q: isEnglish ? "The largest ocean on Earth is:" : "पृथ्वी का सबसे बड़ा महासागर कौन सा है?",
      options: isEnglish ? ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] : ["अटलांटिक महासागर", "भारतीय महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
      ans: 2,
      exp: isEnglish ? "The Pacific Ocean is the largest ocean on Earth." : "प्रशांत महासागर पृथ्वी का सबसे बड़ा महासागर है।"
    }
  ];

  // Build question list by randomly sampling templates.
  const questionList = [];
  for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
    const base = genericQuestions[Math.floor(Math.random() * genericQuestions.length)];
    // deep clone to avoid shared references
    const copy = JSON.parse(JSON.stringify(base));

    // Optionally, you could shuffle options here and adjust 'ans', but keeping original indices for simplicity.
    questionList.push(copy);
  }

  // Apply result
  questionSet = questionList;
  currentQuestionIndex = 0;

  dom.loadingQuestions.classList.add("hidden");
  dom.questionCard.classList.remove("hidden");

  quizStartTime = new Date();

  renderQuestion();
}

// GEMINI ANALYSIS: Disabled in offline mode — show friendly message instead
async function analyzeQuestionWithGemini() {
  dom.geminiAnalysisBlock.classList.remove("hidden");
  dom.geminiAnalysisContent.innerHTML =
    '<p class="text-yellow-700 text-sm">AI analysis is disabled in offline mode (no API). The app generates fresh questions locally. You can enable advanced analysis by configuring an API key and re-enabling the AI integration.</p>';
  dom.geminiAiBtn.disabled = true;
  dom.geminiAiBtn.classList.add("opacity-50", "cursor-not-allowed");
  dom.sourcesList.innerHTML = "";
  dom.geminiSources.classList.add("hidden");
}

// TEXTS / UI LANGUAGE
function updateTexts() {
  const isEnglish = currentLanguage === "english";
  dom.langSwitchBtn.textContent = isEnglish
    ? "हिंदी में बदलें"
    : "Switch to English";
  dom.selectorTitle.textContent = isEnglish
    ? "Select Subject"
    : "विषय चुनें";
  dom.unitTitle.textContent = isEnglish ? "Select Unit" : "इकाई चुनें";
  dom.welcomeMessage.textContent = isEnglish
    ? (currentCourse && (currentSemester || currentCourse === "Co-Curricular")
        ? "Please select a subject and a unit to begin your MCQ test."
        : "Please select your course and semester to begin.")
    : (currentCourse && (currentSemester || currentCourse === "Co-Curricular")
        ? "कृपया अपना MCQ परीक्षण शुरू करने के लिए विषय और इकाई चुनें।"
        : "कृपया शुरू करने के लिए पाठ्यक्रम और सेमेस्टर चुनें।");
  dom.checkAnswerBtn.textContent = isEnglish
    ? "Check Answer"
    : "उत्तर जांचें";
  dom.explanationBtn.textContent = isEnglish
    ? "Show Explanation"
    : "स्पष्टीकरण दिखाएँ";
  dom.nextQuestionBtn.textContent = isEnglish
    ? "Next Question"
    : "अगला प्रश्न";
  dom.geminiBtnText.textContent = isEnglish
    ? "Analyze with Gemini AI"
    : "जेमिनी एआई से विश्लेषण करें";
  document.getElementById("explanation-heading").textContent = isEnglish
    ? "Explanation:"
    : "स्पष्टीकरण:";
  const headingLabelSpan =
    dom.geminiAnalysisHeading.querySelector("span:last-child");
  if (headingLabelSpan) {
    headingLabelSpan.textContent = isEnglish
      ? "Gemini AI Analysis:"
      : "जेमिनी एआई विश्लेषण:";
  }
  dom.sourcesHeading.textContent = isEnglish ? "Sources:" : "स्रोत:";

  dom.courseLabel.textContent = isEnglish ? "Course" : "पाठ्यक्रम";
  dom.semesterLabel.textContent = isEnglish ? "Semester" : "सेमेस्टर";

  if (dom.courseSelect && dom.courseSelect.options.length > 0) {
    dom.courseSelect.options[0].text = isEnglish
      ? "Select course"
      : "पाठ्यक्रम चुनें";
  }
  if (dom.semesterSelect && dom.semesterSelect.options.length > 0) {
    dom.semesterSelect.options[0].text = isEnglish
      ? "Select semester"
      : "सेमेस्टर चुनें";
  }
}

// format duration helper
function formatDuration(ms, lang) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (lang === "english") {
    if (minutes > 0) {
      return `${minutes} min ${seconds} sec`;
    }
    return `${seconds} sec`;
  } else {
    if (minutes > 0) {
      return `${minutes} मिनट ${seconds} सेकंड`;
    }
    return `${seconds} सेकंड`;
  }
}

function renderSubjects() {
  const subjects = getFilteredSubjects();

  dom.subjectList.innerHTML = "";
  dom.unitSection.classList.add("hidden");
  dom.questionCard.classList.add("hidden");
  dom.loadingQuestions.classList.add("hidden");

  if (!currentCourse) {
    dom.welcomeMessage.classList.remove("hidden");
    dom.welcomeMessage.textContent =
      currentLanguage === "english"
        ? "Please select your course and semester to begin."
        : "कृपया शुरू करने के लिए पाठ्यक्रम और सेमेस्टर चुनें।";
    return;
  }

  if (!subjects.length) {
    dom.welcomeMessage.classList.remove("hidden");
    dom.welcomeMessage.textContent =
      currentLanguage === "english"
        ? "No subjects are configured yet for this course and semester."
        : "इस पाठ्यक्रम और सेमेस्टर के लिए अभी कोई विषय जोड़ा नहीं गया है।";
    return;
  }

  dom.welcomeMessage.classList.remove("hidden");
  dom.welcomeMessage.textContent =
    currentLanguage === "english"
      ? "Please select a subject and a unit to begin your MCQ test."
      : "कृपया अपना MCQ परीक्षण शुरू करने के लिए विषय और इकाई चुनें।";

  subjects.forEach((subject) => {
    const isActive = subject === currentSubject;
    const button = document.createElement("button");
    button.textContent = subject;
    button.className =
      "w-full text-left py-2 px-4 rounded-lg font-medium transition duration-150 " +
      (isActive
        ? "bg-indigo-500 text-white shadow-md"
        : "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600");
    button.onclick = () => selectSubject(subject);
    dom.subjectList.appendChild(button);
  });

  if (currentSubject) {
    dom.welcomeMessage.classList.add("hidden");
    dom.unitSection.classList.remove("hidden");
    renderUnits(currentSubject);
  }
}

function renderUnits(subject) {
  const units = Object.keys(quizData[currentLanguage][subject]);
  dom.unitList.innerHTML = "";

  units.forEach((unit) => {
    const isActive = unit === currentUnit;
    const button = document.createElement("button");
    button.textContent = unit;
    button.className =
      "w-full md:w-auto text-left py-2 px-4 rounded-lg text-sm transition duration-150 " +
      (isActive
        ? "bg-indigo-400 text-white shadow-sm"
        : "bg-white border border-gray-200 text-gray-700 hover:bg-indigo-50 hover:text-indigo-500");
    button.onclick = () => selectUnit(unit);
    dom.unitList.appendChild(button);
  });

  if (currentUnit && questionSet.length > 0) {
    dom.questionCard.classList.remove("hidden");
    renderQuestion();
  }
}

function renderQuestion() {
  if (questionSet.length === 0) return;

  const qData = questionSet[currentQuestionIndex];
  const isEnglish = currentLanguage === "english";
  const totalQuestions = questionSet.length;

  selectedOptionIndex = null;
  dom.resultMessage.classList.add("hidden");
  dom.explanationBlock.classList.add("hidden");
  dom.nextQuestionBtn.classList.add("hidden");
  dom.checkAnswerBtn.classList.remove("hidden");
  dom.explanationBtn.classList.add("hidden");
  dom.checkAnswerBtn.disabled = true;
  dom.checkAnswerBtn.classList.add("opacity-50", "cursor-not-allowed");
  dom.geminiAnalysisBlock.classList.add("hidden");
  dom.geminiAiBtn.disabled = false;
  dom.geminiAiBtn.classList.remove("opacity-50", "cursor-not-allowed");
  dom.timeInfo.classList.add("hidden");

  questionStartTime = new Date();
  if (!quizStartTime) quizStartTime = new Date();

  dom.currentUnitInfo.textContent = `${currentSubject} / ${currentUnit}`;
  dom.questionCounter.textContent = isEnglish
    ? `Question ${currentQuestionIndex + 1} of ${totalQuestions}`
    : `प्रश्न ${currentQuestionIndex + 1} / ${totalQuestions}`;
  dom.questionText.textContent = qData.q;
  dom.optionsContainer.innerHTML = "";

  qData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.dataset.index = index;
    button.className =
      "option-button w-full text-left p-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 text-gray-800 transition duration-150";
    button.onclick = handleOptionSelection;
    dom.optionsContainer.appendChild(button);
  });
}

function handleOptionSelection(event) {
  const allOptions = dom.optionsContainer.querySelectorAll(".option-button");
  const clickedButton = event.target.closest(".option-button");
  if (!clickedButton) return;

  allOptions.forEach((btn) =>
    btn.classList.remove(
      "selected-option",
      "correct-answer",
      "incorrect-answer",
      "font-bold"
    )
  );
  clickedButton.classList.add("selected-option");

  selectedOptionIndex = parseInt(clickedButton.dataset.index, 10);
  dom.checkAnswerBtn.disabled = false;
  dom.checkAnswerBtn.classList.remove("opacity-50", "cursor-not-allowed");
}

function checkAnswer() {
  if (selectedOptionIndex === null) return;

  const currentQuestion = questionSet[currentQuestionIndex];
  const correctIndex = currentQuestion.ans;
  const isCorrect = selectedOptionIndex === correctIndex;
  const options = dom.optionsContainer.querySelectorAll(".option-button");
  const isEnglish = currentLanguage === "english";

  options.forEach((btn) => (btn.onclick = null));
  dom.checkAnswerBtn.classList.add("hidden");
  dom.explanationBtn.classList.remove("hidden");

  const correctText = currentQuestion.options[correctIndex];
  const yourText = currentQuestion.options[selectedOptionIndex];

  dom.resultMessage.classList.remove(
    "hidden",
    "bg-red-100",
    "bg-green-100",
    "text-red-800",
    "text-green-800"
  );
  if (isCorrect) {
    dom.resultMessage.classList.add("bg-green-100", "text-green-800");
    dom.resultMessage.textContent =
      (isEnglish
        ? "Result: Correct Answer! 🎉 "
        : "परिणाम: सही उत्तर! 🎉 ") +
      (isEnglish
        ? `Correct option: ${correctText}`
        : `सही विकल्प: ${correctText}`);
  } else {
    dom.resultMessage.classList.add("bg-red-100", "text-red-800");
    dom.resultMessage.textContent =
      (isEnglish
        ? "Result: Incorrect. "
        : "परिणाम: गलत। ") +
      (isEnglish
        ? `Your answer: ${yourText} | Correct option: ${correctText}`
        : `आपका उत्तर: ${yourText} | सही विकल्प: ${correctText}`);
  }

  options.forEach((btn, index) => {
    btn.classList.remove("selected-option");
    if (index === correctIndex) {
      btn.classList.add("correct-answer", "font-bold");
    } else if (index === selectedOptionIndex && !isCorrect) {
      btn.classList.add("incorrect-answer", "font-bold");
    }
  });

  const attemptTime = new Date();
  if (!quizStartTime) quizStartTime = attemptTime;
  if (!questionStartTime) questionStartTime = quizStartTime;

  const questionDuration = attemptTime - questionStartTime;
  const totalDuration = attemptTime - quizStartTime;

  const attemptTimeStr = attemptTime.toLocaleTimeString();
  const quizStartStr = quizStartTime.toLocaleTimeString();
  const qDurStr = formatDuration(questionDuration, currentLanguage);
  const totalDurStr = formatDuration(totalDuration, currentLanguage);

  let timeText;
  if (isEnglish) {
    timeText =
      `Quiz started at: ${quizStartStr} | ` +
      `Attempt time: ${attemptTimeStr} | ` +
      `Time taken for this question: ${qDurStr} | ` +
      `Total quiz time: ${totalDurStr}`;
  } else {
    timeText =
      `क्विज़ शुरू समय: ${quizStartStr} | ` +
      `प्रयास समय: ${attemptTimeStr} | ` +
      `इस प्रश्न के लिए लगा समय: ${qDurStr} | ` +
      `कुल क्विज़ समय: ${totalDurStr}`;
  }

  dom.timeInfo.textContent = timeText;
  dom.timeInfo.classList.remove("hidden");

  dom.nextQuestionBtn.classList.remove("hidden");
}

function showExplanation() {
  const currentQuestion = questionSet[currentQuestionIndex];
  dom.explanationText.textContent = currentQuestion.exp;
  dom.explanationBlock.classList.toggle("hidden");
  dom.explanationBtn.textContent = dom.explanationBlock.classList.contains(
    "hidden"
  )
    ? currentLanguage === "english"
      ? "Show Explanation"
      : "स्पष्टीकरण दिखाएँ"
    : currentLanguage === "english"
    ? "Hide Explanation"
    : "स्पष्टीकरण छिपाएँ";
}

function selectSubject(subject) {
  currentSubject = subject;
  currentUnit = "";
  questionSet = [];
  quizStartTime = null;
  questionStartTime = null;
  renderSubjects();
  dom.unitSection.classList.remove("hidden");
  dom.questionCard.classList.add("hidden");
  dom.timeInfo.classList.add("hidden");
}

function selectUnit(unit) {
  if (currentUnit === unit && questionSet.length > 0) return;

  currentUnit = unit;

  // ❗Always generate fresh questions (No caching)
  quizStartTime = null;
  questionStartTime = null;
  dom.welcomeMessage.classList.add("hidden");
  dom.loadingQuestions.classList.remove("hidden");
  // Small timeout so UI shows loading briefly for UX (optional)
  setTimeout(() => {
    generateLocalQuestions(currentSubject, currentUnit, currentLanguage);
  }, 200);
}

function goToNextQuestion() {
  dom.resultMessage.classList.add("hidden");
  dom.explanationBlock.classList.add("hidden");
  dom.geminiAnalysisBlock.classList.add("hidden");
  dom.nextQuestionBtn.classList.add("hidden");
  dom.timeInfo.classList.add("hidden");

  if (currentQuestionIndex < questionSet.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    dom.questionCard.classList.add("hidden");
    dom.welcomeMessage.classList.remove("hidden");
    dom.welcomeMessage.textContent =
      currentLanguage === "english"
        ? `You have completed Unit ${currentUnit} of ${currentSubject}! Select another unit or subject to generate a new test.`
        : `आपने ${currentSubject} की इकाई ${currentUnit} पूरी कर ली है! नया टेस्ट जनरेट करने के लिए कोई अन्य इकाई या विषय चुनें।`;
    currentUnit = "";
    questionSet = [];
    quizStartTime = null;
    questionStartTime = null;
    renderSubjects();
  }
}

function toggleLanguage() {
  const wasQuestionVisible =
    !dom.questionCard.classList.contains("hidden") &&
    questionSet.length > 0;

  currentLanguage =
    currentLanguage === "english" ? "hindi" : "english";

  updateTexts();
  renderSubjects();

  if (currentSubject) {
    dom.unitSection.classList.remove("hidden");
    renderUnits(currentSubject);
  }

  if (wasQuestionVisible && currentSubject && currentUnit) {
    // Always generate fresh questions in the new language
    dom.welcomeMessage.classList.add("hidden");
    dom.loadingQuestions.classList.remove("hidden");
    setTimeout(() => {
      generateLocalQuestions(currentSubject, currentUnit, currentLanguage);
    }, 200);
  }
}

// EVENT LISTENERS
dom.langSwitchBtn.addEventListener("click", toggleLanguage);
dom.checkAnswerBtn.addEventListener("click", checkAnswer);
dom.nextQuestionBtn.addEventListener("click", goToNextQuestion);
dom.explanationBtn.addEventListener("click", showExplanation);
dom.geminiAiBtn.addEventListener("click", analyzeQuestionWithGemini);

// COURSE CHANGE (with Co-Curricular logic)
dom.courseSelect.addEventListener("change", () => {
  currentCourse = dom.courseSelect.value;
  currentSubject = "";
  currentUnit = "";
  questionSet = [];
  quizStartTime = null;
  questionStartTime = null;

  if (currentCourse === "Co-Curricular") {
    currentSemester = "-";
    if (dom.semesterWrapper) dom.semesterWrapper.classList.add("hidden");
  } else {
    if (dom.semesterWrapper) dom.semesterWrapper.classList.remove("hidden");
    currentSemester = dom.semesterSelect.value;
  }

  renderSubjects();
});

// SEMESTER CHANGE (ignored for Co-Curricular)
dom.semesterSelect.addEventListener("change", () => {
  if (currentCourse === "Co-Curricular") return;
  currentSemester = dom.semesterSelect.value;
  currentSubject = "";
  currentUnit = "";
  questionSet = [];
  quizStartTime = null;
  questionStartTime = null;
  renderSubjects();
});

// SUBJECT FILTERING BY COURSE + SEMESTER (kept near end)
function getFilteredSubjects() {
  const allSubjects = Object.keys(quizData[currentLanguage]);

  if (!currentCourse) return [];

  const courseCfg = courseSemesterSubjects[currentCourse];
  if (!courseCfg) return [];

  const semesterKey = currentCourse === "Co-Curricular" ? "-" : currentSemester;
  if (!semesterKey) return [];

  const allowedList = courseCfg[semesterKey]?.[currentLanguage];
  if (!allowedList) return [];

  const cleaned = allowedList.filter(Boolean);
  if (!cleaned.length) return [];

  return cleaned.filter((subj) => allSubjects.includes(subj));
}

// INIT
(function init() {
  updateTexts();
  renderSubjects();
})();

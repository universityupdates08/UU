let csvData = [];
        Papa.parse("MSUDatesheet.csv", {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function(results) {
                csvData = results.data;
                populateFilters();
                showLiveAlerts();
            }
        });

        // --- Live Date & Time ---
        function updateDateTime() {
            const now = new Date();
            const dateEl = document.getElementById("liveDate");
            const timeEl = document.getElementById("liveTime");
            if (dateEl && timeEl) {
                dateEl.textContent = now.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
                timeEl.textContent = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
            }
        }
        setInterval(updateDateTime, 1000);
        updateDateTime();

        // --- Mobile Menu ---
        document.getElementById("menu-btn").addEventListener("click", () => {
            document.getElementById("mobile-menu").classList.toggle("hidden");
        });

        // --- Scroll Top ---
        const topBtn = document.getElementById("topBtn");
        window.onscroll = () => {
            topBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
        };
        topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

        // --- Original Search Logic ---
        function populateFilters() {
            const classes = new Set(), subjects = new Set(), codes = new Set();
            csvData.forEach(r => {
                if(r.Class) classes.add(r.Class);
                if(r.Subject) subjects.add(r.Subject);
                if(r['Paper Code']) codes.add(r['Paper Code']);
            });

            const fillSelect = (id, items) => {
                const el = document.getElementById(id);
                items.forEach(item => el.innerHTML += `<option value="${item}">${item}</option>`);
            };

            const sortedClasses = Array.from(classes).sort();
            fillSelect("class2", sortedClasses);
            fillSelect("class3", sortedClasses);
            fillSelect("class5", sortedClasses);
            fillSelect("subject2", Array.from(subjects).sort());
            fillSelect("subject5", Array.from(subjects).sort());
            fillSelect("code4", Array.from(codes).sort());
        }

        function formatDate(dateInput) {
            if(!dateInput) return "";
            const d = new Date(dateInput);
            const day = String(d.getDate()).padStart(1, '0');
            const month = d.toLocaleString('en-US', { month: 'short' });
            const year = d.getFullYear().toString().slice(-2);
            return `${day}-${month}-${year}`;
        }

        function showLiveAlerts() {
            const today = new Date();
            const tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);
            const tStr = formatDate(today);
            const tmStr = formatDate(tomorrow);
            const tExams = csvData.filter(r => r.Date === tStr);
            const tmExams = csvData.filter(r => r.Date === tmStr);

            document.getElementById("todayCard").innerHTML = renderAlertBox("TODAY'S EXAMS", today, tExams);
            document.getElementById("tomorrowCard").innerHTML = renderAlertBox("TOMORROW'S EXAMS", tomorrow, tmExams);
        }

        function renderAlertBox(title, dateObj, exams) {
            const dateStr = formatDate(dateObj);
            const dayName = dateObj.toLocaleString('en-us', {weekday:'long'});
            let html = `<strong>${title}</strong><br><small>${dateStr} (${dayName})</small><hr>`;
            if (exams.length === 0) return html + `<p class="py-4 text-slate-400 italic">No Exams Scheduled</p>`;
            html += `<table><tr><th>S.No</th><th>Class</th><th>Subject</th><th>Paper Code</th><th>Shift</th></tr>`;
            exams.forEach((r, i) => {
                html += `<tr><td>${i+1}</td><td>${r.Class}</td><td>${r.Subject}</td><td>${r['Paper Code'] || '-'}</td><td>${r.Shift}</td></tr>`;
            });
            return html + `</table>`;
        }

        function searchByDate() {
            const val = document.getElementById("date1").value;
            const date = formatDate(val);
            const results = csvData.filter(r => r.Date === date);
            const container = document.getElementById("dateResults");
            if(results.length === 0) { container.innerHTML = `<p class="py-4 text-slate-400 italic">No Exams Found</p>`; return; }
            let html = `<table><tr><th>S.No</th><th>Date</th><th>Day</th><th>Class</th><th>Subject</th><th>Paper Name</th><th>Paper Code</th><th>Shift</th></tr>`;
            results.forEach((r, i) => {
                html += `<tr><td>${i+1}</td><td>${r.Date}</td><td>${r.Day}</td><td>${r.Class}</td><td>${r.Subject}</td><td>${r['Paper Name']}</td><td>${r['Paper Code']}</td><td>${r.Shift}</td></tr>`;
            });
            container.innerHTML = html + `</table>`;
        }

        function searchByClassSubject() {
            const c = document.getElementById("class2").value;
            const s = document.getElementById("subject2").value;
            const results = csvData.filter(r => r.Class === c && r.Subject === s);
            const container = document.getElementById("resultRow2");
            if(results.length === 0) { container.innerHTML = `<div class="py-4 text-slate-400 italic">No Records Found</div>`; return; }
            container.innerHTML = `<div class="card mx-auto max-w-4xl mt-4"><div class="card-header font-bold">${c} - ${s}</div><table><tr><th>S.No</th><th>Date</th><th>Day</th><th>Paper Name</th><th>Paper Code</th><th>Shift</th></tr>${results.map((r, i) => `<tr><td>${i+1}</td><td>${r.Date}</td><td>${r.Day}</td><td>${r['Paper Name']}</td><td>${r['Paper Code']}</td><td>${r.Shift}</td></tr>`).join('')}</table></div>`;
        }

        function searchByDateClass() {
            const d = formatDate(document.getElementById("date3").value);
            const c = document.getElementById("class3").value;
            const results = csvData.filter(r => r.Date === d && r.Class === c);
            const container = document.getElementById("resultRow3");
            container.innerHTML = results.length ? "" : `<div class="py-4 text-slate-400 italic col-span-full text-center">No Exams Found</div>`;
            results.forEach((r) => {
                container.innerHTML += `<div class="card"><div class="card-header"><div class="card-date">${r.Date}</div><small>(${r.Day})</small></div><div class="text-xs opacity-70 mt-2 uppercase">Subject</div><div class="font-bold">${r.Subject}</div><div class="text-xs opacity-70 mt-2 uppercase">Paper</div><div>${r['Paper Name']}</div><div class="flex justify-between mt-4"><span class="badge">Code: ${r['Paper Code']}</span><span class="badge">${r.Shift}</span></div></div>`;
            });
        }

        function searchByCode() {
    const code = document.getElementById("code4").value;
    const results = csvData.filter(r => r['Paper Code'] === code);
    const container = document.getElementById("resultRow4");
    
    if(results.length === 0) { 
        container.innerHTML = `<div class="py-4 text-slate-400 italic">No Records Found</div>`; 
        return; 
    }
    
    const r = results[0];
    container.innerHTML = `
        <div class="p-6 bg-[#ffd84d] text-slate-800 rounded-xl max-w-md mx-auto mt-4 text-left">
            <h3 class="font-bold border-none p-0 mb-2">${r.Subject}</h3>
            <div class="mb-2 text-sm">Paper: <b>${r['Paper Name']}</b></div> 
            <div>Code: <b>${r['Paper Code']}</b></div>
            <div>Date: <b>${r.Date} (${r.Day})</b></div>
            <div>Class: <b>${r.Class}</b></div>
            <div class="mt-4 bg-black/10 inline-block px-3 py-1 rounded font-bold">Shift: ${r.Shift}</div>
        </div>`;
}

        function searchClassYearSubject() {
            const c = document.getElementById("class5").value;
            const y = document.getElementById("year5").value;
            const s = document.getElementById("subject5").value;
            const results = csvData.filter(r => r.Class === c && r.Subject === s && r.Year === y);
            const container = document.getElementById("resultRow5");
            if(results.length === 0) { container.innerHTML = `<div class="py-4 text-slate-400 italic">No Records Found</div>`; return; }
            container.innerHTML = `<div class="card mx-auto max-w-4xl mt-4"><div class="card-header font-bold">${c} (${y} Year) - ${s}</div><table><tr><th>S.No</th><th>Date</th><th>Day</th><th>Paper Name</th><th>Paper Code</th><th>Shift</th></tr>${results.map((r, i) => `<tr><td>${i+1}</td><td>${r.Date}</td><td>${r.Day}</td><td>${r['Paper Name']}</td><td>${r['Paper Code']}</td><td>${r.Shift}</td></tr>`).join('')}</table></div>`;
        }
   
  // This uses counterapi.dev which is active in 2026
  async function getHits() {
    try {
      // replace 'university_updates_uu' with any unique name for your site
      const response = await fetch('https://api.counterapi.dev/v1/university_updates_uu/main/up');
      const data = await response.json();
      document.getElementById('new-count').innerText = data.count;
    } catch (err) {
      console.log("Counter Error:", err);
    }
  }
  getHits();

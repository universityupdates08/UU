onst config = {
            currentMode: 'college',
            subjectMap: {
                "M.Com.": [{ text: "M.Com. (I-304)", value: "I-304" }],
                "M.A.": [
                    { text: "Defence Studies (G-895)", value: "G-895" },
                    { text: "Economics (G-806)", value: "G-806" },
                    { text: "Education (G-803)", value: "G-803" },
                    { text: "Education (G-804)", value: "G-804" },
                    { text: "English (G-812)", value: "G-812" },
                    { text: "Hindi (G-825)", value: "G-825" },
                    { text: "History (G-837)", value: "G-837" },
                    { text: "Mathematics (G-850)", value: "G-850" },
                    { text: "Philosophy (G-845)", value: "G-845" },
                    { text: "Political Science (G-870)", value: "G-870" },
                    { text: "Sanskrit (G-882)", value: "G-882" },
                    { text: "Sociology (G-887)", value: "G-887" },
                    { text: "Urdu (G-862)", value: "G-862" }
                ]
            },
            fileMap: {
                "I-304": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=0&single=true&output=csv",
                "G-895": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=247840887&single=true&output=csv",
                "G-806": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=641233544&single=true&output=csv",
                "G-803": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=211843497&single=true&output=csv",
                "G-804": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=211843497&single=true&output=csv",
                "G-812": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=1289928464&single=true&output=csv",
                "G-825": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=1710636826&single=true&output=csv",
                "G-837": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=1673491282&single=true&output=csv",
                "G-850": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=634965624&single=true&output=csv",
                "G-845": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=122536702&single=true&output=csv",
                "G-870": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=1880701720&single=true&output=csv",
                "G-882": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=1599191084&single=true&output=csv",
                "G-887": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=1852586580&single=true&output=csv",
                "G-862": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZiv_e1A0gciQkWuUvmcsf-efhajUNQWUYF2-5JIljXgkM7iFTz5LOlEVklVALuZY1HuQ-T4SpcXDa/pub?gid=1872629374&single=true&output=csv"
            },
            allData: {},
            failedSubs: []
        };

        const dom = {
            courseSelect: document.getElementById('courseSelect'),
            subjectSelect: document.getElementById('subjectSelect'),
            subjectGroup: document.getElementById('subjectGroup'),
            collegeFlow: document.getElementById('collegeFlow'),
            districtGroup: document.getElementById('districtGroup'),
            districtSelect: document.getElementById('districtSelect'),
            collegeGroup: document.getElementById('collegeGroup'),
            collegeSelect: document.getElementById('collegeSelect'),
            centerFlow: document.getElementById('centerFlow'),
            centerSelect: document.getElementById('centerSelect'),
            resultsCard: document.getElementById('resultsCard'),
            resultOutput: document.getElementById('resultOutput'),
            errorCard: document.getElementById('errorCard'),
            errorMessage: document.getElementById('errorMessage'),
            mainContent: document.getElementById('mainContent'),
            initialLoader: document.getElementById('initialLoader'),
            footerTime: document.getElementById('live-footer-time')
        };

        function show(el) { el.classList.remove('a-tab-hidden'); }
        function hide(el) { el.classList.add('a-tab-hidden'); }
        function resetSelect(el, text) { el.innerHTML = `<option value="">-- ${text} --</option>`; }

        function toggleDarkMode() {
            const isDark = document.getElementById('themeToggle').checked;
            document.body.classList.toggle('dark-mode', isDark);
            document.getElementById('toggleCircle').style.left = isDark ? '20px' : '0';
        }

        window.switchMode = function(mode) {
            config.currentMode = mode;
            document.getElementById('tabCollege').classList.toggle('active', mode === 'college');
            document.getElementById('tabCenter').classList.toggle('active', mode === 'center');
            mode === 'college' ? show(dom.collegeFlow) : hide(dom.collegeFlow);
            mode === 'center' ? show(dom.centerFlow) : hide(dom.centerFlow);
            dom.courseSelect.value = "";
            hide(dom.subjectGroup); hide(dom.resultsCard); hide(dom.errorCard);
        };

        function parseCSV(text) {
            const lines = text.trim().split('\n');
            if (lines.length < 2) return [];
            const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
            const data = [];
            for (let i = 1; i < lines.length; i++) {
                const values = [];
                let cell = '', inQuotes = false;
                for (let char of lines[i]) {
                    if (char === '"') inQuotes = !inQuotes;
                    else if (char === ',' && !inQuotes) { values.push(cell.trim()); cell = ''; }
                    else cell += char;
                }
                values.push(cell.trim());
                if (values.length >= headers.length) {
                    const obj = {};
                    headers.forEach((h, idx) => obj[h] = values[idx]?.replace(/^"|"$/g, ''));
                    data.push(obj);
                }
            }
            return data;
        }

        function parseCustomDate(dateStr) {
            if (!dateStr || /not|tba/i.test(dateStr)) return null;
            try {
                let cleanStr = dateStr.includes(',') ? dateStr.split(',')[1].trim() : dateStr.trim();
                let d = new Date(cleanStr);
                if (isNaN(d.getTime())) {
                    const parts = cleanStr.replace(/[-.]/g, '/').split('/');
                    if (parts.length === 3) d = parts[0].length === 4 ? new Date(parts[0], parts[1]-1, parts[2]) : new Date(parts[2], parts[1]-1, parts[0]);
                }
                return isNaN(d.getTime()) ? null : d;
            } catch (e) { return null; }
        }

        function loadUpcomingAlerts() {
            const alertContainer = document.getElementById('upcomingAlerts');
            const today = new Date(); today.setHours(0, 0, 0, 0);
            const next5Days = new Date(today); next5Days.setDate(today.getDate() + 5);
            let allEntries = [];

            Object.keys(config.allData).forEach(subKey => {
                config.allData[subKey].forEach(item => {
                    const vDate = parseCustomDate(item.Date);
                    if (vDate && vDate >= today && vDate <= next5Days) {
                        allEntries.push({
                            Center: item['Name of Center'],
                            Course: item.Course || "N/A",
                            Subject: item.Subject || "N/A",
                            SubCode: item['Subject Code'] || "",
                            DateStr: item.Date,
                            DateObj: vDate,
                            Time: item.Time || "N/A",
                            Notice: item.Notice
                        });
                    }
                });
            });

            const uniqueEntries = Array.from(new Map(allEntries.map(item => [`${item.Center}-${item.SubCode}-${item.DateStr}`, item])).values());
            uniqueEntries.sort((a, b) => a.DateObj - b.DateObj);

            if (uniqueEntries.length === 0) {
                alertContainer.innerHTML = `<div class="p-4 bg-gray-100 text-center">📢 No Upcoming Viva scheduled for the next 5 days.</div>`;
                return;
            }

            alertContainer.innerHTML = `
                <div class="bg-blue-600 text-white p-2 font-bold"><i class="fas fa-bolt"></i> Upcoming Viva Alerts</div>
                <div class="overflow-hidden relative h-32 bg-white" id="sliderParent">
                    <div class="flex transition-transform duration-500" id="singleTrack" style="width: ${uniqueEntries.length * 100}%">
                        ${uniqueEntries.map(item => `
                            <div class="w-full flex-shrink-0 p-4 border-r">
                                <div class="font-bold text-blue-800">🏫 ${item.Center}</div>
                                <div class="text-sm">${item.Course} | ${item.Subject}</div>
                                <div class="text-red-600 text-xs font-bold">${item.DateStr} @ ${item.Time}</div>
                                ${item.Notice ? `<a href="${item.Notice}" target="_blank" class="text-xs text-blue-500 underline">View Notice</a>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>`;

            let current = 0;
            if(uniqueEntries.length > 1) {
                setInterval(() => {
                    current = (current + 1) % uniqueEntries.length;
                    document.getElementById('singleTrack').style.transform = `translateX(-${(current * 100) / uniqueEntries.length}%)`;
                }, 4000);
            }
        }

        async function init() {
            const loadTasks = Object.keys(config.fileMap).map(async sub => {
                try {
                    const url = config.fileMap[sub] + (config.fileMap[sub].includes('?') ? '&' : '?') + 't=' + Date.now();
                    const res = await fetch(url);
                    if (!res.ok) throw new Error();
                    const text = await res.text();
                    config.allData[sub] = parseCSV(text);
                } catch (e) { config.failedSubs.push(sub); }
            });
            await Promise.all(loadTasks);
            hide(dom.initialLoader);
            show(dom.mainContent);
            loadUpcomingAlerts();
        }

        dom.courseSelect.onchange = function() {
            const course = this.value;
            hide(dom.subjectGroup); hide(dom.resultsCard); hide(dom.errorCard);
            resetSelect(dom.subjectSelect, "Select Subject");
            if (course) {
                config.subjectMap[course].forEach(s => dom.subjectSelect.add(new Option(s.text, s.value)));
                show(dom.subjectGroup);
            }
        };

        dom.subjectSelect.onchange = function() {
            const subCode = this.value;
            hide(dom.resultsCard); hide(dom.errorCard);
            resetSelect(dom.districtSelect, "Select District");
            resetSelect(dom.centerSelect, "Select Viva Center");
            if (!subCode) return;
            if (config.failedSubs.includes(subCode)) {
                dom.errorMessage.innerHTML = `Data unavailable. <a href="https://t.me/HelpforDMBot" class="underline font-bold">Contact Support</a>.`;
                show(dom.errorCard); return;
            }
            const data = config.allData[subCode];
            if (config.currentMode === 'college') {
                const districts = [...new Set(data.map(r => r.District).filter(Boolean))].sort();
                districts.forEach(d => dom.districtSelect.add(new Option(d, d)));
                show(dom.districtGroup);
            } else {
                const centers = [...new Set(data.map(r => r['Name of Center']).filter(Boolean))].sort();
                centers.forEach(c => dom.centerSelect.add(new Option(c, c)));
            }
        };

        dom.districtSelect.onchange = function() {
            const dist = this.value;
            hide(dom.collegeGroup); hide(dom.resultsCard);
            resetSelect(dom.collegeSelect, "Select Your College");
            if (!dist) return;
            const colleges = [...new Set(config.allData[dom.subjectSelect.value].filter(r => r.District === dist).map(r => r['Attached Colleges']))].sort();
            colleges.forEach(c => dom.collegeSelect.add(new Option(c, c)));
            show(dom.collegeGroup);
        };

        dom.collegeSelect.onchange = function() {
            if (!this.value) return;
            const res = config.allData[dom.subjectSelect.value].find(r => r['Attached Colleges'] === this.value);
            renderResult(res, 'college');
        };

        dom.centerSelect.onchange = function() {
            if (!this.value) return;
            const matches = config.allData[dom.subjectSelect.value].filter(r => r['Name of Center'] === this.value);
            renderResult(matches, 'center');
        };

        function renderResult(data, mode) {
            let html = '';
            if (mode === 'college') {
                html = `<p><b>College:</b> ${data['Attached Colleges']}</p>
                        <p><b>Center:</b> <span class="text-blue-700 font-bold">${data['Name of Center']}</span></p>
                        <p><b>Date:</b> <span class="text-red-600 font-bold">${data.Date || 'TBA'}</span></p>
                        <p><b>Time:</b> ${data.Time || 'N/A'}</p>
                        ${data.Notice ? `<a href="${data.Notice}" target="_blank" class="inline-block mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs">📄 View Notice</a>` : ''}`;
            } else {
                const head = data[0];
                const list = data.map(m => `<li>• ${m['Attached Colleges']}</li>`).join('');
                html = `<p><b>Center:</b> <span class="text-blue-700 font-bold">${head['Name of Center']}</span></p>
                        <p><b>Date:</b> <span class="text-red-600 font-bold">${head.Date || 'TBA'}</span></p>
                        <p><b>Time:</b> ${head.Time || 'N/A'}</p>
                        <ul class="text-xs mt-2 border-t pt-2">${list}</ul>
                        ${head.Notice ? `<a href="${head.Notice}" target="_blank" class="inline-block mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs">📄 View Notice</a>` : ''}`;
            }
            dom.resultOutput.innerHTML = html;
            show(dom.resultsCard);
        }

        function clock() {
            const now = new Date();
            if (dom.footerTime) dom.footerTime.innerHTML = `<i class="far fa-clock text-yellow-400 mr-2"></i> ${now.toLocaleString('en-IN')}`;
        }

        async function visitor() {
            try {
                const res = await fetch('https://api.counterapi.dev/v1/university_updates_uu/main/up');
                const data = await res.json();
                document.getElementById('new-count').innerText = data.count;
            } catch (e) {}
        }

        document.addEventListener('DOMContentLoaded', () => {
            init();
            visitor();
            setInterval(clock, 1000);
        });

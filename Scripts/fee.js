        const feeDatabase = {
            regular: {
                ug: {
                    annual: ["B.Ed."],
                    semester: ["B.A. (NEP)", "B.Com. (NEP)", "B.Sc. (NEP)", "BBA", "BCA", "B.A.LL.B.", "B.COM.LL.B.", "LL.B.", "B.Sc. (Computer Science)", "B.Sc. (Ag.)"]
                },
                pg: {
                    annual: [],
                    semester: ["M.A. (NEP)", "M.Com. (NEP)", "M.Sc. (NEP)", "M.Ed.", "M.Sc. (Computer Science)", "M.Sc. (Ag.)"]
                }
            },
            private: {
                ug: ["B.A. (Private)", "B.Com. (Private)"],
                pg: ["M.A. (Private)", "M.Com. (Private)"]
            }
        };

       

        function switchTab(tab) {
            const regSect = document.getElementById('section-reg');
            const backSect = document.getElementById('section-back');
            const regBtn = document.getElementById('btn-reg');
            const backBtn = document.getElementById('btn-back');

            if(tab === 'reg') {
                regSect.classList.remove('hidden');
                backSect.classList.add('hidden');
                regBtn.className = "tab-btn active-reg flex-1 py-4 font-bold text-center uppercase tracking-wider";
                backBtn.className = "tab-btn flex-1 py-4 font-bold text-center text-gray-400 uppercase tracking-wider hover:text-red-400";
            } else {
                regSect.classList.add('hidden');
                backSect.classList.remove('hidden');
                regBtn.className = "tab-btn flex-1 py-4 font-bold text-center text-gray-400 uppercase tracking-wider hover:text-blue-400";
                backBtn.className = "tab-btn active-back flex-1 py-4 font-bold text-center uppercase tracking-wider";
                calculateBackFee();
            }
        }

        function updateUI() {
            const levelEl = document.querySelector('input[name="regLevel"]:checked');
            const typeEl = document.querySelector('input[name="courseType"]:checked');
            if(!levelEl || !typeEl) return;
            
            const level = levelEl.value;
            const isPrivate = typeEl.value === 'private';
            
            const semLabel = document.getElementById('label-semester');
            if (isPrivate) {
                semLabel.classList.add('hidden');
                document.querySelector('input[name="regSystem"][value="annual"]').checked = true;
            } else {
                semLabel.classList.remove('hidden');
            }

            toggle('div-system', true);
            const sysEl = document.querySelector('input[name="regSystem"]:checked');
            const system = sysEl ? sysEl.value : null;

            if(system) {
                toggle('div-course', true);
                toggle('div-period', true);
                toggle('div-extras-reg', true);
                toggle('regSummary', true);

                const cSelect = document.getElementById('regCourse');
                const list = isPrivate ? feeDatabase.private[level] : feeDatabase.regular[level][system];
                const prevCourse = cSelect.value;
                cSelect.innerHTML = list.map(c => `<option value="${c}" ${c===prevCourse?'selected':''}>${c}</option>`).join('');

                const pSelect = document.getElementById('regPeriod');
                const label = document.getElementById('periodLabel');
                const prevPeriod = pSelect.value;

                if(system === 'annual' || isPrivate) {
                    label.innerText = "Select Year:";
                    let yrs = (level === 'ug' && cSelect.value !== "B.Ed.") ? 3 : 2; 
                    let opts = '';
                    for(let i=1; i<=yrs; i++) opts += `<option value="${i}">${i}${i==1?'st':i==2?'nd':'rd'} Year</option>`;
                    pSelect.innerHTML = opts;
                } else {
                    label.innerText = "Select Semester:";
                    let maxSem = 6;
                    if(cSelect.value === "B.A.LL.B." || cSelect.value === "B.COM.LL.B.") maxSem = 10;
                    if(cSelect.value === "B.Sc. (Ag.)") maxSem = 8;
                    if(level === "pg") maxSem = 4;

                    let opts = '';
                    for(let i=1; i<=maxSem; i++) opts += `<option value="${i}">${i} Sem</option>`;
                    pSelect.innerHTML = opts;
                }
                if(prevPeriod) pSelect.value = prevPeriod;

                const isBEd = cSelect.value === "B.Ed.";
                toggle('div-practical-container', !isBEd && !isPrivate);
                document.querySelector('.reg-project-tag').innerText = (level === 'ug') ? '+₹800' : '+₹1000';
            }
            calculateRegularFee();
        }

        function calculateRegularFee() {
            const levelEl = document.querySelector('input[name="regLevel"]:checked');
            const typeEl = document.querySelector('input[name="courseType"]:checked');
            if(!levelEl || !typeEl) return;
            
            const isPrivate = typeEl.value === 'private';
            const level = levelEl.value;
            const period = parseInt(document.getElementById('regPeriod').value) || 1;
            const college = document.querySelector('input[name="collegeType"]:checked').value;
            const enrolled = document.querySelector('input[name="enrolled"]:checked').value;
            const course = document.getElementById('regCourse').value;

            toggle('div-enroll', period === 1);
            if (isPrivate) {
                toggle('div-college', true);
            } else {
                toggle('div-college', period % 2 !== 0);
            }
            const isBEd = course === "B.Ed.";
            toggle('div-project-container', !isPrivate && !isBEd);
            

            let total = 0, html = '';

            if (isPrivate) {
                let privateBase = 0;
                if (level === 'ug') {
                    if (period === 1) privateBase = (college === 'self-finance') ? 3045 : 2410;
                    else if (period === 2) privateBase = (college === 'self-finance') ? 2885 : 2250;
                    else if (period === 3) privateBase = (college === 'self-finance') ? 3135 : 2500;
                } else {
                    if (period === 1) privateBase = (college === 'self-finance') ? 3415 : 2780;
                    else if (period === 2) privateBase = (college === 'self-finance') ? 3835 : 3200;
                }
                total += privateBase;
                html += `<div class="flex justify-between item-row"><span>Private Exam Fee</span><b>₹${privateBase}</b></div>`;
                
                if (college === 'govt./aided') {
                    total += 635;
                    html += `<div class="flex justify-between item-row"><span>Verification Fee</span><b>₹635</b></div>`;
                }
            } else {
                let theory = 800;
                if (["B.A.LL.B.", "B.COM.LL.B.", "B.Sc. (Computer Science)"].includes(course)) theory = 1850;
                else if (["LL.B.", "B.Sc. (Ag.)"].includes(course)) theory = 1000;
                else if (["M.A. (NEP)", "M.Com. (NEP)", "M.Sc. (NEP)", "M.Sc. (Ag.)"].includes(course)) theory = 580;
                else if (["M.Sc. (Computer Science)", "M.Ed."].includes(course)) theory = 2310;

                total += theory;
                html += `<div class="flex justify-between item-row"><span>Theory Fee</span><b>₹${theory}</b></div>`;

                const sfCourses = ["M.Ed.", "B.A.LL.B.", "B.COM.LL.B.", "LL.B.", "B.Sc. (Computer Science)", "BBA", "BCA"];
                if (sfCourses.includes(course) && period === 1 && college === 'self-finance') {
                    total += 470 + 1540;
                    html += `<div class="flex justify-between item-row"><span>Development Fee</span><b>₹470</b></div>`;
                    html += `<div class="flex justify-between item-row"><span>Infrastructure Fee</span><b>₹1540</b></div>`;
                }

                if (course === "B.Ed." && period === 1 && college === 'self-finance') {
                    total += (470 + 1540);
                    html += `<div class="flex justify-between item-row"><span>Development Fee</span><b>₹470</b></div>`;
                    html += `<div class="flex justify-between item-row"><span>Infrastructure Fee</span><b>₹1540</b></div>`;
                }

                if (period % 2 !== 0) {
                    if (course !== "B.Sc. (Ag.)" && course !== "M.Sc. (Ag.)") {
                        let sports = (college === 'self-finance') ? 70 : 50;
                        total += sports;
                        html += `<div class="flex justify-between item-row"><span>Sports Fee</span><b>₹${sports}</b></div>`;
                    }
                    total += 7 + 10;
                    html += `<div class="flex justify-between item-row"><span>Cultural Activities</span><b>₹7</b></div>`;
                    html += `<div class="flex justify-between item-row"><span>Rovers Ranger</span><b>₹10</b></div>`;
                }

                total += 80;
                html += `<div class="flex justify-between item-row"><span>Marksheet Fee</span><b>₹80</b></div>`;

                if (course === "B.Ed.") {
                    total += 340;
                    html += `<div class="flex justify-between item-row"><span>Practical Fee</span><b>₹340</b></div>`;
                }

                let degreeApp = false;
                if (level === 'pg' && period === 4) degreeApp = true;
                if (course === "B.Ed." && period === 2) degreeApp = true;
                if (["LL.B.", "BBA", "BCA", "B.A. (NEP)", "B.Com. (NEP)", "B.Sc. (NEP)", "B.Sc. (Computer Science)", "BBA", "BCA"].includes(course) && period === 6) degreeApp = true;
                if (["B.A.LL.B.", "B.COM.LL.B."].includes(course) && period === 10) degreeApp = true;
                if (course === "B.Sc. (Ag.)" && period === 8) degreeApp = true;

                if (degreeApp) {
                    total += 250;
                    html += `<div class="flex justify-between item-row"><span>Degree Fee</span><b>₹250</b></div>`;
                }

                if (document.getElementById('regCheckProject').checked) {
                    let pFee = (level === 'ug') ? 800 : 1000;
                    total += pFee;
                    html += `<div class="flex justify-between item-row"><span>Project Fee</span><b>₹${pFee}</b></div>`;
                }
                const pCount = parseInt(document.getElementById('regPractCount').value) || 0;
                if (pCount > 0 && course !== "B.Ed.") {
                    total += (pCount * 170);
                    html += `<div class="flex justify-between item-row"><span>Practicals (${pCount})</span><b>₹${pCount*170}</b></div>`;
                }
            }

            if (period === 1 && enrolled === 'no') {
                total += 160;
                html += `<div class="flex justify-between item-row"><span>Enrollment Fee</span><b>₹160</b></div>`;
            }

            document.getElementById('regBreakdown').innerHTML = html;
            document.getElementById('regTotalDisplay').innerText = total;
        }

        function handleProjectOnlySelection() {
            const only = document.getElementById('backProjectOnly').checked;
            ['backTheory', 'backProjectAlso', 'backPracticalCheck'].forEach(id => {
                document.getElementById(id).checked = false;
                document.getElementById(id).closest('label, div').classList.toggle('disabled-card', only);
            });
            calculateBackFee();
        }

        function calculateBackFee() {
            const levelEl = document.querySelector('input[name="backLevel"]:checked');
            if(!levelEl) return;
            const level = levelEl.value;
            const theory = document.getElementById('backTheory');
            const project = document.getElementById('backProjectAlso');
            const practical = document.getElementById('backPracticalCheck');
            const only = document.getElementById('backProjectOnly').checked;
            
            const base = (level === 'pg') ? 930 : 780;
            const pFee = (level === 'pg') ? 1000 : 800;
            const permission = 160;
            const practInp = document.getElementById('backPractCount');
            
            let total = 0, html = "";
            
            if (!only && (project.checked || practical.checked)) theory.checked = true;
            practical.checked ? practInp.classList.remove('hidden') : practInp.classList.add('hidden');
            
            if (only) {
                total = pFee; html += `<div class="flex justify-between item-row"><span>Project Only</span><b>₹${pFee}</b></div>`;
            } else if (theory.checked || project.checked || practical.checked) {
                total += base + permission;
                html += `<div class="flex justify-between item-row"><span>Theory Fee</span><b>₹${base}</b></div>`;
                html += `<div class="flex justify-between item-row"><span>Permission Fee</span><b>₹${permission}</b></div>`;
                if (project.checked) { total += pFee; html += `<div class="flex justify-between item-row"><span>Project Fee</span><b>₹${pFee}</b></div>`; }
                if (practical.checked) {
                    const cnt = parseInt(practInp.value) || 0;
                    total += cnt * 170; html += `<div class="flex justify-between item-row"><span>Practical (${cnt})</span><b>₹${cnt*170}</b></div>`;
                }
            }
            document.getElementById('backBreakdown').innerHTML = html;
            document.getElementById('backTotal').innerText = total;
        }

        function copyFee(type) {
            const isReg = type === 'regular';
            const total = document.getElementById(isReg ? 'regTotalDisplay' : 'backTotal').innerText;
            const rows = document.getElementById(isReg ? 'regBreakdown' : 'backBreakdown').querySelectorAll('.item-row');
            
            let courseName = "N/A";
            let periodVal = "N/A";
            
            if (isReg) {
                courseName = document.getElementById('regCourse').value;
                const pSelect = document.getElementById('regPeriod');
                periodVal = pSelect.options[pSelect.selectedIndex].text;
            } else {
                const level = document.querySelector('input[name="backLevel"]:checked').value;
                courseName = level === 'ug' ? 'UG (Bachelors)' : 'PG (Masters)';
                periodVal = "Back Paper";
            }

            let details = '';
            rows.forEach(r => details += `▫️ ${r.innerText.replace('\n', ': ')}\n`);
            const text = `*UNIVERSITY ${type.toUpperCase()} FEE*\n------------------\n🎓 *COURSE:* ${courseName}\n📅 *PERIOD:* ${periodVal}\n------------------\n${details}------------------\n💰 *TOTAL: ₹${total}*`;
            navigator.clipboard.writeText(text);
            alert("Copied!");
        }

        function toggle(id, cond) { const el = document.getElementById(id); if(el) el.style.display = cond ? 'block' : 'none'; }
        window.onload = () => { updateUI(); };

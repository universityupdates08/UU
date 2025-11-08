 // --- DATA (Datesheet for fetching Date, Day, Shift, and Name) ---
        const examDatesheet = {
            'A040101T': {
                date: '26-Nov-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'English Prose and Writing Skills' 
            },
            'A020501T': {
                date: '26-Nov-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Vedic Vadhya Avm Bhartiya Darshan'
            },
            'C010101T': {
                date: '26-Nov-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Business Organisation'
            },
            'B010101T': {
                date: '26-Nov-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Mathematical Physics & Newtonian Mechanics'
            },
            'B040101T': {
                date: '26-Nov-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Microbiology & Plant Pathology'
            },
            'A040301T': {
                date: '27-Nov-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'British and American Drama'
            },
            'B010301T': {
                date: '27-Nov-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Electromagnetic Theory & Modern Optics'
            },
            'C010301T': {
                date: '27-Nov-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Company Law'
            },
            'B040301T': {
                date: '27-Nov-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Flowering Plans Identification & Aesthetic Characteristics'
            },
            'A020502T': {
                date: '27-Nov-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Vyakaran Avm Bhasha Vigyan'
            },
            'A050101T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Ancient and Early Medival India (Till 1206 A.D.)'
            },
            'A300501T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Theoretical and Analytical study of Ragas, Talas & Applied theory of Indian Classical Music'
            },
            'A310501T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Aesthetical aspects of Tabla'
            },
            'A320501T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Study of Western Music and Style of'
            },
            'A120501T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Indian Defence Mechanism'
            },
            'C010501T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Corporate Accounting'
            },
            'B030101T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Differential Calculus & Integral Calculus'
            },
            'B050101T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Cytology, Genetics and Infectious Diseases'
            },
            'B058101T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Basic Nutrition, Sanitation & Hygiene'
            },
            'B010502T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Quantum Mechanics & Spectroscopy'
            },
            'B040502T': {
                date: '28-Nov-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Molecular Biology & Bioinformatics'
            },
            'A050301T': {
                date: '29-Nov-2025',
                day: 'Sat',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'History of Modern India (1757A.D.- 1950A.D.)'
            },
            'C010102T': {
                date: '29-Nov-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Business Statistics'
            },
            'B030301T': {
                date: '29-Nov-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Algebra & Mathematical Methods'
            },
            'B050301T': {
                date: '29-Nov-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Molecular Biology, Bioinstrumentation & Bio techniques'
            },
            'B058301T': {
                date: '29-Nov-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Food Process Technology & Food Microbiology'
            },
            'A120502T': {
                date: '29-Nov-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'National Security of India'
            },
            'A060101T': {
                date: '01-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Indian National Movement & Constitution of India'
            },
            'E010501T': {
                date: '01-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Educational Assessment'
            },
            'A090501T': {
                date: '01-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Life Span Human Development'
            },
            'C010302T': {
                date: '01-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Cost Accounting'
            },
            'B020101T': {
                date: '01-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Fundamentals of Chemistry'
            },
            'B030501T': {
                date: '01-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Group and Ring The ory & Linear Algebra'
            },
            'B050501T': {
                date: '01-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Diversity of Non-Chordates, Parasitology and Economic Zoology'
            },
            'B058501T': {
                date: '01-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Food Analysis'
            },
            'A060301T': {
                date: '02-Dec-2025',
                day: 'Tue',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Political Process in India'
            },
            'C010502T': {
                date: '02-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Goods and Service Tax'
            },
            'B020301T': {
                date: '02-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Chemical Dynamics & Coordination Chemistry'
            },
            'A090502T': {
                date: '02-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Positive Psychology'
            },
            'A010101T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Hindi Kavya'
            },
            'A180501T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Library Classification'
            },
            'A030501T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Urdu Ghazal Aur Nazm'
            },
            'E010502T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Educational Statistics'
            },
            'C010103T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Business Communication'
            },
            'B190101T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Fundamentals of Industrial Chemistry'
            },
            'B070101T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Problem Solving using Computer'
            },
            'B050502T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Diversity of Chordates and Comparative Anatomy'
            },
            'B058502T': {
                date: '03-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Food Manufacturing & Packaging'
            },
            'A010301T': {
                date: '04-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Hindi Gadhya'
            },
            'C010303T': {
                date: '04-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Business Regulatory Framework'
            },
            'B190301T': {
                date: '04-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Process Instrumentation and Industrial Chemical Analysis'
            },
            'B070301T': {
                date: '04-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Operating Systems'
            },
            'A030502T': {
                date: '04-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Qasida, Masnavi Aur Marsia'
            },
            'A180503T': {
                date: '04-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Library Cataloguing'
            },
            'A070101T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Introduction to Basic Concepts of Sociology'
            },
            'A070102T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Concepts of Rural Sociology'
            },
            'A070104T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Basic Concepts in Sociology'
            },
            'E020501T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Athletic Injuries and Physiotherapy'
            },
            'A100501T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Problems of Philosophy (Indian and Western)'
            },
            'C010503T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Business Finance'
            },
            'B080101T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'General Microbiology'
            },
            'B017101T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Fundamentals of Industrial Microbiology'
            },
            'B060101T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Descriptive Statistics (Univariate) and Theory of Probability'
            },
            'B020501T': {
                date: '05-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Organic Synthesis-A'
            },
            'A070301T': {
                date: '06-Dec-2025',
                day: 'Sat',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Social Change & Social Movements'
            },
            'A070302T': {
                date: '06-Dec-2025',
                day: 'Sat',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Population and Society'
            },
            'A070304T': {
                date: '06-Dec-2025',
                day: 'Sat',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Tribes in India'
            },
            'C010104T': {
                date: '06-Dec-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Introduction to Computer Application'
            },
            'B080301T': {
                date: '06-Dec-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Basic Bio Chemistry and Microbial Physiology'
            },
            'B017301T': {
                date: '06-Dec-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Fermentation Technology'
            },
            'B060301T': {
                date: '06-Dec-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Theory of Estimation and Sampling Survey'
            },
            'A080101T': {
                date: '08-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Principle of Micro Economics'
            },
            'A210501T': {
                date: '08-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'History of Indian Art-Rajsthani, Mughal & PahariStyle'
            },
            'A100502T': {
                date: '08-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Applied Philosophy'
            },
            'E020502T': {
                date: '08-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Kinesiology and Biomechanics in Sports'
            },
            'C010304T': {
                date: '08-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Inventory Management'
            },
            'B020502T': {
                date: '08-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Rearrangements and Chemistry of Group Elements'
            },
            'A080301T': {
                date: '09-Dec-2025',
                day: 'Tue',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'History of Economic Thought'
            },
            'C010504T': {
                date: '09-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Principles and Practices of Insurance'
            },
            'B010501T': {
                date: '09-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Classical & Statistical Mechanics'
            },
            'B040501T': {
                date: '09-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Plant Physiology, Metabolism & Bio Chemistry'
            },
            'A210502T': {
                date: '09-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'History of Indian art- Development of Modern Art'
            },
            'A110101T': {
                date: '10-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Physical Geogrphy'
            },
            'A130501T': {
                date: '10-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Surface Ornamentation of Fabrics'
            },
            'B190501T': {
                date: '10-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Industrial Chemicals'
            },
            'B070501T': {
                date: '10-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Analysis of Algorithms and Data Structures'
            },
            'A110301T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Environment, Disaster Management and Climate Change'
            },
            'A300301T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Theoretical and Analytical study of Ragas, Talas & Descriptive theory of Indian Classical Music'
            },
            'A310301T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'History of Tabla'
            },
            'A320301T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Contribution of Ancient, Medieval and Modern Scholars to Indian Music'
            },
            'C010505T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Monetary Theory and Banking in India'
            },
            'B030502T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Number Theory & Game Theory'
            },
            'B030503T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Graph Theory & Discrete'
            },
            'B030504T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Differential Geometry and Tensor Analysis'
            },
            'A130502T': {
                date: '11-Dec-2025',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Community Development & Programme Planning'
            },
            'E020101T': {
                date: '12-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Elements of Physical Education'
            },
            'A070502T': {
                date: '12-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Research Methodology in Social Sciences'
            },
            'B190502T': {
                date: '12-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Pollution, its Management and Industrial Economics'
            },
            'B070502T': {
                date: '12-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Soft Computing'
            },
            'E020301T': {
                date: '13-Dec-2025',
                day: 'Sat',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Anatomy & exercise Physiology'
            },
            'A060501T': {
                date: '13-Dec-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Comparative Government and Politics'
            },
            'Z010101': {
                date: '15-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Food Nutrition and Hygiene'
            },
            'Z050501': {
                date: '15-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Analytic Ability and Digital Awareness'
            },
            'Z030301': {
                date: '16-Dec-2025',
                day: 'Tue',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Human Values and Environment Studies'
            },
            'Q10001': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Kuru Kingdom Through The Ages (3000 BC-2000BC)'
            },
            'Q10003': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Applied Ethics'
            },
            'Q10004': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Basic Economics'
            },
            'Q10005': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Health Personal & Environmental'
            },
            'Q10006': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Disaster Management System in India'
            },
            'Q10007': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Earths Atmosphere and Climate Change'
            },
            'Q10008': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Environment and Public Health Challenges'
            },
            'Q10010': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Public Health and Hygiene'
            },
            'Q10030': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Promoting Personal Growth and Relationship Through Psychology'
            },
            'Q10018': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Road Safety: Laws, Policies & Practices'
            },
            'Q10037': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Business Communication'
            },
            'Q10038': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Sanskrit Sahitya Mein Rashtra Chintan'
            },
            'Q10039': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Quantitative Mathematics'
            },
            'Q10040': {
                date: '17-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Maternal and Child Nutrition'
            },
            'Q10032': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Yoga for All'
            },
            'Q10034': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Psychology of Everyday Life'
            },
            'Q10035': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Renewable Energy Sources'
            },
            'Q10036': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Scientific Progress and Environmental Awareness in India'
            },
            'Q10020': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'An Introduction to Indian Jurists'
            },
            'Q10012': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Applied Yoga'
            },
            'Q10033': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Fundamentals of Indian Economy'
            },
            'Q10029': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Food and Food Sources'
            },
            'Q30001': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Business Regulatory Frame work'
            },
            'Q30002': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Inventory Management'
            },
            'Q30003': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Bhartiya Gaurav Evam Arthkavya'
            },
            'Q30004': {
                date: '18-Dec-2025',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Optimization Technique'
            },
            'A020101T': {
                date: '19-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Sanskrit-Padya Sahitya Avm Vyakaran'
            },
            'A040501T': {
                date: '19-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Classical Literature & History of English Literature'
            },
            'B080501T': {
                date: '19-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Medical Microbiology'
            },
            'B017501T': {
                date: '19-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Industrial Food Microbiology'
            },
            'B060501T': {
                date: '19-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Multivariate Analysis and Non-parametric Methods'
            },
            'A020301T': {
                date: '20-Dec-2025',
                day: 'Sat',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Sanskrit-Natak Avm Vyakaran'
            },
            'A040502Τ': {
                date: '20-Dec-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Fiction'
            },
            'E010101T': {
                date: '22-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Conceptual Frame work of Education'
            },
            'B080502T': {
                date: '22-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Immunology'
            },
            'B017502T': {
                date: '22-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Immunology & Medical Microbiology'
            },
            'B060502T': {
                date: '22-Dec-2025',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Analysis of Variance and Design of Experiment'
            },
            'E010301T': {
                date: '24-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Philosophical-Sociological-Political- Economic Perspectives of Education'
            },
            'A060502T': {
                date: '24-Dec-2025',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Principles of Public Administration'
            },
            'A100301T': {
                date: '26-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Ethics(Indian and Western)'
            },
            'A180101T': {
                date: '26-Dec-2025',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Fundamentals of Librarianship'
            },
            'A010501T': {
                date: '26-Dec-2025',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Sahitya shastra and Hind iAalochana'
            },
            'A180301T': {
                date: '27-Dec-2025',
                day: 'Sat',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Library Management'
            },
            'A030301T': {
                date: '27-Dec-2025',
                day: 'Sat',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Sahafat Aur Tarjuma Nigari Ka Fun Aur Riwayat'
            },
            'A010502T': {
                date: '27-Dec-2025',
                day: 'Sat',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Hindi Ka Rastriya Ka Vya'
            },
            'A210101T': {
                date: '29-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'History of Art: Pre Historic to Rashtrakuta'
            },
            'A080501T': {
                date: '29-Dec-2025',
                day: 'Mon',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Economic Growth and Development'
            },
            'A210301T': {
                date: '30-Dec-2025',
                day: 'Tue',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'History of Indian Art-Palato Pandya & Nayaka Period'
            },
            'A080502T': {
                date: '30-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Environmental Economics'
            },
            'A080503T': {
                date: '30-Dec-2025',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'International Economics'
            },
            'A130101T': {
                date: '31-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Fundamentals of Nutrition and Human Development'
            },
            'A110501T': {
                date: '31-Dec-2025',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Regional Geography'
            },
            'A130301T': {
                date: '01-Jan-2026',
                day: 'Thu',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Advance Nutrition and Human Development'
            },
            'A110502T': {
                date: '01-Jan-2026',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Basics of Remote Sensing and GIS'
            },
            'A090101T': {
                date: '01-Jan-2026',
                day: 'Thu',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Basic Psychological Processes'
            },
            'A100101T': {
                date: '02-Jan-2026',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Indian Philosophy'
            },
            'A070501T': {
                date: '02-Jan-2026',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Classical Sociological Thought'
            },
            'A120101T': {
                date: '02-Jan-2026',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Conceptual Aspect of war'
            },
            'A310101T': {
                date: '02-Jan-2026',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Basic Fundamental of Tabla'
            },
            'A320101T': {
                date: '02-Jan-2026',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Introduction to Indian Music'
            },
            'A300101T': {
                date: '02-Jan-2026',
                day: 'Fri',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Theoretical and Analytical study of Ragas, Talas and general theory of'
            },
            'A090301T': {
                date: '02-Jan-2026',
                day: 'Fri',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Psychology of Social Behavior'
            },
            'A050501T': {
                date: '05-Jan-2026',
                day: 'Mon',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Nationalism in India'
            },
            'A120301T': {
                date: '06-Jan-2026',
                day: 'Tue',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'National Security-Conceptual Aspects'
            },
            'A030101T': {
                date: '07-Jan-2026',
                day: 'Wed',
                shift: 'Shift I (10:00 AM - 01:00 PM)',
                name: 'Urdu Zaban-o-Adab aur Qwaid-o Insha'
            },
            'A050502T': {
                date: '07-Jan-2026',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'History of Modern Europe (1815A.D.-1870A.D.)'
            },
            'A050503T': {
                date: '07-Jan-2026',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Socio-Cultural and Economic History of Medieval India (1200A.D.-1700A.D.)'
            },
            'A050504T': {
                date: '07-Jan-2026',
                day: 'Wed',
                shift: 'Shift II (02:00 PM - 05:00 PM)',
                name: 'Ethicsin History'
            },
            
            
            // Non-scheduled / Placeholder Entries
            'C010403P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            }, // Practical - Date decided by college
            'A010603R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A020607R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A030607R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A040604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A050605R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A060603R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A070606R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A070603R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A080604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A090604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A090603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'A100603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'A100604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A110603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'A110604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A120603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'A120604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A130603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'A130604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A180603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'A180604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'A210603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'A210604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'E010603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'E010604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'E020603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'E020604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'B010603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'B010604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'B020603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'B020604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'B030603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'B030604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'B040603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'B040604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'B050603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'B050604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'B060603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'B060604R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'C010603P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical'
            },
            'C010607R': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Research Project'
            },
            'Q10021': {
                date: '22-May-2025',
                day: 'Thu',
                shift: 'Shift 1 (8:00 AM - 11:00 AM)',
                name: 'Elective Paper'
            },
            'V0001015P': {
                date: 'N/A',
                day: 'N/A',
                shift: 'N/A',
                name: 'Practical/Vocational'
            }, // Practical/Vocational
            'V0001015T': {
                date: '23-May-2025',
                day: 'Fri',
                shift: 'Shift 1 (8:00 AM - 11:00 AM)',
                name: 'Vocational Theory'
            }, // Assuming T means Theory
            'Z060601': {
                date: '14-Oct-2025',
                day: 'Tue',
                shift: 'Shift 1 (10:00 AM - 12:00 PM)',
                name: 'Co-Curricular'
            },
            
            // Added codes
            'D010601T': {
                date: '06-May-2025',
                day: 'Tue',
                shift: 'Shift 2 (11:00 AM - 2:00 PM)',
                name: 'Added Theory Paper'
            },
            'D010201T': {
                date: '01-May-2025',
                day: 'Thu',
                shift: 'Shift 1 (8:00 AM - 11:00 AM)',
                name: 'Added Theory Paper 2'
            },
        };

        const paperEntriesContainer = document.getElementById('paper-entries');

        // --- MODAL AND INITIALIZATION LOGIC (NEW/UPDATED) ---
        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('disclaimer-modal');
            const understandBtn = document.getElementById('understand-btn');
            
            // Initially hide main content elements
            document.getElementById('form-container').style.display = 'none';
            document.querySelector('.action-buttons').style.display = 'none';
            document.getElementById('admit-card-wrapper').style.display = 'none';
            
            // Show the modal
            modal.style.display = 'flex';
            
            // Set up the Understand button click handler
            understandBtn.addEventListener('click', () => {
                modal.style.display = 'none'; // Hide modal

                // Show main content
                document.getElementById('form-container').style.display = 'block';
                document.querySelector('.action-buttons').style.display = 'flex'; 

                // Initial setup for the form (Add one paper entry)
                addPaperEntry();
            });
        });
        
        // --- TOGGLE MANUAL / AUTO MODE (NEW FUNCTION) ---
        function switchToManualMode() {
            document.getElementById('manual-form').style.display = 'block';
            document.getElementById('auto-fill-section').style.display = 'none';
            document.getElementById('manualBtn').classList.add('active');
            document.getElementById('autoBtn').classList.remove('active');
        }

        // --- TOGGLE EVENT LISTENERS (UPDATED) ---
        document.getElementById('manualBtn').addEventListener('click', switchToManualMode);

        document.getElementById('autoBtn').addEventListener('click', () => {
            document.getElementById('manual-form').style.display = 'none';
            document.getElementById('auto-fill-section').style.display = 'block';
            document.getElementById('manualBtn').classList.remove('active');
            document.getElementById('autoBtn').classList.add('active');
        });

        // --- ADD/REMOVE PAPER ROW ---
        function addPaperEntry(paper = {
            code: '',
            name: '',
            type: ''
        }) {
            const div = document.createElement('div');
            div.className = 'paper-entry';
            div.innerHTML = `
        <input type="text" placeholder="Paper Code" value="${paper.code}" required>
        <input type="text" placeholder="Paper Name" value="${paper.name}" required>
        <input type="text" placeholder="Paper Type (Theory, Practical)" value="${paper.type}" required>
        <button type="button" class="remove-paper-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-1  text-xs rounded" title="Remove Paper">X</button>`;
            div.querySelector('.remove-paper-btn').addEventListener('click', () => {
                if (paperEntriesContainer.children.length > 1) {
                    paperEntriesContainer.removeChild(div);
                } else {
                    // Use a custom message instead of alert()
                    showFloatingMessage('Cannot remove the last paper entry.', 'bg-yellow-500');
                }
            });
            paperEntriesContainer.appendChild(div);
        }

        document.getElementById('addPaperBtn').addEventListener('click', () => addPaperEntry());

        // --- FILE UPLOAD + OCR EXTRACTION (Logic updated for auto-switch) ---
        document.getElementById('admitCardUpload').addEventListener('change', handleFileUpload);

        async function handleFileUpload(event) {
            const file = event.target.files[0];
            const status = document.getElementById('upload-status');
            if (!file) return;
            status.textContent = 'Extracting text... please wait.';

            let extractedText = '';
            try {
                if (file.type === 'application/pdf') {
                    extractedText = await extractTextFromPDF(file);
                } else if (file.type.startsWith('image/')) {
                    extractedText = await extractTextFromImage(file);
                }
            } catch (e) {
                console.error('Extraction Error:', e);
                status.textContent = 'Error reading file. Check console for details.';
                return;
            }

            if (!extractedText.trim()) {
                status.textContent = 'No readable text found.';
                return;
            }

            // Try to detect common fields
            const extractedData = parseExamFormText(extractedText);
            fillFormWithData(extractedData);
            
            // *** NEW: Automatically switch to Manual Entry mode ***
            switchToManualMode();
            
            status.textContent = '✅ Data fetched successfully! Please review and verify the details below.';
        }

        async function extractTextFromPDF(file) {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({
                data: arrayBuffer
            }).promise;
            let text = '';
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();
                const strings = content.items.map(item => item.str).join(' ');
                text += strings + '\n';
            }
            return text;
        }

        async function extractTextFromImage(file) {
            const status = document.getElementById('upload-status');
            status.textContent = '🔍 Scanning image... (this may take 10–20 sec)';
            const result = await Tesseract.recognize(file, 'eng', {
                logger: info => status.textContent = `Scanning: ${Math.round(info.progress*100)}%`
            });
            return result.data.text;
        }

        /**
         * @description Extracts and cleans student and exam metadata from the provided text.
         */
        function parseExamFormText(text) {
            const cleanText = text.replace(/[\r\n]+/g, ' ').replace(/\s{2,}/g, ' ').toUpperCase();

            const getMatch = (pattern) => {
                const match = cleanText.match(pattern);
                if (match && match[1]) {
                    return match[1].trim().replace(/\s+/g, ' ');
                }
                return '';
            };

             // --- 1. EXAM TYPE FIX (More robust) ---
            let examType = 'MAIN EXAM';
            // --- MODIFICATION START (C) ---
            if (cleanText.includes('SPECIAL BACK PAPER')) {
                examType = 'BACK EXAM'; // Use BACK EXAM to select the correct dropdown option
            } else if (cleanText.includes('BACK PAPER')) {
                examType = 'BACK EXAM';
            } else if (cleanText.includes('EX-STUDENT')) {
            // --- MODIFICATION END (C) ---
                examType = 'EX-STUDENT EXAM';
            } else {
                const typeMatch = cleanText.match(/COLLEGE\s*EXAMINATION\s*\/\s*([A-Z\s]+)\s*\/\s*(\d+)/i);
                if (typeMatch && typeMatch[1].trim() !== 'ZIND SEMESTER') {
                    const detectedType = typeMatch[1].trim().replace(/\s+/g, ' ');
                    if (detectedType && detectedType !== 'PROVISIONAL ADMIT CARD') {
                        examType = detectedType;
                    }
                }
            }

            // --- 2. INDIVIDUAL NAME EXTRACTION (for Father/Mother fix) ---
            const fatherName = getMatch(/FATHER'?S\s*NAME:[:\-\n\s]*?([\s\S]*?)(?=ENROLLMENT|MOTHER'?S|ROLL|COURSE)/i);
            const motherName = getMatch(/MOTHER'?S\s*NAME:[:\-\n\s]*?([\s\S]*?)(?=DATE\s*OF\s*BIRTH|SEMESTER|ROLL|COURSE)/i);

            let combinedFatherMotherName = '';
            if (fatherName && motherName) {
                combinedFatherMotherName = `${fatherName}/${motherName}`.trim().replace(/\s*\/\s*/g, '/');
            } else {
                combinedFatherMotherName = getMatch(/FATHER'?S\s*[\/\\]?\s*MOTHER'?S\s*NAME:[:\-\n\s]*?([\s\S]*?)(?=ROLL|COURSE|GENDER)/i) || fatherName || motherName;
            }

            // --- 3. COURSE AND GENDER FIX (using non-greedy and lookahead) ---
            const course = getMatch(/COURSE:[:\-\n\s]*?([\s\S]+?)(?=GENDER|COLLEGE\s*NAME|ADMITTED\s*SUBJECT|EXAMINATION)/i) || getMatch(/ADMITTED\s*COURSE:[:\-\n\s]*?([\s\S]+?)(?=ADMITTED\s*SUBJECT|GENDER)/i);

            const gender = getMatch(/GENDER:[:\-\n\s]*?(MALE|FEMALE|OTHER)(?=\s*(?:CASTE|SEMESTER|ROLL|COURSE))/i) ||
                getMatch(/GENDER:[:\-\n\s]*?(MALE|FEMALE|OTHER)/i) || 'FEMALE';

            // --- 4. SEMESTER / YEAR FIX (looking for the specific form field) ---
            const semester = getMatch(/SEMESTER\s*OR\s*YEAR:[:\-\n\s]*?([0-9]+)(?:ST|ND|RD|TH)?/i) || // Specific Exam Form field
                getMatch(/([0-9]+)(?:ST|ND|RD|TH)?\s*SEMESTER/i) ||
                getMatch(/(\d+)'TH/i) ||
                '4'; // Default to 4

            // --- 5. COLLEGE NAME FIX (Non-greedy and robust) ---
            const collegeName =
  getMatch(/COLLEGE\s*NAME:[:\-\n\s]*?([\s\S]*?)(?=EXAMINATION\s*CENTER|SUBJECT|NOTE|PAPER|PAYMENT|DECLARATION)/i) ||
  getMatch(/ADMITTED\s*COLLEGE:[:\-\n\s]*?([\s\S]*?)(?=PAPER|PAYMENT|NOTE|DECLARATION|PROJECT|COURSE|ROLL|GENDER)/i);
            
            // --- FIX: SUBJECT NAME (Exclude 'NOTE' and subsequent text like PAPER) ---
            // Pattern looks for 'SUBJECT:' followed by content, stopping before the next label (NOTE or PAPER).
            const subject =
  getMatch(/SUBJECT:[:\-\n\s]*?([A-Z0-9,\s]+?)(?=NOTE|ADMITTED\s*COLLEGE|PAPER\s*\d+)/i) ||
  getMatch(/ADMITTED\s*SUBJECT[:\-\n\s]*?([A-Z0-9,\s]+?)(?=ADMITTED\s*COLLEGE|NOTE|PAPER\s*\d+)/i);


            // --- FIX: Examination Center (Required User Modification) ---
            const examinationCenter = 
                getMatch(/EXAMINATION\s*CENTER:[:\-\n\s]*?([\s\S]*?)(?=SUBJECT|NOTE|PAPER)/i) || 
                "Visit the official site to view the examination center";


            return {
                // Updated to use combined logic
                candidateName: getMatch(/CANDIDATE\s*NAME:[:\-\n\s]*?([\s\S]*?)(?=FATHER'?S|ROLL|COURSE)/i) || getMatch(/STUDENT\s*NAME:[:\-\n\s]*?([\s\S]*?)(?=REGISTRATION|FATHER)/i),
                fatherMotherName: combinedFatherMotherName, // FIX: Uses combined extraction
                rollNumber: getMatch(/ROLL\s*NUMBER[:\-\n\s]*?([A-Z0-9]+)/i),
                enrollmentNumber: getMatch(/ENROLLMENT\s*(?:NO|NUMBER|ID)?[:\-\n\s]*?([A-Z0-9]+)/i) || getMatch(/REGISTRATION\s*NUMBER:\s*([A-Z0-9]+)/i) || getMatch(/([M]\d{8})/i),
                course: course, // FIX: Improved pattern
                gender: gender, // FIX: Improved pattern
                semester: semester, // FIX: Improved pattern
                examType: examType, // FIX: Improved logic
                collegeName: collegeName, // FIX: Improved pattern
                examinationCenter: examinationCenter, // **UPDATED**
                subject: subject, // FIX: Subject extraction improved to exclude NOTE
                papers: extractPapers(text.toUpperCase())
            };
        }

        /**
         * @description Extracts and cleans paper details from the provided text.
         */
        function extractPapers(text) {
            const papers = [];
            // Pattern: PAPER X <CODE> <NAME> <TYPE>
            const regex = /PAPER\s*\d+\s*([A-Z0-9]+)\s*([\s\S]*?)(THEORY|PRACTICAL|PROJECT|MINNOR|VOCATIONAL|CO CURRICULAR|INTERNAL|EXTERNAL)[\s,]*?(INTERNAL|EXTERNAL)?/gi;
            let match;
            
            // Array of words to filter out if they appear as the first word of the paper name
            const filterWords = ['BOTANY', 'SUBJECT', 'VOCATIONAL', 'CO', 'PHYSICS', 'CHEMISTRY', 'MATHEMATICS', 'PRACTICAL:', 'LAB', 'ALGAE,'];

            while ((match = regex.exec(text)) !== null) {
                const rawNameArea = match[2].trim().replace(/[\n\t\r]+/g, ' ').replace(/\s{2,}/g, ' ');
                const code = match[1].trim();
                let type1 = match[3].trim();
                let type2 = match[4] ? match[4].trim() : '';

                // Clean up the raw name area by filtering common subject words
                let nameParts = rawNameArea.split(/\s+/).filter(p => p.length > 0);
                
                // FIX: Loop to remove common subject name (like "BOTANY") from the start of the paper name
                let cleanedNameParts = [];
                let removeNext = true;
                for (const part of nameParts) {
                    if (removeNext && filterWords.includes(part)) {
                        continue; // Skip the word
                    } else {
                        // Once a non-filter word is hit, stop filtering the start
                        removeNext = false;
                        cleanedNameParts.push(part);
                    }
                }
                nameParts = cleanedNameParts;

                // Final cleanup for phrases like 'BOTANY MICROBILOGY' where 'BOTANY' is removed
                let name = nameParts.join(' ');
                
                // If name is empty after stripping, use a fallback
                if(name.length === 0 && code.endsWith('P')) {
                     name = 'PRACTICAL';
                } else if (name.length === 0) {
                    name = 'GENERAL PAPER';
                }

                papers.push({
                    code: code,
                    name: name.toUpperCase(),
                    // Clean up paper type from internal/external mentions that might be repeated
                    type: type1.toUpperCase().replace(/,?\s*EXTERNAL/g, '').replace(/,?\s*INTERNAL/g, '').replace(/\s{2,}/g, ' ')
                });
            }
            
            // Final check: Extracting single paper from Exam Form table (Pattern: CODE NAME TYPE)
            if (papers.length === 0) {
                const singlePaperMatch = text.match(/PAPER\s*1\s*([A-Z0-9]+)\s*([\s\S]+?)(THEORY|PRACTICAL|PROJECT|INTERNAL|EXTERNAL)/i);
                if (singlePaperMatch) {
                    // Try to clean up the name part
                    let name = singlePaperMatch[2].trim().replace(/[\n\t\r]+/g, ' ').replace(/\s{2,}/g, ' ');
                    name = name.replace(/SUBJECT/i, '').trim(); // Remove 'SUBJECT' if present

                    papers.push({
                        code: singlePaperMatch[1].trim(),
                        name: name.toUpperCase(),
                        type: singlePaperMatch[3].trim().toUpperCase()
                    });
                }
            }

            return papers.length ? papers : [{
                code: '',
                name: '',
                type: ''
            }];
        }

        // --- FILL FORM WITH AUTO DATA ---
        function fillFormWithData(data) {
            const set = (id, val) => {
                const el = document.getElementById(id);
                if (el) el.value = val || '';
            };
            set('candidateName', data.candidateName);
            set('fatherMotherName', data.fatherMotherName);
            set('rollNumber', data.rollNumber);
            set('enrollmentNumber', data.enrollmentNumber);
            set('course', data.course);
            // Ensure dropdowns get valid options
            set('gender', ['MALE', 'FEMALE', 'OTHER'].includes(data.gender) ? data.gender : 'FEMALE');
            set('semester', data.semester);
            set('examType', ['MAIN EXAM', 'BACK EXAM', 'EX-STUDENT EXAM'].includes(data.examType) ? data.examType : 'MAIN EXAM');
            set('collegeName', data.collegeName);
            // Uses the extracted or defaulted examinationCenter value
            set('examinationCenter', data.examinationCenter); 
            set('subject', data.subject);

            paperEntriesContainer.innerHTML = '';
            if (data.papers.length === 0) {
                addPaperEntry(); // Add one empty row if none found
            } else {
                data.papers.forEach(addPaperEntry);
            }
        }

        // --- UTILITY: SHOW FLOATING MESSAGE (for replacing alert) ---
        function showFloatingMessage(message, classes = 'bg-blue-500') {
            let msgBox = document.getElementById('floating-message');
            if (!msgBox) {
                msgBox = document.createElement('div');
                msgBox.id = 'floating-message';
                msgBox.className = 'fixed top-4 right-4 p-4 rounded-lg text-white shadow-xl transition-opacity duration-300 z-50';
                document.body.appendChild(msgBox);
            }
            msgBox.className = `fixed top-4 right-4 p-4 rounded-lg text-white shadow-xl transition-opacity duration-300 z-50 ${classes}`;
            msgBox.textContent = message;
            msgBox.style.opacity = '1';

            setTimeout(() => {
                msgBox.style.opacity = '0';
            }, 3000);
        }

        /**
         * @description Formats and updates the printed date and time on the admit card.
         */
        function updateDateTime() {
            const now = dayjs();
            const dateStr = now.format('DD-MMM-YYYY'); // e.g., 04-Oct-2025
            const timeStr = now.format('hh:mm:ss A'); // e.g., 09:31:57 PM
            const timezoneStr = now.format('ZZ').replace(/(\d{2})(\d{2})/, '$1:$2'); // e.g., +05:30 (manual formatting for better readability)

            document.getElementById('generatedTime').innerHTML =
                `${dateStr} ${timeStr} IST ${timezoneStr}`;
        }

        /**
         * @description Clears all fields in the manual entry form.
         */
        function resetForm() {
            document.getElementById('admitCardForm').reset();
            paperEntriesContainer.innerHTML = '';
            addPaperEntry();
            document.getElementById('admit-card-wrapper').style.display = 'none';
            document.getElementById('downloadBtn').style.display = 'none';
            document.getElementById('printBtn').style.display = 'none';
            showFloatingMessage('Form has been reset.', 'bg-red-500');
        }

        /**
         * @description Initiates the native browser print dialogue for the admit card content only.
         */
        function printAdmitCard() {
            window.print();
        }

        /**
         * @description Main function to generate the admit card view.
         */
        function generateAdmitCard() {
            const candidateName = document.getElementById('candidateName').value,
                fatherMotherName = document.getElementById('fatherMotherName').value,
                rollNumber = document.getElementById('rollNumber').value,
                enrollmentNumber = document.getElementById('enrollmentNumber').value,
                course = document.getElementById('course').value,
                gender = document.getElementById('gender').value,
                semester = document.getElementById('semester').value,
                rawExamType = document.getElementById('examType').value,
                examType = rawExamType === 'BACK EXAM' ? 'SPECIAL BACK EXAM' : rawExamType,
                collegeName = document.getElementById('collegeName').value,
                examinationCenter = document.getElementById('examinationCenter').value,
                subject = document.getElementById('subject').value;

            // Simple validation
            if (!candidateName || !rollNumber || !course || !examType) {
                showFloatingMessage('Please fill in all required fields.', 'bg-red-700');
                return;
            }

            // Get paper details
            const paperEntries = Array.from(paperEntriesContainer.children).map(div => ({
                code: div.querySelector('input:nth-child(1)').value.toUpperCase() || 'N/A', // Ensure code is at least N/A
                name: div.querySelector('input:nth-child(2)').value.toUpperCase() || 'N/A',
                type: div.querySelector('input:nth-child(3)').value.toUpperCase() || 'N/A',
            }));

            // Build papers table HTML
            let papersHtml = paperEntries.map((paper, index) => {
                const details = examDatesheet[paper.code] || {
                    date: 'SCHEDULE NOT FOUND', 
                    day: 'SCHEDULE NOT FOUND',
                    shift: 'SCHEDULE NOT FOUND',
                    name: paper.name // Use manually entered name as fallback
                };

                // *** NEW/UPDATED: Use the name from the datesheet if available, otherwise use manual entry ***
                const finalPaperName = details.name && details.name !== 'N/A' ? details.name.toUpperCase() : paper.name;

                let scheduleHTML;
                const paperCodeUpper = paper.code.toUpperCase();
                const paperTypeCleaned = paper.type.toUpperCase().replace(/\s{2,}/g, ' '); 
                let customMessage = ''; 

                // --- START LOGIC FOR P, R, V PAPERS ---
                if (paperCodeUpper.endsWith('P')) {
                    customMessage = 'Contact the college for Exam Date (Paper is Practical)';
                } else if (paperCodeUpper.endsWith('R')) {
                    customMessage = 'Contact the college for Exam Date (Paper is Research Project)';
                } else if (paperCodeUpper.startsWith('V')) {
                    customMessage = 'Contact the college for Exam Date (Paper is Skill Development)';
                }
                // --- END LOGIC FOR P, R, V PAPERS ---

                if (customMessage) { // Check if a custom message was set (for P, R, V codes)
                    scheduleHTML = `<td colspan="3" style="text-align: center; font-weight: bold; color: #d32f2f;">${customMessage}</td>`;
                } else if (details.date === 'SCHEDULE NOT FOUND' || details.date === 'N/A') {
                    // For codes not found in the datesheet array (and are not P, R, or V)
                    scheduleHTML = `<td colspan="3" style="text-align: center; font-weight: bold; color: #f57c00;">Visit ccsuniversity.ac.in to confirm the exam schedule</td>`;
                } else {
                    // Normal entry found
                    const [shiftName, shiftTime] = details.shift.split('('); 
                    scheduleHTML = `
                        <td>${details.date}</td>
                        <td>${details.day}</td>
                        <td>
                            ${shiftName.trim()}<br>
                            ${shiftTime ? `(${shiftTime}` : ''}
                        </td>
                    `;
                }

                return `
                <tr>
                    <td style="text-align: center;">${index + 1}</td> 
                    <td>${paper.code}</td>
                    <td>${finalPaperName}</td> <td>${paper.type}</td>
                    ${scheduleHTML}
                </tr>`;
            }).join('');

            // Fill the Admit Card HTML
            document.getElementById('ac-rollNumber').textContent = rollNumber.toUpperCase();
            document.getElementById('ac-enrollmentNumber').textContent = enrollmentNumber.toUpperCase();
            document.getElementById('ac-candidateName').textContent = candidateName.toUpperCase();
            document.getElementById('ac-fatherMotherName').textContent = fatherMotherName.toUpperCase();
            document.getElementById('ac-course').textContent = course.toUpperCase();
            document.getElementById('ac-gender').textContent = gender.toUpperCase();
            document.getElementById('ac-collegeName').textContent = collegeName.toUpperCase();
            document.getElementById('ac-examinationCenter').textContent = examinationCenter.toUpperCase();
            document.getElementById('ac-subject').textContent = subject.toUpperCase();
            
            const semesterText = `${semester}${['1','2','3'].includes(semester) ? ['st','nd','rd'][semester-1] : 'th'} SEMESTER`;
            document.getElementById('exam-type-sem').textContent = `${examType} (${semesterText})`;

            const paperTableBody = document.querySelector('#ac-papers-table tbody');
            paperTableBody.innerHTML = papersHtml;

            // Show the admit card and action buttons
            document.getElementById('admit-card-wrapper').style.display = 'block';
            document.getElementById('downloadBtn').style.display = 'inline-block';
            document.getElementById('printBtn').style.display = 'inline-block';
            updateDateTime(); // Update the printed date/time

            // Scroll to the admit card
            document.getElementById('admit-card-wrapper').scrollIntoView({
                behavior: 'smooth'
            });
            showFloatingMessage('Admit Card Generated! 📄', 'bg-green-600');
        }


        // --- DOWNLOAD AS PDF ---
        document.getElementById('downloadBtn').addEventListener('click', () => {
            const element = document.getElementById('admit-card-content');
            const candidateName = document.getElementById('candidateName').value;
            const filename = `${candidateName.replace(/\s/g, '_')}_Admit_Card.pdf`;

            showFloatingMessage('Generating PDF... please wait.', 'bg-yellow-600');

            // Configure PDF generation options for better print quality and A4 size simulation
            const opt = {
                margin: 0.5,
                filename: filename,
                image: {
                    type: 'jpeg',
                    quality: 1
                },
                html2canvas: {
                    scale: 4,
                    letterRendering: true,
                   useCORS: true
                },
                jsPDF: {
                    unit: 'in',
                    format: 'a4',
                    orientation: 'portrait'
                }
            };

            // Use html2pdf to generate and save
            html2pdf().from(element).set(opt).save();

            // The save function is asynchronous, so the message below is only an estimate.
            setTimeout(() => {
                showFloatingMessage('PDF download initiated. 📥', 'bg-green-500');
            }, 500);
        });

        // --- BUTTON EVENT LISTENERS ---
        document.getElementById('generateBtn').addEventListener('click', generateAdmitCard);
        document.getElementById('resetBtn').addEventListener('click', resetForm);
        document.getElementById('printBtn').addEventListener('click', printAdmitCard);
        
        // Mobile Menu Toggle
    document.getElementById('menu-btn').addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });
   
    
   

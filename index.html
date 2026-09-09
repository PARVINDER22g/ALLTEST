<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllTest - Online Test Series</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
        body { background: #f4f6f9; color: #333; }
        header { background: #1a73e8; color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .container { padding: 20px; max-width: 1100px; margin: 0 auto; }
        
        /* Category Selection Styles */
        .category-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px; }
        .card { background: white; border-radius: 8px; padding: 20px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer; transition: 0.2s; }
        .card:hover { transform: translateY(-3px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .card h3 { margin-bottom: 10px; color: #1a73e8; }
        .btn { background: #1a73e8; color: white; border: none; padding: 10px 18px; border-radius: 4px; cursor: pointer; margin-top: 10px; }
        .btn-success { background: #28a745; }
        .btn-warning { background: #ffc107; color: #000; }
        
        /* Test Interface Styles */
        #test-interface { display: none; grid-template-columns: 1fr 300px; gap: 20px; background: white; border-radius: 8px; padding: 20px; margin-top: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .options-list { margin: 15px 0; list-style: none; }
        .options-list li { margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; }
        .options-list li input { margin-right: 10px; }
        
        /* Question Palette */
        .palette { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-top: 15px; }
        .p-btn { padding: 8px; border: 1px solid #ccc; background: #e0e0e0; border-radius: 4px; cursor: pointer; text-align: center; font-weight: bold; }
        .p-btn.answered { background: #28a745; color: white; }
        .p-btn.not-answered { background: #dc3545; color: white; }
        .p-btn.review { background: #6f42c1; color: white; }
        
        /* Result Screen */
        #result-screen { display: none; background: white; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        @media (max-width: 768px) { #test-interface { grid-template-columns: 1fr; } }
    </style>
</head>
<body>

<header>
    <h1>AllTest</h1>
    <div id="timer-box" style="display:none; font-size: 1.1rem; font-weight: bold;">समय शेष: <span id="timer">20:00</span></div>
</header>

<div class="container">
    <!-- Category Screen -->
    <div id="category-screen">
        <h2>परीक्षा चुनें (Select Category)</h2>
        <div class="category-grid">
            <div class="card" onclick="startTest('Bank')">
                <h3>🏦 Banking Exams</h3>
                <p>IBPS PO, RRB PO, SBI Clerk</p>
                <button class="btn">Start Mock Test</button>
            </div>
            <div class="card" onclick="startTest('SSC')">
                <h3>🏛️ SSC Exams</h3>
                <p>SSC CGL, CHSL, GD</p>
                <button class="btn">Start Mock Test</button>
            </div>
            <div class="card" onclick="startTest('Rajasthan')">
                <h3>🏰 Rajasthan State Exams</h3>
                <p>Rajasthan CET, Patwari, REET</p>
                <button class="btn">Start Mock Test</button>
            </div>
        </div>
    </div>

    <!-- Test Interface -->
    <div id="test-interface">
        <div>
            <h3 id="q-number">प्रश्न 1</h3>
            <p id="q-text" style="font-size: 1.1rem; margin: 15px 0;"></p>
            <ul class="options-list" id="options-container"></ul>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button class="btn btn-success" onclick="saveAndNext()">Save & Next</button>
                <button class="btn btn-warning" onclick="markForReview()">Mark for Review</button>
                <button class="btn" style="background:#6c757d;" onclick="clearResponse()">Clear Response</button>
            </div>
        </div>

        <div style="border-left: 1px solid #ddd; padding-left: 15px;">
            <h4>Question Palette</h4>
            <div class="palette" id="palette-container"></div>
            <button class="btn btn-success" style="width: 100%; margin-top: 30px;" onclick="submitTest()">Submit Test</button>
        </div>
    </div>

    <!-- Result Screen -->
    <div id="result-screen">
        <h2>टेस्ट समाप्त हुआ! (Test Submitted)</h2>
        <p id="score-text" style="font-size: 1.3rem; margin: 20px 0;"></p>
        <button class="btn" onclick="location.reload()">होम पर जाएँ</button>
    </div>
</div>

<script>
    // Sample Questions Database
    const questionBank = {
        'Bank': [
            { q: "यदि A की कार्यक्षमता B से 20% अधिक है, तो किसी कार्य को करने में उनके द्वारा लिए गए समय का अनुपात क्या होगा?", opt: ["5:6", "6:5", "4:5", "5:4"], ans: 0 },
            { q: "भारत में बैंकिंग प्रणाली को नियंत्रित करने वाला केंद्रीय बैंक कौन सा है?", opt: ["SBI", "SEBI", "RBI", "NABARD"], ans: 2 }
        ],
        'SSC': [
            { q: "संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता कौन करता है?", opt: ["राष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष", "उपराष्ट्रपति"], ans: 2 },
            { q: "250 का 40% कितना होगा?", opt: ["80", "100", "120", "90"], ans: 1 }
        ],
        'Rajasthan': [
            { q: "राजस्थान का राज्य पशु कौन सा है?", opt: ["चिंकारा/ऊंट", "बाग", "गाय", "हाथी"], ans: 0 },
            { q: "राजस्थान में 'हवा महल' किस शहर में स्थित है?", opt: ["जोधपुर", "उदयपुर", "जयपुर", "बीकानेर"], ans: 2 }
        ]
    };

    let currentQuestions = [];
    let currentIndex = 0;
    let userAnswers = [];
    let questionStatus = []; 
    let timerInterval;

    function startTest(category) {
        currentQuestions = questionBank[category];
        userAnswers = new Array(currentQuestions.length).fill(null);
        questionStatus = new Array(currentQuestions.length).fill('not-visited');
        
        document.getElementById('category-screen').style.display = 'none';
        document.getElementById('test-interface').style.display = 'grid';
        document.getElementById('timer-box').style.display = 'block';
        
        renderPalette();
        loadQuestion(0);
        startTimer(20 * 60); 
    }

    function loadQuestion(index) {
        currentIndex = index;
        if(questionStatus[index] === 'not-visited') {
            questionStatus[index] = 'not-answered';
        }
        
        document.getElementById('q-number').innerText = `प्रश्न ${index + 1}`;
        document.getElementById('q-text').innerText = currentQuestions[index].q;
        
        const optContainer = document.getElementById('options-container');
        optContainer.innerHTML = '';
        
        currentQuestions[index].opt.forEach((option, i) => {
            const checked = userAnswers[index] === i ? 'checked' : '';
            optContainer.innerHTML += `
                <li>
                    <label style="display:block; cursor:pointer;">
                        <input type="radio" name="option" value="${i}" ${checked} onclick="selectOption(${i})">
                        ${option}
                    </label>
                </li>`;
        });
        updatePalette();
    }

    function selectOption(optIndex) { userAnswers[currentIndex] = optIndex; }

    function saveAndNext() {
        if(userAnswers[currentIndex] !== null) {
            questionStatus[currentIndex] = 'answered';
        } else {
            questionStatus[currentIndex] = 'not-answered';
        }
        if(currentIndex < currentQuestions.length - 1) loadQuestion(currentIndex + 1);
        else updatePalette();
    }

    function markForReview() {
        questionStatus[currentIndex] = 'review';
        if(currentIndex < currentQuestions.length - 1) loadQuestion(currentIndex + 1);
        else updatePalette();
    }

    function clearResponse() {
        userAnswers[currentIndex] = null;
        questionStatus[currentIndex] = 'not-answered';
        loadQuestion(currentIndex);
    }

    function renderPalette() {
        const pContainer = document.getElementById('palette-container');
        pContainer.innerHTML = '';
        currentQuestions.forEach((_, i) => {
            pContainer.innerHTML += `<div class="p-btn" id="p-${i}" onclick="loadQuestion(${i})">${i + 1}</div>`;
        });
    }

    function updatePalette() {
        questionStatus.forEach((status, i) => {
            const btn = document.getElementById(`p-${i}`);
            btn.className = 'p-btn ' + (status === 'not-visited' ? '' : status);
        });
    }

    function startTimer(duration) {
        let timer = duration;
        timerInterval = setInterval(() => {
            let minutes = parseInt(timer / 60, 10);
            let seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            document.getElementById('timer').innerText = minutes + ":" + seconds;
            if (--timer < 0) {
                clearInterval(timerInterval);
                submitTest();
            }
        }, 1000);
    }

    function submitTest() {
        clearInterval(timerInterval);
        let score = 0;
        currentQuestions.forEach((q, i) => {
            if(userAnswers[i] === q.ans) score += 1;
        });
        
        document.getElementById('test-interface').style.display = 'none';
        document.getElementById('timer-box').style.display = 'none';
        document.getElementById('result-screen').style.display = 'block';
        document.getElementById('score-text').innerText = `आपका कुल स्कोर: ${score} / ${currentQuestions.length}`;
    }
</script>

</body>
</html>

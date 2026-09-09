const questions = [
    // --- Syllogism (1 - 5) ---
    {
        question: "कथन: सभी पेन पेंसिल हैं। कुछ पेंसिल इरेज़र हैं।\nनिष्कर्ष: I. कुछ पेन इरेज़र हैं। II. कोई पेन इरेज़र नहीं है।",
        options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "या तो I या II अनुसरण करता है", "कोई भी अनुसरण नहीं करता"],
        answer: 2
    },
    {
        question: "कथन: कुछ कारें बाइक हैं। सभी बाइक ट्रक हैं।\nनिष्कर्ष: I. कुछ कारें ट्रक हैं। II. सभी बाइक कारें हैं।",
        options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों I और II अनुसरण करते हैं", "कोई अनुसरण नहीं करता"],
        answer: 0
    },
    {
        question: "कथन: कोई कुत्ता बिल्ली नहीं है। सभी बिल्ली चूहे हैं।\nनिष्कर्ष: I. कुछ चूहे बिल्ली हैं। II. कोई चूहा कुत्ता नहीं है।",
        options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "कोई नहीं"],
        answer: 0
    },
    {
        question: "कथन: सभी सेब लाल हैं। सभी लाल फल हैं।\nनिष्कर्ष: I. सभी सेब फल हैं। II. कुछ फल सेब हैं।",
        options: ["केवल I सत्य है", "केवल II सत्य है", "दोनों I और II सत्य हैं", "कोई सत्य नहीं है"],
        answer: 2
    },
    {
        question: "कथन: कुछ नदियाँ तालाब हैं। कोई तालाब झील नहीं है।\nनिष्कर्ष: I. कुछ नदियाँ झील नहीं हैं। II. सभी नदियाँ झील हैं।",
        options: ["केवल I सत्य है", "केवल II सत्य है", "दोनों सत्य हैं", "कोई नहीं"],
        answer: 0
    },

    // --- Inequality (6 - 10) ---
    {
        question: "कथन: A > B >= C = D < E\nनिष्कर्ष: I. A > D  II. C < E",
        options: ["केवल I सत्य है", "केवल II सत्य है", "दोनों I और II सत्य हैं", "कोई सत्य नहीं है"],
        answer: 2
    },
    {
        question: "कथन: P <= Q < R = S > T\nनिष्कर्ष: I. P < R  II. R > T",
        options: ["केवल I सत्य है", "केवल II सत्य है", "दोनों सत्य हैं", "कोई नहीं"],
        answer: 2
    },
    {
        question: "कथन: X >= Y > Z; Z = W < V\nनिष्कर्ष: I. X > Z  II. Y > W",
        options: ["केवल I सत्य है", "केवल II सत्य है", "दोनों सत्य हैं", "कोई नहीं"],
        answer: 2
    },
    {
        question: "कथन: M < N <= O = P > Q\nनिष्कर्ष: I. M < P  II. N <= P",
        options: ["केवल I सत्य है", "केवल II सत्य है", "दोनों सत्य हैं", "कोई नहीं"],
        answer: 2
    },
    {
        question: "कथन: H = I >= J > K\nनिष्कर्ष: I. H > K  II. I > K",
        options: ["केवल I सत्य है", "केवल II सत्य है", "दोनों सत्य हैं", "कोई नहीं"],
        answer: 2
    },

    // --- Coding-Decoding & Alphanumeric (11 - 15) ---
    {
        question: "किसी कूट भाषा में 'BANK' को 'CBLO' लिखा जाता है, तो 'CLERK' को क्या लिखा जाएगा?",
        options: ["DMERL", "DMFSL", "DMFSM", "DMESL"],
        answer: 1
    },
    {
        question: "यदि 'MOCK' को 'NPDL' के रूप में कोडित किया जाता है, तो 'TEST' का कोड क्या होगा?",
        options: ["UFTU", "UFSU", "UETU", "VFSU"],
        answer: 0
    },
    {
        question: "शृंखला में लुप्त पद ज्ञात करें: B2D, E5H, H8L, ?",
        options: ["K11P", "K11O", "J10P", "L12P"],
        answer: 0
    },
    {
        question: "शब्द 'REASONING' में अक्षरों के ऐसे कितने युग्म हैं जिनके बीच उतने ही अक्षर हैं जितने अंग्रेजी वर्णमाला में होते हैं?",
        options: ["एक", "दो", "तीन", "तीन से अधिक"],
        answer: 1
    },
    {
        question: "श्रृंखला: A 3 % B K 5 & W 8 * Z. बाएँ से 5वें तत्व के दाएँ 3रा तत्व कौन सा है?",
        options: ["W", "&", "8", "*"],
        answer: 0
    },

    // --- Blood Relations & Direction (16 - 20) ---
    {
        question: "A, B का भाई है। C, A की माता है। D, C का पिता है। F, A का बेटा है। F, D से किस प्रकार संबंधित है?",
        options: ["पोता (Grandson)", "परपोता (Great Grandson)", "बेटा", "भतीजा"],
        answer: 1
    },
    {
        question: "एक महिला की ओर इशारा करते हुए राम ने कहा, 'वह मेरी माँ के पति की इकलौती बेटी है।' वह महिला राम से कैसे संबंधित है?",
        options: ["माँ", "बहन", "चाची", "पुत्री"],
        answer: 1
    },
    {
        question: "रोहन उत्तर की ओर 10 मीटर चलता है, फिर बाएँ मुड़कर 5 मीटर चलता है। वह फिर से बाएँ मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
        options: ["5 मीटर", "10 मीटर", "15 मीटर", "20 मीटर"],
        answer: 0
    },
    {
        question: "अमित पूर्व दिशा में 8 किमी चलता है, फिर दक्षिण में 6 किमी चलता है। वह प्रारंभिक बिंदु से न्यूनतम कितनी दूरी पर है?",
        options: ["10 किमी", "14 किमी", "12 किमी", "2 किमी"],
        answer: 0
    },
    {
        question: "P, Q के पश्चिम में है। R, P के दक्षिण में है। Q के संदर्भ में R किस दिशा में है?",
        options: ["दक्षिण-पूर्व", "दक्षिण-पश्चिम", "उत्तर-पश्चिम", "उत्तर-पूर्व"],
        answer: 1
    },

    // --- Ranking & Miscellaneous (21 - 25) ---
    {
        question: "40 छात्रों की एक पंक्ति में, सुरेश बाएँ से 15वें स्थान पर है। दाएँ से उसका स्थान क्या होगा?",
        options: ["25वाँ", "26वाँ", "24वाँ", "27वाँ"],
        answer: 1
    },
    {
        question: "अनिल शीर्ष से 10वें और नीचे से 20वें स्थान पर है। कक्षा में कुल कितने छात्र हैं?",
        options: ["30", "29", "31", "28"],
        answer: 1
    },
    {
        question: "यदि 'x' का अर्थ '+', '÷' का अर्थ '-', '+' का अर्थ 'x' है, तो 10 + 5 x 2 ÷ 8 का मान क्या होगा?",
        options: ["44", "48", "50", "42"],
        answer: 0
    },
    {
        question: "विषम पद चुनें: 27, 64, 125, 144, 216",
        options: ["27", "64", "144", "216"],
        answer: 2
    },
    {
        question: "शब्द 'POVERTY' के अक्षरों को वर्णानुक्रम में व्यवस्थित करने पर कितने अक्षरों का स्थान अपरिवर्तित रहेगा?",
        options: ["कोई नहीं", "एक", "दो", "तीन"],
        answer: 1
    },

    // --- Seating Arrangement & Puzzles Questions (26 - 40) ---
    {
        question: "5 मित्र (A, B, C, D, E) एक पंक्ति में उत्तर की ओर मुख करके बैठे हैं। C, A और E के बीच में है। E, D के ठीक दाएँ है। B के बाएँ कौन है यदि A बाएँ छोर पर है?",
        options: ["C", "E", "D", "B"],
        answer: 2
    },
    {
        question: "6 व्यक्ति एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। A, B के सामने है। C, A के दाएँ है। D, C और B के बीच में है। E, A के बाएँ है। F के सामने कौन है?",
        options: ["C", "D", "E", "A"],
        answer: 1
    },
    {
        question: "चार तलों की एक इमारत में, 1 से 4 तक तल हैं। A सबसे निचले तल पर रहता है। B, A के ठीक ऊपर रहता है। D सबसे ऊपरी तल पर रहता है। C किस तल पर रहता है?",
        options: ["तल 1", "तल 2", "तल 3", "तल 4"],
        answer: 2
    },
    {
        question: "8 व्यक्ति A, B, C, D, E, F, G, H एक वृत्ताकार मेज पर बैठे हैं। A, C के दाएँ से तीसरे स्थान पर है। C और H के बीच केवल 2 व्यक्ति हैं। B, A का निकटतम पड़ोसी है। H के दाएँ दूसरे स्थान पर कौन है?",
        options: ["F", "G", "E", "डेटा अपर्याप्त"],
        answer: 3
    },
    {
        question: "यदि सात व्यक्ति J, K, L, M, N, O, P की अलग-अलग आयु है। N केवल O से बड़ा है। L, M से बड़ा है लेकिन K से छोटा है। सबसे बड़ा कौन हो सकता है?",
        options: ["P या K", "L", "M", "N"],
        answer: 0
    },
    {
        question: "कथन: A = B > C <= D < E। निष्कर्ष: I. A > C II. B < E",
        options: ["केवल I सत्य है", "केवल II सत्य है", "दोनों सत्य हैं", "कोई सत्य नहीं है"],
        answer: 0
    },
    {
        question: "किसी सांकेतिक भाषा में 123 का अर्थ 'bright little boy', 145 का अर्थ 'tall big boy' है। 'boy' का कोड क्या है?",
        options: ["1", "2", "3", "4"],
        answer: 0
    },
    {
        question: "शृंखला: 2, 6, 12, 20, 30, ?",
        options: ["36", "40", "42", "48"],
        answer: 2
    },
    {
        question: "शृंखला: 3, 5, 9, 17, 33, ?",
        options: ["65", "60", "55", "70"],
        answer: 0
    },
    {
        question: "विषम चुनें: शिमला, ऊटी, दार्जिलिंग, आगरा",
        options: ["शिमला", "ऊटी", "दार्जिलिंग", "आगरा"],
        answer: 3
    },
    {
        question: "यदि बीता हुआ कल मंगलवार था, तो आज से 100वाँ दिन कौन सा होगा?",
        options: ["गुरुवार", "शुक्रवार", "शनिवार", "रविवार"],
        answer: 1
    },
    {
        question: "एक घड़ी में 3:00 बजे हैं। घंटे और मिनट की सुई के बीच का कोण क्या होगा?",
        options: ["60°", "90°", "120°", "180°"],
        answer: 1
    },
    {
        question: "यदि A=1, CAT=24, तो DOG का मान क्या होगा?",
        options: ["26", "28", "26", "26"],
        answer: 1
    },
    {
        question: "पासे की दो स्थितियाँ दी गई हैं। यदि 1 सबसे नीचे है तो सबसे ऊपर कौन सी संख्या होगी? (स्थिति 1: 1, 2, 3 | स्थिति 2: 1, 4, 5)",
        options: ["2", "3", "6", "4"],
        answer: 2
    },
    {
        question: "40 प्रश्नों का यह बैंक क्लर्क रीज़निंग मॉक टेस्ट पूरा हुआ! क्या आप अगला सेक्शन (Quantitative Aptitude) जोड़ना चाहते हैं?",
        options: ["हाँ, क्वांट जोड़ें", "नहीं, केवल रीज़निंग", "अंग्रेजी भाषा जोड़ें", "इंटरफेस रीसेट करें"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let timeLeft = 1200; // 20 मिनट (1200 सेकंड)
let timerInterval;

function startQuiz() {
    startTimer();
    showQuestion();
}

function showQuestion() {
    selectedOption = null;
    const q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = (currentQuestionIndex + 1) + ". " + q.question;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => selectOption(btn, index);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(btn, index) {
    const buttons = document.querySelectorAll(".options button");
    buttons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedOption = index;
}

function nextQuestion() {
    if (selectedOption === null) {
        alert("कृपया एक विकल्प चुनें!");
        return;
    }

    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("time").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score-text").innerText = `आपका स्कोर: ${score} / ${questions.length}`;
}

window.onload = startQuiz;

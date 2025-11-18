 const questions=[
  {
    "num": 1,
    "question_en": "What is React?",
    "question_hi": "React क्या है?",
    "options_en": ["A JavaScript library for building UIs", "A CSS framework", "A database", "A web server"],
    "options_hi": ["UI बनाने के लिए एक JavaScript लाइब्रेरी", "एक CSS फ्रेमवर्क", "एक डेटाबेस", "एक वेब सर्वर"],
    "answer_en": "A JavaScript library for building UIs",
    "answer_hi": "UI बनाने के लिए एक JavaScript लाइब्रेरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Who developed React?",
    "question_hi": "React को किसने विकसित किया?",
    "options_en": ["Facebook", "Google", "Microsoft", "Twitter"],
    "options_hi": ["Facebook", "Google", "Microsoft", "Twitter"],
    "answer_en": "Facebook",
    "answer_hi": "Facebook",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is JSX in React?",
    "question_hi": "React में JSX क्या है?",
    "options_en": ["JavaScript XML", "Java Syntax Extension", "JSON Extension", "Java XML Syntax"],
    "options_hi": ["JavaScript XML", "Java Syntax Extension", "JSON Extension", "Java XML Syntax"],
    "answer_en": "JavaScript XML",
    "answer_hi": "JavaScript XML",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method is used to create a React component?",
    "question_hi": "React कॉम्पोनेन्ट बनाने के लिए कौन-सी विधि उपयोग की जाती है?",
    "options_en": ["Function or Class", "Module", "Service", "Directive"],
    "options_hi": ["फ़ंक्शन या क्लास", "मॉड्यूल", "सर्विस", "डायरेक्टिव"],
    "answer_en": "Function or Class",
    "answer_hi": "फ़ंक्शन या क्लास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What does virtual DOM mean in React?",
    "question_hi": "React में वर्चुअल DOM का क्या मतलब है?",
    "options_en": ["A lightweight copy of the real DOM", "A database", "A CSS file", "A backend process"],
    "options_hi": ["वास्तविक DOM की हल्की कॉपी", "एक डेटाबेस", "एक CSS फाइल", "एक बैकएंड प्रक्रिया"],
    "answer_en": "A lightweight copy of the real DOM",
    "answer_hi": "वास्तविक DOM की हल्की कॉपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is a React component?",
    "question_hi": "React कॉम्पोनेन्ट क्या है?",
    "options_en": ["Reusable piece of UI", "Database object", "CSS class", "Server element"],
    "options_hi": ["UI का पुन: उपयोग होने वाला भाग", "डेटाबेस ऑब्जेक्ट", "CSS क्लास", "सर्वर एलिमेंट"],
    "answer_en": "Reusable piece of UI",
    "answer_hi": "UI का पुन: उपयोग होने वाला भाग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "How do you create a functional component in React?",
    "question_hi": "React में एक फंक्शनल कॉम्पोनेन्ट कैसे बनाया जाता है?",
    "options_en": ["Using a function", "Using a class", "Using a module", "Using render()"],
    "options_hi": ["एक फ़ंक्शन का उपयोग करके", "एक क्लास का उपयोग करके", "एक मॉड्यूल का उपयोग करके", "render() का उपयोग करके"],
    "answer_en": "Using a function",
    "answer_hi": "एक फ़ंक्शन का उपयोग करके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of props in React?",
    "question_hi": "React में props का क्या उद्देश्य है?",
    "options_en": ["To pass data between components", "To store data locally", "To handle events", "To define routes"],
    "options_hi": ["कॉम्पोनेन्ट्स के बीच डेटा पास करने के लिए", "डेटा को स्थानीय रूप से स्टोर करने के लिए", "इवेंट्स को संभालने के लिए", "रूट्स को परिभाषित करने के लिए"],
    "answer_en": "To pass data between components",
    "answer_hi": "कॉम्पोनेन्ट्स के बीच डेटा पास करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is state in React?",
    "question_hi": "React में state क्या होती है?",
    "options_en": ["Component’s internal data", "Global variable", "CSS style", "Static data"],
    "options_hi": ["कॉम्पोनेन्ट का आंतरिक डेटा", "ग्लोबल वेरिएबल", "CSS स्टाइल", "स्थिर डेटा"],
    "answer_en": "Component’s internal data",
    "answer_hi": "कॉम्पोनेन्ट का आंतरिक डेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which hook is used to manage state in functional components?",
    "question_hi": "फंक्शनल कॉम्पोनेन्ट में state को प्रबंधित करने के लिए कौन-सा hook उपयोग होता है?",
    "options_en": ["useState", "useEffect", "useRef", "useContext"],
    "options_hi": ["useState", "useEffect", "useRef", "useContext"],
    "answer_en": "useState",
    "answer_hi": "useState",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does useEffect hook do?",
    "question_hi": "useEffect hook क्या करता है?",
    "options_en": ["Handles side effects", "Updates CSS", "Saves data", "Changes state directly"],
    "options_hi": ["साइड इफेक्ट्स को संभालता है", "CSS को अपडेट करता है", "डेटा सेव करता है", "सीधे state बदलता है"],
    "answer_en": "Handles side effects",
    "answer_hi": "साइड इफेक्ट्स को संभालता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the default port for React development server?",
    "question_hi": "React डेवलपमेंट सर्वर के लिए डिफ़ॉल्ट पोर्ट क्या है?",
    "options_en": ["3000", "8000", "8080", "5000"],
    "options_hi": ["3000", "8000", "8080", "5000"],
    "answer_en": "3000",
    "answer_hi": "3000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the use of React Router?",
    "question_hi": "React Router का क्या उपयोग है?",
    "options_en": ["To manage navigation between components", "To store data", "To handle CSS", "To make HTTP requests"],
    "options_hi": ["कॉम्पोनेन्ट्स के बीच नेविगेशन को प्रबंधित करने के लिए", "डेटा स्टोर करने के लिए", "CSS संभालने के लिए", "HTTP अनुरोध करने के लिए"],
    "answer_en": "To manage navigation between components",
    "answer_hi": "कॉम्पोनेन्ट्स के बीच नेविगेशन को प्रबंधित करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which command creates a new React app?",
    "question_hi": "नया React ऐप बनाने के लिए कौन-सा कमांड उपयोग किया जाता है?",
    "options_en": ["npx create-react-app appname", "npm start", "npm install react", "react new app"],
    "options_hi": ["npx create-react-app appname", "npm start", "npm install react", "react new app"],
    "answer_en": "npx create-react-app appname",
    "answer_hi": "npx create-react-app appname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does useRef hook do?",
    "question_hi": "useRef hook क्या करता है?",
    "options_en": ["Accesses DOM elements directly", "Handles API calls", "Changes CSS", "Stores component data"],
    "options_hi": ["DOM एलिमेंट्स तक सीधे पहुंच प्रदान करता है", "API कॉल्स संभालता है", "CSS बदलता है", "कॉम्पोनेन्ट डेटा स्टोर करता है"],
    "answer_en": "Accesses DOM elements directly",
    "answer_hi": "DOM एलिमेंट्स तक सीधे पहुंच प्रदान करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which function is used to return JSX in React?",
    "question_hi": "React में JSX को लौटाने के लिए कौन-सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["return()", "render()", "output()", "display()"],
    "options_hi": ["return()", "render()", "output()", "display()"],
    "answer_en": "return()",
    "answer_hi": "return()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the main purpose of ReactDOM?",
    "question_hi": "ReactDOM का मुख्य उद्देश्य क्या है?",
    "options_en": ["Render React components to the DOM", "Create backend API", "Style components", "Store data"],
    "options_hi": ["React कॉम्पोनेन्ट्स को DOM में रेंडर करना", "बैकएंड API बनाना", "कॉम्पोनेन्ट्स को स्टाइल करना", "डेटा स्टोर करना"],
    "answer_en": "Render React components to the DOM",
    "answer_hi": "React कॉम्पोनेन्ट्स को DOM में रेंडर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the parent element in a React component?",
    "question_hi": "React कॉम्पोनेन्ट में पैरेंट एलिमेंट क्या होता है?",
    "options_en": ["Only one root element", "Multiple root elements", "No root element", "Random element"],
    "options_hi": ["केवल एक रूट एलिमेंट", "एक से अधिक रूट एलिमेंट", "कोई रूट एलिमेंट नहीं", "कोई भी एलिमेंट"],
    "answer_en": "Only one root element",
    "answer_hi": "केवल एक रूट एलिमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which hook is used for context in React?",
    "question_hi": "React में context के लिए कौन-सा hook उपयोग होता है?",
    "options_en": ["useContext", "useEffect", "useMemo", "useState"],
    "options_hi": ["useContext", "useEffect", "useMemo", "useState"],
    "answer_en": "useContext",
    "answer_hi": "useContext",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which command runs a React app?",
    "question_hi": "React ऐप चलाने के लिए कौन-सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm start", "npm run", "npm serve", "npm build"],
    "options_hi": ["npm start", "npm run", "npm serve", "npm build"],
    "answer_en": "npm start",
    "answer_hi": "npm start",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to render components in class components?",
    "question_hi": "क्लास कॉम्पोनेन्ट में कॉम्पोनेन्ट्स को रेंडर करने के लिए कौन-सी विधि उपयोग होती है?",
    "options_en": ["render()", "return()", "show()", "display()"],
    "options_hi": ["render()", "return()", "show()", "display()"],
    "answer_en": "render()",
    "answer_hi": "render()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is React Fragment used for?",
    "question_hi": "React Fragment का उपयोग किस लिए किया जाता है?",
    "options_en": ["To group multiple elements without extra nodes", "To create CSS", "To store data", "To define routes"],
    "options_hi": ["कई एलिमेंट्स को बिना अतिरिक्त नोड्स के समूहित करने के लिए", "CSS बनाने के लिए", "डेटा स्टोर करने के लिए", "रूट्स परिभाषित करने के लिए"],
    "answer_en": "To group multiple elements without extra nodes",
    "answer_hi": "कई एलिमेंट्स को बिना अतिरिक्त नोड्स के समूहित करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which hook is used to memoize values?",
    "question_hi": "मानों को मेमोराइज़ करने के लिए कौन-सा hook उपयोग होता है?",
    "options_en": ["useMemo", "useEffect", "useState", "useRef"],
    "options_hi": ["useMemo", "useEffect", "useState", "useRef"],
    "answer_en": "useMemo",
    "answer_hi": "useMemo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is React key prop used for?",
    "question_hi": "React में key prop का उपयोग किस लिए किया जाता है?",
    "options_en": ["To identify list items uniquely", "To store data", "To style elements", "To call API"],
    "options_hi": ["लिस्ट आइटम्स को uniquely पहचानने के लिए", "डेटा स्टोर करने के लिए", "एलिमेंट्स को स्टाइल करने के लिए", "API कॉल करने के लिए"],
    "answer_en": "To identify list items uniquely",
    "answer_hi": "लिस्ट आइटम्स को uniquely पहचानने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which file is the entry point of a React app?",
    "question_hi": "React ऐप का एंट्री पॉइंट कौन-सी फाइल होती है?",
    "options_en": ["index.js", "App.js", "main.js", "root.js"],
    "options_hi": ["index.js", "App.js", "main.js", "root.js"],
    "answer_en": "index.js",
    "answer_hi": "index.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the useCallback hook do?",
    "question_hi": "useCallback hook क्या करता है?",
    "options_en": ["Memoizes functions", "Handles CSS", "Stores data", "Creates a new component"],
    "options_hi": ["फंक्शन्स को मेमोराइज़ करता है", "CSS संभालता है", "डेटा स्टोर करता है", "नया कॉम्पोनेन्ट बनाता है"],
    "answer_en": "Memoizes functions",
    "answer_hi": "फंक्शन्स को मेमोराइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is useReducer used for?",
    "question_hi": "useReducer का उपयोग किस लिए किया जाता है?",
    "options_en": ["State management", "Routing", "Styling", "API calls"],
    "options_hi": ["State प्रबंधन के लिए", "Routing के लिए", "Styling के लिए", "API कॉल के लिए"],
    "answer_en": "State management",
    "answer_hi": "State प्रबंधन के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is React.lazy used for?",
    "question_hi": "React.lazy का उपयोग किस लिए किया जाता है?",
    "options_en": ["Lazy loading components", "Styling", "Routing", "Testing"],
    "options_hi": ["कॉम्पोनेन्ट्स को lazy लोड करने के लिए", "स्टाइलिंग के लिए", "रूटिंग के लिए", "टेस्टिंग के लिए"],
    "answer_en": "Lazy loading components",
    "answer_hi": "कॉम्पोनेन्ट्स को lazy लोड करने के लिए",
    "attempted": false,
    "selected": ""
  },

   {
    "num": 29,
    "question_en": "Which package is used for routing in React?",
    "question_hi": "React में रूटिंग के लिए कौन-सा पैकेज उपयोग किया जाता है?",
    "options_en": ["react-router-dom", "react-route", "react-nav", "react-path"],
    "options_hi": ["react-router-dom", "react-route", "react-nav", "react-path"],
    "answer_en": "react-router-dom",
    "answer_hi": "react-router-dom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the purpose of React.StrictMode?",
    "question_hi": "React.StrictMode का उद्देश्य क्या है?",
    "options_en": [
      "To highlight potential problems in an application",
      "To increase performance",
      "To enable dark mode",
      "To connect with API"
    ],
    "options_hi": [
      "एप्लिकेशन में संभावित समस्याओं को दिखाने के लिए",
      "प्रदर्शन बढ़ाने के लिए",
      "डार्क मोड सक्षम करने के लिए",
      "API से कनेक्ट करने के लिए"
    ],
    "answer_en": "To highlight potential problems in an application",
    "answer_hi": "एप्लिकेशन में संभावित समस्याओं को दिखाने के लिए",
    "attempted": false,
    "selected": ""
  }
]


let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////
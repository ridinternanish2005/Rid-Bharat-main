 const questions=[
  {
    "num": 1,
    "question_en": "Which function is used to import built-in modules in Node.js (CommonJS)?",
    "question_hi": "Node.js (CommonJS) में बिल्ट-इन मॉड्यूल आयात करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["import()", "require()", "include()", "load()"],
    "options_hi": ["import()", "require()", "include()", "load()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to import modules in ES Modules (ESM)?",
    "question_hi": "ES Modules (ESM) में मॉड्यूल आयात करने के लिए कौन-सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["require", "import", "include", "use"],
    "options_hi": ["require", "import", "include", "use"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "How can you import the 'fs' module in Node.js?",
    "question_hi": "आप Node.js में 'fs' मॉड्यूल को कैसे आयात कर सकते हैं?",
    "options_en": ["import fs from 'fs';", "const fs = require('fs');", "use fs;", "load fs;"],
    "options_hi": ["import fs from 'fs';", "const fs = require('fs');", "use fs;", "load fs;"],
    "answer_en": "const fs = require('fs');",
    "answer_hi": "const fs = require('fs');",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What function is used to export functionalities in Node.js?",
    "question_hi": "Node.js में फंक्शनालिटी को निर्यात करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["exports()", "module.exports", "send()", "return()"],
    "options_hi": ["exports()", "module.exports", "send()", "return()"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which statement imports the 'http' module correctly?",
    "question_hi": "'http' मॉड्यूल को सही ढंग से आयात करने वाला कथन कौन सा है?",
    "options_en": [
      "import http from 'http';",
      "const http = require('http');",
      "use http();",
      "load('http');"
    ],
    "options_hi": [
      "import http from 'http';",
      "const http = require('http');",
      "use http();",
      "load('http');"
    ],
    "answer_en": "const http = require('http');",
    "answer_hi": "const http = require('http');",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method converts an object into JSON string?",
    "question_hi": "कौन-सा मेथड एक ऑब्जेक्ट को JSON स्ट्रिंग में बदलता है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "Object.toJSON()", "JSON.convert()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "Object.toJSON()", "JSON.convert()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method parses a JSON string to an object?",
    "question_hi": "कौन-सा मेथड JSON स्ट्रिंग को ऑब्जेक्ट में बदलता है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.read()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.read()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which module is used to work with file system in Node.js?",
    "question_hi": "Node.js में फ़ाइल सिस्टम के साथ काम करने के लिए कौन-सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["os", "fs", "path", "url"],
    "options_hi": ["os", "fs", "path", "url"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which statement reads a file synchronously using fs module?",
    "question_hi": "fs मॉड्यूल का उपयोग करके किसी फ़ाइल को सिंक्रोनस रूप से पढ़ने वाला कथन कौन सा है?",
    "options_en": [
      "fs.readFileSync('file.txt');",
      "fs.readFile('file.txt');",
      "fs.open('file.txt');",
      "fs.get('file.txt');"
    ],
    "options_hi": [
      "fs.readFileSync('file.txt');",
      "fs.readFile('file.txt');",
      "fs.open('file.txt');",
      "fs.get('file.txt');"
    ],
    "answer_en": "fs.readFileSync('file.txt');",
    "answer_hi": "fs.readFileSync('file.txt');",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which module is used to handle and transform file paths?",
    "question_hi": "फ़ाइल पथों को संभालने और बदलने के लिए कौन-सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["fs", "path", "os", "url"],
    "options_hi": ["fs", "path", "os", "url"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method joins multiple path segments together?",
    "question_hi": "कौन-सा मेथड कई पथ खंडों को एक साथ जोड़ता है?",
    "options_en": ["path.join()", "path.concat()", "path.merge()", "path.link()"],
    "options_hi": ["path.join()", "path.concat()", "path.merge()", "path.link()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which module provides information about the operating system?",
    "question_hi": "कौन-सा मॉड्यूल ऑपरेटिंग सिस्टम के बारे में जानकारी प्रदान करता है?",
    "options_en": ["os", "fs", "system", "http"],
    "options_hi": ["os", "fs", "system", "http"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does the require.main property return?",
    "question_hi": "require.main प्रॉपर्टी क्या लौटाती है?",
    "options_en": ["Main module object", "Path of current file", "Exports object", "Node version"],
    "options_hi": ["मुख्य मॉड्यूल ऑब्जेक्ट", "वर्तमान फ़ाइल का पथ", "एक्सपोर्ट्स ऑब्जेक्ट", "Node संस्करण"],
    "answer_en": "Main module object",
    "answer_hi": "मुख्य मॉड्यूल ऑब्जेक्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which function is used to write to a file asynchronously?",
    "question_hi": "कौन-सा फ़ंक्शन किसी फ़ाइल में असिंक्रोनस रूप से लिखने के लिए उपयोग किया जाता है?",
    "options_en": ["fs.writeFile()", "fs.write()", "fs.save()", "fs.store()"],
    "options_hi": ["fs.writeFile()", "fs.write()", "fs.save()", "fs.store()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to create a server in Node.js?",
    "question_hi": "Node.js में सर्वर बनाने के लिए कौन-सा मेथड उपयोग किया जाता है?",
    "options_en": [
      "http.createServer()",
      "http.makeServer()",
      "server.start()",
      "http.beginServer()"
    ],
    "options_hi": [
      "http.createServer()",
      "http.makeServer()",
      "server.start()",
      "http.beginServer()"
    ],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which module is used to work with events in Node.js?",
    "question_hi": "Node.js में इवेंट्स के साथ काम करने के लिए कौन-सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["events", "fs", "stream", "path"],
    "options_hi": ["events", "fs", "stream", "path"],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which class in 'events' module is used to handle custom events?",
    "question_hi": "'events' मॉड्यूल में कस्टम इवेंट्स को संभालने के लिए कौन-सी क्लास उपयोग होती है?",
    "options_en": ["EventEmitter", "EventHandler", "Emitter", "CustomEvent"],
    "options_hi": ["EventEmitter", "EventHandler", "Emitter", "CustomEvent"],
    "answer_en": "EventEmitter",
    "answer_hi": "EventEmitter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which function is used to get the current working directory?",
    "question_hi": "वर्तमान कार्य निर्देशिका प्राप्त करने के लिए कौन-सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["process.cwd()", "os.cwd()", "fs.dir()", "path.cwd()"],
    "options_hi": ["process.cwd()", "os.cwd()", "fs.dir()", "path.cwd()"],
    "answer_en": "process.cwd()",
    "answer_hi": "process.cwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which module is used to create child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस बनाने के लिए कौन-सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["child_process", "cluster", "process", "thread"],
    "options_hi": ["child_process", "cluster", "process", "thread"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following is a core module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन-सा Node.js में एक कोर मॉड्यूल है?",
    "options_en": ["fs", "axios", "express", "chalk"],
    "options_hi": ["fs", "axios", "express", "chalk"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method removes a file using fs module?",
    "question_hi": "fs मॉड्यूल का उपयोग करके किसी फ़ाइल को हटाने वाला मेथड कौन-सा है?",
    "options_en": ["fs.delete()", "fs.unlink()", "fs.remove()", "fs.clear()"],
    "options_hi": ["fs.delete()", "fs.unlink()", "fs.remove()", "fs.clear()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method checks if a file exists synchronously?",
    "question_hi": "कौन-सा मेथड यह जांचता है कि कोई फ़ाइल सिंक्रोनस रूप से मौजूद है या नहीं?",
    "options_en": ["fs.existsSync()", "fs.findFile()", "fs.check()", "fs.locate()"],
    "options_hi": ["fs.existsSync()", "fs.findFile()", "fs.check()", "fs.locate()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which module handles URL parsing in Node.js?",
    "question_hi": "Node.js में URL पार्सिंग को कौन-सा मॉड्यूल संभालता है?",
    "options_en": ["url", "path", "fs", "http"],
    "options_hi": ["url", "path", "fs", "http"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which property returns the directory name of the current module?",
    "question_hi": "कौन-सी प्रॉपर्टी वर्तमान मॉड्यूल की डायरेक्टरी का नाम लौटाती है?",
    "options_en": ["__dirname", "__filename", "module.dir", "path.dirname"],
    "options_hi": ["__dirname", "__filename", "module.dir", "path.dirname"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which property returns the file name of the current module?",
    "question_hi": "कौन-सी प्रॉपर्टी वर्तमान मॉड्यूल की फ़ाइल का नाम लौटाती है?",
    "options_en": ["__filename", "__dirname", "module.name", "path.file"],
    "options_hi": ["__filename", "__dirname", "module.name", "path.file"],
    "answer_en": "__filename",
    "answer_hi": "__filename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method ends a response in HTTP server?",
    "question_hi": "HTTP सर्वर में कौन-सा मेथड प्रतिक्रिया को समाप्त करता है?",
    "options_en": ["res.close()", "res.end()", "res.finish()", "res.stop()"],
    "options_hi": ["res.close()", "res.end()", "res.finish()", "res.stop()"],
    "answer_en": "res.end()",
    "answer_hi": "res.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to load JSON configuration files?",
    "question_hi": "JSON कॉन्फ़िगरेशन फ़ाइलें लोड करने के लिए कौन-सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["require()", "import()", "fs.read()", "json.load()"],
    "options_hi": ["require()", "import()", "fs.read()", "json.load()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which module is used for creating and handling streams?",
    "question_hi": "स्ट्रीम बनाने और संभालने के लिए कौन-सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["stream", "fs", "data", "buffer"],
    "options_hi": ["stream", "fs", "data", "buffer"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which object represents the global scope in Node.js?",
    "question_hi": "Node.js में ग्लोबल स्कोप का प्रतिनिधित्व करने वाला ऑब्जेक्ट कौन-सा है?",
    "options_en": ["window", "global", "this", "module"],
    "options_hi": ["window", "global", "this", "module"],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which file defines all dependencies in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में सभी डिपेंडेंसी को परिभाषित करने वाली फ़ाइल कौन-सी है?",
    "options_en": ["package.json", "index.js", "node.json", "modules.json"],
    "options_hi": ["package.json", "index.js", "node.json", "modules.json"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
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

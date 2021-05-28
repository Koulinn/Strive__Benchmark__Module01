const questionsBank = { "response_code": 0, "results": [{ "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "When Gmail first launched, how much storage did it provide for your email?", "correct_answer": "1GB", "incorrect_answers": ["512MB", "5GB", "Unlimited"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What does the Prt Sc button do?", "correct_answer": "Captures what&#039;s on the screen and copies it to your clipboard", "incorrect_answers": ["Nothing", "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos", "Closes all windows"] }, { "category": "Science: Computers", "type": "boolean", "difficulty": "easy", "question": "Pointers were not used in the original C programming language; they were added later on in C++.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Science: Computers", "type": "boolean", "difficulty": "easy", "question": "Ada Lovelace is often considered the first computer programmer.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Science: Computers", "type": "boolean", "difficulty": "easy", "question": "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Science: Computers", "type": "boolean", "difficulty": "easy", "question": "The Windows ME operating system was released in the year 2000.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "The numbering system with a radix of 16 is more commonly referred to as ", "correct_answer": "Hexidecimal", "incorrect_answers": ["Binary", "Duodecimal", "Octal"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "The C programming language was created by this American computer scientist. ", "correct_answer": "Dennis Ritchie", "incorrect_answers": ["Tim Berners Lee", "al-Khw\u0101rizm\u012b", "Willis Ware"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "How long is an IPv6 address?", "correct_answer": "128 bits", "incorrect_answers": ["32 bits", "64 bits", "128 bytes"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What does the computer software acronym JVM stand for?", "correct_answer": "Java Virtual Machine", "incorrect_answers": ["Java Vendor Machine", "Java Visual Machine", "Just Virtual Machine"] }] }
const questionContainer = document.getElementById('questions-container')
let currentQuestion = 0
let Allquestions



const dataAJAX = fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy`)
.then(dataGot => dataGot.json())

window.onload =  async () => {
    const data = await dataAJAX
    Allquestions = data.results
    createHTMLForEachQuestion(Allquestions)
}
function createHTMLForEachQuestion(questions) {
    
    if (currentQuestion < questions.length) {
        
        
        if (questions[currentQuestion].type === 'boolean') {
            questionContainer.insertAdjacentHTML('beforeend', `
            <div class='question boolean'>
            <h3>Question ${currentQuestion + 1} -> ${questions[currentQuestion].question}</h3>
            <div class="form-container">
            <form id="form${currentQuestion}" onclick="createHTMLForEachQuestion(Allquestions)">
            <input type="radio" class="cor" name="question${currentQuestion}" value="1">
            <label for="true">${questions[currentQuestion].correct_answer}</label>
            
            <input type="radio" class="inc" name="question${currentQuestion}" value="0">  
            <label for="false">${questions[currentQuestion].incorrect_answers[0]}</label>
            </form>
            </div>    
            </div>`)
        }
        if (questions[currentQuestion].type === 'multiple') {
            questionContainer.insertAdjacentHTML('beforeend', `
            <div class='question multiple'>
            <h3>Question ${currentQuestion + 1} -> ${questions[currentQuestion].question}</h3>
            <div class="form-container" onclick="createHTMLForEachQuestion(Allquestions)">
            <form id="form${currentQuestion + 1}">
            <input type="radio" class="inc" name="question${currentQuestion}" value="0">
            <label for="inc0"> ${questions[currentQuestion].incorrect_answers[0]}</label>
            
            <input type="radio" class="cor" name="question${currentQuestion}" value="1">
            <label for="cor"> ${questions[currentQuestion].correct_answer}</label>
            
            <input type="radio" class="inc" name="question${currentQuestion}" value="0">
            <label for="inc1"> ${questions[currentQuestion].incorrect_answers[1]}</label>
            
            <input type="radio" class="inc" name="question${currentQuestion}" value="0">
            <label for="inc2"> ${questions[currentQuestion].incorrect_answers[2]}</label>
            </form>
            </div>
            
            </div>
            `)
        }
        currentQuestion++
        
    }
    
}
    
    function checkPoints() {
        let allInputs = document.getElementsByTagName('input')
        let points = 0
        for (let input of allInputs) {
        if (input.checked && (input.value === '1')) {
            points++
            input.nextElementSibling.classList.add('correct-answer')
            input.nextElementSibling.insertAdjacentHTML('beforeend', `<strong> Well done! </strong>`)
        }
        if (input.checked && (input.value === '0')) {
            input.nextElementSibling.classList.add('wrong-answer')
            input.nextElementSibling.insertAdjacentHTML('beforeend', `<strong> Woops! Not this time! </strong>`)
        }
    }
    return points
}


let flag = 0
function showTotalPoints() {
    if(flag === 0) {
        flag++
        let totalPoints = checkPoints()
        let mainHTML = document.getElementsByTagName('main')[0]
        
        if (document.getElementById('show-result') === null) {
            mainHTML.insertAdjacentHTML('afterbegin', `
            <div id="show-result"><h2> You got ${totalPoints} from 10</h2></div>
            `)
        } else {
            let showResultDiv = document.getElementById('show-result')
            console.log()
            showResultDiv.innerHTML = `<h2> You got ${totalPoints} from 10</h2>`
        }
    }
}



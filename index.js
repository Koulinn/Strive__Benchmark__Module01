const questionsBank = { "response_code": 0, "results": [{ "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "When Gmail first launched, how much storage did it provide for your email?", "correct_answer": "1GB", "incorrect_answers": ["512MB", "5GB", "Unlimited"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What does the Prt Sc button do?", "correct_answer": "Captures what&#039;s on the screen and copies it to your clipboard", "incorrect_answers": ["Nothing", "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos", "Closes all windows"] }, { "category": "Science: Computers", "type": "boolean", "difficulty": "easy", "question": "Pointers were not used in the original C programming language; they were added later on in C++.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Science: Computers", "type": "boolean", "difficulty": "easy", "question": "Ada Lovelace is often considered the first computer programmer.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Science: Computers", "type": "boolean", "difficulty": "easy", "question": "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Science: Computers", "type": "boolean", "difficulty": "easy", "question": "The Windows ME operating system was released in the year 2000.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "The numbering system with a radix of 16 is more commonly referred to as ", "correct_answer": "Hexidecimal", "incorrect_answers": ["Binary", "Duodecimal", "Octal"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "The C programming language was created by this American computer scientist. ", "correct_answer": "Dennis Ritchie", "incorrect_answers": ["Tim Berners Lee", "al-Khw\u0101rizm\u012b", "Willis Ware"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "How long is an IPv6 address?", "correct_answer": "128 bits", "incorrect_answers": ["32 bits", "64 bits", "128 bytes"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What does the computer software acronym JVM stand for?", "correct_answer": "Java Virtual Machine", "incorrect_answers": ["Java Vendor Machine", "Java Visual Machine", "Just Virtual Machine"] }] }
const Allquestions = questionsBank.results
const questionContainer = document.getElementById('questions-container')

window.onload = () => {

    createHTMLForEachQuestion(Allquestions)

}















function createHTMLForEachQuestion(questions) {

    for (question of questions) {
        let indexOfEachQuestion = questions.indexOf(question)

        if (question.type === 'boolean') {
            questionContainer.insertAdjacentHTML('beforeend', `
            <div class='question boolean'>
                <h3>Question -> ${question.question}</h3>
                <div class="form">
                    
                        <input type="radio" class="cor" name="question${indexOfEachQuestion}" value="1">
                        <label for="true">${question.correct_answer}</label>

                        <input type="radio" class="inc" name="question${indexOfEachQuestion}" value="0">  
                        <label for="false">${question.incorrect_answers[0]}</label>
                    
                </div>    
            </div>`)


        }

        if (question.type === 'multiple') {
            questionContainer.insertAdjacentHTML('beforeend', `
            <div class='question multiple'>
            <h3>Question -> ${question.question}</h3>
                <div class"form">
                    
                        <input type="radio" class="inc" name="question${indexOfEachQuestion}" value="0">
                        <label for="inc0"> ${question.incorrect_answers[0]}</label>
                        
                        <input type="radio" class="cor" name="question${indexOfEachQuestion}" value="1">
                        <label for="cor"> ${question.correct_answer}</label>
                        
                        <input type="radio" class="inc" name="question${indexOfEachQuestion}" value="0">
                        <label for="inc1"> ${question.incorrect_answers[1]}</label>
                        
                        <input type="radio" class="inc" name="question${indexOfEachQuestion}" value="0">
                        <label for="inc2"> ${question.incorrect_answers[2]}</label>
                    
                </div>
            
            </div>
            `)

        }
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


function showTotalPoints() {
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





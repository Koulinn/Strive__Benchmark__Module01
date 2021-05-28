const questionsBank = {"response_code":0,"results":[{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"When Gmail first launched, how much storage did it provide for your email?","correct_answer":"1GB","incorrect_answers":["512MB","5GB","Unlimited"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What does the Prt Sc button do?","correct_answer":"Captures what&#039;s on the screen and copies it to your clipboard","incorrect_answers":["Nothing","Saves a .png file of what&#039;s on the screen in your screenshots folder in photos","Closes all windows"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"Pointers were not used in the original C programming language; they were added later on in C++.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"Ada Lovelace is often considered the first computer programmer.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"The Windows ME operating system was released in the year 2000.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The numbering system with a radix of 16 is more commonly referred to as ","correct_answer":"Hexidecimal","incorrect_answers":["Binary","Duodecimal","Octal"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The C programming language was created by this American computer scientist. ","correct_answer":"Dennis Ritchie","incorrect_answers":["Tim Berners Lee","al-Khw\u0101rizm\u012b","Willis Ware"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"How long is an IPv6 address?","correct_answer":"128 bits","incorrect_answers":["32 bits","64 bits","128 bytes"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What does the computer software acronym JVM stand for?","correct_answer":"Java Virtual Machine","incorrect_answers":["Java Vendor Machine","Java Visual Machine","Just Virtual Machine"]}]}
const Allquestions = questionsBank.results
const questionContainer = document.getElementById('questions-container')
// number 1 Question....
// Form checkbox
// alt 1
// alt 2
// alt 3
// alt 4
// input show result

// number 2 question
// form radio
// alt 1
// alt 2
// alt 3
// alt 4
// input show result





window.onload = () => {
    


}













// function selectEachDivWithClassQuestion(){
//     let getQuestionsContainers = document.getElementsByClassName('question')
//     return getQuestionsContainers
// }

// let listOfDivSpacesForEachQuestion = selectEachDivWithClassQuestion()

function createHTMLForEachQuestion(questions) {
    
    
    for(question of questions){
        
        
        if(question.type === 'boolean'){
            questionContainer.insertAdjacentHTML('beforeend', `
            <div class='question boolean'>
                <h3>Question -> ${question.question}</h3>
                <div class="form">
                    <form>
                        <input type="radio" class= "true" value="1">
                        <label for="true">${question.correct_answer}</label>

                        <input type="radio" class="false" name="false" value="0">  
                        <label for="false">${question.incorrect_answers[0]}</label>
                    </form>
                </div>    
            </div>`)

           
        }
        
        if(question.type === 'multiple') {
            questionContainer.insertAdjacentHTML('beforeend', `
            <div class='question multiple'>
            <h3>Question -> ${question.question}</h3>
                <div class"form">
                    <form>
                        <input type="checkbox" class="inc0" name="inc0" value="0">
                        <label for="inc0"> ${question.incorrect_answers[0]}</label><br>
                        
                        <input type="checkbox" class="cor" name="cor" value="1">
                        <label for="cor"> ${question.correct_answer}</label><br>
                        
                        <input type="checkbox" class="inc1" name="inc1" value="0">
                        <label for="inc1"> ${question.incorrect_answers[1]}</label><br>
                        
                        <input type="checkbox" class="inc2" name="inc2" value="0">
                        <label for="inc2"> ${question.incorrect_answers[2]}</label><br>
                    </form>
                </div>
            
            </div>`)
           
        }
    }

}

createHTMLForEachQuestion(Allquestions)
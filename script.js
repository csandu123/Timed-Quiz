const quizData = [
    {
        question: "Who invented Javascript?",
        a: "Bill Gates",
        b: "Paul Walker",
        c: "Reese Whitherspoon    ",
        d: "Brendan Eich",
        correct: "d",
        wrong: "a b c",
    },
    {
        question: "What is used to define true or false?",
        a: "String",
        b: "Boolean",
        c: "Array",
        d: "Variable",
        correct: "b",
        wrong: "a c d",
    },
    {
        question: "How do you define a string?",
        a: "Quotations",
        b: "Brackets",
        c: "Parentheses",
        d: "Forward Slashes",
        correct: "a",
        wrong: "b c d",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
        wrong: "a c d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}


const countdown = document.getElementById('countdown')
const startMinutes = 2;
let time = startMinutes * 60;

function updateTime() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdown.innerHTML = `${minutes} : ${seconds}`;
    time--;
    if (seconds < 0) {
        alert("Time is up!")
    }
}

setInterval(updateTime, 1000);

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       } 

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly with ${minutes}: ${seconds} left</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
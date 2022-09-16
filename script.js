const startBtnDiv = document.getElementById("start-btn-div")
const startBtn = document.getElementById("start-btn")
const ruleDiv = document.getElementById("rules-div")
const agreeBtn = document.getElementById("agree-btn")
const quizDiv = document.getElementById("quiz-div")
let options = document.querySelectorAll(".option-btn")
let questionElement = document.getElementById("question")
let shuffledQuestion, currentQuestionIndex




startBtn.addEventListener("click", ()=>{
    startBtn.classList.add("hide")
    startBtnDiv.classList.add("hide")
    ruleDiv.classList.remove("hide")
})

 agreeBtn.addEventListener("click", ()=>{
    ruleDiv.classList.add("hide")
    quizDiv.classList.remove("hide")
    shuffledQuestion = questions.sort(()=> Math.random() - 0.5);
    currentQuestionIndex = 0;
    setQuestion()
})

const setQuestion = () =>{
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

const showQuestion = (param) =>{
    questionElement.innerText = param.question
}










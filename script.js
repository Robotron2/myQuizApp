const startBtnDiv = document.getElementById("start-btn-div")
const startBtn = document.getElementById("start-btn")
const ruleDiv = document.getElementById("rules-div")
const agreeBtn = document.getElementById("agree-btn")
const quizDiv = document.getElementById("quiz-div")
let optionBtnGroup = document.querySelectorAll(".option-btn")
let questionElement = document.getElementById("question")
let optionOne = document.getElementById("option-one")
let optionTwo = document.getElementById("option-two")
let optionThree = document.getElementById("option-three")
let optionFour = document.getElementById("option-four")
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
    if (currentQuestionIndex < questions.length) {
        showQuestion(shuffledQuestion[currentQuestionIndex])
    }
    else{
        console.log("No more questions")
    }
}

const showQuestion = (param) =>{
    questionElement.innerText = param.question

    optionOne.innerHTML = param.answers[0].ans 

    optionTwo.innerHTML = param.answers[1].ans
    
    optionThree.innerHTML = param.answers[2].ans
    
    optionFour.innerHTML = param.answers[3].ans
    
}



for (let option = 0; option < optionBtnGroup.length; option++) {

    optionBtnGroup[option].addEventListener("click", ()=>{        
        
        currentQuestionIndex++
        
        console.log(currentQuestionIndex)
        
        setQuestion()
    })
}





// const selectOption = () =>{}


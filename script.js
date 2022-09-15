const startBtnDiv = document.getElementById("start-btn-div")
const startBtn = document.getElementById("start-btn")
const ruleDiv = document.getElementById("rules-div")
const agreeBtn = document.getElementById("agree-btn")
const quizDiv = document.getElementById("quiz-div")
let options = document.querySelectorAll(".option-btn")

startBtn.addEventListener("click", ()=>{
    startBtn.classList.add("hide")
    startBtnDiv.classList.add("hide")
    ruleDiv.classList.remove("hide")
})

 agreeBtn.addEventListener("click", ()=>{
    ruleDiv.classList.add("hide")
    quizDiv.classList.remove("hide")
 })




for (let option = 0; option < options.length; option++) {
        options[option].addEventListener("click", function(){
        let optionInnerHtml = this.innerHTML
        showBtn(optionInnerHtml)
    })
        
        
    }

 const selectAns = () =>{
    

 }

 const showBtn = (param) =>{
    console.log(param)
}



// const displayQuestions = (que) =>{
//     questionElement.innerText = que.question
//     let answerArray = que.answers
//     answerArray.forEach(answer =>{
//         const button = document.createElement("button")
//         button.innerText = answer.text
//         button.classList.add("btn")
//         if (answer.correct) {
//         button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerContainer.appendChild(button)
//     });
    
    
// }
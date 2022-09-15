const startBtnDiv = document.getElementById("start-btn-div")
const startBtn = document.getElementById("start-btn")
const ruleDiv = document.getElementById("rules-div")
const agreeBtn = document.getElementById("agree-btn")
const quizDiv = document.getElementById("quiz-div")

startBtn.addEventListener("click", ()=>{
    startBtn.classList.add("hide")
    ruleDiv.classList.remove("hide")
})
 agreeBtn.addEventListener("click", ()=>{
    ruleDiv.classList.add("hide")
    quizDiv.classList.remove("hide")
 })

//  const selectAns = () =>{
//     let options = document.querySelectorAll("option")
    
//  }
let options = document.querySelectorAll("option-btn")
(options.forEach(()=>{
    console.log(option)
}))


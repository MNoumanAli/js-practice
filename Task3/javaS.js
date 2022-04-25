let credit = document.querySelector("#credit")
let grade = document.querySelector("#grade")
let btn = document.querySelector("#cal_btn")
let result = document.querySelector("#result")

btn.addEventListener("click", function(){
    let creditH = credit.value
    let tGrade = grade.value
    tGrade = tGrade/creditH
    if(creditH.length != 0 && tGrade.length != 0)
    {
        result.innerHTML =  tGrade.toFixed(2)
    }

})

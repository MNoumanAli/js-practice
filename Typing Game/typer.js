let startTime = 30
let score = 0
let timePut = document.getElementById('time')
let wordPut = document.getElementById('word')
let scoreIs = document.getElementById('score')
let userInput = document.getElementById('userInput')
let warn = document.getElementById('warn')

let wordsAre = ["bad","easy","lol","Hurt","gay","code","hate","kill",
                "ice","fire","icecream","hangman","destroy","computer","book",
                "dictionary","technology","power","thunder","controller","dexterity","keyboard","thunderous",
                "blizzard","hazardous","algorithm","destruction","operation","assignment","despicable"]
let randomWord = 'typing'

wordPut.innerHTML = "<b><p>" + randomWord + '</b></p>'
var myTimer = setInterval(function(){
    warn.textContent = ''
    timePut.textContent = startTime + 's'
    --startTime
    const enterW = userInput.value
    if(enterW === randomWord)
    {
        updateValue()
        scoreIs.textContent = score
    }
    if(startTime < 0)
    {
        warn.textContent = 'Time Out' 
        updateValue()
    }

}, 1000)

function updateValue()
{
    randomWord = wordsAre[Math.floor(Math.random() * wordsAre.length)]
    wordPut.innerHTML = "<b><p>" + randomWord + '</b></p>'
    ++score
    userInput.value = null
    startTime = 30
}
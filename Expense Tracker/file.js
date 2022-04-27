
const amountIs = document.querySelector(".amount")
const text = document.querySelector(".text")


let transHistory = []
function addTransaction()
{
    const amountIs = document.querySelector(".amount").value
    const textIs = document.querySelector(".text").value
    if(amountIs.length == 0 || textIs.length == 0)
    {
        alert("Please Add Amount and Text.")
    }
    else
    {
        const transaction = {
            text: textIs,
            amount: +amountIs
        }
        updateValue(transaction)
        addHistory()
    }
    
}

                 /* -------------------------------------- */

function updateValue(transaction)
{
    const amountIs = document.querySelector(".amount").value
    transHistory.push(transaction)
    let latestAmount = transHistory.map(temp => temp.amount)

    let balance = 0
    let income = 0
    let expense = 0
    for(let i= 0; i < latestAmount.length; ++i)
    {
        if(latestAmount[i] < 0)
        {
            expense +=  latestAmount[i]
        }
        balance += latestAmount[i]
    }
    expense = Math.abs(expense)
    income = balance + expense

    if(amountIs < 0)
    {
        if(balance < 0)
        {
            alert("!!!Zero Balance Error!!!!")
        }
        else
        {
            document.querySelector("#exp").innerHTML = "$" + expense
            document.querySelector(".cur-bal").innerHTML = "<b>$" + balance+ "</b>"
        }
    }
    else
    {
        document.querySelector(".cur-bal").innerHTML = "<b>$" + balance + "</b>"
        document.querySelector("#inc").innerHTML = "$" + income
    }
}

            /* -------------------------------------- */

function addHistory()
{
    let list = document.getElementById("item")
    let item = document.createElement("li")
    for(let i = 0; i < transHistory.length; ++i)
    {
        item.innerHTML = "<b>Purpose</b>: " + transHistory[i].text + " <b>Amount</b>: " + transHistory[i].amount
        list.appendChild(item)
    }
}

            /* -------------------------------------- */

function showHistory()
{
    let item = document.getElementById("item")
    if(item.style.display == "block")
    {
        item.style.display = "none"
    }
    else
    {
        item.style.display = "block"
    }
}
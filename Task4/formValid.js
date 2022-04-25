
let psswd = document.getElementById("psswd")
let cpsswd = document.getElementById("cpsswd")
let email = document.getElementById("email")

function checkForm(){
    if(psswd.value.length == 0 || cpsswd.value.length == 0 || email.value.length == 0)
    {
        checkRequired();
    }
    else
    {
        checkEmail();
        checkPasswordMatch();
    }
}

function checkRequired(){
    if(psswd.value.length == 0 || cpsswd.value.length == 0)
    {
        document.getElementById("inValP").innerHTML = "<small>!! Password is Required !!</small><br>"
    }
    if(email.value.length == 0)
    {
        document.getElementById("inEmail").innerHTML = "<small>!! Email is Required !!</small><br>"
    }
}

function checkEmail()
{
    let pattern = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
    let emailIs = email.value
    if(!pattern.test(emailIs))
    {
        document.getElementById("inEmail").innerHTML = "<small>Invalid Email</small><br>"
    }
}


function checkPasswordMatch(){
    if(psswd != cpsswd)
    {
        document.getElementById("inValP").innerHTML = "<small>Password Don't Match</small><br>"
    }
}
let inputVal = document.querySelector("#input")
let btn = document.querySelector("#btn_time")

function convertTime(){
    let givenTime = inputVal.value
    if (givenTime.length != 0)
    {   
        let [timeIs, temp] = givenTime.split(" ")

        let [hours, minuts, seconds] = timeIs.split("-")

        if(temp == "AM" && hours == "12")
        {
            hours = "00"
        }
        else if(temp == "PM" && parseInt(hours,10) < 12)
        {
            hours = (parseInt(hours,10) + 12)
        }

        document.getElementById("result").innerText = hours+"-"+minuts+"-"+seconds
    }
}
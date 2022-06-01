var times = document.getElementsByClassName('time')
var saveBtns = document.querySelectorAll("button")
var todaysDate = moment().format("MMMM Do, YYYY");
$("#currentDay").text("Today is " + todaysDate);



//Get the current day in a nice format and 
var currenTime= moment().hours()
console.log(currenTime)

// function checkIfPast(){
// for(i = 0; i < times.length; i++){
//     if(currenTime > times[i].innerHTML){
//         console.log(times[i].nextElementSibling)
//         times[i].nextElementSibling.classList.add("present")
//     } 
        
//     }
// } 

// function checkIfFuture(){
  
// }

function saveTask(e){
    var hour = this.getAttribute("data-hour")
    var useentry = this.previousElementSibling.value
    // console.log(this,hour,useentry)
    localStorage.setItem(hour,useentry)
}

saveBtns.forEach(btn => btn.addEventListener("click",saveTask))

saveBtns.forEach(btn => {
    var hour = btn.getAttribute("data-hour")
    var storedData = localStorage.getItem(hour) || ""
    btn.previousElementSibling.value = storedData
    if(currenTime > hour){
        
        btn.previousElementSibling.className = "past"
    } else if (currenTime == hour){
        btn.previousElementSibling.className = "present"
    } else{
        btn.previousElementSibling.className = "future"
    }
    console.log(hour,"GET",storedData)

})

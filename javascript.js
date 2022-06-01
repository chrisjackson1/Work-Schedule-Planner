var times = document.getElementsByClassName('time')
var saveBtns = document.querySelectorAll("button")
var todaysDate = moment().format("MMMM Do, YYYY");
$("#currentDay").text("Today is " + todaysDate);



//Get the current day in a nice format and 
var currenTime= moment().format("LT");
console.log(currenTime)

function checkIfPast(){
for(i = 0; i < times.length; i++){
    if(currenTime > times[i].innerHTML){
        console.log(times[i].nextElementSibling)
        times[i].nextElementSibling.classList.add("past")
    } 
        
    }
} 

function checkIfFuture(){
    
}

function saveTask(e){
    var hour = this.getAttribute("data-hour")
    var useentry = this.previousElementSibling.value
    console.log(this,hour,useentry)
    localStorage.setItem(hour,useentry)
}

saveBtns.forEach(btn => btn.addEventListener("click",saveTask))



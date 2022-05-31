var times = document.getElementsByClassName('time')
var buttons = document.getElementsByClassName('buttons')
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
    buttons.addEventListener("click", saveTask)

}





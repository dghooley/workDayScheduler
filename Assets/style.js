$(document).ready(function() {
// console.log("were connected")

let date = document.querySelector("#current-day");
$("#currentDay").text(moment().format('LLLL'))
moment().hour(Number);

// add click event to save button
$(".saveBtn").on("click", function() {
    // userText is getting the value of each textArea's input.
    var userText=$(this).siblings(".userInput").val()
    // userTime referencing the parent div's id 
    var userTime=$(this).parent().attr("id")
    // setting userTime as the key and userText as the value to localstorage
    localStorage.setItem(userTime, userText)
});

// set up function that tests the block hour (.time-block) and if/else it against the  current world time (moment.js)
function currentHour() {
    let currentTime=moment().hour();
    // console.log(currentTime);

// begin loop 
$(".time-block").each(function () {
    let hourBlock=parseInt($(this).attr("id").split("-")[1]);  
    // console.log(hourBlock);

// if/else statements looping through a series of adding and removing classes based upon values
    if (hourBlock < currentTime) {
        $(this).addClass("past");
        // console.log("past");
    } 
    // set present time
    else if (hourBlock === currentTime) {
        $(this).removeClass("past");
        // $(this).removeClass("future");
        $(this).addClass("present");
        // console.log("present");
    }
    // set future time
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log("future");
    }
});
}
// call 
currentHour()
// commit to local storage
$("#hour-9 .userInput").val(localStorage.getItem("hour-9"));
$("#hour-10 .userInput").val(localStorage.getItem("hour-10"));
$("#hour-11 .userInput").val(localStorage.getItem("hour-11"));
$("#hour-12 .userInput").val(localStorage.getItem("hour-12"));
$("#hour-13 .userInput").val(localStorage.getItem("hour-13"));
$("#hour-14 .userInput").val(localStorage.getItem("hour-14"));
$("#hour-15 .userInput").val(localStorage.getItem("hour-15"));
$("#hour-16 .userInput").val(localStorage.getItem("hour-16"));
$("#hour-17 .userInput").val(localStorage.getItem("hour-17"));
});   

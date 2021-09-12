$(document).ready(function() {
// console.log("were connected")
let date = document.querySelector("#current-day");
$(currentDay).text(moment().format('LLLL'))
moment().hour(Number);
// add click event to save button
$(".saveBtn").on("click", function() {
    // userText is getting the value of each textArea's input.
    var userText = $(this).siblings(".userInput").val()
    // userTime referencing the parent divs id example id="hour-9"
    var userTime = $(this).parent().attr("id")
    // setting userTime as the key and userText as the value to localstorage
    localStorage.setItem(userTime, userText)
});

// set up function that tests the block hour (.time-block) and if/else it against the  current world time (moment.js)
function currentHour() {
    let currentTime = moment().hour();
$(".time-block").each(function () {
let hourBlock = parseInt($(this).parents('.row').find('.hour').attr("id"));    

// if/else statements looping through a series of adding and removing classes based upon values
//  JavaScript set time and display
/*  var hour9 = 9;
    var hour10 = 10;
    var hour11 = 11;
    var hour12 = 12;
    var hour13 = 13;
    var hour14 = 14;
    var hour15 = 15;
    var hour16 = 16;
    var hour17 = 17;
9 AM
    if (currentTime < hour9) {
        $("#hour-9").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-9").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-9").addClass("present")
    }
10 AM
    if (currentTime < hour9) {
        $("#hour-10").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-10").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-10").addClass("present")
    }
11 AM
    if (currentTime < hour9) {
        $("#hour-11").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-11").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-11").addClass("present")
    }
12 AM
    if (currentTime < hour9) {
        $("#hour-12").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-12").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-12").addClass("present")
    }
1 PM
    if (currentTime < hour9) {
        $("#hour-13").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-13").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-13").addClass("present")
    }
2 PM
    if (currentTime < hour9) {
        $("#hour-14").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-14").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-14").addClass("present")
    }
3 PM
    if (currentTime < hour9) {
        $("#hour-15").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-15").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-15").addClass("present")
    }
4 PM
    if (currentTime < hour9) {
        $("#hour-16").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-16").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-16").addClass("present")
    }
5 PM
    if (currentTime < hour9) {
        $("#hour-17").addClass("future");
    }
    else if (currentTime > hour9) {
        $("#hour-17").addClass("past");
    }
    else if (currentTime === hour9) {
        $("#hour-17").addClass("present")
    }
*/

    if (hourBlock < currentTime) {
        /*$(this).parents(".row").find(".time-block").addClass("past")
        $(this).parents(".row").find(".time-block").removeClass("present")
        $(this).parents(".row").find(".time-block").removeClass("future")*/
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } 
    // set present time
    else if (hourBlock === currentTime) {
        /*$(this).parents(".row").find(".time-block").addClass("present")
        $(this).parents(".row").find(".time-block").removeClass("past")
        $(this).parents(".row").find(".time-block").removeClass("future")*/
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    // set future time
    else {
        /*$(this).parents(".row").find(".time-block").addClass("future")
        $(this).parents(".row").find(".time-block").removeClass("present")
        $(this).parents(".row").find(".time-block").removeClass("past")*/
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
}
// retrieve data from local storage
/*$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-9"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-10"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-11"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-12"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-13"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-14"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-15"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-16"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem("hour-17"));*/
$(".userInput .description").val(localStorage.getItem("#hour-9"));
$(".userInput .description").val(localStorage.getItem("#hour-10"));
$(".userInput .description").val(localStorage.getItem("#hour-11"));
$(".userInput .description").val(localStorage.getItem("#hour-12"));
$(".userInput .description").val(localStorage.getItem("#hour-13"));
$(".userInput .description").val(localStorage.getItem("#hour-14"));
$(".userInput .description").val(localStorage.getItem("#hour-15"));
$(".userInput .description").val(localStorage.getItem("#hour-16"));
$(".userInput .description").val(localStorage.getItem("#hour-17"));
// call function
currentHour()
});   

/* javaScript loop
for (var i = 0; i < 9; i++) {
    if (currentTime === militaryTime[i]) {
    console.log(i);
    document.getElementById(i).classList.add("present");
    }
    if (currentTime > militaryTime[i]) {
    console.log(i);
    document.getElementById(i).classList.add("past");
    }
    if (currentTime < militaryTime[i]) {
    console.log(i);
    document.getElementById(i).classList.add("future");
    }

    if(localStorage.getItem(i)) {
        document.getElementById(i).value = localStorage.getItem(i);
    }
    saveBtn[i].addEventListener("click", function(){
        var id= this.getAtribute("data-id");
        var text = document.getElementById(id).value;
        localStorage.setItem(id, text);
        })
}
*/
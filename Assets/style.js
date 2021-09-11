
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
function currentWorldTime () {
    let currentTime = moment().hour();
$(".time-block").each(function () {
let hourBlock = parseInt($(this).parents('.row').find('.hour').attr("id"));    
// if/else statements looping therough a series of adding and removing classes based upon values
    // set past time
    if (hourBlock < currentTime) {
        $(this).parents(".row").find(".time-block").addClass("past")
        $(this).parents(".row").find(".time-block").removeClass("present")
        $(this).parents(".row").find(".time-block").removeClass("future")
    } 
    // set present time
    else if (hourBlock === currentTime) {
        $(this).parents(".row").find(".time-block").addClass("present")
        $(this).parents(".row").find(".time-block").removeClass("past")
        $(this).parents(".row").find(".time-block").removeClass("future")
    }
    // set future time
    else {
        $(this).parents(".row").find(".time-block").addClass("future")
        $(this).parents(".row").find(".time-block").removeClass("present")
        $(this).parents(".row").find(".time-block").removeClass("past")
    }
});
}
// retrieve data from local storage
$(this).parents(".row").find(".time-block").val(localStorage.getItem(timeBlock));
// call function
currentWorldTime()
});   

/* javaScript Block
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
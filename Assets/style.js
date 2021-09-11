
$(document).ready(function() {
// console.log("were connected")

// set up function that tests the block hour (.time-block) and if/else it against the  current world time (moment.js)
let date = document.querySelector("#current-day");
$(currentDay).text(moment().format('LLLL'))
moment().hour(Number);
let currentTime = moment().hour();

$(".time-block").each(function () {
let hourBlock = parseInt($(this).parents('.row').find('.hour').attr("id"));
$(this).parents(".row").find(".time-block").val(localStorage.getItem(hourBlock));
    // if/else statements adding a series of adding and removing classes based upon values.
    if (hourBlock < currentTime) {
        $(this).parents(".row").find(".time-block").addClass("past")
    }
    else if (hourBlock === currentTime) {
        $(this).removeClass("past")
        $(this).addClass("present")
    }
    else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }
});
// add click event to save button
$(".saveBtn").on("click", function() {
    // userText is getting the value of each textArea's input.
    var userText = $(this).siblings(".userInput").val()
    // userTime referencing the parent divs id example id="hour-9"
    var userTime = $(this).parent().attr("id")
    // setting userTime as the key and userText as the value to localstorage
    localStorage.setItem(userTime, userText)
    // reference the class of the notification div and .addClass of "show" 
    // setTimeOut function for notification div to disappear(.removeClass) after 5 seconds
});
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


// to reference each time block and loop through it look up .each method for jQuery
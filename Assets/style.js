$(document).ready(function() {

console.log("were connected")

    $(".saveBtn").on("click", function() {
        // userText is getting the value of each textArea's input. "this" references each indivudual one youre working in. siblings() references all the siblings whiithin your parent div with class of .userInput
        var userText = $(this).siblings(".userInput").val()
        // userTime referencing the parent divs id example id="hour-9"
        var userTime = $(this).parent().attr("id")
        // setting userTime as the key and userText as the value to localstorage
        localStorage.setItem(userTime, userText)


        // reference the class of the notification div and .addClass of "show" 

        // setTimeOut function for notification div to disappear(.removeClass) after 5 seconds


})

// set up function that tests the block hour (.time-block) and if/else it against the  current world time (moment.js)
// if/else statements will be a series of adding and removing classes based upon values.

// to reference each time block and loop through it look up .each method for jQuery

function tellTime(){
    var currentTime = moment().hours();



}















    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //$(currentDay).text(moment().format('LLLL'));



})


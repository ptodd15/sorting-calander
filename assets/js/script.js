//display current date and time using moment.ja
//$ shorthand in use
$("#currentDay").text(moment().format("LLLL"));
    
//defined each calander block in local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

    //saveBtn event click listener
$(".saveBtn").on("click", function () {
    alert ("Event saved to calander")
    //console.log(this);
    //take the text from the text area as well as the time block it was located in using class and ids uses jQuery as well.
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 
    //console.log(text);
    //console.log(time);
    localStorage.setItem(time, text);
})

function currentTime() {
        //get current number of hours uisng moment.ja
    var currentHour = moment().hour(); 

        // loop over each calander block and take the 24 hour hr then compare to currentHour
    $(".time-block").each(function () {
        var calanderHour = JSON.parse($(this).attr("id").split("hour")[1]);
        //console.log( calanderHour, currentHour)

            //check calander hour to current hour and using add class and remove class, assign a new class color
        if (calanderHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
            else if (calanderHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
                else {
                    $(this).addClass("future");
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                }
        })
    }
currentTime();
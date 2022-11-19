//assign variable
var timeDisplay = $("#currentDay");
var saveBtn = $(".saveBtn");

//time display
timeDisplay.text(dayjs());

//display color base on past, present, future of the timeblock.
function timeBlockDisplay() {
  //get current time
  var currentTime = dayjs().hour();
  var timeBlock = $(".time-block");

  //get time on timeBlock by id
  timeBlock.each(function () {
    var getBlockHour = parseInt($(this).attr("id").split("-")[1]);
    //compare timeBlock's time with current time
    if (getBlockHour < currentTime) {
      $(this).addClass("past");
    } else if (getBlockHour === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
timeBlockDisplay();

//save event in local storage
saveBtn.on("click", function () {
  //get event and time data
  var event = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // save in localStorage
  localStorage.setItem(time, event);
});

//get event from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));

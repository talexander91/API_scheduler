var day = document.querySelector("#currentDay");
var now = dayjs().format("dddd, MMMM d");
day.textContent = now;
var calanderValue = $(".time-block");
var hour = dayjs().format("H");
var button = $(".btn")


for (i = 0; i < ($(".time-block").length); i++) {
  var idValue = $("#id");
  console.log(idValue);
  if (idValue > hour){
    $(".time-block").addClass("past");
  } else if (idValue < hour) {
    $(".time-block").removeClass("past");
    $(".time-block").addClass("future");
  } else {
    $(".time-block").removeClass("future");
    $(".time-block").removeClass("past");
    $(".time-block").addClass('present');
  }
}

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


function getValue() {
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, value);
  console.log(value);
};

button.click(getValue);

// the ask elements for each of the hours we will add task inside these
var nineTask = $("#9");
var tenTask = $("#10");
var elevTask = $("#11");
var twelTask = $("#12");
var oneTask = $("#13");
var twoTask = $("#14");
var teeTask = $("#15");
var fourTask = $("#16");
var fiveTask = $("#17");
var currDay = $("#currentDay");
//the save buttons to their respective hour that will call the local storage save functions
var nineBtn = $("#9Btn");
var tenBtn = $("#10Btn");
var elevBtn = $("#11Btn");
var twelBtn = $("#12Btn");
var oneBtn = $("#1Btn");
var twoBtn = $("#2Btn");
var threeBtn = $("#3Btn");
var fourBtn = $("#4Btn");
var fiveBtn = $("#5Btn");
//one click call the functions btn
nineBtn.click(saveTask);
tenBtn.click(saveTask);
elevBtn.click(saveTask);
twelBtn.click(saveTask);
oneBtn.click(saveTask);
twoBtn.click(saveTask);
threeBtn.click(saveTask);
fourBtn.click(saveTask);
fiveBtn.click(saveTask);

var numKey = [
  [nineBtn, 9],
  [tenBtn, 10],
  [elevBtn, 11],
  [twelBtn, 12],
  [oneBtn, 13],
  [twoBtn, 14],
  [threeBtn, 3],
  [fourBtn, 4],
  [fiveBtn, 5],
];

//var date = new Date();
var day = dayjs();
var weekDay = day.format("dddd");
var monthDay = day.month();
var year = day.year();
var hour = day.hour();
var hour = day.format("H");
currDay.text(weekDay + ", " + monthDay + " " + year);
let hourArray = [
  nineTask,
  tenTask,
  elevTask,
  twelTask,
  oneTask,
  twoTask,
  teeTask,
  fourTask,
  fiveTask,
];
checkColor();

function saveTask(event) {
  console.log("saved");

  let passed = event.target.attr("id");
  let numCalled = passed.charAt(0);
  let tasktoSave = $("#" + numCalled).text();

  console.log("task to save " + tasktoSave);
  for (var i = 0; i < numKey.length; i++) {}
}
var clock;
function checkColor() {
  clock = setInterval(function () {
    for (var i = 0; i < hourArray.length; i++) {
      if (hour < parseInt(hourArray[i].attr("id"))) {
        hourArray[i].addClass("future");
      }
      if (hour > parseInt(hourArray[i].attr("id"))) {
        hourArray[i].addClass("past");
      } else {
        hourArray[i].addClass("present");
      }
    }
  }, 1000); // check every 1 seconds
}

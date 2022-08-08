// the ask elements for each of the hours we will add task inside these
const nineTask = $("#9");
const tenTask = $("#10");
const elevTask = $("#11");
const twelTask = $("#12");
const oneTask = $("#13");
const twoTask = $("#14");
const threeTask = $("#15");
const fourTask = $("#16");
const fiveTask = $("#17");
const currDay = $("#currentDay");
//buttons will call saveTask()
const nineBtn = $("#9Btn");
const tenBtn = $("#10Btn");
const elevBtn = $("#11Btn");
const twelBtn = $("#12Btn");
const oneBtn = $("#1Btn");
const twoBtn = $("#2Btn");
const threeBtn = $("#3Btn");
const fourBtn = $("#4Btn");
const fiveBtn = $("#5Btn");
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
// a key to find the task associated in the matrix
const numKey = [
  [nineTask, 9],
  [tenTask, 10],
  [elevTask, 11],
  [twelTask, 12],
  [oneTask, 13],
  [twoTask, 14],
  [threeTask, 15],
  [fourTask, 16],
  [fiveTask, 17],
];
//set the page date and color time cells
// create a date object and set the current day text content
const day = dayjs();
let weekDay = day.format("dddd");
let monthDay = day.month();
let year = day.year();
let hour = day.hour();
//var hour = day.format("H");
currDay.text(weekDay + ", " + monthDay + " " + year);
checkColor();

// saves the respective task to the right place in local storage
function saveTask(event) {
  //the number associated with the button that called the click
  let passed = event.target.getAttribute("id");
  let numCalled = passed.split("B", 1)[0];
  let taskToSave;
  //loop the
  for (let i = 0; i < numKey.length; i++) {
    if (numKey[i][1] === parseInt(numCalled)) {
      taskToSave = numKey[i][0].val();
    }
  }
  // this will override the last var at the hour its saved under
  window.localStorage.setItem(
    "Task of hour " + numCalled,
    JSON.stringify(taskToSave)
  );
}

let clock;
function checkColor() {
  clock = setInterval(function () {
    for (let i = 0; i < numKey.length; i++) {
      if (hour < parseInt(numKey[i][0].attr("id"))) {
        numKey[i][0].addClass("future");
      }
      if (hour > parseInt(numKey[i][0].attr("id"))) {
        numKey[i][0].addClass("past");
      } else {
        numKey[i][0].addClass("present");
      }
    }
  }, 1000); // check every 1 seconds
}

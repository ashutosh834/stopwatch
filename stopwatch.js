// fetch buttons from html file
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

//  create variables for handling timer
let hour = 00;
let minute = 00;
let second = 00;
//  creating a variable for handling click event
let run = false; 
// preventing multiple click on start button
let clicked = false;
 
//apply click event on buttons
startBtn.addEventListener("click", function () {
  run = true;
  if (clicked == false) {
    clicked = true;
    watch();
  }
});

stopBtn.addEventListener("click", function () {
  run = false;
  clicked = false;
});

resetBtn.addEventListener("click", function () {
  run = false;
  clicked = false;
  hour = 00;
  minute = 00;
  second = 00;
  document.getElementById("hourr").innerHTML = "00";
  document.getElementById("minutee").innerHTML = "00";
  document.getElementById("secondd").innerHTML = "00";
});
// watch function for making stopwatch interactive
function watch() {
  if (run == true) {
    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      second = 0;
      minute = 0;
    }

    let hr = hour;
    let min = minute;
    let sec = second;
    // for adding "0" before single digit no.
    if (hour < 10) {
      hr = "0" + hr;
    }
    if (minute < 10) {
      min = "0" + min;
    }                                                                   
    if (second < 10) {
      sec = "0" + sec;
    }
    document.getElementById("secondd").innerHTML = sec;
    document.getElementById("minutee").innerHTML = min;
    document.getElementById("hourr").innerHTML = hr;
    // Applying timing event method

    setTimeout(watch, 1000);
  }
}
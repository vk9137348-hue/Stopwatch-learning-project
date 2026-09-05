let timerDisplay = document.querySelector(".timerDisplay");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timeId = null;

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

startBtn.addEventListener("click", function () {
    if (timeId !== null) {
        clearInterval(timeId);
    }
    timeId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timeId);
});

resetBtn.addEventListener("click", function () {
    clearInterval(timeId);
    msec = 0;
    secs = 0;
    mins = 0;
    timerDisplay.innerHTML = `00 : 00 : 00`;
});
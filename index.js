const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const millisecondsSpan = document.getElementById("milliseconds");

let milliseconds, seconds, minutes, hours;
let started;

const initialValues = () => {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;

  started = false;

  hoursSpan.innerText = "00";
  minutesSpan.innerText = "00";
  secondsSpan.innerText = "00";
  millisecondsSpan.innerText = "00";
};

initialValues();

const main = () => {
  if (started == true) {
    if (milliseconds == 100) {
      seconds++;
      milliseconds = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }

    hoursSpan.innerText = hours > 9 ? hours : "0" + hours;
    minutesSpan.innerText = minutes > 9 ? minutes : "0" + minutes;
    secondsSpan.innerText = seconds > 9 ? seconds : "0" + seconds;
    millisecondsSpan.innerText = milliseconds > 9 ? milliseconds : "0" + milliseconds;

    milliseconds++;
  }
};

setInterval(() => main(), 10);

document.getElementById("startBtn").addEventListener("click", () => (started = true));
document.getElementById("stopBtn").addEventListener("click", () => (started = false));
document.getElementById("resetBtn").addEventListener("click", () => initialValues());

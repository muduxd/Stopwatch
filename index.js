const timer = document.getElementById("timer");

let milliseconds, seconds, minutes, hours, started;

const initialValues = () => {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;

  started = false;

  timer.innerText = `00:00:00:00`;
};

initialValues();

const main = () => {
  if (started) {
    if (milliseconds === 100) {
      seconds++;
      milliseconds = 0;
    }

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes === 60) {
      hours++;
      minutes = 0;
    }

    timer.innerText = `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}:${milliseconds > 9 ? milliseconds : "0" + milliseconds}`;

    milliseconds++;
  }
};

setInterval(() => main(), 10);

document.getElementById("startButton").addEventListener("click", () => (started = true));
document.getElementById("stopButton").addEventListener("click", () => (started = false));
document.getElementById("resetButton").addEventListener("click", () => initialValues());

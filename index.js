const timer = document.getElementById("timer")

let milliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0
let interval = null
timer.innerText = "00:00:00:00"


const setIntitialValues = () => {
  milliseconds = 0
  seconds = 0
  minutes = 0
  hours = 0

  timer.innerText = "00:00:00:00"

  if (interval !== null) {
    clearInterval(interval)
    interval = null
  }
}


const main = () => {
  if (milliseconds === 100) {
    seconds++
    milliseconds = 0
  }

  if (seconds === 60) {
    minutes++
    seconds = 0
  }

  if (minutes === 60) {
    hours++
    minutes = 0
  }

  const hoursValue = hours > 9 ? hours : "0" + hours
  const minutesValue = minutes > 9 ? minutes : "0" + minutes
  const secondsValue = seconds > 9 ? seconds : "0" + seconds
  const millisecondsValue = milliseconds > 9 ? milliseconds : "0" + milliseconds

  timer.innerText = `${hoursValue}:${minutesValue}:${secondsValue}:${millisecondsValue}`
  milliseconds++
}



const handleStart = () => {
  if (interval === null)
    interval = setInterval(() => main(), 10)
}

const handleStop = () => {
  if (interval !== null) {
    clearInterval(interval)
    interval = null
  }
}


document.getElementById("start-button").addEventListener("click", () => handleStart())
document.getElementById("stop-button").addEventListener("click", () => handleStop())
document.getElementById("reset-button").addEventListener("click", () => setIntitialValues())
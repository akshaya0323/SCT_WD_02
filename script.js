let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("display");
const lapsList = document.getElementById("laps");

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", recordLap);

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 100);
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  pause(); 
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  lapsList.innerHTML = "";
}


function updateDisplay() {
  elapsedTime = Date.now() - startTime;
  const time = new Date(elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function recordLap() {
  if (elapsedTime === 0) return;
  const lapItem = document.createElement("li");
  lapItem.textContent = display.textContent;
  lapsList.appendChild(lapItem);
}

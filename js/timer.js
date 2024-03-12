let time = 7200;
const countdownEl = document.getElementById("countdown");
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60 / 2);
  minutes = minutes === 60 ? "00" : minutes;
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
  time--;
}

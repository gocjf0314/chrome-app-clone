const clock = document.querySelector("h2#clock");
const duration = 1000;

getClock();
setInterval(getClock, duration);

/**
 *
 * @param {Date} date
 * @returns {string}
 */
function getClock() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${sec}`;
}

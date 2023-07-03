## Clock
### Interval
- Interval means that something should be happed every times
- internal function
```js
// setInterval(function, ms);
// Call function per 1000ms
// ex: setInterval(() => { ... }, 1000);
const clock = document.querySelector("h2#clock");
const duration = 1000;

getClock();
setInterval(getClock, duration);

function getClock() {
  const date = new Date();
  clock.innerText = getTime(date);
}

/**
 *
 * @param {Date} date
 * @returns {string}
 */
function getTime(date) {
  console.log(date);
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");
  return `${hour}:${minute}:${sec}`;
}
```
- padStart(length, fill_char)
```js
"1".padStart(3, "0");
// "001"
```
- pasEnd(length, fill_char)
```js
"3".padStart(3, "0");
// "300"
```
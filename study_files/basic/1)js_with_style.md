## HTML & JS
```html
<script src="path/filName.js"></script>
```
This tag enable developer to get document object in js file
bcause html file load js file.
And then, brower enable you to access document object

## document.querySelector(param)
querySelector method can search element to css way
Getting first element based tag and class
* [param guide]
  > ".className tagName"
  > ".className:first-child"
  > "tagName2.className:first-child tagName"
  > "#idValue"
  > "#idValue:first-child"
```js
const title = document.querySelector(".hello h1");

console.log(title); // show html tag data
console.dir(title); // show element object info
```
<br>

## Event Listener
```js
const oneventname = "click";
function onEventListener() { ..... }
title.addEventListener(oneventname, onEventListener);
```
### document element listener
- I pretend to use way1
- Using listener remover
- reduce humman error
```js
function handleTitleClick() {
  title.innerText = "Title is clicked!";
  title.style.color = "red";
}

function handleMouseEneter() {
  title.innerText = "Mouse is here!";
  if (title.style.color === "black") {
    title.style.color = "blue";
  }
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone...!";
  if (title.style.color !== "black") {
    title.style.color = "black";
  }
}

// Way1
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEneter);
title.addEventListener("mouseleave", handleMouseLeave);

// Way2
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEneter;
title.onmouseleave = handleMouseLeave;
```

### Window - browser's window
- Normal: resize
- ClipBoard: copy, paste
- WIFI: offline, online
```js
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleClipBoardCopy() {
  alert("You copy successfully!");
}

function handleClipBoardPaste() {
  alert("Paste!!");
}

function handleWindowOffline() {
  alert("Disconnected... No WIFI!");
}

function handleWindowOnline() {
  alert("Connected with WIFI!");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleClipBoardCopy);
window.addEventListener("paste", handleClipBoardPaste);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

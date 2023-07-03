/**
 * <document.querySelector(param)>
 * querySelector method can search element to css way
 * Getting first element based tag and class
 *
 * [param guide]
 *  > ".className tagName"
 *  > ".className:first-child"
 *  > "tagName2.className:first-child tagName"
 *  > "#idValue"
 *  > "#idValue:first-child"
 */
const title = document.querySelector(".hello h1");

console.log(title); // show html tag data
console.dir(title); // show element object info

/**
 * function handler() { ..... }
 * title.addEventListener("eventype", handler);
 */
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

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEneter);
title.addEventListener("mouseleave", handleMouseLeave);

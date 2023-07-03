const h1 = document.querySelector(".hello h1");
const clickedClass = "clicked";
function handleTitleClick() {
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);

const id = "login-form";

const loginForm = document.querySelector(`#${id}`);
const loginInput = document.querySelector(`#${id} input`);
const link = document.querySelector("a");

/**
 *
 * @param {SubmitEvent} event
 */
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
  alert("Submit " + event);
}

/**
 * @param {PointerEvent} event
 */
function onLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  // alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onLinkClick);

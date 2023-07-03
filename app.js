const id = "login-form";

const loginForm = document.querySelector(`#${id}`);
const loginInput = document.querySelector(`#${id} input`);

/**
 *
 * @param {SubmitEvent} event
 */
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
  alert("Submit " + event);
}

loginForm.addEventListener("submit", onLoginSubmit);

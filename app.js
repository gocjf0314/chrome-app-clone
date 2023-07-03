const FORM_ID = "login-form";
const HIDEN_CLASSNAME = "hidden";

const loginForm = document.querySelector(`#${FORM_ID}`);
const loginInput = document.querySelector(`#${FORM_ID} input`);
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");

/**
 *
 * @param {SubmitEvent} event
 */
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDEN_CLASSNAME);
}

// /**
//  * @param {PointerEvent} event
//  */
// function onLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
//   // alert("clicked!");
// }

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", onLinkClick);

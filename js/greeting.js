const FORM_ID = "login-form";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector(`#${FORM_ID}`);
const loginInput = document.querySelector(`#${FORM_ID} input`);
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);

initializeDocument();

function initializeDocument() {
  initListeners();
  loadUsername();
}

function initListeners() {
  loginForm.addEventListener("submit", onLoginSubmit);
}

function loadUsername() {
  if (savedUsername !== null) {
    // show greeting
    showGreeting(savedUsername);
  } else {
    // show login form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  }
}

/**
 *
 * @param {SubmitEvent} event
 * @returns {void}
 */
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
}

/**
 *
 * @param {string} username
 * @returns {void}
 */
function showGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

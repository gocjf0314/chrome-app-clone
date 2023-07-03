## Form Tag
- If you dont press on button in form tag and then just enter, Content is submitted automatically.
- Of course, It is summitted when you press the button.
```html
...
    <form id="login-form">
      <input
        required
        maxlength="15"
        minlength="5"
        type="text"
        placeholder="What is your name?"
      />
      <button>Log in</button>
    </form>
...
```
- Submit Listener
```js
cconst id = "login-form";

const loginForm = document.querySelector(`#${id}`);
const loginInput = document.querySelector(`#${id} input`);

/**
 * @param {SubmitEvent} event
 */
function onLoginSubmit(event) {
  // prevent canceling input value
  // More exactly, do default behavior of event
  // this default behavior: refresh page
  event.preventDefault();
  console.log(event);
  alert("Submit " + event);
}

loginForm.addEventListener("submit", onLoginSubmit);
```
- All listener event's fist argument is info of event object about the element
## Using Link
### a tag - text link button
- default behavior: move to page of the link
```html
<a href="https://nomadcoders.co">Go to courses</a>
```
```js
const link = document.querySelector("a");

/**
 * @param {PointerEvent} event
 */
function onLinkClick(event) {
  // block moving to new page
  event.preventDefault();
}

link.addEventListener("click", onLinkClick);
```
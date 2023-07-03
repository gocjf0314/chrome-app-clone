## Hide element
- when display proper is none, element is hidden
- If you save string or declare unimportant var, Namaing var with only upper case.
```html
<h1 id="greeting" class="hidden"></h1>
```
```css
.hidden {
    display: none;
}
```
```js
const greeting = document.querySelector("#greeting");
const HIDEN_CLASSNAME = "hidden";
// .....

greeting.classList.remove(HIDEN_CLASSNAME);
```
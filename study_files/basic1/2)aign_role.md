## Asign Role - JS & CSS
JS is not a css style chnager
- HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css"/>
    <title>Momentum App</title>
  </head>
  <body>
    <div class="hello">
        <h1 class="sexy-font">Hello</h1>
            <h2>My name is ...</h2>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```
- CSS: styler
  - transition
    color: property to change
    .5s: duration time
    ease-in-out: way to animate
```css
body {
    background-color: beige;
}

h1 {
    color: cornflowerblue;
    transition: color .5s ease-in-out;
}

.clicked {
    color: tomato;
}

.sexy-font {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
```
- JS: Animator
```js
const h1 = document.querySelector(".hello h1");
const clickedClass = "clicked";
function handleTitleClick() {
  h1.classList.toggle(clickedClass);
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
}

h1.addEventListener("click", handleTitleClick);
```
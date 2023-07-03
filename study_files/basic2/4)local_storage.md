## Local Storage
- you want to storage private info in local
- you don't want to frequantly type info
- you should save important and private data
```js
/**
 * @param {string} key
 * @param {string} value
 * @param {index} number
*/

// set key and value
// return {void}
localStorage.setItem(key, value);

// get value by key
// return {string | null}
localStorage.getItem(key);

// get key
// return key {string | null}
localStorage.key(index);

// return {void}
localStorage.removeItem(key);

// Remove all key, value data 
// return {void}
localStorage.clear();
```
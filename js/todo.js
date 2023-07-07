const TODOLIST_KEY = "todos";

const toDoForm = document.getElementById("todo-form");
const toDoIntput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const savedToDoList = localStorage.getItem(TODOLIST_KEY);
let parsedToDoList = [];

if (savedToDoList !== null && savedToDoList.length !== 0) {
  parsedToDoList = [...JSON.parse(savedToDoList)];
  parsedToDoList.forEach(addNewToDo);
}

/**
 * @param {SubmitEvent} event
 */
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = {
    text: toDoIntput.value,
    id: Date.now(),
  };
  addNewToDo(newToDo);
  saveNewToDo(newToDo);
  toDoIntput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/**
 *
 * @param {MouseEvent} event
 */
function deleteToDo(event) {
  const li = event.target.parentElement;
  const liId = parseInt(li.id);
  li.remove();
  const filtered = parsedToDoList.filter((toDo) => idFilter(toDo, liId));
  parsedToDoList = filtered;
  console.log(parsedToDoList);
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(parsedToDoList));
}

/**
 *
 * @param {Object} todo
 */
function saveNewToDo(todo) {
  parsedToDoList.push(todo);
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(parsedToDoList));
}

/**
 *
 * @param {Object} todo
 */
function addNewToDo(todo) {
  // 1. create and set required elements
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  // 2. Append elements to li tag
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

/**
 *
 * @param {Object} toDo
 * @param {number} id
 * @returns
 */
function idFilter(toDo, id) {
  return toDo.id !== id;
}

/**
 *
 * @param {Object} toDo
 * @param {string} text
 * @returns
 */
function textFilter(toDo, text) {
  return toDo.text !== text;
}

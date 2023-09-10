// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild

const ul = document.querySelector(".todo-list");
console.log(ul); //<ul class="todo-list">...</ul>

// new element
const li = document.createElement("li");
li.textContent = "new todo";
console.log(li); //<li>new todo</li>

//const referenceNode = document.querySelector(".first-todo");
//console.log(referenceNode);
//ul.removeChild(referenceNode);

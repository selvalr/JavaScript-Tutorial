//Creating an Element

// syntax
// document.createElement("tagname");

let title = document.createElement("h1");
title.className = "title";
title.style.fontSize = "24px";
title.textContent = "Creating HTML element DOM Day 2";

console.log(title);

//ii.Creating elements

let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "24px";
  title.textContent = i;
  console.log(title);
}

//iii.create list element
const uLists = document.createElement("ul");
const lists = document.createElement("li");

//adding elements
uLists.appendChild(lists);

//insertBefore element
let newHead = document.createTextNode("h4");
uLists.appendChild(newHead);
let container = document.querySelector("hello");
container.insertBefore(newHead, div);

//3.
// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);

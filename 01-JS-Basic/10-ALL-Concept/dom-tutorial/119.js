// how to get the dimension of element
// height width
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info); //DOMRect {x: 307.5, y: 327.1875, width: 1200, height: 174.96875, top: 327.1875, …}

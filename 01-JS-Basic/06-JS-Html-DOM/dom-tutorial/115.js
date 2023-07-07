// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");

console.log(todoList);
/*
<ul class="todo-list">
<li><span class="text">Do this do that</span></li>
<li>tech student</li>
</ul>

*/

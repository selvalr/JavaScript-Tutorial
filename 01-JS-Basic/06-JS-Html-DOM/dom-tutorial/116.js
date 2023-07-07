// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
console.log(li); //new todo

const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);

/*
output

<ul class="todo-list">
<li>new todo</li> -->prepend
<li>....</li>
<li>new todo</li>--->append

</ul>

*/

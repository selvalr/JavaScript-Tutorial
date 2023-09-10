// Add new HTML elements to page

// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
/*
 <li>
          <span class="text">Do this do that</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
</li>
*/

// todoList.innerHTML = "<li>New Todo 2 </li>";
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";
// console.log(todoList.innerHTML);

/*
Output
<li>New Todo 2 </li><li>New Todo </li><li>teach students </li>
*/

// when you should use it , when you should not
//todoList.insertAdjacentElement("afterbegin", "<li>Hi</li>");

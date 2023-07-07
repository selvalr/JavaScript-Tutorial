// document.createElement()
// append
// prepend
// remove

const newTodoItem = document.createElement("li");
console.log(newTodoItem); //<li></li>

// // const newTodoItemText = document.createTextNode("Teach students");
newTodoItem.textContent = "Teach students";
console.log(newTodoItem); //<li>Teach student</li>

const todoList = document.querySelector(".todo-list");
todoList.prepend(newTodoItem);
console.log(todoList);
/*
output:
<ul class="todo-list">
    <li>Teach student</li>
    <li>
        <span class="text">Do this do that</span>
        <div class="todo-button">
                <button class="todo-btn done">done</button>
                <button class="todo-btn remove">remove</button>
        </div>
    </li>
/ul>

*/
console.log(newTodoItem); //<li>Teach students</li>

const todo1 = document.querySelector(".todo-list li");
todo1.remove();
console.log(todo1); //<li>Teach students</li>

// before
// after

const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "Teach students";
console.log(newTodoItem1); //<li>Teach students</li>

const todoList1 = document.querySelector(".todo-list");
todoList1.after(newTodoItem1);
console.log(todoList1);

/*
output:

<ul class="todo-list">
    <li>Teach student</li>
    <li>
        <span class="text">Do this do that</span>
        <div class="todo-button">
                <button class="todo-btn done">done</button>
                <button class="todo-btn remove">remove</button>
        </div>
    </li>
/ul>
<li>Tech student</li>

*/

let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
document.getElementById("input").placeholder = "Type Task here..";

let todos = [];


button.addEventListener('click',()=>{
    if(input.value===""){
        alert('please fill the task');
    }
    else{
        todos.push(input.value)
        addtodo(input.value)
        input.value=''
    }
    
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para);
    let span=document.createElement('span');
    span.innerHTML='&#x2715';
    para.appendChild(span);
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through';
        
        remove(todo)
    })
    span.addEventListener('click',()=>{
        
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
  
}
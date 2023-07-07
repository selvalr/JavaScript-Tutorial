const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
console.log(listItems); //HTMLCollection [li]

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
console.log(sixthLi); //<li>item 6</li>

ul.append(sixthLi);
console.log(listItems);

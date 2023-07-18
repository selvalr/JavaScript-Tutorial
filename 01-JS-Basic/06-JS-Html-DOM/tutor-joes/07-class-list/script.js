/*
classList.add();
classList.remove();
classList.toggle();
getAttribute();
setAttribute();

hasAttribute()
getAttributeNames()
removeAttribute()

*/
/*
const btnAdd = document.querySelector("#btnAdd");
const btnRemove = document.querySelector("#btnRemove");
const btnToggle = document.querySelector("#btnToggle");
const box = document.querySelector(".box");
btnAdd.addEventListener("click", function () {
  box.classList.add("new-color");
});
btnRemove.addEventListener("click", function () {
  box.classList.remove("new-color");
});

btnToggle.addEventListener("click", function () {
  box.classList.toggle("new-color");
});
*/

const btnClick = document.querySelector("#btnClick");
const input = document.querySelector("input");

btnClick.addEventListener("click", function () {
  const getAtt = input.getAttribute("type");
  if (getAtt == "text") {
    input.setAttribute("type", "password");
  } else {
    input.setAttribute("type", "text");
  }
});

console.log(input.hasAttribute("class"));
let list = input.getAttributeNames();
console.log(list);
input.removeAttribute("name");
list = input.getAttributeNames();
console.log(list);

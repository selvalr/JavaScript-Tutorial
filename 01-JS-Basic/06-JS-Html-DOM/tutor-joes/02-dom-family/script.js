//HTMLCollection
/*
let li = document.getElementsByTagName("li");
console.log(li);
console.log(li.length);
let element = document.createElement("li");
element.innerHTML = "JavaScript";
li[0].parentNode.appendChild(element);
console.log(li);
console.log(li.length);
for (let i = 0; i < li.length; i++) {
  li[i].style.color = "orange";
}
*/

let li = document.querySelectorAll("li");
console.log(li);
console.log(li.length);
let element = document.createElement("li");
element.innerHTML = "JavaScript";
li[0].parentNode.appendChild(element);
console.log(li);
console.log(li.length);

li.forEach((element) => {
  element.style.color = "orange";
});

li = document.querySelectorAll("li");
console.log(li);
console.log(li.length);

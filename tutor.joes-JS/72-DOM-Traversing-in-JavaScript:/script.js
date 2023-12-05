//1.parentNode
/*
const para = document.getElementsByTagName("p");
console.log(para);
const parent = para[0].parentNode;
console.log(parent);
parent.style.backgroundColor = "palegreen";
parent.style.padding = "10px";

const h1 = document.getElementsByTagName("h1");
console.log(h1);
const parent_h1 = h1[0].parentNode;
parent_h1.style.backgroundColor = "palevioletred";
parent_h1.style.padding = "10px";

*/

//2.First and Last Child
/*
//firstChild
const firstChild = parent.firstChild;
console.log(firstChild);
//lastChild
const lastChild = parent.lastChild;
console.log(lastChild);

//firstElementChild
const firstElementChild = parent.firstElementChild;
console.log(firstElementChild);
firstElementChild.style.color = "blue";
//lastElementChild
const lastElementChild = parent.lastElementChild;
console.log(lastElementChild);
lastElementChild.style.color = "red";

const section = document.getElementsByTagName("section")[0];
console.log(section.firstChild);
console.log(section.firstElementChild);
console.log(section.lastChild);
console.log(section.lastElementChild);

console.log(h1[0].firstChild);
console.log(h1[0].firstElementChild);
console.log(h1[0].lastChild);
console.log(h1[0].lastElementChild);
//children
const div = document.getElementsByTagName("div")[0];
console.log(div);
console.log(div.children[0]);
console.log(div.children[1]);
console.log(div.childElementCount);
console.log(div.childNodes);
*/
//3.Siblings
/*
//Siblings
const p = document.getElementsByTagName("p")[0];
console.log(p);
console.log(p.previousSibling);
console.log(p.previousElementSibling);

const h2 = document.getElementsByTagName("h2")[0];
console.log(h2);
console.log(h2.nextSibling);
console.log(h2.nextElementSibling);

const section = document.getElementsByTagName("section")[0];
console.log(section);
console.log(section.nextSibling);
console.log(section.nextElementSibling);
console.log(section.previousSibling);
console.log(section.previousElementSibling);
*/


//4.Closest
// element.closest(selector);


const h1_tag = document.querySelector("h1");
console.log(h1_tag);

const section = h1_tag.closest("section");
console.log(section);
section.style.background = "purple";
section.style.color = "white";
section.style.padding = "10px"

//1.)Getting Element

//1.Getting elements by tag name:

// syntax:
//document.getElementsByTagName("tagname");

const allTitles = document.getElementsByTagName("h1");

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

//2.Getting elements by class name

//syntax:
//document.getElementsByClassName("classname");

const allTitle = document.getElementsByClassName("title");

console.log(allTitle); //HTMLCollections
console.log(allTitle.length); // 4

for (let i = 0; i < allTitle.length; i++) {
  console.log(allTitle[i]); // prints each elements in the HTMLCollection
}

//3.Getting an element by id

//syntax
document.getElementById("id");

let firstTitle = document.getElementById("first-title");
console.log(firstTitle); // <h1>First Title</h1>

//4.Getting elements by using querySelector methods

//i.querySelector
let firstTitle1 = document.querySelector("h1"); // select the first available h1 element
let firstTitle2 = document.querySelector("#first-title"); // select id with first-title
let firstTitle3 = document.querySelector(".title"); // select the first available element with class title

//ii.querySelectorAll
const allTitles2 = document.querySelectorAll("h1"); // # selects all the available h1 elements in the page

console.log(allTitles2.length); // 4
for (let i = 0; i < allTitles2.length; i++) {
  console.log(allTitles2[i]);
}

allTitles2.forEach((title) => console.log(title));
const allTitles3 = document.querySelectorAll(".title"); // the same goes for selecting using class

//3.// get multiple elements using getElements by class name

// get multiple elements items using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
// console.log(navItems);

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

//4.
// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property
// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach

// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// simple for loop
// for of loop
// forEach
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);

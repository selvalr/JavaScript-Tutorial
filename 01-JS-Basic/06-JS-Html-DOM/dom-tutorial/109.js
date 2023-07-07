// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property

// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems); //HTMLCollection(3) [a, a, a]

// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach

// for (let i = 0; i < navItems.length; i++) {
//   //console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }

// for (let navItem of navItems) {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
//   console.log(navItem); //a a a
// }

// navItems = Array.from(navItems);
// //console.log(navItems); //(3) [a, a, a]
// console.log(Array.isArray(navItems)); //true
// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }); //let navItems = document.getElementsByTagName("a"); // HTMLCollection
//console.log(navItems); //HTMLCollection(3) [a, a, a]

//console.log(Array.isArray(navItems)); //true
//const navItems = document.querySelectorAll(".nav-item"); // NodeList
//console.log(navItems[1]); //<li class="nav-item"><a href>todo</a></li>

let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(navItems); //(3) [a, a, a]
console.log(Array.isArray(navItems)); //true

// simple for loop
// for of loop
// forEach

// for (let i = 0; i < navItems.length; i++) {
//   // console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "red";
//   navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// });
// console.log(navItems); //(3) [a, a, a]

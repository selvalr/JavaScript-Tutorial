//Scope

function myFunction() {
  var pizzaName = "Volvo";
  // Code here can use pizzaName
}
// Code here can't use pizzaName

//Block Scoped Variables

const isLoggedIn = true;
if (isLoggedIn == true) {
  const statusMessage = "User is logged in.";
}
console.log(statusMessage);
// Uncaught ReferenceError: statusMessage is not defined

//Global Variables

// Variable declared globally
const color = "blue";

function printColor() {
  console.log(color);
}

printColor(); // Prints: blue

//1.Window Global Object

//scope.js
a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
b = 10; // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accessible

//2.Global scope:

let a1 = "JavaScript"; // is a global scope it will be found anywhere in this file
let b1 = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a1, b1); // JavaScript 10, accessible
  if (true) {
    let a1 = "Python";
    let b1 = 100;
    console.log(a1, b1); // Python 100
  }
  console.log(a1, b1);
}
letsLearnScope();
console.log(a1, b1); // JavaScript 10, accessible

//3.local scope

//scope.js
let a = "JavaScript"; // is a global scope it will be found anywhere in this file
let b = 10; // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  let value = false;
  // block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value); // JavaScript 10 true
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible

//.Example 1

function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

//.Example 2:

function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

//The For Of Loop

/*
The JavaScript for..of statement loops through the elements of an iterable object.

Syntax
for (variable of iterable) {
  // code block to be executed
}

*/

//1.Iterating Over a String

const name = "W3Schools";

for (const x of name) {
  // code block to be executed
  console.log(x);
}

//2.Iterating Over an Array

const letters = ["a", "b", "c"];

for (const x of letters) {
  console.log(x);
}

//3.Iterating Over a Set

// Create a Set
const letters1 = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
for (const x of letters1) {
  console.log(x);
}

//4.Iterating Over a Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

for (const x of fruits) {
  // code block to be executed
  console.log(x);
}

//3. iterables
// jispe hum for of loop laga sakein
// string , array are iterable

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

const items = ["item1", "item2", "item3"];
// for(let item of items){
//     console.log(item);
// }

// array like object
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);

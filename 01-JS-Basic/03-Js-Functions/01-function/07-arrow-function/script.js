// Arrow function with two arguments
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints: 7

// Arrow function with no arguments
const printHello = () => {
  console.log("hello");
};
printHello(); // Prints: hello

// Arrow functions with a single argument
const checkWeight = (weight) => {
  console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints: Baggage weight : 25 kilograms.

// Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60

//.1.

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n;
}

console.log(square(2)); // 4

const square = (n) => {
  return n * n;
};

console.log(square(2)); // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = (n) => n * n; // -> 4

//2.

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

//3.

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(printFullName("Asabeneh", "Yetayeh"));



//exam:

let sum1 = (a, b) => a + b;
/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
alert( sum1(1, 2) ); // 3






//If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

//For example:

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6

//If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => alert("Hello!");

sayHi();




//For instance, to dynamically create a function:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();



//Multiline arrow functions

let sum3 = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum3(1, 2) ); // 3

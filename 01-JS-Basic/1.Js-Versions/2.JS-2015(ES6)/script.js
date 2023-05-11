//1.JavaScript let

//The let keyword allows you to declare a variable with block scope.

/*
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

*/

//2.JavaScript const

//The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

//Constants are similar to let variables, except that the value cannot be changed.

/*
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

*/

//3.Arrow Functions:
//Arrow functions allows a short syntax for writing function expressions.

//You don't need the function keyword, the return keyword, and the curly brackets.


// ES5
/*
var x = function(x, y) {
   return x * y;
}
*/

// ES6
const arrowFun = (x, y) => x * y;
console.log(arrowFun(3,4));

//4.The Spread (...) Operator
//The ... operator expands an iterable (like an array) into more elements:


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

//The ... operator can be used to expand an iterable into more arguments for function calls:

//Example:
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);

//5.The For/Of Loop
//The JavaScript for/of statement loops through the values of an iterable objects.


//Looping over an Array

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
console.log(text);


//Looping over a String

let language = "JavaScript";
let text1 = "";

for (let x of language) {
    text1 += x + " ";
}
console.log(text1);

//6.JavaScript Maps
//Being able to use an Object as a key is an important Map feature.


const fruits = new Map([
["apples", 500],
["bananas", 300],
["oranges", 200],
["apples", 500]
]);
console.log(fruits);

//7.JavaScript Sets

// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);


//8.JavaScript Classes
/*
JavaScript Classes are templates for JavaScript Objects.

Use the keyword class to create a class.

Always add a method named constructor():


class ClassName {
  constructor() { ... }
}
*/

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//Using a Class
//When you have a class, you can use the class to create objects:

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log(myCar1);
console.log(myCar2);

//9.JavaScript Promises
/*
A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

"Producing Code" can take some time and "Consuming Code" must wait for the result.
*/

//Promise Syntax
/*
const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) {  code if successful  },
  function(error) {  code if some error  }
);
*/

//Example Using a Promise

const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  console.log(value);
});


//10.The Symbol Type
//A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person[id] = 140353;
  // Now person[id] = 140353
  // but person.id is still undefined
console.log(person[id] + " " + person.id);
  

//11.Default Parameter Values
//ES6 allows function parameters to have default values.


function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
console.log(myFunction(5)); // will return 15


//12.Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:


function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x1 = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x1);

//13.String.includes()
//The includes() method returns true if a string contains a specified value, otherwise false:


let text2 = "Hello world, welcome to the universe.";
text2.includes("world")    // Returns true
console.log(text2.includes("world"));

//14.String.startsWith()
//The startsWith() method returns true if a string begins with a specified value, otherwise false:

let text3 = "Hello world, welcome to the universe.";

text3.startsWith("Hello")   // Returns true
console.log(text3.startsWith("Hello") );


//15.String.endsWith()
//The endsWith() method returns true if a string ends with a specified value, otherwise false:


var text4 = "John Doe";
text4.endsWith("Doe")    // Returns true
console.log(text4.endsWith("Doe") );

//16.Array.from()
//The Array.from() method returns an Array object from any object with a length property or any iterable object.

//Create an Array from a String:

Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
console.log(  Array.from("ABCDEFG"));


//17.Array keys()

//The keys() method returns an Array Iterator object with the keys of an array.


//Create an Array Iterator object, containing the keys of the array:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits1.keys();

let text5 = "";
for (let x of keys) {
  text5 += x + "<br>";
}
console.log(text5);


//18.Array find()

//The find() method returns the value of the first array element that passes a test function.

//This example finds (returns the value of ) the first element that is larger than 18:


const numbers1 = [4, 9, 16, 25, 29];
let first = numbers1.find(myFunction3);

function myFunction3(value, index, array) {
  return value > 18;
}
console.log(first);
/*
Note that the function takes 3 arguments:

The item value
The item index
The array itself

*/


//19.Array findIndex()
//The findIndex() method returns the index of the first array element that passes a test function.

//This example finds the index of the first element that is larger than 18:


const numbers2 = [4, 9, 16, 25, 29];
let first2 = numbers2.findIndex(myFunction4);

function myFunction4(value, index, array) {
  return value > 18;
}
console.log(first2);

//20.New Math Methods

//ES6 added the following methods to the Math object:
/*
Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()
The Math.trunc() Method
Math.trunc(x) returns the integer part of x:
*/


Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4

//21.The Math.sign() Method
//Math.sign(x) returns if x is negative, null or positive:


Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1

//22.The Math.cbrt() Method
//Math.cbrt(x) returns the cube root of x:


Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5

//23.The Math.log2() Method
//Math.log2(x) returns the base 2 logarithm of x:


Math.log2(2);    // returns 1

//24.The Math.log10() Method
//Math.log10(x) returns the base 10 logarithm of x:


Math.log10(10);    // returns 1

//25.New Number Properties
//ES6 added the following properties to the Number object:

/*
EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER
*/

//EPSILON Example
let x3 = Number.EPSILON;

//MIN_SAFE_INTEGER Example
let x4 = Number.MIN_SAFE_INTEGER;

//MAX_SAFE_INTEGER Example
let x5 = Number.MAX_SAFE_INTEGER;

//26.New Number Methods
//ES6 added 2 new methods to the Number object:

/*
Number.isInteger()
Number.isSafeInteger()
*/

//The Number.isInteger() Method
//The Number.isInteger() method returns true if the argument is an integer.


Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false

//The Number.isSafeInteger() Method
//A safe integer is an integer that can be exactly represented as a double precision number.

//The Number.isSafeInteger() method returns true if the argument is a safe integer.


Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false


//27.New Global Methods
//ES6 added 2 new global number methods:
/*
isFinite()
isNaN()
*/

//The isFinite() Method
/*
The global isFinite() method returns false if the argument is Infinity or NaN.

Otherwise it returns true:
*/

isFinite(10/0);       // returns false
isFinite(10/1);       // returns true

//The isNaN() Method

//The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:


isNaN("Hello");       // returns true


//Object entries()

//Create an Array Iterator, and then iterate over the key/value pairs:

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit.entries();

for (let x of f) {
  console.log(x);
}
console.log(f);

/*
The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

The entries() method does not change the original array.
*/

//Modules

//Modules are imported in two differen ways:

//Import from named exports
//Import named exports from the file person.js:


//  import { name, age } from "./person.js";

//Import from default exports
//Import a default export from the file message.js:

//  import message from "./message.js";
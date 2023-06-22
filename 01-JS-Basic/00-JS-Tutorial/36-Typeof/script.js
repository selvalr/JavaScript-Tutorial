/*
In JavaScript there are  different data types that can contain values:

string
number
boolean
object
function
BigInt
Symbol

There are 6 types of objects:

Object
Date
Array
String
Number
Boolean

And 2 data types that cannot contain values:

null
undefined

*/

//The typeof Operator

console.log(typeof "John"); // Returns "string"
console.log(typeof 3.14); // Returns "number"
console.log(typeof NaN); // Returns "number"
console.log(typeof false); // Returns "boolean"
console.log(typeof [1, 2, 3, 4]); // Returns "object"
console.log(typeof { name: "John", age: 34 }); // Returns "object"
console.log(typeof new Date()); // Returns "object"
console.log(typeof function () {}); // Returns "function"
console.log(typeof myCar); // Returns "undefined" *
console.log(typeof null); // Returns "object"
console.log(typeof undefined); // "undefined"
console.log(typeof 10n); //"BigInt"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"
console.log(typeof alert); // "function"

// 22 -> "22"
// convert number to string.

//let age=22;
// age = age + "";
// console.log(typeof(age)); "22"

// convert string to number.

// let myStr = +"34";
// console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);

//Primitive Data:

console.log(typeof "John"); // Returns "string"
console.log(typeof 3.14); // Returns "number"
console.log(typeof true); // Returns "boolean"
console.log(typeof false); // Returns "boolean"
console.log(typeof x); // Returns "undefined" (if x has no value)

//Complex Data

console.log(typeof { name: "John", age: 34 }); // Returns "object"
console.log(typeof [1, 2, 3, 4]); // Returns "object" (not "array", see note below)

console.log(typeof null); // Returns "object"
console.log(typeof function myFunc() {}); // Returns "function"

//The constructor Property

console.log(
  "john".constructor +
    "<br>" + // Returns function String()  {[native code]}
    (3.14).constructor +
    "<br>" + // Returns function Number()  {[native code]}
    false.constructor +
    "<br>" +
    [1, 2, 3, 4].constructor +
    "<br>" +
    { name: "john", age: 34 }.constructor +
    "<br>" +
    new Date().constructor +
    "<br>" +
    function () {}.constructor
);

//.You can check the constructor property to find out if an object is an Array (contains the word "Array"):

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

//.Or even simpler, you can check if the object is an Array function:

function isArray(myArray) {
  return myArray.constructor === Array;
}

//.You can check the constructor property to find out if an object is a Date (contains the word "Date"):

function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}

//.Or even simpler, you can check if the object is a Date function:

function isDate(myDate) {
  return myDate.constructor === Date;
}

//The instanceof Operator

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars instanceof Array);
console.log(cars instanceof Object);
console.log(cars instanceof String);
console.log(cars instanceof Number);

//Difference Between Undefined and Null

console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(null === undefined); // false
console.log(null == undefined); // true);

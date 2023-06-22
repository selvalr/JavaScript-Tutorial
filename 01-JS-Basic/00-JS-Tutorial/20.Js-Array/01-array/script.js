/*
    Array-variables that hold multiple values
    Array is an object which can store a collection of items under a single variable name

    syntax:
    let arrayName = [value1, value2, ...]; // Method 1
    let arrayName = new Array(); // Method 2
*/

//0.Array

// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, "chicken", false];

//1.JavaScript array literal

// Initializing while declaring
var house = ["saood", "harish", true, 910];
console.log(house); //['saood', 'harish', true, 910]
console.log(house[0]); //saood
console.log(house[1]); //harish
console.log(house[4]); //undefined   // getter
house[4] = "bala"; //setter
console.log(house[4]); //bala

let lengthOfArray = house["length"];
console.log(lengthOfArray); //5
house[lengthOfArray] = "selva"; //selva added to 5 index

//.You can also create an array, and then provide the elements:

let myArra = [];
myArra[0] = "selva";
myArra[1] = "tamil";
myArra[2] = true;
console.log(myArra);

//2.JavaScript Array directly (new keyword)

var i;
var emp = new Array();
emp[0] = "Arun";
emp[1] = "Varun";
emp[2] = "John";

for (i = 0; i < emp.length; i++) {
  document.write(emp[i] + "<br>");
}

//3.JavaScript array constructor (new keyword)

// syntax
const arr = Array();
// or
// let arr = new Array()
console.log(arr); // []

//1.How to create an empty array

//Using Array constructor
// syntax
const arra = Array();
// or
// let arr = new Array()
console.log(arra); // []

//Using square brackets([])
// syntax
// This the most recommended way to create an empty list
const arra1 = [];
console.log(arra1);

//2.How to create an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

//i.Accessing Array Elements
//You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

//ii.Changing an Array Element
//This statement changes the value of the first element in cars:

cars[0] = "Opel";

//Example;
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

//2.Converting an Array to a String
//The JavaScript method toString() converts an array to a string of (comma separated) array values.

//Example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits1.toString();

//3.Access the Full Array
console.log(fruits1);

//4.Accessing the First Array Element
console.log(fruits1[0]);

//5.lastelement
console.log(fruits1[fruits1.length - 1]);

//6.Looping Array Elements
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits3.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits3[i] + "</li>";
}
text += "</ul>";
console.log(text);

//You can also use the Array.forEach() function:

//Example
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];

let text4 = "<ul>";
fruits4.forEach(myFunction4);
text4 += "</ul>";

function myFunction4(value) {
  text4 += "<li>" + value + "</li>";
}

//3. Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

//Array can have items of different data types
const arr1 = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr1);

//3.Creating an array using split

let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

//5.nested Array

let ourArray = [
  ["selva", 23],
  ["karthi", 25],
];

console.log(ourArray[0][1]); //23

//Multi dimenson array

let ourArray2 = [
  ["selva", 23],
  ["karthi", 25, ["Police"]],
  [["bass", 32], "hosur"],
];

console.log(ourArray2[1][2][0]); //police

//An array can store elements of any type.

//For instance:

// mix of values
let arra3 = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

// get the object at index 1 and then show its name
alert(arra3[1].name); // John

// get the function at index 3 and run it
arra3[3](); // hello

//How to Recognize an Array
const fruits2 = ["Banana", "Orange", "Apple"];
let type = typeof fruits2; //object
//Solution 1:
//To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
Array.isArray(fruits2); //true

//Solution 2:
//The instanceof operator returns true if an object is created by a given constructor:
//const fruits = ["Banana", "Orange", "Apple"];

fruits2 instanceof Array; //true

//10.
// let numbers = [1,2,3];

// // console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
// console.log(numbers);

// function hello(){
//     console.log("hello");
// }

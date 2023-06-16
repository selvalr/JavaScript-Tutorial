//Variable Names

firstName = "John";
lastName = "Doe";

price = 19.9;
tax = 0.2;

fullPrice = price + price * tax;

//ii.Spaces Around Operators
//Always put spaces around operators ( = + - * / ), and after commas:

let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];

//iii.Statement Rules
//General rules for simple statements:

const cars = ["Volvo", "Saab", "Fiat"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

//iv.Functions:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

//vLoops:
for (let i = 0; i < 5; i++) {
  x += i;
}

//v.Conditionals:
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

/*
Object Rules
General rules for object definitions:

Place the opening bracket on the same line as the object name.
Use colon plus one space between each property and its value.
Use quotes around string values, not around numeric values.
Do not add a comma after the last property-value pair.
Place the closing bracket on a new line, without leading spaces.
Always end an object definition with a semicolon.
*/

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

//Short objects can be written compressed, on one line, using spaces only between properties, like this:

const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

//Line Length < 80
/*
document.getElementById("demo").innerHTML =
 "Hello Dolly.";
*/

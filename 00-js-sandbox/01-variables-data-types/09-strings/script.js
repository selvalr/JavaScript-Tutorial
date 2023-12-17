let x;

const name = "John";
const age = 31;

// Concatenation
x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x); //Hello, my name is John and I am 31 years old

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a property or method on a primitive string)
const s = new String("Hello World");

x = typeof s;
console.log(x); //Object

x = s.length;
console.log(x); //11

// Access value by key
x = s[0];
console.log(x); //H

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;
console.log(x); //String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}

// Change case
x = s.toUpperCase();
x = s.toLowerCase();

// charAt() - returns the character at the specified index
x = s.charAt(0);
console.log(x); //H

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf("d");
console.log(x); //10

// substring() - search a string for a specified value
x = s.substring(2, 5);
console.log(x); //llo

x = s.substring(7);
console.log(x); //orld

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);
console.log(x); //Hello

// trim() - remove whitespace from beginning and end of string
x = "         Hello World";
x = x.trim();
console.log(x); //Hello World

// replace() - replace all instances of a string
x = s.replace("World", "John");
console.log(x); //Hello John

// includes() - returns true if the string is found
x = s.includes("Hell");
console.log(x); //True

// valueOf() - returns the primitive value of a variable
x = s.valueOf();
console.log(x); //Hello World

// split() - returns an array of strings
x = s.split("");

console.log(x); //(11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

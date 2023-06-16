//1.Property Access on Strings
//The charAt() method returns the character at a specified index (position) in a string:
var str = "HELLO WORLD";
console.log(str.charAt(0)); // returns H

//ES5
var str = "HELLO WORLD";
console.log(str[0]); // returns H

//2.Strings Over Multiple Lines
//ES5 allows string literals over multiple lines if escaped with a backslash:
console.log(
  "Hello \
Dolly!"
);

//A safer way to break up a string literal, is to use string addition:
console.log("Hello " + "Dolly!");

//3.Reserved Words as Property Names
//ES5 allows reserved words as property names:new is a reserved word

var obj = { name: "John", new: "yes" };
console.log(obj.new);

//4.String trim()
//The trim() method removes whitespace from both sides of a string.
var str = "       Hello World!        ";
console.log(str.trim());

//5.Array.isArray()
//The isArray() method checks whether an object is an array.
/*
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);//true
}
*/

//6.Array forEach()
//The forEach() method calls a function once for each array element.

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction1);
console.log(txt);

function myFunction1(value) {
  txt = txt + "," + value;
}

//7.Array map()
//This example multiplies each array value by 2:

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction2);
console.log(numbers2);

function myFunction2(value) {
  return value * 2;
}

//8.Array filter()
//This example creates a new array from elements with a value larger than 18:
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction3);
console.log(over18);

function myFunction3(value) {
  return value > 18;
}

//9.Array reduce()
//This example finds the sum of all numbers in an array:
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction4);
console.log(sum);

function myFunction4(total, value) {
  return total + value;
}

//10.Array reduceRight()
//This example also finds the sum of all numbers in an array:

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction5);
console.log(sum);

function myFunction5(total, value) {
  return total + value;
}

//11.Array every()
//This example checks if all values are over 18:

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction6);
console.log(allOver18);

function myFunction6(value) {
  return value > 18;
}

//12.Array some()

//This example checks if some values are over 18:

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction7);
console.log(allOver18);

function myFunction7(value) {
  return value > 18;
}

//13.Array indexOf()

//Search an array for an element value and returns its position.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Banana") + 1;
console.log("index change", a);

//14.Array lastIndexOf()
//lastIndexOf() is the same as indexOf(), but searches from the end of the array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log(a);

//15.JSON.parse()
/*
A common use of JSON is to receive data from a web server.

Imagine you received this text string from a web server:

'{"name":"John", "age":30, "city":"New York"}'
The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:
*/

var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);

//16.JSON.stringify()
/*
A common use of JSON is to send data to a web server.

When sending data to a web server, the data has to be a string.

Imagine we have this object in JavaScript:
*/

var obj = { name: "John", age: 30, city: "New York" };
console.log(obj);

//17.Date.now()

//Date.now() returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).

var timInMSs = Date.now();
console.log(timInMSs);

//18.Date toISOString()
//The toISOString() method converts a Date object to a string, using the ISO standard format:

const d = new Date();
c = d.toISOString();
console.log(c);

//19.Date toJSON()

//toJSON() converts a Date object into a string, formatted as a JSON date.

//JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ:

d1 = new Date();
console.log(d1.toJSON());

//20.Property Getters and Setters

//ES5 lets you define object methods with a syntax that looks like getting or setting a property.

//This example creates a getter for a property called fullName:

// Create an object:
var person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

// Display data from the object using a getter:
console.log(person.fullName);

//21.Object.defineProperty()
//Object.defineProperty() is a new Object method in ES5.

//It lets you define an object property and/or change a property's value and/or metadata.

// Create an Object:
var person = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable: true,
  enumerable: true,
  configurable: true,
});

// Enumerate Properties
var txt = "";
for (var x in person) {
  txt += person[x] + "<br>";
}
console.log(txt);

//22.E5 Object Methods
//ES5 added a lot of new Object Methods to JavaScript:

//Managing Objects:

// Create object with an existing object as prototype
//Object.create(parent, donor)

// Adding or changing an object property
//Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
//Object.defineProperties(object, descriptors)

// Accessing Properties
//Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
//Object.getOwnPropertyNames(object)

// Accessing the prototype
//Object.getPrototypeOf(object)

// Returns enumerable properties as an array
//Object.keys(object)

//Protecting Objects
// Prevents adding properties to an object
//Object.preventExtensions(object)

// Returns true if properties can be added to an object
//Object.isExtensible(object)

// Prevents changes of object properties (not values)
//Object.seal(object)

// Returns true if object is sealed
//Object.isSealed(object)

// Prevents any changes to an object
//Object.freeze(object)

// Returns true if object is frozen
//Object.isFrozen(object)

//24.Function Bind()
//With the bind() method, an object can borrow a method from another object.

//This example creates 2 objects (person and member).

//The member object borrows the fullname method from the person object:

//Example
const person2 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person2.fullName.bind(member);
console.log(fullName());

//26.Trailing Commas
//ES5 allows trailing commas in object and array definitions:

//Object Example
person = {
  firstName: "John",
  lastName: " Doe",
  age: 46,
};
//Array Example
points = [1, 5, 10, 25, 40, 100];

//26.JSON Objects:
// Allowed:
/*
var person = '{"firstName":"John", "lastName":"Doe", "age":46}'
JSON.parse(person)
*/

// Not allowed:
/*
var person = '{"firstName":"John", "lastName":"Doe", "age":46,}'
JSON.parse(person)
*/

//JSON Arrays:
// Allowed:
/*
points = [40, 100, 1, 5, 25, 10]
*/

// Not allowed:
/*
points = [40, 100, 1, 5, 25, 10,]
*/

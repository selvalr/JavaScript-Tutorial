//1: Using Prototype to Add a Method to an Object

// Define a person object with a name property
function Person(name) {
    this.name = name;
  }
  
  // Add a greet method to the person object's prototype
  Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
  }
  
  // Create a new person object and call the greet method
  var person = new Person("John");
  person.greet(); // output: "Hello, my name is John"


//Example 2:

let obj1 = {
    name: "Joes",
    city: "salem",
    info: function () {
      return `${this.name} is from ${this.city}`;
    },
  };
  
  const obj2 = Object.create(obj1);
  obj2.name = "Raja";


  // Access the name property of obj1
console.log(obj1.name); // output: "Joes"

// Call the info method of obj1
console.log(obj1.info()); // output: "Joes is from salem"

// Access the name property of obj2
console.log(obj2.name); // output: "Raja"

// Call the info method of obj2, which inherits from obj1
console.log(obj2.info()); // output: "Raja is from salem"





//3Sample Working Codes :

let arr = ["apple", "orange"];
//console
arr.length;

let obj = {
  name: "Joes",
  city: "salem",
  info: function () {
    return `${this.name} from ${this.city}`;
  },
};
//console
obj.toString();

function myFunction() {}

/*
arr.__proto__
Array.prototype

All are object in JS

arr.__proto__.__proto__                     =>Object.prototype

arr.__proto__.__proto__.__proto__           => null

obj.__proto__                               =>Object.prototype
obj.__proto__.__proto__                     => null

myFunction.__proto__                        =>Function.prototype
myFunction.__proto__.__proto__              =>Object.prototype
myFunction.__proto__.__proto__.__proto__    => null


*/

let obj01 = {
  name: "Joes",
  city: "salem",
  info: function () {
    return `${this.name} is from ${this.city}`;
  },
};
/*
let obj2 = {
  name: "Raja",
};

//console
//obj2.__proto__

//obj2.__proto__ = obj1;

*/
const obj2 = Object.create(obj01);
obj2.name = "Raja";

//obj2.name;
//obj2.city;
//obj2.info();
obj2.city = "Chennai";
obj2.info();

Array.prototype.doubleLength = function () {
  return this.length * 2;
};

//arr.__proto__

Function.prototype.mybind = function () {
console.log("This is bind function in prototype");
};

function fun() {}

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
console.log(`Hello, my name is ${this.name}.`);
};

const alice = new Person("Alice");
const bob = new Person("Bob");

alice.greet(); // logs "Hello, my name is Alice."
bob.greet(); // logs "Hello, my name is Bob."
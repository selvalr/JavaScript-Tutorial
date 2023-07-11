//Sample Working Codes :

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
check in the type in console f12

All Array prototype:

arr.__proto__
Array.prototype

All are object in JS:

arr.__proto__.__proto__                     =>Object.prototype

arr.__proto__.__proto__.__proto__           => null

obj.__proto__                               =>Object.prototype
obj.__proto__.__proto__                     => null

myFunction.__proto__                        =>Function.prototype
myFunction.__proto__.__proto__              =>Object.prototype
myFunction.__proto__.__proto__.__proto__    => null


*/

let obj1 = {
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
const obj2 = Object.create(obj1);
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

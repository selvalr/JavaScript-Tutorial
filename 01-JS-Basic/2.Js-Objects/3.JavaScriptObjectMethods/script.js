// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// Display data from the object:
console.log(person.fullName());

//1.Adding a Method to an Object

person.name = function () {
  return this.id + " " + this.lastName;
};
console.log(person.name());

//2.Using Built-In Methods

person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
console.log(person.name());

//example

let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  alert("Hello!");
};

user.sayHi(); // Hello!

//example2:
let user1 = {
  // ...
};

// first, declare
function sayHi1() {
  alert("Hello!");
}

// then add as a method
user1.sayHi1 = sayHi1;

user1.sayHi1(); // Hello!

//5.Method shorthand
// these objects do the same

user2 = {
  sayHi: function () {
    alert("Hello");
  },
};

// method shorthand looks better, right?
user3 = {
  sayHi() {
    // same as "sayHi: function(){...}"
    alert("Hello");
  },
};

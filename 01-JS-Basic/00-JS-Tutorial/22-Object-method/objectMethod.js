const object = {
  method: function () {
    console.log("Hello, I'm a method!");
  },
};

object.method(); // prints "Hello, I'm a method!"

//1.You can also define methods using the shorthand notation, which uses the function keyword.

const object2 = {
  method() {
    console.log("Hello, I'm a method!");
  },
};

object2.method(); // prints "Hello, I'm a method!"

//2.You can also define methods using the arrow function notation, which is similar to the shorthand notation but uses the => instead of function keyword

const object3 = {
  method: () => {
    console.log("Hello, I'm a method!");
  },
};

object3.method(); // prints "Hello, I'm a method!"

//3.Inside the method, you can access the properties of the object using the this keyword.

const object4 = {
  property: "I'm a property",
  method: function () {
    console.log(this.property);
  },
};

object4.method(); // prints "I'm a property"

//4.Methods can also accept parameters and return values just like regular functions:

const object5 = {
  method: function (a, b) {
    return a + b;
  },
};

console.log(object5.method(1, 2)); // prints 3

//5.n javascript you can use class keyword to create objects with methods and properties, it follows the OOP concepts.

class Object {
  constructor() {
    this.property = "I'm a property";
  }
  method() {
    console.log("Hello, I'm a method!");
  }
}
const obj = new Object();
console.log(obj.property);
obj.method();

//6. Overall, methods are an essential part of object-oriented programming in JavaScript and are a powerful tool for working with complex data structures.

function checkEligiblity() {
  if (this.age >= 18) {
    console.log(`${this.firstname} age is ${this.age} eligible for vote`);
  } else {
    console.log(`${this.firstname} age is ${this.age} not eligible for vote`);
  }
}

const user1 = {
  firstname: "Joes",
  age: 35,
  eligiblity: checkEligiblity,
};
user1.eligiblity();
const user2 = {
  firstname: "Sara",
  age: 12,
  eligiblity: checkEligiblity,
};
user2.eligiblity();

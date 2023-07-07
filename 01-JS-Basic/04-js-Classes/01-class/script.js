/*
JavaScript Class Syntax
Use the keyword class to create a class.

Always add a method named constructor():

Syntax
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
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name + " " + myCar2.name);

//2.Class Methods

/*
 Syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
 */

class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car1("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");

//You can send parameters to Class methods:

class Car2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar0 = new Car2("Ford", 2014);
console.log("My car is " + myCar0.age(year) + " years old.");

/*
  use strict"
The syntax in classes must be written in "strict mode".

You will get an error if you do not follow the "strict mode" rules.

Example
In "strict mode" you will get an error if you use a variable without declaring it:
*/
/*
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    // date = new Date();  // This will not work
    const date = new Date(); // This will work
    return date.getFullYear() - this.year;
  }
}
  */

//1.class
// 2015 / es6
// class keyword
// class are fake

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la la ";
  }
}

const user1 = new CreateUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  18,
  "my address"
);
const user2 = new CreateUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);
const user3 = new CreateUser(
  "mohit",
  "vashsitha",
  "harshit@gmail.com",
  17,
  "my address"
);
// console.log(Object.getPrototypeOf(user1));

//2.
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

class Dog extends Animal {}

const tommy = new Dog("tommy", 3);
console.log(tommy); //Dog {name: 'tommy', age: 3}
console.log(tommy.isCute()); //true

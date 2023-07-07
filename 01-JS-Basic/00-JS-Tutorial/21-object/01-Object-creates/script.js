//1.Using object literals:
//This is the most common and simplest way to create an object. Object literals are enclosed in curly braces {} and consist of a set of key-value pairs. Here is an example:

const person = {
  name: "John",
  age: 30,
  job: "Developer",
};
console.log(person); //{name: 'John', age: 30, job: 'Developer'}

//2.Using the object constructor:
//The object constructor is a built-in function in JavaScript, which is used to create an object prototype. Here is an example:

const person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.job = "Developer";
console.log(person2); //{name: 'John', age: 30, job: 'Developer'}

//3. Using the Object.create() method:
//The Object.create() method is used to create an object with a specific prototype. example:
//Object.create(prototype,propertiesObject)
const personProto = {
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
const person3 = Object.create(personProto);
person3.name = "John";
person3.age = 30;
person3.job = "Developer";
console.log(person3.sayHello());
console.log(person3); //{name: 'John', age: 30, job: 'Developer'}

//4.Using class:
//The class is the latest addition to creating objects in JavaScript. example:

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}
const person4 = new Person("Tiya", 30, "Developer");
console.log(person4); //Person {name: 'Tiya', age: 30, job: 'Developer'}

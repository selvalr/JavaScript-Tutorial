/*
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
*/

const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };

  console.log(person.firstName);//John


  //1.Using an Object Literal

  const person1 = {firstName:"John", lastName:"Doe", age:50,eyeColor:"blue"};
  console.log(person.firstName + " is " + person.age + " years old.");

  //This example creates an empty JavaScript object, and then adds 4 properties:
  const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
console.log(person2);


//2.Using the JavaScript Keyword new

const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";


console.log(person3.age);


//JavaScript Objects are Mutable
const person4 = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  }
  
  const x = person4;
  x.age = 10;      // Will change both x.age and person.age
  console.log(x.age);//10
  console.log(x.firstName);
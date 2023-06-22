//Prototype Inheritance

//1.Using the prototype Property

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");
console.log("The nationality of my father is " + myFather.nationality);

//The JavaScript prototype property also allows you to add new methods to objects constructors:

function Person1(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

const myFather1 = new Person1("John", "Doe", 50, "blue");
console.log("My father is " + myFather.name());

//2.
const obj1 = {
  key1: "value1",
  key2: "value2",
};

// __proto__

// offical ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]]

// prototype

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);

//3.
function hello() {
  console.log("hello world");
}

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.

// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());

//6.
// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // {}
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "la la la la ";
};

const user1 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  18,
  "my address"
);
const user2 = createUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);
const user3 = createUser(
  "mohit",
  "vashsitha",
  "harshit@gmail.com",
  17,
  "my address"
);
console.log(user1);
console.log(user1.is18());

//7.
/*
// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function(){
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
  return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
  return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());

*/

//8.
/*
function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "la la la la ";
};

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

for (let key in user1) {
  // console.log(key);
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
*/

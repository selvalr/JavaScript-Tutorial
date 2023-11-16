//1.Primitive data type

let name = "Tutor Joes";  // String
let age = 30;           // Number
let isStudent = false;  // Boolean
let x;                  // Undefined
let id = Symbol();      // Symbol

//exam:
let x1 = 10;
let y1 = x1;
x1 = 20;
console.log(x1); // 20
console.log(y1); // 10

//2.Reference type

let user = {name: "Tutor Joes", age: 30};  // Object
let numbers = [1, 2, 3, 4, 5];             // Array
let today = new Date();                    // Object

//exam:
let user00 = {name: "John Doe", age: 30};
let user2 = user00;
user00.age = 25;
console.log(user00.age); // 25
console.log(user2.age); // 25


//Another Array example for reference data types

let arr1=[10,20,30];
let arr2=arr1;
console.log("Array 1 :",arr1);
console.log("Array 2 :",arr2);
arr1.push(40);
console.log("After Pushing element to arr1 : ");
console.log("Array 1 :",arr1);
console.log("Array 2 :",arr2);



//Object Clone use Spread and Object.assign() in JavaScript

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }


//The spread operator (...) can also be used to create a shallow copy of an object. Here is an example:

const obj01 = { a: 1, b: 2 };
const obj02 = { c: 3, d: 4 };
const obj03 = {...obj01, ...obj02};
console.log(obj03); // { a: 1, b: 2, c: 3, d: 4 }
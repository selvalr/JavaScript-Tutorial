// intro to arrays
// reference type
// how to create arrays

// ordered collection of items

let fruits1 = ["apple", "mango", "grapes"];
let numbers = [1, 2, 3, 4];
let mixed = [1, 2, 2.3, "string", null, undefined];
console.log(mixed); //1,2,2.3, "string", null, undefined
console.log(numbers); //[1,2,3,4]
console.log(fruits1[2]); //"grapes"

let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
console.log(fruits); //["apple", "mango", "grapes"]
fruits[1] = "banana";
console.log(fruits); //["apple","banana","grapes"]
console.log(typeof fruits); //object
console.log(typeof obj); //obj
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray(obj)); //false

// array indexing

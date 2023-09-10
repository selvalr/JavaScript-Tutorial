// typeof operator

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 22;
let firstName = "harshit";

console.log(typeof age); //number

// 22 -> "22"
// convert number to string.
age = age + "";
console.log(typeof age); //string

// convert string to number.

let myStr = +"34";
console.log(typeof myStr); //number

let age1 = "18";
age1 = Number(age1);
console.log(typeof age1); //number

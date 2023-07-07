//1.Exponentiation Operator
//The exponentiation operator (**) raises the first operand to the power of the second operand.

let x = 5;
let z = x ** 2;
console.log(z); //25

//x ** y produces the same result as Math.pow(x, y):

let x1 = 5;
let z1 = Math.pow(x1, 2);
console.log(z1); //25

//2.Exponentiation Assignment

//The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.

let x2 = 5;
x2 **= 2;
console.log(x2); //25

//3.JavaScript Array includes()
//ECMAScript 2016 introduced Array.includes to arrays.

//This allows us to check if an element is present in an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango");

console.log(fruits.includes("Mango")); //true

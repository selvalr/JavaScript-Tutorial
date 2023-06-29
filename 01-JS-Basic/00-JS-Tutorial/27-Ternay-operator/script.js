//Conditional (Ternary) Operator

/*
Syntax:

variableName = (condition) ? value1:value2 
*/

let age1 = 12;
let voteable = age1 < 18 ? "Too young" : "Old enough";
console.log(voteable + " to vote.");

//1.Handling null values
function welcome(name) {
  const res = name ? name : "Noname";
  console.log(res);
}
welcome(null);
welcome();
welcome("selva");

//2.Arrow functions
user = { name: "John", age: 30 };
console.log(user);
console.log(user.name);

const greeting = (user) => {
  const res = user.name ? user.name : "Noname";
  return "hello, " + res;
};
console.log(greeting(user));

//3.Conditional chains

/*
  avg>=90 A grade
  avg>=80 B grade
  C grade
*/

const avg = 90;
const grade = avg >= 90 ? "A grade" : avg >= 80 ? "B grade" : "c grade";
console.log("grade: " + grade);

//1.example
let a = 10,
  b = 5;
let c = a > b ? a : b;
console.log(c);
let d = a > b ? b : a;
console.log(d);

//2.example

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator

let age = 3;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);

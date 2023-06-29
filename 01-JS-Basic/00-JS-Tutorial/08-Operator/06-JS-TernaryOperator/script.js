//Ternary Operator

// (condition) ? true-statement : false-statement;

let age = 33;
let type = age > 18 ? "eligible" : "not eligible";
console.log(type); //eligible

//2.Ternary Operators
//Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

//3.
let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

number = -5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

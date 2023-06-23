//1.Random Number Generator
let randomNum = Math.random(); // generates 0 to 0.999...

//2.Now, let us see how we can use random() method to generate a random number between 0 and 10:

let randomNum1 = Math.random(); // generates 0 to 0.999
let numBtnZeroAndTen = randomNum1 * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // this gives between 0 and 10

//3.Math.random()
//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

console.log(Math.random());

//4.JavaScript Random Integers
// Returns a random integer from 0 to 9:

console.log(Math.floor(Math.random() * 10));
// Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * 101));

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;

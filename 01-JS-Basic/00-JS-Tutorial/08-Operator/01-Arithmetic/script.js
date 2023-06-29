let numOne = 4; //assign operator =
let numTwo = 3;
let sum = numOne + numTwo; //addition
let diff = numOne - numTwo; //Subtraction
let mult = numOne * numTwo; //Multiplication
let div = numOne / numTwo; //Division
let remainder = numOne % numTwo; //	Modulus (Division Remainder)

let powerOf = numOne ** numTwo; //Exponentiation (ES2016)
//(or)same exponentiation
let x3 = 5;
let z3 = Math.pow(x3, 2);
console.log(z3); //25

console.log("Add 4+3=", sum); // 7
console.log("sub 4-3=", diff); //1
console.log("multi 4*3=", mult); //12
console.log("div 4/3=", div); //1.33333333333
console.log("mod 4%3=", remainder); //1
console.log("pow 4**3=", powerOf); //64

//Incrementing
let x = 5;
//console.log(x++); //5
x++;
console.log(x); //6
let z = x;
console.log(z); //6

//Decrementing

let x1 = 5;
x1--;
let z1 = x1;
console.log(z1); //4

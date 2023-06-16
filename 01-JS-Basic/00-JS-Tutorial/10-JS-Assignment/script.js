//JS Assignment

//=
let x = 10;
console.log(x);

let y00 = 50;
let x00 = 10 + y00;
console.log(x00);

//+=
let x1 = 10;
x1 += 5;
console.log(x1);

let text = "Hello";
text += " World";
console.log(text);

//-=
let x2 = 10;
x2 -= 5;
console.log(x2);

//*=
let x3 = 10;
x3 *= 5;
console.log(x3);

// **=
let x4 = 10;
x4 **= 5;
console.log(x4);

// /=
let x5 = 10;
x5 /= 5;
console.log(x5);

// %=
let x6 = 10;
x6 %= 5;
console.log(x6);

//Shift Assignment Operators

// <<=  The Left Shift Assignment Operator left shifts a variable.

let y1 = -100;
y1 <<= 5;
console.log(y1);

// >>= The Right Shift Assignment Operator right shifts a variable (signed).

let y2 = -100;
y2 >>= 5;
console.log(y2);

// >>>= The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).

let y3 = -100;
y3 >>>= 5;
console.log(y3);

//Bitwise Assignment Operators -ES6

// &= The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.

let z = 10;
z &= 5;
console.log(z);

// |= The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.

let z1 = 10;
z1 |= 5;
console.log(z1);

// ^= The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.

let z2 = 10;
z2 ^= 5;
console.log(z2);

// Logical Assignment operators -ES6

// &&=  The Logical AND assignment operator is used between two values.

//If the first value is true, the second value is assigned.

let z3 = 10;
z3 &&= 5;
console.log(z3);

// ||= The Logical OR assignment operator is used between two values.

//If the first value is false, the second value is assigned.

let z4 = 10;
z4 ||= 5;
console.log(z4);

let x01 = undefined;
x01 ||= 5;
console.log(x01);

// ??= The Nullish coalescing assignment operator is used between two values.

//If the first value is undefined or null, the second value is assigned.

let z5 = 10;
z5 ??= 5;
console.log(z5);
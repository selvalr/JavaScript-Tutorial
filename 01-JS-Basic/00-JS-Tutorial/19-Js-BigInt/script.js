//JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.

//1.JavaScript Integer Accuracy
//JavaScript integers are only accurate up to 15 digits:

//Integer Precision:
let x = 999999999999999;
let y = 9999999999999999;
console.log(x); //999999999999999
console.log(y); //10000000000000000

//2.How to Create a BigInt

let x2 = 9999999999999999;
let y2 = 9999999999999999n;
console.log(x2); //1000000000000000
console.log(y2); //9999999999999999n

let x3 = 1234567890123456789012345n;
let y3 = BigInt(1234567890123456789012345);
console.log(x3); //1234567890123456789012345n
console.log(y3); //1234567890123456824475648n

//3.BigInt: A new JavaScript Datatype
//The JavaScript typeof a BigInt is "bigint":

let x1 = BigInt(999999999999999);
let type = typeof x1;
console.log(type); //bigint

//4.BigInt Operators
let x4 = 9007199254740995n;
let y4 = 9007199254740995n;
let z4 = x4 * y4;
console.log(z4); //81129638414606735738984533590025n

//5.BigInt Decimals
//A BigInt can not have decimals.

//BigInt Division Example
// let x6 = 5n;
// let y6 = x6 / 2; // Error: Cannot mix BigInt and other types, use explicit conversion.
// console.log(y6); //error

let x7 = 5n;
let y7 = Number(x7) / 2;
console.log(y7); //2.5

//6.BigInt Hex, Octal and Binary
//BigInt can also be written in hexadecimal, octal, or binary notation:

//BigInt Hex Example
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(hex); //9007199254740995n
console.log(oct); //9007199254740995n
console.log(bin); //9007199254740995n

//7.Precision Curiosity
//Rounding can compromise program security:

//MAX_SAFE_INTEGER Example
9007199254740992 === 9007199254740993; // is true !!!

//8.Minimum and Maximum Safe Integers
//ES6 added max and min properties to the Number object:

//-MAX_SAFE_INTEGER
//-MIN_SAFE_INTEGER

//MAX_SAFE_INTEGER Example
let x9 = Number.MAX_SAFE_INTEGER;
console.log(x9); //9007199254740991

//MIN_SAFE_INTEGER Example
let x10 = Number.MIN_SAFE_INTEGER;
console.log(x10); //-9007199254740991

//9.New Number Methods
//ES6 also added 2 new methods to the Number object:

//Number.isInteger()
//Number.isSafeInteger()

//The Number.isInteger() Method
//The Number.isInteger() method returns true if the argument is an integer.

//Example: isInteger()
console.log(Number.isInteger(10)); //true
console.log(Number.isInteger(10.5)); //false

//The Number.isSafeInteger() Method
//A safe integer is an integer that can be exactly represented as a double precision number.

//The Number.isSafeInteger() method returns true if the argument is a safe integer.

//Example isSafeInteger()
console.log(Number.isSafeInteger(10)); //true
console.log(Number.isSafeInteger(12345678901234567890)); //false

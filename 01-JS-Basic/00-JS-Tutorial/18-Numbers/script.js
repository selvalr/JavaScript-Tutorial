//1.Integers

//16 digit integer
var int1 = 1234567890123456; //accurate
console.log(int1);

//17 digit integer
var int2 = 12345678901234569; //will be 12345678901234568
console.log(int2);

//16 digit integer
var int3 = 9999999999999998; //will be 9999999999999998
console.log(int3);

//16 digit integer, last digit 9
var int4 = 9999999999999999; //will be 10000000000000000
console.log(int4);

//2.BigInt

//16 digit integer
var int1 = 1234567890123459n; //will be 1234567890123459
console.log(int1);

//17 digit integer
var int2 = 12345678901234569n; //will be 12345678901234569
console.log(int2);

//20 digit integer
var int3 = 9999999999999999999n; //will be 9999999999999999999
console.log(int3);

//3.Floating-point Numbers

//17 decimal places
var f1 = 123456789012345.9; //accurate
console.log(f1);

//18 decimal places
var f2 = 1234567890123456.9; //will be 1234567890123457
console.log(f2);

//19 decimal places
var f3 = 1234567890123456.79; //will be 1234567890123456.8
console.log(f3);

//i. Arithmetic Operations on Floating-point Numbers
var f1 = 5.1 + 5.2; //will be 10.3
console.log(f1);

var f2 = 10.1 + 10.2; //will be 20.299999999999997
console.log(f2);

var f3 = (10.1 * 100 + 10.2 * 100) / 100; //instead of 10.1 + 10.2
console.log(f3);

//ii.Example: Arithmetic Operation of Numeric Strings

var numStr1 = "5",
  numStr2 = "4";
var multiplication = numStr1 * numStr2; //returns20
var division = numStr1 / numStr2; //returns 1.25
var modulus = numStr1 % numStr2; //returns 1

//iii.Example: Arithmetic Operation on Number and String
var num = 5,
  str = "4";

var multiplication = num * str; //returns 20
var division = num / str; //returns 1.25
var modulus = num % str; //returns 1

//iv.Example: Arithmetic Operation on Number and String
var num = 5,
  str = "4";

var result = num + str; //returns "54"

//4.Binary, Octal, Hexadecimal, Exponential

var b = 0b100; // binary
var oct = 0o544; // octal
var hex = 0x123456789abcdef; // hexadecimal
var exp = 256e-5; // exponential

//5.Number() Function in JavaScript

var i = Number("100");
var f = Number("10.5");
var b = Number("0b100");
typeof i; // returns number
typeof f; // returns number
typeof b; // returns number

//i.Example: Number Object

var i = new Number("100");
var f = new Number("10.5");
var b = new Number("0b100");
typeof i; // returns object
typeof f; // returns object
typeof b; // returns object

//6,Compare Numbers

var num1 = new Number(100);
var num2 = Number("100");
var num3 = 100;

num1 == num2; // true
num1 === num2; // false

num2 == num3; //true
num2 === num3; // true

num1 == num3; //true
num1 === num3; //false

//7.Number Properties:
/*
Property	Description
MAX_VALUE	Returns the maximum number value supported in JavaScript
MIN_VALUE	Returns the smallest number value supported in JavaScript
NEGATIVE_INFINITY	Returns negative infinity (-Infinity)
NaN	Represents a value that is not a number.
POSITIVE_INFINITY	Represents positive infinity (Infinity).
*/

Number.MAX_VALUE; //1.7976931348623157e+308
Number.MIN_VALUE; //5e-324
Number.NEGATIVE_INFINITY; //-Infinity
Number.POSITIVE_INFINITY; //Infinity
Number.NaN; //NaN

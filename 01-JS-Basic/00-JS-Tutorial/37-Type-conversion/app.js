//Type Conversion

let a = 123;
a = a.toString();
console.log(typeof a); //123

//Others to String

a = 25;
console.log(a, typeof a);
a = String(25);
console.log(a, typeof a);

a = 25.5;
console.log(a, typeof a);
a = String(25.5);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = String(true);
console.log(a, typeof a);

a = new Date();
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string

a = 25;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);

console.groupCollapsed("string to number");

//String to number
a = "1234";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a); //Nan

a = "Tutor Joes";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

console.log(Number("123z")); // NaN (error reading a number at "z")

a = "35";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = "35.55";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = "35.55";
console.log(a, typeof a);
a = Number.parseFloat(a);
console.log(a); //35.55
a = parseFloat(a);
console.log(a, typeof a);
console.groupEnd();

a = "A123.12";
a = Number.parseFloat(a);
console.log(a); //NaN
a = "123.12A";
a = Number.parseFloat(a);
console.log(a); //123.12

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

//The Unary + Operator--The unary + operator can be used to convert a variable to a number:

let y = "5"; // y is a string
let x = +y; // x is a number
console.log(typeof y, typeof x);

//Boolean Conversion

alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("hello")); // true
alert(Boolean("")); // false

alert(Boolean("0")); // true
alert(Boolean(" ")); // spaces, also true (any non-empty string is true)

//Automatic Type Conversion

5 + null; // returns 5         because null is converted to 0
"5" + null; // returns "5null"   because null is converted to "null"
"5" + 2; // returns "52"      because 2 is converted to "2"
"5" - 2; // returns 3         because "5" is converted to 5
"5" * "2"; // returns 10        because "5" and "2" are converted to 5 and 2

//Automatic String Conversion

/*
document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
Numbers and booleans are also converted, but this is not very visible:

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"
*/

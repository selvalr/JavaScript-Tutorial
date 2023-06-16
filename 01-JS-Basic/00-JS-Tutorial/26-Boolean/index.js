//JavaScript Booleans
//A JavaScript Boolean represents one of two values: true or false.

//Boolean Function

var a = 10,
  b = 20;

var b1 = Boolean("Hello"); // true

var b2 = Boolean("h"); // true

var b3 = Boolean(10); // true

var b4 = Boolean([]); // true

var b5 = Boolean(a + b); // true

//Example: Boolean() Function
var b1 = Boolean(""); // false

var b2 = Boolean(0); // false

var b3 = Boolean(null); // false

var a;
var b4 = Boolean(a); // false

//Example: Boolean Object
var bool = new Boolean(true);

alert(bool); // true

//Example: Boolean Object in Condition
var bool = new Boolean(false);

if (bool) {
  alert("This will be executed.");
}

//Example: Boolean vs boolean
var b1 = new Boolean(true);
var b2 = true;

typeof b1; // object
typeof b2; // boolean

//Truthy Values

console.log(
  "100 is " +
    Boolean(100) +
    "<br>" +
    "3.14 is " +
    Boolean(3.14) +
    "<br>" +
    "-15 is " +
    Boolean(-15) +
    "<br>" +
    "Any (not empty) string is " +
    Boolean("Hello") +
    "<br>" +
    "Even the string 'false' is " +
    Boolean("false") +
    "<br>" +
    "Any expression (except zero) is " +
    Boolean(1 + 7 + 3.14)
);

//Everything Without a "Value" is False
let x = 0;
console.log(Boolean(x));

let x1 = -0;
console.log(Boolean(x1));

let x2 = "";
console.log(Boolean(x2));

let x3;
console.log(Boolean(x3));

let x4 = null;
console.log(Boolean(x4));

let x5 = false;
console.log(Boolean(x5));

let x6 = 10 / "Hallo";
console.log(Boolean(x6));
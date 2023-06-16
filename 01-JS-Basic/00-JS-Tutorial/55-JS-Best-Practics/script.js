//JavaScript Best Practices

//Avoid global variables, avoid new, avoid ==, avoid eval()

/*
Avoid Global Variables
Minimize the use of global variables.

This includes all data types, objects, and functions.

Global variables and functions can be overwritten by other scripts.

Use local variables instead, and learn how to use closures.

*/

/*
Always Declare Local Variables
All variables used in a function should be declared as local variables.

Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables.

Strict mode does not allow undeclared variables.



*/

//i.Declarations on Top

// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.9;
discount = 0.1;

fullPrice = price - discount;

//Initialize Variables
/*It is a good coding practice to initialize variables when you declare them.

This will:

Give cleaner code
Provide a single place to initialize variables
Avoid undefined values
*/
// Declare and initiate at the beginning
let firstName1 = "";
let lastName2 = "";
let price2 = 0;
let discount2 = 0;
let fullPrice2 = 0;
const myArray = [];
const myObject = {};

//ii.Declare Objects with const
let car = { type: "Fiat", model: "500", color: "white" };
car = "Fiat"; // Changes object to string

const car1 = { type: "Fiat", model: "500", color: "white" };
car = "Fiat"; // Not possible

//iii.Declare Arrays with const
let cars2 = ["Saab", "Volvo", "BMW"];
cars2 = 3; // Changes array to number

const cars3 = ["Saab", "Volvo", "BMW"];
cars3 = 3; // Not possible

/*
Don't Use new Object()

Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use {} instead of new Object()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()


*/

let x1 = ""; // new primitive string
let x2 = 0; // new primitive number
let x3 = false; // new primitive boolean
const x4 = {}; // new object
const x5 = []; // new array object
const x6 = /()/; // new regexp object
const x7 = function () {}; // new function object

//v.Beware of Automatic Type Conversions
let x = "Hello"; // typeof x is a string
x = 5; // changes typeof x to a number

//vi.When doing mathematical operations, JavaScript can convert numbers to strings:

let x00 = 5 + 7; // x.valueOf() is 12,  typeof x is a number
let x01 = 5 + "7"; // x.valueOf() is 57,  typeof x is a string
let x02 = "5" + 7; // x.valueOf() is 57,  typeof x is a string
let x03 = 5 - 7; // x.valueOf() is -2,  typeof x is a number
let x04 = 5 - "7"; // x.valueOf() is -2,  typeof x is a number
let x05 = "5" - 7; // x.valueOf() is -2,  typeof x is a number
let x06 = 5 - "x"; // x.valueOf() is NaN, typeof x is a number

//Subtracting a string from a string, does not generate an error but returns NaN (Not a Number):

//Example;
"Hello" - "Dolly"; // returns NaN

//Use === Comparison
0 == ""; // true
1 == "1"; // true
1 == true; // true

0 === ""; // false
1 === "1"; // false
1 === true; // false

//vi.Use Parameter Defaults
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }
}

//vii.End Your Switches with Defaults

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}

//vii.Avoid Number, String, and Boolean as Objects

let x11 = "John";
let y11 = new String("John");
x11 === y11; // is false because x is a string and y is an object.

//(or)

let x12 = new String("John");
let y12 = new String("John");
x12 == y12; // is false because you cannot compare objects.

//viii.Avoid Using eval()
//The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.
//Because it allows arbitrary code to be run, it also represents a security problem.

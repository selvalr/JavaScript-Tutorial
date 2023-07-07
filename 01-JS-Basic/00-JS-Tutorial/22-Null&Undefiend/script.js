//null
let num = null;

console.log(num); // null
console.log(typeof num); // "object"

// null
var saveButton = document.getElementById("save");

if (saveButton !== null) saveButton.submit();

//undefined Variable
let num1;
console.log(num1); //"undefined"

//.
function Greet() {
  return "Hi";
}

let str = Greet(); //"Hi"
console.log(str); //"Hi"

//.
function Greet1() {
  alert("Hi");
}
let str1 = Greet1(); //undefined

//3.Difference between null and undefined

//i.: null and undefined Variables
let num01 = null;
let num02;

console.log(num01); //null
console.log(num02); //undefined

//ii.The '' is not the same as null or undefined.

let str00 = "";

console.log(typeof str00); //string
console.log(str00 === null); //false
console.log(str00 === undefined); //false

//iii.Types
let num10 = null;
let num20;

console.log(typeof num10); //"object"
console.log(typeof num20); //"undefined"

//iv.Comparison using === and ==
let num100 = null;
let num200;

console.log(num100 == null); //true
console.log(num200 == undefined); //true

console.log(num100 == undefined); //true (incorrect)
console.log(num200 == null); //true (incorrect)

console.log(num100 === null); //true
console.log(num200 === undefined); //true

console.log(num100 === undefined); //false
console.log(num200 === null); //false

console.log(num100 == num200); //true (incorrect)
console.log(num100 === num200); //false

//v.Null and undefined with if-statements
let nu = null;
let nu2;

if (nu) {
  console.log(nu);
} else {
  console.log("num1 is null"); //num1 is null
}

if (nu2) {
  console.log(nu2);
} else {
  console.log("num2 is undefined"); //num2 is undefined
}

//vi.With Numeric Expresion
let n = null;
let n2;

console.log(n + 10); //10
console.log(n2 + 10); //NaN

//viiWith String Values
let num111 = null;
let num211;

console.log(num111 + " Hello"); //"null Hello"
console.log(num211 + " Hello"); //"undefined Hello"

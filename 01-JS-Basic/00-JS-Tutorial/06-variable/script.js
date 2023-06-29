//0. intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable
var firstName = "Harshit";

// use a variable
console.log(firstName);

// change value
firstName = "Mohit";
console.log(firstName);

//1.all types variables
var a; // variable
var b = "init"; // string
var c = "Hi" + " " + "Joe"; // = "Hi Joe"
var d = 1 + 2 + "3"; // = "33"
var e = [2, 3, 5, 8]; // array
var f = false; // boolean
var g = /()/; // RegEx
var h = function () {}; // function object
const PI = 3.14; // constant
var a = 1,
  b = 2,
  c = a + b; // one line
let z4 = "zzz"; // block scope local variable

//Rules for naming variables:

//-cannot be a reserved keyword:if,for,
//-should be meaningful:
//-cannot start with a number:(1name)
//-cannot contain a space or hyphen (-)
//-Are case-sensitive:Variables named apple and APPLE are two different variables.

/*
 4 Ways to Declare a JavaScript Variable:
 i.Using var
 ii.Using let
 iii.Using const
 iv.Using nothing
 
*/

//i.using var
var x = 5;
var y = 6;
var z = x + y;
console.log(z);

//ii.using let
let x1 = 5;
let y1 = 6;
let z1 = x1 + y1;
console.log(z1);

//iii.const use
const x2 = 5;
const y2 = 6;
const z2 = x2 + y2;
console.log(z2);

//iv.Using nothing-->They are automatically declared when first used:var x;

x = 5;
y = 6;
z = x + y;
console.log(z);

//One Statement, Many Variables

let person = "John Doe",
  carName = "Volvo",
  price = 200;
console.log(person, carName, price);

//Re-Declaring JavaScript Variables
var carName1 = "Volvo";
var carName1;
console.log(carName1); //volvo

let carName2 = "Volvo";
carName2;
console.log(carName2); //volvo

/*
let carName = "Volvo";
let carName;//no working

*/

//Variables are declared with the var keyword as follows.
//Value = undefined

var money;
let name2;
console.log(name2);

//You can also declare multiple variables with the same var keyword as follows −

var money, name;

//JavaScript Arithmetic

let arith = 5 + 2 + 3; // using operators like = and +:
console.log(arith); //10

let x3 = "John" + " " + "Doe"; //You can also add strings, but strings will be concatenated:
console.log(x3); //John Doe

let x4 = "5" + 2 + 3;
console.log(x4); //523

let x5 = 2 + 3 + "5";
console.log(x5); //55

//Correct JavaScript variables syntax:
/*
    var x = 10;
    var _value="sonu";
    var $accountNo=1999;
*/

//Incorrect JavaScript variables syntax:
/*
    var  123=30;  // cannot start with a digit
    var *aa=320;
    let my-name; // hyphens '-' aren't allowed in the name
*/

//JavaScript Dollar Sign $
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
console.log($); //Hello World
console.log($$$); //2
console.log($myMoney); //5

//JavaScript Underscore (_)

// let _lastName = "Johnson";
// let _x = 2;
// let _100 = 5;

//sample declaration:

var x = 10;
var y = 20;
var z = x + y;
console.log(z); //30

//JavaScript has 3 types of scope:
//1.JavaScript local Scope or Block Scope

function abc() {
  let carName = "volvo"; //local variable
  console.log("local scope value :" + carName);
}
//console.log(carName); //error the value is block only use
abc();

//2.Function scope
function myFunction() {
  let fruit = "apple"; //Function scope
  console.log(fruit); //apple
  if (true) {
    let fruit = "apple"; //block scope{}
    console.log(fruit); //apple
  }
}
myFunction();

//3.JavaScript global Scope

let data = 200; //global variable
function a1() {
  console.log("global scope:" + data); //200
}
function b1() {
  console.log("global scope:" + data); //200
}
a1(); //calling JavaScript function
b1();

//value
/*
false,true                  //boolean
18,3.12,0b10011,0xF6,NaN    //Number
"flower",'john',``             //string
undefined,null,infinity     //special
*/

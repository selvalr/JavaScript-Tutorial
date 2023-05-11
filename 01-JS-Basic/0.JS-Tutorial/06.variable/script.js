//Rules variables:
//cannot be a reserved keyword:if,for,
//should be meaningful:
//cannot start with a number:(1name)
//cannot contain a space or hyphen (-)
//Are case-sensitive:firstName,FirstName


/*
4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing
*/

//Correct JavaScript variables syntax:
/* 
    var x = 10;  
    var _value="sonu"; 
    var $accountNo=1999; 
*/

//Incorrect JavaScript variables syntax:
/*
    var  123=30;  
    var *aa=320;  
*/

//sample declaration:

var x = 10;
var y = 20;
var z = x + y;
document.write(z);

//JavaScript has 3 types of scope:
//1.JavaScript local Scope or Block Scope

function abc() {
  let carName = 'volvo'; //local variable
  console.log('local scope value :' + carName);
}
//console.log(carName); //error the value is block only use
abc();

//2.Function scope
function myFunction() {
  let fruit = 'apple'; //Function scope
}

//3.JavaScript global Scope

let data = 200; //global variable
function a() {
  console.log('global scope:' + data);
}
function b() {
  console.log('global scope:' + data);
}
a(); //calling JavaScript function
b();

//variables

var a; //variable
var b = 'init'; //string
var c = 'hi' + '' + 'selva'; //hi selva
var d = 1 + 2 + '3'; //"33"
var e = [2, 6, 8]; //array
var f = true; //boolean
var g = /()/; //regex
var h = function () {}; //function object
const pi = 3.14; //constant
var a = 1,
  b = 2,
  c = a + b; //one line
let z = 'zzz'; //block scope and local variable

//value
/*
false,true                  //boolean
18,3.12,0b10011,0xF6,NaN    //Number
"flower",'john'             //string
undefined,null,infinity     //special
*/

/*
JavaScript Statements

JavaScript statements are composed of:

Values, Operators, Expressions, Keywords, and Comments.
*/

//1.Semicolons:

//Semicolons are Optional:
/*
var1 = 10
var2 = 20
*/
//But when formatted in a single line as follows, you must use semicolons −
/*
  var1 = 10; var2 = 20;
*/

//Example1:

// Statement 1
var a, b, c; //(or)a=2;b=3,c=a+b;
// Statement 2
a = 2;
// Statement 3
b = 3;
// Statement 4
c = a + b;
document.getElementById("geek").innerHTML = "The value of c is " + c + ".";

//Example2:

let a1, b1, c1; // Declare 3 variables
a1 = 5; // Assign the value 5 to a (or) a = 5; b = 6; c = a + b;
b1 = 6; // Assign the value 6 to b
c1 = a1 + b1; // Assign the sum of a and b to c
console.log(c1);

//2.Code Blocks:

//Example:

function myFunction() {
  document.getElementById("geek1").innerHTML = "Hello";

  document.getElementById("geek2").innerHTML = "How are you?";
}

//3.White Space:

//Example:

//var a ='Hello Geek';
//var a =  'Hello Geek';

//A good practice is to put spaces around operators ( = + - * / ):

//let x = y + z;

//4.Case Sensitivity:

//So the identifiers Time and TIME will convey different meanings in JavaScript.

//5.Line Length and Line Breaks:

//Javascript code preferred line length by most programmers is upto 80 characters.
//The best place to break a code line is after an operator or a comma.(=,;)

//Example:

/*document.getElementById("geek1").innerHTML =
"Hello Geek!";*/

//5.Keywords:

//Keywords are reserved words and cannot be used as variable name.A Javascript keyword tells about what kind of operation it will perform.Some commonly used keywords are:

//Example:

/*
- break
- continue
- do..while
- for
- function
- return
-  var
- let
- const
 */

/*
JavaScript Keywords:
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

Our Reserved Words Reference lists all JavaScript keywords.

Here is a list of some of the keywords you will learn about in this tutorial:

Keyword	              Description
var	                Declares a variable
let	                Declares a block variable
const	              Declares a block constant
if	                Marks a block of statements to be executed on a condition
switch	            Marks a block of statements to be executed in different cases
for	                Marks a block of statements to be executed in a loop
function	          Declares a function
return	            Exits a function
try	                Implements error handling to a block of statements
*/

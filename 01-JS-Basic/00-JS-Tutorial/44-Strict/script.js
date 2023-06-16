//1.strict mode
//"use strict"; Defines that JavaScript code should be executed in "strict mode".

"use strict";

var x = 1; // valid in strict mode
y = 1; // invalid in strict mode

//2.strict mode

//i.Use of undefined variables:

("use strict");

x = 1; // error

//ii.Use of reserved keyword as name:

("use strict");
try {
  //  var for = 1; // error
  // var if = 1; // error
} catch (ex) {
  document.getElementById("errorMessage").innerHTML = ex;
}

//iii.Duplicate property names of an object:

("use strict");
try {
  var myObj = { myProp: 100, myProp: "test strict mode" }; // error
} catch (ex) {
  document.getElementById("errorMessage").innerHTML = ex;
}

//iv.Duplicate parameters:

("use strict");

function Sum(val, val) {
  return val + val;
} // error

//v.Assign values to read-only property:

("use strict");

var arr = [1, 2, 3, 4, 5];
arr.length = 10; // error

//vi.Modify arguments object:

("use strict");

function Sum(val1, val2) {
  // arguments = 100; // error
}

//vii.Octal literals:

("use strict");

// var oct = 030; // error

//viii.with statement:
/*
("use strict");
try {
  with (Math) {
    x = abs(200.234, 2); // error
  }
} catch (error) {
  console.log(error);
}
*/

//ix.Eval function to create a variable:

("use strict");

eval("var x = 1"); // error

//2.function stict

x = 1; //valid

function sum(val1, val2) {
  "use strict";

  result = val1 + val2; //error

  return result;
}

//Using an object, without declaring it, is not allowed:

("use strict");
x = { p1: 10, p2: 20 };
console.log(x);

//Deleting a variable (or object) is not allowed.

("use strict");
let x1 = 3.14;
// delete x1; // This will cause an error

//Deleting a function is not allowed.

("use strict");
function x(p1, p2) {}
// delete x; // This will cause an error

//Duplicating a parameter name is not allowed:

("use strict");
function x(p1, p1) {} // This will cause an error

//Octal escape characters are not allowed:

("use strict");
//let x = "\010"; // This will cause an error

//Writing to a read-only property is not allowed:

("use strict");
const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
obj.x = 3.14; // This will cause an error

//Writing to a get-only property is not allowed:

("use strict");
const obj = {
  get x() {
    return 0;
  },
};

obj.x = 3.14; // This will cause an error

//Deleting an undeletable property is not allowed:

("use strict");
delete Object.prototype; // This will cause an error

//The word arguments cannot be used as a variable:

("use strict");
//let arguments = 3.14;    // This will cause an error

//The with statement is not allowed:

("use strict");
//with (Math){x = cos(2)}; // This will cause an error

//For security reasons, eval() is not allowed to create variables in the scope from which it was called.
//In strict mode, a variable can not be used before it is declared:

("use strict");
eval("x = 2");
alert(x); // This will cause an error

//In strict mode, eval() can not declare a variable using the var keyword:

("use strict");
eval("var x = 2");
alert(x); // This will cause an error

//eval() can not declare a variable using the let keyword:

eval("let x = 2");
alert(x); // This will cause an error

//The this keyword refers to the object that called the function.

("use strict");
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

/*
Future Proof!
Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:

implements
interface
let
package
private
protected
public
static
yield




"use strict";
let public = 1500;      // This will cause an error
 */

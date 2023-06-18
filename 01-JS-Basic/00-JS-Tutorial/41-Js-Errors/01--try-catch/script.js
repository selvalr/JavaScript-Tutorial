//try catch
//The try statement defines a code block to run (to try).

/*
try {
  Block of code to try
}
//The catch statement defines a code block to handle any error.
catch(err) {
  Block of code to handle errors
}
*/

//The throw Statement
//The throw statement defines a custom error.
/*
throw "Too big";    // throw a text
throw 500;          // throw a number
*/

//The finally Statement
//The finally statement defines a code block to run regardless of the result.

/*
Syntax
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
*/

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x.trim() == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
  } catch (err) {
    message.innerHTML = "Input " + err;
  } finally {
    document.getElementById("demo").value = "";
  }
}

/*
Errors⚠
try {                           // block of code to try
undefinedFunction();
}
catch(err) {                    // block to handle errors
console.log(err.message);
}
Throw error
throw "My error message";    // throw a text
Input validation
var x = document.getElementById("mynum").value; // get input value
try { 
if(x == "")  throw "empty";                 // error cases
if(isNaN(x)) throw "not a number";
x = Number(x);
if(x > 10)   throw "too high";
}
catch(err) {                                    // if there's an error
document.write("Input is " + err);          // output error
console.error(err);                         // write the error in console
}
finally {
document.write("</br />Done");              // executed regardless of the try / catch result
}
Error name values
RangeErrorA number is "out of range"
ReferenceErrorAn illegal reference has occurred
SyntaxErrorA syntax error has occurred
TypeErrorA type error has occurred
URIErrorAn encodeURI() error has occurred

*/

//Error Handling

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

//Example:

try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log(err); //ReferenceError: fistName is not defined  at <anonymous>:4:20
}

try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.error(err); // we can use console.log() or console.error()
} finally {
  console.log("In any case I will be executed");
}

try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log("Name of the error", err.name);
  console.log("Error message", err.message);
} finally {
  console.log("In any case I will be executed");
}

throw "Error2"; // generates an exception with a string value
throw 42; // generates an exception with the value 42
throw true; // generates an exception with the value true
throw new Error("Required"); // generates an error object with the message of Required

const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();

//Error Types

//i.ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
let firstName = "Asabeneh";
let fullName = firstName + " " + lastName;
console.log(fullName);

//ii.SyntaxError: A syntax error has occurred
/*
let square = 2 x 2;
console.log(square)
console.log('Hello, world")
*/

//iii.TypeError: A type error has occurred
let num = 10;
console.log(num.toLowerCase());

//iv.Range Error
//A RangeError is thrown if you use a number that is outside the range of legal values.

//For example: You cannot set the number of significant digits of a number to 500.

let num1 = 1;
try {
  num1.toPrecision(500);
} catch (err) {
  document.getElementById("demo").innerHTML = err.name;
}

//v.URI (Uniform Resource Identifier) Error
//A URIError is thrown if you use illegal characters in a URI function:

try {
  decodeURI("%%%");
} catch (err) {
  document.getElementById("demo").innerHTML = err.name;
}

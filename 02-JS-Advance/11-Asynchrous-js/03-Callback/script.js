//callback function syntex
/*
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer)
 */

//add() function is called with arguments a, b
// and callback, callback will be executed just
// after ending of add() function
function add(a, b, callback) {
  document.write(`The sum of ${a} and ${b} is ${a + b}.` + "<br>");
  callback();
}

// disp() function is called just
// after the ending of add() function
function disp() {
  document.write("This must be printed after addition");
}

// Calling add() function
add(5, 6, disp);

//2.Here is an example of a higher-order function that takes a callback function as an argument:

//syntax:
/*
function higherOrderFunction(callback) {
  // some code
callback();
  // some code
}
*/

//i.The callback function can then be passed as an argument when the higher-order function is called:

function myCallback() {
  console.log("I am a callback function");
}
higherOrderFunction(myCallback);
// Output: "I am a callback function"

//ii.
setTimeout(function () {
  console.log("Hello, world!");
}, 1000); // Output: "Hello, world!" after 1 second

//iii.Callback functions are also commonly used in iteration, for example, forEach() or map() methods in JavaScript, to allow for specific actions to be taken on each element of an array for example

const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
}); // Output: 1 2 3

//2.A simple example of a callback function is the setTimeout() function, which is a built-in JavaScript function that allows you to execute a function after a specified amount of time has passed. The setTimeout() function takes two arguments: a callback function and a time delay (in milliseconds):

setTimeout(function () {
  console.log("Hello, world!");
}, 1000); // Output: "Hello, world!" after 1 second

//3.Callback functions are also commonly used in iteration, for example, forEach() or map() methods in JavaScript, to allow for specific actions to be taken on each element of an array for example

const number = [1, 2, 3];

number.forEach(function (number) {
  console.log(number);
}); // Output: 1 2 3

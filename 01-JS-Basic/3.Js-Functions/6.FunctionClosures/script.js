//Global Variables
//A function can access all variables defined inside the function, like this:

//Example
myFunction();
function myFunction() {
  let a = 4;
  console.log(a * a);
}

//But a function can also access variables defined outside the function, like this:

//Example
let a = 4;
myFunction();

function myFunction() {
 console.log( a * a);
} 


//Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

myFunction();
console.log( a * a);

function myFunction() {
  a = 4;
} 




//example

// Function to increment counter
function add1() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  // Trying to increment the counter
  function myFunction1(){
    document.getElementById("demo").innerHTML = add1();
  }
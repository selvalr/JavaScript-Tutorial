//JavaScript Callbacks

function mainFunc(getCallFun){
console.log("main function executed");
getCallFun();
}

function callbackFunc(){
console.log("callback function");
}

function callbackFunc2(){
console.log("callback function 2");
}

mainFunc(callbackFunc);







/*
Function Sequence
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

This example will end up displaying "Goodbye":

*/


function myDisplayer(some) {
    document.getElementById("demo1").innerHTML = some;
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();

  //This example will end up displaying "Hello":

//Example
function myDisplayer1(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
function myFirst1() {
  myDisplayer1("Hello");
}

function mySecond1() {
  myDisplayer1("Goodbye");
}

mySecond1();
myFirst1();


//2.Sequence Control
//Sometimes you would like to have better control over when to execute a function.

//Suppose you want to do a calculation, and then display the result.

//You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

//Example
function myDisplayer3(some) {
  document.getElementById("demo3").innerHTML = some;
}

function myCalculator3(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator3(5, 5);
myDisplayer3(result);

//Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):

//Example
function myDisplayer4(some) {
  document.getElementById("demo4").innerHTML = some;
}

function myCalculator4(num1, num2) {
  let sum = num1 + num2;
  myDisplayer4(sum);
}

myCalculator4(5, 5);


//1.JavaScript Callbacks

//A callback is a function passed as an argument to another function.

//Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:

//Example
function myDisplayer5(some) {
  document.getElementById("demo5").innerHTML = some;
}

function myCalculator5(num1, num2, myCallback5) {
  let sum = num1 + num2;
  myCallback5(sum);
}

myCalculator5(5, 5, myDisplayer5);
//In the example above, myDisplayer is a called a callback function.

//It is passed to myCalculator() as an argument.

/*
When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());


*/




//Example

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo6").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
//In the example above, (x) => x >= 0 is a callback function.

//It is passed to removeNeg() as an argument.


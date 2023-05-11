//Asynchronous JavaScript
//The examples used in the previous chapter, was very simplified.

//The purpose of the examples was to demonstrate the syntax of callback functions:


//Example
function myDisplayer(something) {
 console.log(something);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//In the example above, myDisplayer is the name of a function.

//It is passed to myCalculator() as an argument.






//2.Waiting for a Timeout
//When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

//Example
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("I love You !!");
}

/*
Note
When you pass a function as an argument, remember not to use parenthesis.

Right: setTimeout(myFunction, 3000);

Wrong: setTimeout(myFunction(), 3000);

*/


//Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

//Example
setTimeout(function() { myFunction1("I love You !!!"); }, 3000);

function myFunction1(value) {
  console.log(value);
}



//2.Waiting for Intervals:
//When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:

//Example
setInterval(myFunction2, 1000);

function myFunction2() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
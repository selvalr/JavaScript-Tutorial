// lexical scope
const myVar = "value1";

function myApp() {
  function myFunc() {
    //const myVar = "value59";
    const myFunc2 = () => {
      console.log("inside myFunc", myVar);
    };
    myFunc2(); //inside myFunc is 2nd call
  }

  console.log(myVar); //value1 is 1st call
  myFunc();
}

myApp();

//2.Lexical scope in JavaScript function

//Here's an example of lexical scope in JavaScript:

let globalVariable = "I am a global variable";

function outerFunction() {
  let outerVariable = "I am a variable in the outer function";

  function innerFunction() {
    let innerVariable = "I am a variable in the inner function";
    console.log(globalVariable); // Output: "I am a global variable"
    console.log(outerVariable); // Output: "I am a variable in the outer function"
    console.log(innerVariable); // Output: "I am a variable in the inner function"
  }

  innerFunction();
}
outerFunction();

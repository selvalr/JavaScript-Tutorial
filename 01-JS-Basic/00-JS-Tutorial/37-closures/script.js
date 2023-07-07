//Closure
//JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

//1.
function outer(name) {
  let outerVariable = "bread";

  function inner() {
    let innerVariable = "butter";
    console.log("innerValue", innerVariable);
    console.log("outerValue", outerVariable);
    console.log("hio", name);
  }
  return inner; //(or) inner()
}

let one = outer("selva");
one();
let two = outer("manan");
two();
one();

//2.

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5); //5 is x value
console.log(add5(10)); //10 is y value

let add100 = makeAdder(100); //100 is x value
console.log(add100(10)); //10 is y value
console.log(add100(25));

// 1.javascript closure example

// outer function
function greet() {
  // variable defined outside the inner function
  let name = "John";

  // inner function
  function displayName() {
    // accessing name variable
    return "Hi" + " " + name;
  }

  return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value

//2.Let us more example of inner functions

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);

//3.
/*
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
*/

//ii.Let us more example of inner functions

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs1 = outerFunction();

console.log(innerFuncs1.plusOne);
console.log(innerFuncs1.minusOne);

//Function declaration
function add(a, b) {
    return a + b;
}
let res=add(3,5);
console.log(res);



//2.Function return

function addtion(a, b) {
    return a + b;
}
console.log(addtion(1, 2)); // Output: 3



//3.Function with Arbitrary arguments

function sum() {
    let total = 0;
    for (let i = 0; i<arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

//or spread

function sum1(...args) {
    let total = 0;
    for (let i = 0; i<args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(sum1(1, 2, 3)); // 6
console.log(sum1(1, 2, 3, 4, 5)); // 15



//4.Function as Expression

const add2 = function(a, b) {
    return a + b;
};
console.log(add2(1, 2)); // 3


//5.Arrow fun:

/*const functionName = (parameters) =>{ function body }; */

const add3 = (a, b) =>{ return a + b };
console.log(add3(1, 2)); // 3

const add4 = (a, b) => a + b;
console.log(add4(1, 2)); // 3

//i. Using arrow functions with map():
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


//ii. Using arrow functions with filter():
let words = ['apple', 'banana', 'orange', 'grape'];
let filteredWords = words.filter(word =>word.length> 5);
console.log(filteredWords); // ['banana', 'orange']


//iii. Using arrow functions with reduce():
let number = [1, 2, 3, 4, 5];
let total = number.reduce((sum, number) => sum + number, 0);
console.log(total); // 15


//iv. Using arrow functions to create a closure:
let createCounter = () => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  };
  let counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2

  //6.Default Parameter Function

  function addition(a,b=5)
{
    return a+b;
}
console.log(addition(25,30));
console.log(addition(25));


//7.Function hoisting

//i.
hoistedFunction(); // Output: "I'm a hoisted function"

function hoistedFunction() {
   console.log("I'm a hoisted function");
}

//ii.er
/*
notHoistedFunction(); // ReferenceError
let notHoistedFunction = function(){
    console.log("I'm a function expression");
}
*/

//8.Nested Function

function outerFunction() {
    let outerVariable = 'I am a variable in the outer function';
  
    function innerFunction() {
      let innerVariable = 'I am a variable in the inner function';
      console.log(outerVariable); // Output: "I am a variable in the outer function"
      console.log(innerVariable); // Output: "I am a variable in the inner function"
    }
  
  innerFunction();
  }
  outerFunction();


  //9.Lexical scope in JavaScript function

  let globalVariable = 'I am a global variable';

    function outerFunction() {
      let outerVariable = 'I am a variable in the outer function';

      function innerFunction() {
        let innerVariable = 'I am a variable in the inner function';
        console.log(globalVariable); // Output: "I am a global variable"
        console.log(outerVariable); // Output: "I am a variable in the outer function"
        console.log(innerVariable); // Output: "I am a variable in the inner function"
      }

    innerFunction();
    }
    outerFunction();

//1.
function outer(name){
    let outerVariable="bread";

    function inner(){
        let innerVariable="butter";
        console.log('innerValue',innerVariable);
        console.log('outerValue',outerVariable);
        console.log('hio',name);
    }
    return inner
}

let one=outer('selva')
one();
let two=outer("manan");
two();
one();

//2.

function makeAdder(x){
  return function(y){
    return x+y;
  }
}

let add5=makeAdder(5);//5 is x value
console.log(add5(10));//10 is y value

let add100=makeAdder(100);//100 is x value
console.log(add100(10));//10 is y value
console.log(add100(25));

// javascript closure example

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
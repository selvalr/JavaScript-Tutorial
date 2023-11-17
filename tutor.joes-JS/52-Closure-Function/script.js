//Closure function

function outerFunction(x) {
    return function innerFunction(y) {
      return x + y;
    }
  }
  
  const addFive = outerFunction(5);
  console.log(addFive(3)); // 8
  


  //2.Here is an example of a closure function:

function createCounter() {
    let count = 0;
    return function() {
      return count++;
    }
  }
  
  const counter = createCounter();
  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); // 2
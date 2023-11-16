//Rest-parameter
function myFunction(first, second, ...rest) {
    console.log(first);
    console.log(second);
    console.log(rest);
  }
  

  //spread

  let myArray = [1, 2, 3];
let newArray = [...myArray, 4, 5];
console.log(newArray);
// Output: [1, 2, 3, 4, 5]
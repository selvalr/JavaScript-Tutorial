//1.
function foo() {
  return [1, 2, 3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

//2.

function getCar() {
  return {
    make: "Tesla",
    model: "g95",
    metadata: {
      vin: "123abc",
      miles: "12000",
    },
  };
}

const { make, model } = getCar();
console.log(make, model); // Tesla g95
/*
const {make, metadata: {miles}} = getCar();
console.log(make, miles); // Tesla 12000
*/

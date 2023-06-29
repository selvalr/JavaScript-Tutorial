//Unary plus (+)-->Convert a value into a number
let x = 10;
let y = +x;

console.log(y); // 10

let s = "10";
console.log(+s); // 10

let f = false,
  t = true;

console.log(+f); // 0
console.log(+t); // 1

let person = {
  name: "John",
  toString: function () {
    return "25";
  },
};

console.log(+person); //25

let person2 = {
  name: "John",
  toString: function () {
    return "25";
  },
  valueOf: function () {
    return "30";
  },
};

console.log(+person2); //30

//2.Unary minus (-)--->Convert a value into a number and negate it
let x1 = 10;
let y1 = -x1;

console.log(y1); // -10

//3.Increment / Decrement operators
let age = 25;
++age;
console.log(age); // 26

let weight = 90;
--weight;
console.log(weight); // 89

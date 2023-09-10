let numbers = [1, 2, 3];

//console.log(Object.getPrototypeOf(numbers)); //[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(Array.prototype); //[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(numbers); //[1, 2, 3]

function hello() {
  console.log("hello");
}
hello(); //hello

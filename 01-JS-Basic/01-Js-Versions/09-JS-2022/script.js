//1.Array method at

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit); //Apple
let fruit3 = fruits[2];
console.log(fruit3); //Apple

//2.String method at

const name = "W3Schools";
let letter = name.at(2);
console.log(letter); //S

let letter2 = name[2];
console.log(letter2); //S

//3.Regex /d
let text = "Give 100%!";
let pattern = /\d/g;
let result = text.match(pattern);
console.log(result); //['1','0','0']

//4.Object has own
const object1 = {
  prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));
// Expected output: true

console.log(Object.hasOwn(object1, "toString"));
// Expected output: false

console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// Expected output: false

//5.error cause
/*
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
*/

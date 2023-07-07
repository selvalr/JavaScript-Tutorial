//1.JavaScript String trimStart()
//ES2019 added the String method trimStart() to JavaScript.

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.

let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
console.log(text2.length); //17

//2.JavaScript String trimEnd()
//ES2019 added the String method trimEnd() to JavaScript.

//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

let text10 = "     Hello World!     ";
let text20 = text10.trimEnd();
console.log(text20.length); //17

//3.JavaScript Object fromEntries()
//ES2019 added the Object method fromEntries() to JavaScript.

//The fromEntries() method creates an object from iterable key / value pairs.

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];

const myObj = Object.fromEntries(fruits);
console.log(myObj.pears); //900

//4.Optional catch Binding
//From ES2019 you can omit the catch parameter if you don't need it:.

//Before 2019:
/*
try {
// code
} catch (err) {
// code
}

//After 2019:

try {
// code
} catch {
// code
}
*/

//5.JavaScript Array flat()
//ES2019 added the Array flat() method to JavaScript.

//The flat() method creates a new array by flattening a nested array.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr); //(6) [1, 2, 3, 4, 5, 6]

//6.JavaScript Array flatMap()
//ES2019 added the Array flatMap() method to JavaScript.

//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const myArr2 = [1, 2, 3, 4, 5, 6];
const newArr1 = myArr2.flatMap((x) => x * 2);
console.log(newArr1); //(6) [2, 4, 6, 8, 10, 12]

//7.Stable Array sort()
//ES2019 revised the Array sort() method.
/*
Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.

After ES2019, browsers must use a stable sorting algorithm:

When sorting elements on a value, the elements must keep their relative position to other elements with the same value.
*/

const myArr1 = [
  { name: "X00", price: 100 },
  { name: "X01", price: 100 },
  { name: "X02", price: 100 },
  { name: "X03", price: 100 },
  { name: "X04", price: 110 },
  { name: "X05", price: 110 },
  { name: "X06", price: 110 },
  { name: "X07", price: 110 },
];
myArr1.sort((p1, p2) => {
  if (p1.price < p2.price) return -1;
  if (p1.price > p2.price) return 1;
  return 0;
});

let txt2 = "";
myArr1.forEach(myFunction2);

function myFunction2(value) {
  txt2 += value.name + " " + value.price + "<br>";
}
console.log(txt2); //X00 100<br>X01 100<br>X02 100<br>X03 100<br>X04 110<br>X05 110<br>X06 110<br>X07 110<br>

//8.Revised JSON.stringify()
//ES2019 revised the JSON stringify() method.

//Before 2019, JSON could not stringify character encoded with \.

let text = JSON.stringify("\u26D4");
console.log(JSON.parse(text)); //-

//9.Separator Symbols
/*
Line separators and paragraph separator symbols (\u2028 and \u2029) are now allowed in string literals.

Before 2019, these were treated as line terminators and resulted in error exceptions:
*/

// This is valid in ES2019:
let text3 = "\u2028";
console.log(text3); //

//10.Revised Function toString()
//ES2019 revised the Function toString() method.
/*
The toString() method returns a string representing the source code of a function.

From 2019, toString() must return the source code of the function including comments, spaces, and syntax details.

Before 2019, different browsers returned different variants of the function (like without comments and spaces). From 2019 the function should be returned exactly as it is written.
*/

function myFunction(p1, p2) {
  return p1 * p2;
}

console.log(myFunction.toString());
/*
OUTPUT:
function myFunction(p1, p2) {
  return p1 * p2;
}
*/

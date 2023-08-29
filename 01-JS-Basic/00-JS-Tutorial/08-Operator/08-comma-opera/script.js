//syntax:
// expr1, expr2, expr3/* , … */

let x = 1;
x = (x++, x);
console.log(x); // Expected output: 2

x = (2, 3);
console.log(x); // Expected output: 3

/*
The comma operator is completely different from commas used as syntactic separators in other locations, which include:

Elements in array initializers ([1, 2, 3])
Properties in object initializers ({ a: 1, b: 2 })
Parameters in function declarations/expressions (function f(a, b) { … })
Arguments in function calls (f(1, 2))
Binding lists in let, const, or var declarations (const a = 1, b = 2;)
Import lists in import declarations (import { a, b } from "c";)
Export lists in export declarations (export { a, b };)

*/

//1.
function Func1() {
  console.log("one");
  return "one";
}
function Func2() {
  console.log("two");
  return "two";
}
function Func3() {
  console.log("three");
  return "three";
}

// Three expressions are
// given at one place
let x1 = (Func1(), Func2(), Func3());

console.log(x1);

//2.
for (let a = 0, b = 5; a <= 5; a++, b--) {
  console.log(a, b);
}

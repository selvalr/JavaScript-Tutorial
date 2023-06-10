//syntax:
// expr1, expr2, expr3/* , … */

let x = 1;

x = (x++, x);

console.log(x);
// Expected output: 2

x = (2, 3);

console.log(x);
// Expected output: 3

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

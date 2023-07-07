//1.JavaScript BigInt
//JavaScript BigInt variables are used to store big integer values that are too big to be represented by a a normal JavaScript Number.

//JavaScript integers are only accurate up to about 15 digits.

//Integer Example
let x = 999999999999999;
let y = 9999999999999999; // too big
console.log(x); //999999999999999
console.log(y); //10000000000000000

//BigInt Example
let x1 = 9999999999999999;
let y1 = 9999999999999999n;
console.log(x1); //10000000000000000
console.log(y1); //9999999999999999n

//To create a BigInt, append n to the end of an integer or call BigInt():

//Example
let x2 = 1234567890123456789012345n;
let y2 = BigInt(1234567890123456789012345);
console.log(x2); //1234567890123456789012345n
console.log(y2); //1234567890123456824475648n

//The JavaScript typeof a BigInt is "bigint":

//Example
let x3 = BigInt(999999999999999);
let type = typeof x3;
console.log(type); //bigint

//2.JavaScript String matchAll()
//Before ES2020 there was no string method that could be used to search for all occurrences of a string in a string.

//Example
let text2 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator1 = text2.matchAll("Cats");
console.log(Array.from(iterator1)); //(2) [Array(1), Array(1)]

//If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

//Example
let text3 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator2 = text3.matchAll(/Cats/g);
console.log(Array.from(iterator2)); //(2) [Array(1), Array(1)]
//If you want to search case insensitive, the insensitive flag (i) must be set:

//Example
let text4 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator3 = text2.matchAll(/Cats/gi);
console.log(Array.from(iterator3)); //(2) [Array(1), Array(1),Array(1)]

//3.The Nullish Coalescing Operator (??)
//The ?? operator returns the first argument if it is not nullish (null or undefined).

//Otherwise it returns the second.

//Example
let name1 = null;
let text = "missing";
let result = name1 ?? text;
console.log(result); //missing

//4.The Optional Chaining Operator (?.)
//The Optional Chaining Operator returns undefined if an object is undefined or null (instead of throwing an error).

//Example
const car = { type: "Fiat", model: "500", color: "white" };
let name = car?.name;
console.log(name); //undefined

//5.The &&= Operator
//The Logical AND Assignment Operator is used between two values.

//If the first value is true, the second value is assigned.

//Logical AND Assignment Example
let x4 = 10;
x4 &&= 5;
console.log((x4 &&= 5)); //5

//6.The ||= Operator
//The Logical OR Assignment Operator is used between two values.

//If the first value is false, the second value is assigned.

//Logical OR Assignment Example
let x5 = 10;
x5 ||= 5;
console.log((x5 ||= 5)); //10

//7.The ??= Operator
//The Nullish Coalescing Assignment Operator is used between two values.

//If the first value is undefined or null, the second value is assigned.

//Nullish Coalescing Assignment Example
let x6 = 10;
x6 ??= 5;

console.log((x6 ??= 5)); //10

//8.Promise allSettled():

//Promise.allSettled([prom1,prom2,prom3]).then {}

//9.Dynamic Import

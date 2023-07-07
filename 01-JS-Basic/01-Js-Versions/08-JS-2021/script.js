//1.Promise any():

//const first = await Promise.any([prom1,prom2,prom3]);

//2.JavaScript String ReplaceAll()
//ES2021 introduced the string method replaceAll():

let text = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll("cats", "dogs");
console.log(text); //I love dogs. Dogs are very easy to love. Dogs are very popular.

//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

let text1 = "I love cats. Cats are very easy to love. Cats are very popular.";

text1 = text1.replaceAll(/Cats/g, "Dogs");
text1 = text1.replaceAll(/cats/g, "dogs");
console.log(text1); //I love dogs. Dogs are very easy to love. Dogs are very popular.

//3.ES2020 introduced the string method matchAll().

//JavaScript Numeric Separator (_)
//ES2021 introduced the numeric separator (_) to make numbers more readable:

const num = 1_000_000_000;
console.log(num); //1000000000
//The numeric separator is only for visual use.

//Example
const num1 = 1_000_000_000;

const num2 = 1000000000;
num1 === num2;
console.log(num1 === num2); //true
//The numeric separator can be placed anywhere in a number:

//Example
const num3 = 1_2_3_4_5;
console.log(num3); //12345

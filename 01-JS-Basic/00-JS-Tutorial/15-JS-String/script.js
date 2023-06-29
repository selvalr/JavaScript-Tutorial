//String

//Quotes

//let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

//backticks advantage
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

//Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
* John
* Pete
* Mary
`;

console.log(guestList); // a list of guests, multiple lines

//error
/*
let guestList1 = "Guests: // Error: Unexpected token ILLEGAL
  * John";
*/

//2.Special characters

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList2); // a multiline list of guests, same as above

//

//As a simpler example, these two lines are equal, just written differently:

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // true

// backslash
console.log(`The backslash: \\`); // The backslash: \
console.log("I'm the Walrus!"); // I'm the Walrus!
console.log("I'm the Walrus!"); // I'm the Walrus!

//String length
//The length property has the string length:

console.log(`My\n`.length); // 3

//Accessing characters
//To get a character at position pos, use square brackets [pos] or call the method str.at(pos). The first character starts from the zero position:

let str = `Hello`;

// the first character
console.log(str[0]); // H
console.log(str.at(0)); // H

// the last character
console.log(str[str.length - 1]); // o
console.log(str.at(-1)); //o

//The square brackets always return undefined for negative indexes, for instance:

let str3 = `Hello`;

console.log(str3[-2]); // undefined
console.log(str3.at(-2)); // l

//We can also iterate over characters using for..of:

for (let char of "Hello") {
  console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

//4.Strings are immutable

//Let’s try it to show that it doesn’t work:
/*
let str = 'Hi';

str[0] = 'h'; // error
console.log( str[0] ); // doesn't work
*/

//The usual workaround is to create a whole new string and assign it to str instead of the old one.

//For instance:
/*
let str = 'Hi';

str = 'h' + str[1]; // replace the string

console.log( str ); // hi
*/

//5.Changing the case
//Methods toLowerCase() and toUpperCase() change the case:

console.log("Interface".toUpperCase()); // INTERFACE
console.log("Interface".toLowerCase()); // interface

//Or, if we want a single character lowercased:

console.log("Interface"[0].toLowerCase()); // 'i'

//7.Comparing strings

//A lowercase letter is always greater than the uppercase:

console.log("a" > "Z"); // true

//Letters with diacritical marks are “out of order”:

console.log("Österreich" > "Zealand"); // true

/*
str.codePointAt(pos)
Returns a decimal number representing the code for the character at position pos:

// different case letters have different codes
console.log( "Z".codePointAt(0) ); // 90
console.log( "z".codePointAt(0) ); // 122
console.log( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)
String.fromCodePoint(code)
Creates a character by its numeric code

console.log( String.fromCodePoint(90) ); // Z
console.log( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)
Now let’s see the characters with codes 65..220 (the latin alphabet and a little bit extra) by making a string of them:

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
*/

//Correct comparisons

console.log("Österreich".localeCompare("Zealand")); // -1

//8.String indexing

let firstName = "harshitdfjakldsfdf";

//  h    a   r   s   h   i   t
//  0    1   2   3   4   5   6

// console.log(firstName[0]);
// length of string
// firstName.length

console.log(firstName.length);

console.log(firstName[firstName.length - 2]);

// last Index : length - 1

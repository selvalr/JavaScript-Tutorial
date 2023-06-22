//String

//Quotes

let single = "single-quoted";
let double = "double-quoted";

let backticks = `backticks`;

//
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

//Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
* John
* Pete
* Mary
`;

alert(guestList); // a list of guests, multiple lines

//error
/*
let guestList1 = "Guests: // Error: Unexpected token ILLEGAL
  * John";
*/

//2.Special characters

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList2); // a multiline list of guests, same as above

//

//As a simpler example, these two lines are equal, just written differently:

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

// backslash
alert(`The backslash: \\`); // The backslash: \
alert("I'm the Walrus!"); // I'm the Walrus!
alert("I'm the Walrus!"); // I'm the Walrus!

//String length
//The length property has the string length:

alert(`My\n`.length); // 3

//Accessing characters
//To get a character at position pos, use square brackets [pos] or call the method str.at(pos). The first character starts from the zero position:

let str = `Hello`;

// the first character
alert(str[0]); // H
alert(str.at(0)); // H

// the last character
alert(str[str.length - 1]); // o
alert(str.at(-1));

//The square brackets always return undefined for negative indexes, for instance:

let str3 = `Hello`;

alert(str3[-2]); // undefined
alert(str3.at(-2)); // l

//We can also iterate over characters using for..of:

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

//4.Strings are immutable

//Let’s try it to show that it doesn’t work:
/*
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work
*/

//The usual workaround is to create a whole new string and assign it to str instead of the old one.

//For instance:
/*
let str = 'Hi';

str = 'h' + str[1]; // replace the string

alert( str ); // hi
*/

//5.Changing the case
//Methods toLowerCase() and toUpperCase() change the case:

alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface

//Or, if we want a single character lowercased:

alert("Interface"[0].toLowerCase()); // 'i'

//7.Comparing strings

//A lowercase letter is always greater than the uppercase:

alert("a" > "Z"); // true

//Letters with diacritical marks are “out of order”:

alert("Österreich" > "Zealand"); // true

//
/*
str.codePointAt(pos)
Returns a decimal number representing the code for the character at position pos:

// different case letters have different codes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)
String.fromCodePoint(code)
Creates a character by its numeric code

alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)
Now let’s see the characters with codes 65..220 (the latin alphabet and a little bit extra) by making a string of them:

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
*/

//Correct comparisons

alert("Österreich".localeCompare("Zealand")); // -1

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

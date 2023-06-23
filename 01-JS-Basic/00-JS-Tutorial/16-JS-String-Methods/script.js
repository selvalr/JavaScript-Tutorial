//append
let a = "selva";
a += "manan";
console.log("append" + a);

//escape
let c = "she can't run";
console.log(c);

//1.string length:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

let lastIndex = text.length - 1;
console.log(lastIndex); // 26
console.log(text[lastIndex]); // z

//Extracting String Parts:
/*
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/

//2.slice(start, end)
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);
console.log(part); //Banana

let text2 = "Apple, Banana, Kiwi";
let part2 = text2.slice(7);
console.log(part2); //banana,kiwi

let text3 = "Apple, Banana, Kiwi";
let part3 = text3.slice(-12); //Banana, Kiwi
console.log(part3);

let text4 = "Apple, Banana, Kiwi";
let part4 = text4.slice(-12, -6);
console.log(part4); //Banana is back side to left

//3.substring(start, end):
//substring() is similar to slice().
//negative value not workings
let str5 = "Apple, Banana, Kiwi";
let part5 = str5.substring(7, 13);
console.log(part5); //Banana is a output The difference is that start and end values less than 0 are treated as 0 in substring().

//4.substr(start,s length):
//substr() is similar to slice().

let str6 = "Apple, Banana, Kiwi";
let part6 = str6.substr(7, 6); //B start 7 is end 6 in A
console.log(part6); //Banana is The difference is that the second parameter specifies the length of the extracted part.
console.log(str6.substr(7));
console.log(str.substr(-4));

//5.Replacing String Content:
let text7 = "Please visit Microsoft and Microsoft";
let newText = text7.replace("Microsoft", "W3Schools");
console.log(newText); //Please visit W3Schools!

//To replace case insensitive, use a regular expression with an /i flag (insensitive):

console.log(text7.replace(/MICROSOFT/i, "W3Schools"));

//To replace all matches, use a regular expression with a /g flag (global match):

console.log(text7.replace(/Microsoft/g, "W3Schools"));

//6.JavaScript String ReplaceAll():-ES2021
let text8 = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text8.replaceAll("Cats", "Dogs");
text = text8.replaceAll("cats", "dogs");
console.log(text); //I love dogs. Cats are very easy to love. Cats are very popular.

//If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

console.log(text.replaceAll(/Cats/g, "Dogs"));
console.log(text.replaceAll(/cats/g, "dogs"));

//7.JavaScript String toUpperCase() & lowercase:
let h = "selva";
let cap = h.toUpperCase();
console.log(cap); //SELVA
console.log(cap.toLowerCase()); //selva

//8.JavaScript String concat():
let text11 = "Hello";
let text21 = "World";
let text31 = text11.concat(" ", text21);
console.log(text31); //Hello World

//The concat() method can be used instead of the plus operator. These two lines do the same:

console.log((text = "Hello" + " " + "World!"));
console.log((text = "Hello".concat(" ", "World!")));

//9.trim(): Removes trailing space in the beginning or the end of a string.
let text12 = "      Hello World!      ";
let text22 = text12.trim();
console.log(text22); //Hello world

//9.trimStart & trimend(): Removes trailing space in the beginning or the end
let tex1 = "     Hello World!     ";
let tex2 = text1.trimStart();
console.log(tex2);

let te = "     Hello World!     ";
let te1 = te.trimEnd();
console.log(te1);

//10.JavaScript String Padding:
//-string method of paddStrat and end method
let text13 = "5";
let padded13 = text13.padStart(4, "x");
console.log(padded13); //xxx5
console.log(text.padStart(4, "0"));

let numb = 5;
let text14 = numb.toString();
let padded = text14.padStart(4, "0");
console.log(padded); //0005

//padend
let text5 = "5";
let padded5 = text5.padEnd(4, "0");
console.log(padded5);

let text6 = "5";
let padded6 = text6.padEnd(4, "x");
console.log(padded6);

let num = 5;
let textt = num.toString();
let padde = textt.padEnd(4, "0");
console.log(padde);

//Extracting String Characters:
/*
There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]

*/

//11. charAt(position)->index of position
let t = "HELLO WORLD";
let char = t.charAt(0);
console.log(char); //H

//12.charCodeAt(position)->unicode of the character at a specified index in a string:
let t2 = "HELLO WORLD";
let char2 = t2.charCodeAt(0);
console.log(char2); //72

//13.Property access [ ]->ECMAScript 5 (2009) allows property access [ ] on strings:
let text15 = "HELLO WORLD";
let char3 = text15[0];
console.log(char3); //H

//14.split(): The split method splits a string at a specified place
/*
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/

let text16 = "a,b,c,d,e,f";
const myArray = text16.split(",");
console.log(myArray[0]); //a

let myValue = "mathematics";
console.log(myValue.split("e")); //["math","matics"]
console.log("hello selva".split("o")); //["hell","selva"]
console.log("welcome to selva".split(" ")); //["welcome","to","selva"]
console.log("welcome".split("")); //["w","e","l","c","o","m","e"]

/*
let text = "Hello";
const myArr = text.split("");
text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
*/

//15.includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean.
let string = "30 Days Of JavaScript";
console.log(string.includes("Days")); // true
console.log(string.includes("days")); // false - it is case sensitive!
console.log(string.includes("Script")); // true
console.log(string.includes("script")); // false
console.log(string.includes("java")); // false
console.log(string.includes("Java")); // true
//Check if a string includes "world". Start at position 12:
console.log(string.includes("Of", 5));

//String Search Methods:
//16.indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
//string.indexOf(substring)
let string1 = "30 Days Of JavaScript";

console.log(string1.indexOf("D")); // 3
console.log(string1.indexOf("Days")); // 3
console.log(string1.indexOf("days")); // -1
console.log(string1.indexOf("a")); // 4
console.log(string1.indexOf("JavaScript")); // 11
console.log(string1.indexOf("Script")); //15
console.log(string1.indexOf("script")); // -1

//17.lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
//syntax
//string.lastIndexOf(substring)
let string2 =
  "I love locate JavaScript. If you do not love  locate JavaScript what else can you love.";

console.log(string2.lastIndexOf("love")); // 67
console.log(string2.lastIndexOf("you")); // 63
console.log(string2.lastIndexOf("JavaScript")); // 38

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
console.log(text.lastIndexOf("John")); //-1 is not a string inside a john text

//Both methods accept a second parameter as the starting position for the search:

console.log(text.indexOf("locate", 15));

//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

console.log(text.lastIndexOf("locate", 15));

//18.startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
let string3 = "Love is the best to in this world";

console.log(string3.startsWith("Love")); // true
console.log(string3.startsWith("love")); // false
console.log(string3.startsWith("world")); // false

//A start position for the search can be specified:

console.log(string3.startsWith("is", 5));
console.log(string3.startsWith("is", 6));

//19.endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
let string4 = "Love is the most powerful feeling in the world";

console.log(string4.endsWith("world")); // true
console.log(string4.endsWith("love")); // false
console.log(string4.endsWith("in the world")); // true

//Check if the 11 first characters of a string ends with "world":

let $text = "Hello world, welcome to the universe.";
console.log($text.endsWith("world", 11));

/*
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/

//20.search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
let string5 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string5.search("love")); // 2 //(or) console.log(text.search(/locate/))
console.log(string5.search(/javascript/gi)); // 7

//21.match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let strin = "love is a powered love means";
console.log(strin.match("ve"));

let patternOne = /love/; // with out any flag

let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive

let patternThree = /love/g;

//match
let string6 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string6.match("love"));

let pattern = /love/gi;
console.log(string6.match(pattern)); // ["love", "love", "love"]

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

//matchAll
//The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

let text000 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = text000.matchAll("Cats");

console.log(Array.from(iterator));

//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

let text111 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator111 = text111.matchAll(/Cats/g);
console.log(Array.from(iterator111));

//If you want to search case insensitive, the insensitive flag (i) must be set:

let text112 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator112 = text112.matchAll(/Cats/gi);
console.log(Array.from(iterator112));

//22.repeat(): it takes a number as argument and it returns the repeated version of the string.
let string7 = "love";
console.log(string7.repeat(10)); // lovelovelovelovelovelovelovelovelovelove

//23.toString(): Returns the value of String object.
let tex = "Hello World!";
let result = tex.toString();
console.log(result);

//24.valueOf()	Returns the primitive value of the specified string object.
let text00 = "Hello World!";
let result00 = text00.valueOf();
console.log(text00);

//25.toUpperCase(): this method changes the string to uppercase letters.

let string11 = "JavaScript";

console.log(string11.toUpperCase()); // JAVASCRIPT

let firstName11 = "Asabeneh";

console.log(firstName11.toUpperCase()); // ASABENEH

let country11 = "Finland";

console.log(country11.toUpperCase()); // FINLAND

//26.toLowerCase(): this method changes the string to lowercase letters.

let string26 = "JavasCript";

console.log(string26.toLowerCase()); // javascript

let firstName26 = "Asabeneh";

console.log(firstName26.toLowerCase()); // asabeneh

let country26 = "Finland";

console.log(country26.toLowerCase()); // finland

/*
String Methods for Html

The following string methods convert the string as a HTML wrapper element.


anchor()	Creates an HTML anchor <a>element around string value.
big()	     Wraps string in <big> element.
blink()   	Wraps a string in <blink> tag.
bold()	    Wraps string in <b> tag to make it bold in HTML.
fixed()	    Wraps a string in <tt> tag.
fontcolor()	Wraps a string in a <font color="color"> tag.
fontsize()	Wraps a string in a <font size="size"> tag.
italics()	 Wraps a string in <i> tag.
link()	   Wraps a string in <a>tag where href attribute value is set to specified string.
small()	   Wraps a string in a <small>tag.
strike()	  Wraps a string in a <strike> tag.
sub()	     Wraps a string in a <sub>tag
sup()	    Wraps a string in a <sup>tag

*/

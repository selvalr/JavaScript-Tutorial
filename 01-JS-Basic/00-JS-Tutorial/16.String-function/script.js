let first_name = "selvamanan";
let second_name = "R";

//string Concatenation

let c = first_name + " " + second_name;
console.log("concatenation:" + c);

let string1 = "17";
let string2 = "10";
let newString = +string1 + +string2;
console.log(typeof newString); //number

//concat
c = first_name.concat(" ", second_name);
console.log("Concat : " + c);

//append
c = "Selva ";
c += "manan";
console.log("Append : " + c);

//Escaping sequences
/*
\' - single quote
\" - double quote
\\ - backslash
\n - newline
\r - carriage return
\t -tab
\b - backspace
\f - form feed
*/

c = "She Can't run";
console.log(c);

//Length
c = first_name.length;
console.log("Length : " + c);

//Change Case
c = first_name.toUpperCase();
console.log("Uppercase : " + c);
c = first_name.toLowerCase();
console.log("Lowercase : " + c);

//js search method
//String indexOf()
c = first_name.indexOf("s");
console.log("indexOf s : " + c);
//String lastIndexOf()
c = first_name.lastIndexOf("e");
console.log("lastIndexOf e : " + c);
//JavaScript String startsWith()
c = first_name.startsWith("se");
console.log("string startwidth" + c);
//JavaScript String endsWith()
c = first_name.endsWith("an");
console.log("string endwidth" + c);

c = first_name.charAt(1);
console.log("charAt 1 : " + c);

c = first_name.charCodeAt(1);
console.log("charCodeAt 1 : " + c);

c = first_name.substr(0, 3);
console.log("substr : " + c);

//Substring
let text = "01234567890";

c = text.substring(0, 4);
console.log("Substring : " + c);
c = text.substring(4);
console.log("Substring : " + c);
c = text.substring(4, 0);
console.log("Substring : " + c);
c = text.substring(25, 30);
console.log("substring Invalid Length : " + c);
c = text.substring(-3);
console.log("-3 : " + c);

//Slice
c = text.slice(2, 4);
console.log("slice : " + c);
c = text.slice(4, 2);
console.log("slice : " + c);
c = text.slice(25, 30);
console.log("slice Invalid Length : " + c);
c = text.slice(-5);
console.log("slice -5: " + c);

//Split in JS
let a = "Tutor Joes Computer Education";
c = a.split(" ");
console.log("Split : " + c);
console.table(c);

//replace in js
a = "I am from Salem";
console.log("Before Replace : " + a);
c = a.replace("Salem", "Chennai");
console.log("After Replace : " + c);

//includes in js
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("rat"));

//trim in js
a = " Joes ";
console.log("Before Trim : " + a.length);
a = a.trim();
console.log("After Trim : " + a.length);

//padStart padEnd
a = "5";
a = a.padStart(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, "$");
console.log(a);

//Long literal strings
//Method-1
let longString =
  "C is a powerful general-purpose programming language" +
  "developed at AT & T's Bell Laboratories of USA in 1972" +
  "it was designed and written by Dennis Ritchie..";
console.log(longString);

//Method-2
longString =
  "C is a powerful general-purpose programming language \
developed at AT & T's Bell Laboratories of USA in 1972\
it was designed and written by Dennis Ritchie..";
console.log(longString);

//String.fromCharCode()
console.log(String.fromCharCode(65, 66, 67, 68, 97, 98, 122));

//Regular Expressions

//RegExp parameters
//i.pattern
/*
A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.
*/

//ii.flag-->The flag could be g, i, m, s, u or y.

/*

Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline
*/

//1.Creating a pattern with RegExp Constructor

//i.Declaring regular expression without global flag and case insensitive flag.

// without flag
let pattern = "love";
let regEx = new RegExp(pattern);
console.log(regEx);

//ii.Declaring regular expression with global flag and case insensitive flag.
let pattern1 = "love";
let flag = "gi";
let regEx1 = new RegExp(pattern1, flag);
console.log(regEx1);

//iii.Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor
let regEx2 = new RegExp("love", "gi");
console.log(regEx2);

//2.Creating a pattern without RegExp Constructor

//i.Declaring regular expression with global flag and case insensitive flag.
let regEx3 = /love/gi;
console.log(regEx3);

//ii.The above regular expression is the same as the one which we created with RegExp constructor

let regEx4 = new RegExp("love", "gi");
console.log(regEx4);

//3.RegExpp Object Method

//i.Testing for a match
//test():Tests for a match in a string. It returns true or false.

const str = "I love JavaScript";
const patter = /love/;
const result = patter.test(str);
console.log(result);

//ii.Array containing all of the match

const str1 = "I love JavaScript";
const patte = /love/;
const resul = str1.match(patte);
console.log(resul);

const str2 = "I love JavaScript";
const patt = /love/g;
const resu = str2.match(patt);
console.log(resu);

//search();
const str3 = "I love JavaScript";
const pattern3 = /love/g;
const result3 = str3.search(pattern3);
console.log(result3);

//iii.Replacing a substring
const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);

const txt1 =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = txt1.replace(/Python|python/g, "JavaScript");
console.log(matchReplaced);

const txt2 =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = txt2.replace(/Python/gi, "JavaScript");
console.log(matchReplaced);

//4.Square Bracket
//.
const pattern4 = "[Aa]pple"; // this square bracket means either A or a
const txt4 =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches = txt4.match(pattern4);
console.log(matches);

//.
const pattern5 = /[Aa]pple/g; // this square bracket means either A or a
const txt5 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches5 = txt5.match(pattern5);
console.log(matches5);

//.
const pattern6 = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
const txt6 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";
const matches6 = txt6.match(pattern6);
console.log(matches6);

//5.Escape character(\) in RegExp

const pattern7 = /\d/g; // d is a special character which means digits
const txt7 = "This regular expression example was made in January 12,  2020.";
const matches7 = txt7.match(pattern7);
console.log(matches7); // ["1", "2", "2", "0", "2", "0"], this is not what we want

const pattern8 = /\d+/g; // d is a special character which means digits
const txt8 = "This regular expression example was made in January 12,  2020.";
const matches8 = txt8.match(pattern8);
console.log(matches8); // ["12", "2020"], this is not what we want

//6.One or more times(+)
const pattern9 = /\d+/g; // d is a special character which means digits
const txt9 = "This regular expression example was made in January 12,  2020.";
const matches9 = txt9.match(pattern9);
console.log(matches9); // ["12", "2020"], this is not what we want

//7.Period(.)

const pattern10 = /[a]./g; // this square bracket means a and . means any character except new line
const txt10 = "Apple and banana are fruits";
const matches10 = txt10.match(pattern10);
console.log(matches10); // ["an", "an", "an", "a ", "ar"]

const pattern11 = /[a].+/g; // . any character, + any character one or more times
const txt11 = "Apple and banana are fruits";
const matches11 = txt11.match(pattern11);
console.log(matches11); // ['and banana are fruits']

//8.Zero or more times(*)

const pattern12 = /[a].*/g; //. any character, + any character one or more times
const txt12 = "Apple and banana are fruits";
const matches12 = txt12.match(pattern12);
console.log(matches12); // ['and banana are fruits']

//9.Quantifier in RegExp

const tx = "This regular expression example was made in December 6,  2019.";
const pat = /\\b\w{4}\b/g; //  exactly four character words
const matche = tx.match(pat);
console.log(matche); //['This', 'made', '2019']

const t = "This regular expression example was made in December 6,  2019.";
const p = /\b[a-zA-Z]{4}\b/g; //  exactly four character  words without numbers
const m = t.match(p);
console.log(m); //['This', 'made']

const text = "This regular expression example was made in December 6,  2019.";
const paattern = /\d{4}/g; // a number and exactly four digits
const maatches = text.match(paattern);
console.log(maatches); // ['2019']

const text1 = "This regular expression example was made in December 6,  2019.";
const paattern1 = /\d{1,4}/g; // 1 to 4
const maatches1 = text1.match(paattern1);
console.log(maatches1); // ['6', '2019']

//10.Cart ^

//start with
const txt00 = "This regular expression example was made in December 6,  2019.";
const pattern00 = /^This/; // ^ means starts with
const matches00 = txt00.match(pattern00);
console.log(matches00); // ['This']

//negation
const txt01 = "This regular expression example was made in December 6,  2019.";
const pattern01 = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches01 = txt01.match(pattern01);
console.log(matches01); // ["6", "2019"]

//11.Exact match
//It should have ^ starting and $ which is an end.
let pattern02 = /^[A-Z][a-z]{3,12}$/;
let name = "Asabeneh";
let result02 = pattern02.test(name);
console.log(result02); // true

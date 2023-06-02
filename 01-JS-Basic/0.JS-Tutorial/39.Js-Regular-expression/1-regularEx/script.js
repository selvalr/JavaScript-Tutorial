//Regular Expression:
//A regular expression is a sequence of character that from a search pattern.
//The Search pattern can be for search and text replace operation.

//Syntax:
// /pattern/modifiers;

//i.String replace() with Regular Expression

let exam = 'hi hello';
let output = exam.replace(/hi/i, 'hello');
console.log(output); //hello hello

//ii.String search() with a regular expression
let exam1 = 'hello hai';
let output1 = exam1.search(/hai/i);
console.log(output1); //6

//1.Regular Expression Modifiers:i,g,m
let letter = 'JavaScript is a programming language';
let a = /a/g; //Perform a global match (find all matches rather than stopping after the first match)
console.log(letter.match(a)); // ['a', 'a', 'a', 'a', 'a', 'a']
let b = /A/i; //Perform case-insensitive matching
console.log(letter.match(b)); //first letter in A index one index
let c = /p/m; //Perform multiline matching
console.log(letter.match(c));
let d = /is/gi;
console.log(letter.match(d)); //['is']
let e = /av/gim;
console.log(letter.match(e)); //['av']

//index position search method:
let txt = 'hello selva how are u';
let f = /a/g;
console.log(txt.search(f)); //10
let g = /E/i;
console.log(txt.search(g)); //1
let h = /how/gi;
console.log(txt.search(h)); //12

//2.Regular Expression Patterns:[abc],[0-9],(x|y)
let txt1 = 'welcome back tamilnadu 1234';
let i = /[e]/g; //Find any of the character between the brackets
console.log(txt1.match(i)); // ['e', 'e']
let j = /[^e]/g; //^ is not e
console.log(txt1.match(j)); //(20) ['w', 'l', 'c', 'o', 'm', ' ', 'b', 'a', 'c', 'k', ' ', 't', 'a', 'm', 'i', 'l', 'n', 'a', 'd', 'u']
let k = /[1-4]/g; //Find any of the digit between the brackets
console.log(txt1.match(k)); // ['1', '2', '3', '4']
let l = /(1|2)/g; //find any of the alternatives separated with |
console.log(txt1.match(l)); //['1', '2']

//3.Metacharacters:\w,\d,\s,\uxxxx,\v,\t

//Metacharacters are characters with a special meaning:
let txt2 = ' Hello Selva $ % ^ & @ * 123 \v \t';
let m = /\w/g; //w is a letter and digit only
console.log(txt2.match(m)); //
let n = /\W/g; //W is a special character display
console.log(txt2.match(n)); //
let o = /\d/g; //d is 	Find a digit
console.log(txt2.match(o)); //['1', '2', '3']
let p = /\D/g; //D is a all character but not number
console.log(txt2.match(p)); //
let q = /\s/g; //s Find a whitespace character
console.log(txt2.match(q)); //[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
let r = /\S/g; //s Find a whitespace all character
console.log(txt2.match(r)); //
let s = /\bHe/g; //Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
console.log(txt2.match(s)); //['He']
let t = /va\b/g;
console.log(txt2.match(t)); //['va']
let u = /\v/g;
console.log(txt2.search(u));
let v = /\t/g;
console.log(txt2.search(v));

//4.Quantifiers

//Quantifiers define quantities:

let txt3 = 'welcome back to the 1230491010 w';
let w = /\d{1,2}/g;
console.log(txt3.match(w)); // (5) ['12', '30', '49', '10', '10']
let x = /e*/g; //Matches any string that contains zero or more occurrences of n
console.log(txt3.match(x)); // ['', 'e', '', '', '', '', 'e', '', '', '', '', '', '', '', '', '', '', '', 'e', '', '', '', '', '', '', '', '']
let y = /10?/g; //Matches any string that contains zero or one occurrences of n
console.log(txt3.match(y)); //['1', '10', '10']

let s1 = 'Is this his';
let s2 = /is$/gi; // $ is end of the is printed
console.log(s1.match(s2)); //['is']
let s3 = /^is/gi; //^ is first word search
console.log(s1.match(s3)); //['Is']

let z = /w+e/gi; //+ is add a  value w to next character e is true
console.log(txt3.match(z)); //["we"]
let z1 = /w+e?/gi; //+ first check w and next ? is optionall  check e  (OR)we* (oR)w+e? is same but next Jaa is * printed
console.log(txt3.match(z1)); //['we', 'w']

let z2 = /.his/gi; //. is a frond letter to add printed
console.log(s1.match(z2)); //['this', ' his']

//5.Regex Properties:
let text = 'hai selva welcome back';
let text2 = /hai/g;
let text3 = text2.global; //checked global variable
console.log(text3); //true
let text4 = text2.ignoreCase;
console.log(text4); //false
let text5 = text2.multiline;
console.log(text5); //false

//6.RegEx method:

//1.exec method:
let a1 = 'hello world is a popular place india';
let a2 = /s/gi;
let a3 = a2.exec(a1); //exec is a how to index line in s display
console.log(a3);

//2.test method:
let b1 = 'hello world is a popular place india';
let b2 = /s/gi;
let b3 = b2.test(b1); //test is true or false checked
console.log(b3);

//3.toString:
let c1 = 'hello world is a popular place india';
let c2 = /s/gi;
let c3 = c2.toString(c1); //return /s/gi value
console.log(c3);

//4.compaile
let d1 = 'hello world is a popular place india';
let d2 = /s/gi;
let d3 = d2.compile(d1); //return d1 string displed
console.log(d3);

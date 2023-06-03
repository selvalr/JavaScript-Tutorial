//JavaScript Template Literals:
  
//Syntax
  /*
    `String literal text`
    `String literal text ${expression}`
  */


//1.Back-Tics Syntax
let text = `Hello world!`;
console.log(text);

//2.Quotes Inside Strings
let text1 = `He's often 
called "Johnny"`;
console.log(text1);

//3.Multiline Strings
let text2 = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);

//4.Variable Substitutions
let firstName = 'John';
let lastName = 'Doe';
let text4 = `Welcome ${firstName}, ${lastName}!`;
console.log(text4);

//5.Expression Substitution
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

//6.HTML Templates

let header = 'Templates Literals';
let tags = ['template literals', 'javascript', 'es6'];
let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html);



//long literal string
//method-1
let longText="loream dhjfsdhfvsdhfvsdhfvhdvfhasbw dscv bhdsv sdvbdvjb"+
"ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"+
"jhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";

console.log(longText);

//method-2
longText="loream dhjfsdhfvsdhfvsdhfvhdvfhasbw dscv bhdsv sdvbdvjb \
ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg \
jhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";

console.log(longText);

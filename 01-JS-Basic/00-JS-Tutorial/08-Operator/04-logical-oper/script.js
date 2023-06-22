//Logical Operators in JavaScript
/*
&&	logical and
||	logical or
!	  logical not
*/

/*
Truthy value:

- all falsy value opposite is truthy value


Falsy value
- 0
- false
- ""
- null
- undefined
- NaN


*/

// 1.NOT(!) Operator is a opposite value printed true->false,false->true
console.log(!true); //false
console.log(!10); //false
console.log(!0); //true

console.log(!true); // false
console.log(!0); // true

console.log(!!"non-empty string"); // true
console.log(!!null); // false

//2.OR(||) Operator is one value is true is ans is true,two value false is false
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log("10||'ok' =", 10 || "ok"); //10 is truthy value is printed
console.log("'yes'||null =", "yes" || null); //yes value is truthy value so yes printed
console.log("null||'yes' = ", null || "yes"); //yes
console.log("undefiend||false  =", undefined || false); //false

//3.AND (&&) operator is a two value is true ans is true,one value false ans is false

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

console.log("10 && 'ok' =", 10 && "ok"); //ok
console.log("yes && null =", "yes" && null); //null
console.log(" '' && 'selva'  =", "" && "selva"); //' '
console.log("undefinded && false", undefined && false); //undefined

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

//Example AND OR operator:

//LongHand:

// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

//ShortHand:
let firstName = "arshit";
let age = 16;
//AND
if (firstName[0] === "H" && age > 18) {
  console.log("Name starts with H and above 18");
} else {
  console.log("inside else");
}

//OR
if (firstName[0] === "H" || age > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}

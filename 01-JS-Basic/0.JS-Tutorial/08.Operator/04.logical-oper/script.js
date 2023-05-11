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

//2.OR(||) Operator is one value is true is ans is true,two value false is false

console.log("10||'ok' =", 10 || 'ok'); //10 is truthy value is printed
console.log("'yes'||null =", 'yes' || null); //yes value is truthy value so yes printed
console.log("null||'yes' = ", null || 'yes'); //yes
console.log('undefiend||false  =', undefined || false); //false

//3.AND (&&) operator is a two value is true ans is true,one value false ans is false

console.log("10 && 'ok' =", 10 && 'ok'); //ok

console.log('yes && null =', 'yes' && null); //null
console.log(" '' && 'selva'  =", '' && 'selva'); //' '
console.log('undefinded && false', undefined && false); //undefined




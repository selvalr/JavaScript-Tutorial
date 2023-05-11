//Relational Operators in JavaScript

/*
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
== equal to
!= not equal to
=== identical to
!== not identical to
*/

let a = 10;
let b = 20;

console.log('Greater :10>20  = ', a > b); //false
console.log('Lesser  : 10<20 =', a < b); //true
console.log('Greater Than Equal  :10>=20  = ', a >= b); //false
console.log('Greater Than Equal  :10<=20 = ', a <= b); //true

console.log('equal to :10==20  =', a == b); //false
console.log('equal to:10==10   =', 10 == 10); //true
console.log('equal to:10=="10"   =', 10 == '10'); //true

console.log('not equal to :10!=20 =', a != b); //true
console.log('not equal to:10!=10   =', 10 != 10); //false
console.log('not equal to:10!="10" =', 10 != '10'); //false

console.log('identical equal :10===20  =', a === b); //false
console.log('not idendical equal:10!==20  =', a !== b); //true

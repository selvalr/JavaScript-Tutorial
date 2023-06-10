//assignment operator

let a = 10; //= is a assign the value

//a=a+5;//+=

a += 20;
console.log(a);
a -= 20; //-=
console.log(a);
a *= 10; // *=
console.log(a);
a /= 2; // /=
console.log(a);
a %= 4; // %=
console.log(a);

//Shift Assignment Operators
let x = -100;
x <<= 5;
console.log(x);

let x1 = -100;
x1 >>= 5;
console.log(x1);

let x2 = -100;
x2 >>>= 5;
console.log(x2);

//Bitwise Assignment Operators

let x3 = 10;
x3 &= 5;

let x4 = 10;
x4 |= 5;

let x5 = 10;
x5 ^= 5;

//Logical Assignment Operators

let x6 = 10;
x6 &&= 5;
console.log(x6);

let x7 = 10;
x7 ||= 5;
console.log(x7);

let x8 = 10;
x8 ??= 5;
console.log(x8);

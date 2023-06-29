//assignment operator

let a = 10; //= is a assign the value

//a=a+5;//+=

a += 20;
console.log(a); //30
a -= 20; //-=
console.log(a); //10
a *= 10; // *=
console.log(a); //100
a /= 2; // /=
console.log(a); //50
a %= 4; // %=
console.log(a); //2

/*
//Shift Assignment Operators

//i.left shift assignment operator: x <<= y (or) x = x << y

let a2 = 5; // 00000000000000000000000000000101
a2 <<= 2; // 00000000000000000000000000010100
console.log(a2); // 20

let x = -100;
x <<= 5;
console.log(x); //-3200

//ii.right shift assignment operator: x >>= y (or) x = x >> y

let a3 = 5; //  00000000000000000000000000000101
a3 >>= 2; //  00000000000000000000000000000001
console.log(a3); // 1

let b3 = -5; //  11111111111111111111111111111011
b3 >>= 2; //  11111111111111111111111111111110
console.log(b3); // Expected output: -2

let x1 = -100;
x1 >>= 5;
console.log(x1); //-4

//iii.Unsigned right shift (>>>)
const a11 = 5; //  00000000000000000000000000000101
const b11 = 2; //  00000000000000000000000000000010
const c11 = -5; //  11111111111111111111111111111011
console.log(a11 >>> b11); //  00000000000000000000000000000001
// Expected output: 1
console.log(c11 >>> b11); //  00111111111111111111111111111110
// Expected output: 1073741822

let x2 = -100;
x2 >>>= 5;
console.log(x2); //134217724

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
console.log(x6); //5

let x7 = 10;
x7 ||= 5;
console.log(x7); //10

let x8 = 10;
x8 ??= 5;
console.log(x8); //10
*/

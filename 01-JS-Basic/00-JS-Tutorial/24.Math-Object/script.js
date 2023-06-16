c = Math.PI;
console.log("pi", c); //3.14

c = Math.E;
console.log("E", c); //2.71

//Math Methods:

//1.Number to Integer
/*
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

c = Math.round(4.8);
console.log("round", c); //5
console.log(Math.round(4.1)); //4

c = Math.floor(5.58);
console.log("floor", c); //5

c = Math.ceil(5.9);
console.log("ceil", c); //6
c = Math.ceil(5.1);
console.log("ceil ", c); //6
c = Math.ceil(5.5);
console.log("ceil", c); //6

c = Math.sqrt(90);
console.log("squrt", c); //9.48

c = Math.abs(-45);
console.log("abs", c); //45

c = Math.trunc(4.9); //Return Integer only
console.log("trunc", c); //4

c = Math.pow(2, 4);
console.log("pow", c); //2*2*2*2=16

c = Math.min(10, 50, 5, 45, 8);
console.log("min", c); //5

c = Math.max(10, 50, 5, 45, 8);
console.log("max", c); //50

c = Math.random();
console.log("random", c); //0.43

c = Math.floor(Math.random() * 50) + 1; //1 to 50
console.log("floor", c); //17

c = Math.sign(1); //Return Neg=-1 Zero=0 Pos=1
console.log("sign", c); //1

c = Math.sin(90);
console.log("sin", c); //0.89

c = Math.cos(90);
console.log("cos", c); //-0.44

c = Math.log(1);
console.log("log", c); //0

c = Math.log2(10);
console.log("log2", c); //3.32

c = Math.log10(10);
console.log("log10", c); //1

c = Math.floor(6.7);
console.log("floor", c); //6
c = Math.floor(6.1);
console.log("floor", c); //6
c = Math.floor(6.5);
console.log("floor", c); //6

c = Math.abs(-4);
console.log(c); //4

//Math Properties (Constants)

Math.E; // returns Euler's number
Math.PI; // returns PI
Math.SQRT2; // returns the square root of 2
Math.SQRT1_2; // returns the square root of 1/2
Math.LN2; // returns the natural logarithm of 2
Math.LN10; // returns the natural logarithm of 10
Math.LOG2E; // returns base 2 logarithm of E
Math.LOG10E; // returns base 10 logarithm of E

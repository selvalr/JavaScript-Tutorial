//isNan
//1.Number.isNan
//2.isNan
console.log(Number.isNaN(43)); //true is number
console.log(Number.isNaN("selva")); //false --> only number sent return true string to false
console.log(isNaN("selva")); //true is string is a not a number

//1.JavaScript Number Methods
//i.The toString() Method:
let x = 123;
console.log(
  x.toString() + "<br>" + (123).toString() + "<br>" + (100 + 23).toString()
);

var num = 100;
num.toString(); // returns '100'
console.log(num);

//ii.The toExponential() Method:
let x1 = 9.656;
console.log(
  x1.toExponential() +
    "<br>" +
    x1.toExponential(2) +
    "<br>" +
    x1.toExponential(4) +
    "<br>" +
    x1.toExponential(6)
);

var num = 100;
num.toExponential(2); // returns '1.00e+2'
console.log(num); //100

//iii.The toFixed() Method:
let x2 = 9.656;

console.log(
  x2.toFixed(0), //10
  x2.toFixed(2), //9.66
  x2.toFixed(4), //9.6560
  x2.toFixed(6) //9.656000
);

var num = 100;
num.toFixed(2); // returns '100.00'
console.log(num); //100

//iv.The toPrecision() Method:
let x3 = 9.656;
console.log(
  x3.toPrecision() + //9.656
    "<br>" +
    x3.toPrecision(2) + //9.7
    "<br>" +
    x3.toPrecision(4) + //9.656
    "<br>" +
    x3.toPrecision(6) //9.65600
);

var num = 100;
num.toPrecision(4); // returns '100.0'
console.log(num);

//v.The valueOf() Method:
let x4 = 123;
console.log(x4.valueOf(), (123).valueOf(), (100 + 23).valueOf()); //123 123 123

var num = new Number(100);
num.valueOf(); // returns '100'
console.log(num); //Number{100}

//2.Converting Variables to Numbers
//i.The Number() Method
//The Number() method can be used to convert JavaScript variables to numbers:

console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number("10")); //10
console.log(Number("  10")); //10
console.log(Number("10  ")); //10
console.log(Number(" 10  ")); //10
console.log(Number("10.33")); //10.33
console.log(Number("10,33")); //NaN
console.log(Number("10 33")); //NaN
console.log(Number("John")); //NaN

//ii.parseInt
console.log(parseInt("-10")); //-10
console.log(parseInt("-10.33")); //-10
console.log(parseInt("10")); //10
console.log(parseInt("10.33")); //10
console.log(parseInt("10 20 30")); //10
console.log(parseInt("10 years")); //10
console.log(parseInt("years 10")); //Nan

//iii.parseFloat
console.log(parseFloat("10")); //10
console.log(parseFloat("10.33")); //10.33
console.log(parseFloat("10 20 30")); //10
console.log(parseFloat("10 years")); //10
console.log(parseFloat("years 10")); //Nan

//toLocalString()
var num = 100;
num.toLocaleString(); // returns '100'
console.log(num, typeof num); //100 number

//3.Number Object Methods

//i.isInteger
console.log(Number.isInteger(43)); //true
console.log(Number.isInteger(43.54)); //false
console.log(Number.isInteger("423")); //false

//ii.The Number.isSafeInteger() Method
console.log(Number.isSafeInteger(10)); //true
console.log(Number.isSafeInteger(12345678901234567890)); //false

//iii.parseFloat
console.log(Number.parseFloat(43.54)); //43.54
console.log(Number.parseFloat("433")); //433
console.log(Number.parseFloat("433aaaaa")); //433
console.log(Number.parseFloat(433)); //433
let num2 = "23.879";
let res2 = parseFloat(num2);
console.log(res2); //23.879 is floating number

//iv.parseInt
console.log(Number.parseInt(42.55)); //42
console.log(Number.parseInt("433aaa.89aaa")); //433
let num1 = "23";
let res = parseInt(num1);
console.log(res); //23 is number

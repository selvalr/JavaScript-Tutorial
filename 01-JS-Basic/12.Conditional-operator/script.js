//conditional operator

//if
if (new Date().getHours() < 20) {
  console.log('Good day!');
}

//if-else
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}
console.log(greeting);

//else if

const time = new Date().getHours();
let greeting1;
if (time < 10) {
  greeting1 = 'Good morning';
} else if (time < 20) {
  greeting1 = 'Good day';
} else {
  greeting1 = 'Good evening';
}
console.log(greeting1);
/*syntax

variableName=booleanExpress ? truevalue : falseValue;



*/

//Ternary Operator:
var age = 2,
  isMajor;

isMajor = age >= 18 ? 'eligible vote' : 'not eligible vote';
console.log(isMajor);

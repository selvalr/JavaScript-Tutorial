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


//1.handling null values

function welcome(fname){
  const result=fname?fname:"noname";
  console.log("welcome to " + fname);
}
welcome();
welcome(null);
welcome("selva")

  //object handling null value
  user={'name':"selva",'age':22};
  console.log(user);
  console.log(user.name);

  const greeting3=(user)=>{
    const name=user.name?user.name:"noname";
    return "hello"+name;

  }

  console.log(greeting3(user));//no name


//conditional chains

/*
avg>=90 A grade
avg>=80 B grade
C grade
*/

let mark=90;

let result1=mark>=90?"A grade":mark>=80?"B grade":"not grade"

console.log("grade"+result1);


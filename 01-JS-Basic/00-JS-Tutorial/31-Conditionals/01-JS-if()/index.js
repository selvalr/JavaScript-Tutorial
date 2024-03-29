//if(condition) Statement

if (7 === 7) {
  //true
  console.log("yes"); //yes
}

if (4 > 10) {
  //false
  console.log("no");
}

if (5 >= 5) {
  //true
  console.log("Yes"); //yes
}

//variable if()

let state = "tamil";
let textPercent = 0;

/*
if(state==='tamil'){
 textPercent=29;
}
console.log(textPercent);//29
*/

if (state !== "tamil") {
  textPercent = 29;
}
console.log(textPercent); //0

//Sometimes, we need to assign a variable depending on a condition.
let accessAllowed;
let age = prompt("How old are you?", "");
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

//i.
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`); //  3 is a positive number
}

//ii.
let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat."); //Remember to take your rain coat.
}

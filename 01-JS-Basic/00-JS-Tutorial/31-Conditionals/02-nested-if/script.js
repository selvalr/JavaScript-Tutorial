//Nested IF Statement
/*
if(condition)
{
    if(condition)
    {
        ----
    }
}

*/

let tamil = 88,
  english = 54,
  math = 66;

let total, avg;

total = tamil + english + math;
avg = total / 3;
console.log("total" + total); //total 208
console.log("avg" + avg); //69.33333333333

if (tamil >= 35 && english >= 35 && math >= 35) {
  console.log("pass"); //pass
  if (avg > 90) {
    console.log("A grade");
  } else if (avg < 90 && avg > 70) {
    console.log("B Grade");
  } else {
    console.log("c grade"); //c grade
  }
} else {
  console.log("fail no grade");
}

//example2:

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
  console.log("Your guess is right!!");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!!");
  } else {
    console.log("too high !!!");
  }
}

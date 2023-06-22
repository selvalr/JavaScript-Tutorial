/*
switch(expression or literal value){
    case choice:
        ------
        break;
    case choice:
        ------
        break;
    default choice:
    ------
    break;
}
*/

//1.switch statement

var grade = "B";
var result;

//input current grade
switch (grade) {
  case "A": //if(grade==A)
    result = "A Grade";
    break;
  case "B": //if(grade==B)
    result = "B Grade";
    break;
  case "C": //if(grade==c)
    result = "C Grade";
    break;
  default: //else...
    result = "No Grade";
    break;
}
document.write(result);

//2.Combining cases statement

let letter = "a";

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log(letter + "is a vowels");
    break;
  default:
    console.log("not vowels");
    break;
}

//Strict Comparison

let x = "0";

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);

//Example:

//LongHand:

// let day = 7;

// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }

//ShortHand:

let day = 9;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}

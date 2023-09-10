// switch statement

let day1 = 6;

if (day1 === 0) {
  console.log("Sunday");
} else if (day1 === 1) {
  console.log("Monday");
} else if (day1 === 2) {
  console.log("Tuesday");
} else if (day1 === 3) {
  console.log("Wednesday");
} else if (day1 === 4) {
  console.log("Thrusday");
} else if (day1 === 5) {
  console.log("Friday");
} else if (day1 === 6) {
  console.log("Saturday"); //starurday
} else {
  console.log("Invalid Day"); //invalid day
}

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
    console.log("Invalid Day"); //invalid day
}

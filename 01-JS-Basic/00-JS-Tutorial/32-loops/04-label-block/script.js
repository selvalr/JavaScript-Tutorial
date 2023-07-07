/*
Syntax:

break labelname;

continue labelname;
*/
//R start firstname only dislpay second name no display

let groups = [
  ["selva", "karthi", "sathish"],
  ["bass", "sankar", "seeni"],
  ["aravind", "seenu", "ravi"],
];

for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("R")) {
      console.log(member);
      break inner;
    }
  }
}

//example:2

document.write("Entering the loop!<br /> ");
// This is the label name
outerloop: for (var i = 0; i < 5; i++) {
  document.write("Outerloop: " + i + "<br />");
  innerloop: for (var j = 0; j < 5; j++) {
    if (j > 3) break; // Quit the innermost loop
    if (i == 2) break innerloop; // Do the same thing
    if (i == 4) break outerloop; // Quit the outer loop
    document.write("Innerloop: " + j + " <br />");
  }
}
document.write("Exiting the loop!<br /> ");

//example 3:

document.write("Entering the loop!<br /> ");
// This is the label name

outerloop: for (var i = 0; i < 3; i++) {
  document.write("Outerloop: " + i + "<br />");
  for (var j = 0; j < 5; j++) {
    if (j == 3) {
      continue outerloop;
    }
    document.write("Innerloop: " + j + "<br />");
  }
}

document.write("Exiting the loop!<br /> ");

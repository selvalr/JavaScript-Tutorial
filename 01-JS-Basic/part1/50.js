// block scope vs function scope

// let and const are block scope
// var is function scope

if (true) {
  var firstName = "harshit";
  console.log(firstName); //harshit
}

console.log(firstName); //harshit

function myApp() {
  if (true) {
    var firstName = "harshit";
    console.log(firstName); //harshit
  }

  if (true) {
    console.log(firstName); //harshit
  }
  console.log(firstName); //harshit
}

myApp();

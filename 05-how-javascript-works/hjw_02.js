// hoisting
console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(myFunction); //f myFunction(){}

console.log(fullName); //undefined

function myFunction() {
  console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma";
var fullName = firstName + " " + lastName;
console.log(fullName); //harshit sharma

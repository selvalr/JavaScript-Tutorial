console.log(firstName); //undefined
console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
var firstName = "harshit";
console.log(firstName); //harshit
console.log(hello); //f hello(){console.log(hello)}
function hello() {
  console.log("hello world");
}

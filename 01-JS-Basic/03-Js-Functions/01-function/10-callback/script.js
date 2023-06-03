//Callback - Function passed as argument

function greetConsole(name) {
  console.log("hello", name);
}

function greetingHead(name) {
  const heading = document.querySelector("h1");
  heading.innerHTML = "hello" + name;
}

function greet(callback) {
  console.log(callback);
  callback("ram");
}

greet(greetConsole);
greet(greetingHead);

//
greet((name) => {
  const heading = document.querySelector("h1");
  heading.innerHTML = "hello" + name;
});

//2.example callback

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//3.The arguments showOk and showCancel of ask are called callback functions or just callbacks.

function ask1(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask1(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

//Function Expression vs Function Declaration

sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}

sayHi1("John"); // error!
let sayHi1 = function (name) {
  // (*) no magic any more
  alert(`Hello, ${name}`);
};

//3.In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}
// ...use it later
welcome(); // Error: welcome is not defined

//Here’s another example:

let age1 = 16; // take 16 as an example
if (age1 < 18) {
  welcome(); // \   (runs)
 
  function welcome() {
   
    alert("Hello!"); //  |  Function Declaration is available
  } //  |  everywhere in the block where it's declared
  
  welcome(); // /   (runs)
} else {
  function welcome() {
    alert("Greetings!");
  }
}
// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
welcome(); // Error: welcome is not defined




//3.This code works as intended:
/*
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

*/

//4.Or we could simplify it even further using a question mark operator ?:
/*
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now
*/
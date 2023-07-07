// callback functions

function myFunc2(name) {
  console.log("inside my func 2"); //inside my func 2
  console.log(`your name is ${name}`); //your name is harshit
}

function myFunc(callback) {
  console.log("hello there I am a func and I can.."); //hello there I am a func and I can
  callback("harshit");
}

myFunc(myFunc2);

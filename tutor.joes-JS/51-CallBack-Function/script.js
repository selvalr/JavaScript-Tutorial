//1.

function myCallback() 
{
    console.log("I am a callback function");
}

function higherOrderFunction(callback) {
  // some code
callback();
  // some code
}

higherOrderFunction(myCallback);
    // Output: "I am a callback function"


//2.

setTimeout(function() {
    console.log('Hello, world!');
    }, 1000); // Output: "Hello, world!" after 1 second

//3.
const numbers = [1, 2, 3];

numbers.forEach(function(number) {
  console.log(number);
}); // Output: 1 2 3
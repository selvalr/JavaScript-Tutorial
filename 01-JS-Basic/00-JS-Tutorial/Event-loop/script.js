//Event loop in javascript

console.log("start");
function hello() {
  console.log("hello");
}
hello();
console.log("end");
/*
OUTPUT:
start
hello
end
*/

/*
//Web APIs
-console
-setTimeout()
-DOM Apis
-fetch()
-local storage
-location
*/

//setTimeout working call stack
console.log("start");
setTimeout(function () {
  console.log("hello");
}, 5000);
console.log("end");

//DOM APIs

console.log("Start");
document.getElementById("btn").addEventListener("click", function callback() {
  console.log("Hello World");
});
console.log("end");

//Micro Task Queue
console.log("start");
setTimeout(function () {
  console.log("world");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/posts").then(
  function callbackApi() {
    console.log("data from api");
  }
);
console.log("end");

/*
event loop is a first priority is
i-microtask queue->promise first execute
ii-task queue-->set timeout and extc...

*/

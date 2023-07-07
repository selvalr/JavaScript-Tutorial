//1.JavaScript Asynchronous Iteration
//ECMAScript 2018 added asynchronous iterators and iterables.

//With asynchronous iterables, we can use the await keyword in for/of loops.

//  for await () {}

//2.JavaScript Promise.finally
//ECMAScript 2018 finalizes the full implementation of the Promise object with Promise.finally:

/*
let myPromise = new Promise();

myPromise.then();
myPromise.catch();
myPromise.finally();
*/

//3.JavaScript Object Rest Properties
//ECMAScript 2018 added rest properties.

//This allows us to destruct an object and collect the leftovers onto a new object:

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

//4.New JavaScript RegExp Features
//ECMAScript 2018 added 4 new RegExp features:
/*
Unicode Property Escapes (\p{...})
Lookbehind Assertions (?<= ) and (?<! )
Named Capture Groups
s (dotAll) Flag
The new RegExp features is supported in all modern browsers since June 2020:
*/

//5.
/*
JavaScript Threads
In JavaScript you use the Web Workers API to create threads.

Worker threads are used to execute code in the background so that the main program can continue execution.

Worker threads run simultaneously with the main program. Simultaneous execution of different parts of a program can be time-saving.

JavaScript Shared Memory
Shared memory is a feature that allows threads (different parts of a program) to access and update the same data in the same memory.

Instead of passing data between threads, you can pass a SharedArrayBuffer object that points to the memory where data is saved.

SharedArrayBuffer
A SharedArrayBuffer object represents a fixed-length raw binary data buffer similar to the ArrayBuffer object.

*/

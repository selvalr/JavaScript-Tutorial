//1.
/*
const p = new Promise((resolve, reject) => {
  if ( condition ) {
      resolve( value );  // fulfilled successfully
  } else {
      reject(reason);  // error, rejected
  }
});
*/

p.then(
  (val) => console.log("Promise Resolved", val),
  (err) => console.log("Promise Rejected", err)
);

//2.
const hello = new Promise((resolve, reject) => {
  resolve("Hello");
});

hello
  .then((str) => `${str} World`)
  .then((str) => `${str}!`)
  .then((str) => console.log(str)); // Hello World!

//3.

const p = new Promise((resolve, reject) => {
  resolve(1);
});

const eventuallyAdd1 = (val) =>
  new Promise((resolve, reject) => {
    resolve(val + 1);
  });

p.then(eventuallyAdd1)
  .then(eventuallyAdd1)
  .then((val) => console.log(val)); // 3

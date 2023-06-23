//Promise

/*
A Promise is in one of these states:

-pending: initial state, neither fulfilled nor rejected.
-fulfilled: meaning that the operation completed successfully.
-rejected: meaning that the operation failed.
*/

//Callbacks

//Callback
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);

//ii.In this case the err is false and it will return the else block which is the result.

const doSomething1 = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};

doSomething1((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

//2.Promise constructor
/*// syntax:
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
 */
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

//ii.The above promise has been settled with resolve. Let us another example when the promise is settled with reject.

// Promise
const doPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

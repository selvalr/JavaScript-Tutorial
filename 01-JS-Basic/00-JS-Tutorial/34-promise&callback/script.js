//To understand promise very well let us understand callback first. Let's see the following callbacks. From the following code blocks you will notice, the difference between callback and promises.

//call back Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.

//In this case the err has a value and it will return the err block.

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

//.
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

//Promise

// syntax
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});

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

//The above promise has been settled with resolve. Let us another example when the promise is settled with reject.

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

/*
  function someAsyncFunction() {
    return new Promise((resolve, reject) => {
        // code to execute asynchronously
        if (success) {
            resolve(result); // resolve with result
        } else {
            reject(error);   // reject with error
        }
    });
}

someAsyncFunction()
    .then(result => {
        // code to execute on success
    })
    .catch(error => {
        // code to execute on error
    });
  
  */

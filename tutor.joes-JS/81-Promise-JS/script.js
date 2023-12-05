/*
const promise = new Promise((resolve, reject) => {
  const sum = 22 + 1;
  if (sum == 2) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error(error);
  });

  */

/*
setTimeout(() => {
  console.log("Hi");
}, 250);

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
setTimeoutPromise(250).then(() => {
  console.log("Joes");
});
*/

/*
setTimeout(() => {
  console.log("Normal : 1");

  setTimeout(() => {
    console.log("Normal : 2");

    setTimeout(() => {
      console.log("Normal : 3");
    }, 250);
  }, 250);
}, 250);

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

setTimeoutPromise(250).then(() => {
  console.log("Normal SetTime : 1");

  setTimeoutPromise(250).then(() => {
    console.log("Normal SetTime : 2");

    setTimeoutPromise(250).then(() => {
      console.log("Normal SetTime : 3");
    });
  });
});


setTimeoutPromise(250)
  .then(() => {
    console.log("Cool Promise : 1");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("Cool Promise : 2");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("Cool Promise : 3");
  });
*/

/*
const button = document.querySelector("button");

function addEventPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

addEventPromise(button, "click").then((e) => {
  console.log("Clicked");
  console.log(e);
});

*/

/*
console.log(Promise.resolve("Good"));

Promise.all([Promise.resolve("Good"), Promise.resolve("Good"), Promise.resolve("Good")])
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.all([Promise.resolve("Good"), Promise.reject("Error"), Promise.resolve("Good")])
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.any([Promise.reject("1"), Promise.reject("Error"), Promise.resolve("3")])
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.race([Promise.reject("Good-1"), Promise.resolve("Good-2"), Promise.resolve("Good-3")])
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error(error);
  });


Promise.allSettled([Promise.reject("Good-1"), Promise.resolve("Good-2"), Promise.resolve("Good-3")])
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error(error);
  });
*/

/*
const promise = Promise.reject("Error");

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("All Completed..");
  });
*/

/*
const getPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post-1", "Post-2", "Post-3"];
      resolve(posts);
    }, 1000);
  });
};

const getComments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = ["Comment 1", "Comment 2", "Comment 3"];
      resolve(comments);
    }, 2000);
  });
};

Promise.all([getPost(), getComments()])
  .then((results) => {
    //console.log(results);
    const [posts, comments] = results;
    console.log(`Posts: ${posts}`);
    console.log(`Comments: ${comments}`);
  })
  .catch((err) => {
    console.error(err);
  });

*/

/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
*/
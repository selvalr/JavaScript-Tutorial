//1.Normal Functions
function welcome() {
  return "Hello World";
}
console.log(welcome());

//2.Async Functions

//Example

async function welcome() {
  return "Hello World";
}
console.log(welcome());

//3.then

//promise.then(onFulfilled, onRejected);

welcome().then((msg) => {
  console.log(msg);
});

//4.catch

async function welcome() {
  return "Hello World";
}
console.log(welcome());

welcome()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  });

//5.Creating Comments for Blog using Async/Await Function

async function getData() {
  let blogPost = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Blog Post");
    }, 2000);
  });

  let blogComment = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment For Blog");
    }, 5000);
  });

  console.log("Fetching Post....");
  let post = await blogPost;
  console.log("Post : ", post);
  console.log("Fetching Comment....");
  let comment = await blogComment;
  console.log("Comment : ", comment);
  return [post, comment];
}

console.log("Welcome to Blog Post");
let data = getData();
console.log(data);

data
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

//7.Calculating Result using Async/Await Functions

let result = function (marks) {
  return new Promise(function (resolve, reject) {
    console.log("Calculation Result....");
    setTimeout(() => {
      let total = 0;
      let result = "Pass";
      marks.forEach((mark) => {
        total += mark;
        if (mark < 35) {
          result = "Fail";
        }
      });
      resolve({ total: total, result: result });
    }, 2000);
  });
};

/*
  90-100 A
  80-89 B
  70-79 C
  <70 D
  */

let grade = function (response) {
  return new Promise(function (resolve, reject) {
    if (response.result == "Pass") {
      let avg = response.total / 3;
      let gradeText = "Grade D";
      if (avg >= 90 && avg <= 100) {
        gradeText = "Grade A";
      } else if (avg >= 80 && avg <= 89) {
        gradeText = "Grade B";
      } else if (avg >= 70 && avg <= 79) {
        gradeText = "Grade C";
      }
      resolve(gradeText);
    } else {
      reject("No Grade");
    }
  });
};

//then
result([98, 99, 25])
  .then((value) => {
    console.log("Total  : ", value.total);
    console.log("Result : ", value.result);
    return grade(value);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

async function getResults() {
  try {
    const value = await result([98, 99, 55]);
    console.log("Total  : ", value.total);
    console.log("Result : ", value.result);
    const gradeText = await grade(value);
    console.log(gradeText);
  } catch (err) {
    console.error(err);
  }
}

getResults();

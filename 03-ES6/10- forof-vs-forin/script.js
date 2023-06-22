//for--of

const nicknames = ["di", "boo", "punkeye"];
nicknames.size = 3;
for (let nickname of nicknames) {
  console.log(nickname);
}
// di
// boo
// punkeye

//1. for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for (let fruit of fruits) {
  fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

//2.for-in

const nicknames = ["di", "boo", "punkeye"];
nicknames.size = 3;
for (let nickname in nicknames) {
  console.log(nickname);
}

// 0
// 1
// 2
// size

//ii.example
// for in loop in array
const fruits1 = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits12 = [];

for (let index in fruits1) {
  fruits12.push(fruits1[index].toUpperCase());
}
console.log(fruits12);

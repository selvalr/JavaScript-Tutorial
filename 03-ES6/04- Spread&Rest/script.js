const makeToast = (breadType, topping1, topping2) => {
  return `I had ${breadType} toast with ${topping1} and ${topping2}`;
};

const ingredients = ["wheat", "butter", "jam"];
makeToast(...ingredients);
// "I had wheat toast with butter and jam"
makeToast(...["sourdough", "avocado", "kale"]);
// "I had sourdough toast with avocado and kale"

//1.

const defaults = { avatar: "placeholder.jpg", active: false };
const userData = { username: "foo", avatar: "bar.jpg" };

console.log({ created: "2017-12-31", ...defaults, ...userData });
// {created: "2017-12-31", avatar: "bar.jpg", active: false, username: "foo"}

//2.

const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];
console.log([...arr1, 4, 5, 6, ...arr2]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//3.

function foo(...args) {
  console.log(args);
}
foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// 4.rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

const ans = addAll(4, 5, 4, 2, 10);
console.log(ans);

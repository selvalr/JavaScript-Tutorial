// important array methods

const numbers = [4, 2, 5, 8];

// function myFunc(number, index) {
//   console.log(`index is ${index} number is ${number}`);
// }

numbers.forEach(function (number, index) {
  console.log(`index is ${index} number is ${number}`); //index is 0 number is 4, index is 1 number is 2
});

numbers.forEach(function (number, index) {
  console.log(number * 3, index); //12 0 , 6 1,15 2 ,24 3
});

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

users.forEach(function (user) {
  console.log(user.firstName); //harshit,mohit,nithit,garima
});

users.forEach((user, index) => {
  console.log(user.firstName, index); //harshit 0,mohit 1,nithit 2, garima 3
});

for (let user of users) {
  console.log(user.firstName); //harshit,mohit,nithit,garima
}

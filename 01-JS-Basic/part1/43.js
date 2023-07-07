// nested destructuring
const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users;
console.log(user1firstName); //harshit
console.log(userId); //1
console.log(user3gender); //male

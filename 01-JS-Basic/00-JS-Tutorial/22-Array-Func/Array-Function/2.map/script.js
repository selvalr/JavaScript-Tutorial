const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//squrt is a 1*1,2*2,3*3,4*4
//map(value,index,array)
let sqrt = numbers.map((value) => {
  return Math.sqrt(value).toFixed(2);
});

console.table(sqrt);

const users = [
  { name: "Selva", age: 15, city: "Chennai", salary: 10500 },
  { name: "Ravi", age: 22, city: "Namakkal", salary: 12000 },
  { name: "Joes", age: 18, city: "Hosur", salary: 6000 },
  { name: "Aureen", age: 47, city: "Dharmapuri", salary: 10000 },
  { name: "Stanley", age: 10, city: "Salem", salary: 8000 },
  { name: "Ram", age: 12, city: "Salem", salary: 10000 },
];

console.table(users);

let eligible_status = users.map((user) => ({
  /*name:user.name,
    age:user.age,
    city:user.city,
    salary:user.salary,*/
  ...user,
  status: user.age >= 18 ? "Eligible" : "Not Eligible",
}));

console.table(eligible_status);

//2. // map method

// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const user = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

const userNames = user.map((users) => {
  return users.firstName;
});

console.log(userNames);

// param destructuring

// object
// react

const person = {
  firstName: "harshit",
  gender: "male",
  age: 500,
};

// function printDetails(obj) {
//   console.log(obj.firstName); //harshit
//   console.log(obj.gender); //male
// }

function printDetails({ firstName, gender, age }) {
  console.log(firstName); //harshit
  console.log(gender); //male
  console.log(age); //500
}

printDetails(person);

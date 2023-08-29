//1.
let emp = {
  firstName: "Raj",
  lastName: "Kumar",
  salary: 40000,
};

console.log(delete emp.salary);
console.log(emp);

//2.
let person = {
  firstName: "John",
  lastName: "Doe",
  phone: 12345,
};

console.log(delete person.phone);
console.log(person);

//3.
let num = 5;
let sum = (a, b) => {
  return a + b;
};

console.log(delete num); //false
console.log(delete sum); //false

//4.
let person = {
  firstName: "John",
  lastName: "Doe",
  phone: 12345,
};

let phone = person.phone;

console.log(delete person.phone); //true
console.log(phone); //12345

//5.
toDelete = 5;

// true
console.log(delete toDelete);

// toDelete is not defined
console.log(toDelete);

//6.
let arr = [1, 2, 3];

console.log(delete arr[0]); //true
console.log(arr); //[empty, 2, 3]

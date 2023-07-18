//JavaScript Destructuring Assignment

//Array Destructuring

//Before ES6
const numbers = [1, 2, 3, 4, 5];
const first = numbers[0];
const second = numbers[1];
const rest = numbers.slice(2);
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

//After ES6
/*
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
*/

//Object Destructuring

//Before ES6
const person = { name: "Joes", age: 30, gender: "male" };
const name = person.name;
const age = person.age;
const gender = person.gender;
console.log(name); // Output: 'Joes'
console.log(age); // Output: 30
console.log(gender); // Output: 'male'

//After ES6
/*
const person = { name: 'Joes', age: 30, gender: 'male' };
const { name, age, gender } = person;
console.log(name); // Output: 'Joes'
console.log(age); // Output: 30
console.log(gender); // Output: 'male'
*/

//JavaScript Destructuring with Default Values
/*
const numbers = [1, 2];
const [x, y, z = 3] = numbers;

console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3 (default value)
*/

/*
Here's an example of using default values with object destructuring:

const person = { name: 'Joes', age: 30 };
const { name, age, gender = 'male' } = person;

console.log(name); // Output: 'Joes'
console.log(age); // Output: 30
console.log(gender); // Output: 'male' (default value)
*/

//Swapping Variables with Ease: Using Destructuring Assignment Syntax in JavaScript

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1

//Efficient Array Manipulation in JavaScript: Skipping Unwanted Items with Destructuring Assignment
/*
let myArray = [1, 2, 3, 4, 5];
let [first,, , fourth,] = myArray;
console.log(first); // Output: 1
console.log(fourth); // Output: 4
*/

//Efficient Data Manipulation in JavaScript: Assigning Remaining Elements to a Single Variable using Destructuring and Rest Syntax for Arrays and Objects
/*
let myArray = [1, 2, 3, 4, 5, 6, 7];

let [first, second, ...rest] = myArray;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5, 6, 7]
*/

/*
//And here's an example of how to use destructuring and rest syntax with objects:

let myObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

let { a, b, ...rest } = myObj;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: {c: 3, d: 4, e: 5, f: 6, g: 7}
*/

//1.Nested Destructuring Assignment in JavaScript

//i.Destructuring an object with nested objects:
/*
const user = {
  name: "Tutor Joes",
  address: {
    city: "Salem",
    state: "Tamil Nadu",
    country: "India",
  },
};

const {
  name,
  address: { city, state },
} = user;

console.log(name); // 'Tutor Joes'
console.log(city); // 'Salem'
console.log(state); // 'Tamil Nadu'
*/

//ii.Destructuring an array with nested arrays:
/*
const numbers = [1, 2, [3, 4, [5, 6]]];
const [a, b, [c, d, [e, f]]] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
console.log(f); // 6
*/

//iii.Destructuring an array of objects with nested objects:
/*
const users = [
    {
      name: 'Tutor Joes',
      address: {
        city: 'Salem',
        state: 'Tamil Nadu',
        country: 'India'
      }
    },
    {
      name: 'Sara',
      address: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India'
      }
    }
  ];
  const [{ name: name1, address: { city: city1 } }, { name: name2, address: { city: city2 } }] = users;
  console.log(name1); // 'Tutor Joes'
  console.log(city1); // 'Salem'
  console.log(name2); // 'Sara'
  console.log(city2); // 'Chennai'
  */

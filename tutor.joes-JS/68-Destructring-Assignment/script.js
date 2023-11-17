//1.Array Destructuring:

//Before ES6
const numbers = [1, 2, 3, 4, 5];
const first = numbers[0];
const second = numbers[1];
const rest = numbers.slice(2);
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

//After ES6
const numbers1 = [1, 2, 3, 4, 5];
const [first1, second1, ...rest1] = numbers1;
console.log(first1); // Output: 1
console.log(second1); // Output: 2
console.log(rest1); // Output: [3, 4, 5]



//2.Object Destructuring:

//Before ES6
const person = { name: 'Joes', age: 30, gender: 'male' };
const  name = person.name;
const  age = person.age;
const gender = person.gender;
console.log(name); // Output: 'Joes'
console.log(age); // Output: 30
console.log(gender); // Output: 'male'

//After ES6
const person1 = { name: 'Joes', age: 30, gender: 'male' };
const { name1, age1, gender1 } = person;
console.log(name1); // Output: 'Joes'
console.log(age1); // Output: 30
console.log(gender1); // Output: 'male'

//3.JavaScript Destructuring with Default Values

const numbers2 = [1, 2];
const [x, y, z = 3] = numbers2;

console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3 (default value)


//4.using default values with object destructuring:

const person3 = { name: 'Joes', age: 30 };
const { name3, age3, gender3 = 'male' } = person3;

console.log(name3); // Output: 'Joes'
console.log(age3); // Output: 30
console.log(gender3); // Output: 'male' (default value)


//5.Swapping Variables with Ease: Using Destructuring Assignment Syntax in JavaScript
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1


//6.Efficient Array Manipulation in JavaScript: Skipping Unwanted Items with Destructuring Assignment
let myArray5 = [1, 2, 3, 4, 5];
let [first3,, , fourth3,] = myArray5;
console.log(first3); // Output: 1
console.log(fourth3); // Output: 4


//7.Efficient Data Manipulation in JavaScript: Assigning Remaining Elements to a Single Variable using Destructuring and Rest Syntax for Arrays and Objects
let myArray = [1, 2, 3, 4, 5, 6, 7];

let [first5, second5, ...rest5] = myArray;

console.log(first5); // Output: 1
console.log(second5); // Output: 2
console.log(rest5); // Output: [3, 4, 5, 6, 7]

//8.use destructuring and rest syntax with objects:

let myObj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7};

let {a6, b6, ...rest6} = myObj;

console.log(a6); // Output: 1
console.log(b6); // Output: 2
console.log(rest6); // Output: {c: 3, d: 4, e: 5, f: 6, g: 7}


//9.Nested Destructuring Assignment in JavaScript

//Destructuring an object with nested objects:

const user = {
    name: 'Tutor Joes',
    address: {
      city: 'Salem',
      state: 'Tamil Nadu',
      country: 'India'
    }
  };
  
  const { name00, address: { city, state } } = user;
  
  console.log(name00); // 'Tutor Joes'
  console.log(city); // 'Salem'
  console.log(state); // 'Tamil Nadu'



//Destructuring an array with nested arrays:

const numbers7 = [1, 2, [3, 4, [5, 6]]];
const [a0, b0, [c, d, [e, f]]] = numbers;
console.log(a0); // 1
console.log(b0); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
console.log(f); // 6




//Destructuring an array of objects with nested objects:

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
  const [{ name: name01, address: { city: city1 } }, { name: name2, address: { city: city2 } }] = users;
  console.log(name01); // 'Tutor Joes'
  console.log(city1); // 'Salem'
  console.log(name2); // 'Sara'
  console.log(city2); // 'Chennai'
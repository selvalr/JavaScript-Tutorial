const person = { name: "Joes", age: 30 };

function sayHello({ name }) {
  console.log(`Hello, ${name}!`);
}

sayHello(person); // Output: "Hello, Joes!"

//ii.We can also set default values for properties when destructuring if the property is not present in the object.

const person2 = { name: "Joes" };

function sayHello2({ name, age = 25 }) {
  console.log(`Hello, ${name}! You are ${age} years old`);
}

sayHello2(person2); // Output: "Hello, Joes! You are 25 years old"

//iii.Similarly, we can destructure an array's elements into variables. Consider the following example of a function that takes an array of numbers and adds them together:

const numbers = [1, 2, 3];

function add([a, b, c]) {
  return a + b + c;
}

console.log(add(numbers)); // Output: 6

//iv.We can also use the rest operator to collect remaining properties in a single variable.

const person3 = { name: "Joes", age: 30, city: "Salem", country: "India" };

function sayHello3({ name, age, ...rest }) {
  console.log(`Hello, ${name}! You are ${age} years old`);
  console.log(rest);
}

sayHello3(person3); // Output: "Hello, Joes! You are 30 years old" and {city: 'Salem', country: 'India'}

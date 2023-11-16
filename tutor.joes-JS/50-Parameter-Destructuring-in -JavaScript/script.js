const person = {name: 'Joes', age: 30};


function sayHello({ name }) {
    console.log(`Hello, ${name}!`);
    }
    
    sayHello(person); // Output: "Hello, Joes!"

    
    
    
//1.default parameter

const person1 = { name: 'Joes'};
function sayHello({ name, age = 25 }) {
console.log(`Hello, ${name}! You are ${age} years old`);
}

sayHello(person1); // Output: "Hello, Joes! You are 25 years old"


//2.array destruct param
const numbers = [1, 2, 3];

function add([a, b, c]) {
  return a + b + c;
}

console.log(add(numbers)); // Output: 6


//3.Object destruct param
const person2 = {name: 'Joes', age: 30, city: 'Salem', country: 'India'};

function sayHello({ name, age ,...rest}) {
console.log (`Hello, ${name}! You are ${age} years old`);
  console.log(rest);
}

sayHello(person2); // Output: "Hello, Joes! You are 30 years old" and {city: 'Salem', country: 'India'}
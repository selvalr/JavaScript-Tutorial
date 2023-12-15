let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);

// Now we can access 'blueberry' with the following
x = fruits[3][1];
console.log(x); //blueberry

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2];
console.log(x); //rasberry

// concat() - Concatenate arrays
x = fruits.concat(berries);
console.log(x); //(7) ['apple', 'pear', 'orange', Array(3), 'strawberry', 'blueberry', 'rasberry']

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];
console.log(x); //(7) ['apple', 'pear', 'orange', Array(3), 'strawberry', 'blueberry', 'rasberry']

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();
console.log(x); //(8) [1, 2, 3, 4, 5, 6, 7, 8]

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);
console.log(x); //true

// from() - Create an array from an array like value
x = Array.from("12345");
console.log(x); //(5) ['1', '2', '3', '4', '5']

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x); //(3) [1, 2, 3]

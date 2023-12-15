let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, "Hello", true, null];

// Array Constructor
const fruits = new Array("apple", "grape", "orange");

// Get value by index
x = numbers[0];
console.log(x); //12

x = numbers[0] + numbers[3]; //12+29
console.log(x); //41

x = `My favorite fruit is an ${fruits[2]}`;
console.log(x); //My favorite fruit is an orange

x = numbers.length;
console.log(x); //6

fruits[2] = "pear";

// length is not read-only
// fruits.length = 2;

fruits[3] = "strawberry";

// Using the length as the index will always add on the the end
fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;

console.log(x); //(6) ['apple', 'grape', 'pear', 'strawberry', 'blueberry', 'peach']

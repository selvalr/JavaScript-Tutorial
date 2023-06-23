/*
Primitive Data Types:
Primitive data types in JavaScript include:

1.Numbers - Integers, floats
2.Strings - Any data under single quote, double quote or backtick quote
3.Booleans - true or false value
4.Null - empty value or no value
5.Undefined - a declared variable without a value
6.Symbol - A unique value that can be generated by Symbol constructor
*/

/*
Non-primitive data types in JavaScript includes:

1.Objects
2.Arrays
*/

//1.primitive:string,number,boolean,null,undefined,symbol,bigint

const foo = 1;
let bar = foo;
console.log(foo); //1
console.log(bar); //1
foo++;
console.log(foo); //2
console.log(bar); //1

bar = 9;

console.log(foo, bar); // => 1, 9

//i.
let word = "JavaScript";
word[0] = "Y";
console.log(word);

//ii.
let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";

console.log(js == py); //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // false

//2.reference Complex:object,array,function

const food = [1, 2];
const bars = food;
console.log(food);
console.log(bars);
food.push(3);
console.log(food);
console.log(bars);

bars[0] = 9;

console.log(food[0], bars[0]); // => 9, 9

//i.reference Complex:object,array,function
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]

//ii.reference:
let nums2 = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums2 == numbers); // false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

console.log(userOne == userTwo); // false

//iii.
let nums3 = [1, 2, 3];
let numbers3 = nums3;

console.log(nums3 == numbers3); // true

let userOne2 = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo2 = userOne2;

console.log(userOne2 == userTwo2); // true

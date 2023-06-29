//1.Simple Transformation

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//2. Modifying Array Elements

const words = ["hello", "world"];
const capitalizedWords = words.map((word) => word.toUpperCase());
console.log(capitalizedWords); // ["HELLO", "WORLD"]

//3. Combining Arrays

const fruits = ["apple", "banana"];
const colors = ["red", "yellow"];
const fruitColors = fruits.map((fruit, index) => fruit + "-" + colors[index]);
console.log(fruitColors); // ["apple-red", "banana-yellow"]

//4. Creating a new Array

const numbers1 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers1.map((num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

//5. Filtering an Array

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.map((num) => num % 2 === 0);
console.log(evenNumbers); // [false, true, false, true, false]

//6. Extracting Properties from an Array of Objects

const users1 = [
  { name: "Ram", age: 30 },
  { name: "Sam", age: 25 },
  { name: "Ravi", age: 35 },
];
const names1 = users1.map((user) => user.name);
console.log(names1); // ["Ram", "Sam", "Ravi"]

//7. Modifying an Array of Objects

const users = [
  { name: "Ram", age: 30 },
  { name: "Sam", age: 25 },
  { name: "Ravi", age: 35 },
];
const updatedUsers = users.map((user) => {
  return {
    ...user,
    age: user.age + 1,
  };
});
console.log(updatedUsers);
// [{ name: "Ram", age: 31 }, { name: "Sam", age: 26 }, { name: "Ravi", age: 36 }]

//8. Flattening an Array

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.map((subArray) => subArray.join(""));
console.log(flattenedArray); // ["12", "34", "56"]

//9. Formatting a Date Array

const dates = [
  new Date("2022-01-01"),
  new Date("2022-02-01"),
  new Date("2022-03-01"),
];
const formattedDates = dates.map((date) => date.toLocaleDateString());
console.log(formattedDates); // ["1/1/2022", "2/1/2022", "3/1/2022"]

//10. Creating an Array of DOM Elements

const names = ["Ram", "Sam", "Ravi"];
const nameElements = names.map((name) => {
  const nameElement = document.createElement("div");
  nameElement.innerText = name;
  return nameElement;
});
console.log(nameElements);

//Reduce
//syntax:
/*
array.reduce(function(accumulator, currentValue, currentIndex, array) {
  // code to be executed on each iteration
}, initialValue);
*/

//Example 1: Summing the values of an array

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); // 15

//Example 2: Flattening an array

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flattenedArray = nestedArray.reduce((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

//Example 3: Counting the occurrences of an element

let colors = ["red", "blue", "green", "red", "blue", "yellow"];
let colorCounts = colors.reduce((accumulator, currentValue) => {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
console.log(colorCounts); // { red: 2, blue: 2, green: 1, yellow: 1 }

//Example 4: Finding the largest value in an array

let numbers1 = [5, 10, 15, 20, 25];
let largest = numbers1.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
});
console.log(largest); // 25

//Example 5: Grouping elements by a certain property

let people = [
  { name: "Rakesh", age: 25, city: "Chennai" },
  { name: "Raj", age: 30, city: "Salem" },
  { name: "Sara", age: 35, city: "Chennai" },
];

let groupedByCity = people.reduce((accumulator, currentValue) => {
  if (currentValue.city in accumulator) {
    accumulator[currentValue.city].push(currentValue);
  } else {
    accumulator[currentValue.city] = [currentValue];
  }
  return accumulator;
}, {});

console.log(groupedByCity);
/* 
    { 
    Chennai: [{ name: 'Rakesh', age: 25, city: 'Chennai' }, { name: 'Sara', age: 35, city: 'Chennai' }], 
    Salem: [{ name: 'Raj', age: 30, city: 'Salem' }] 
    }
*/

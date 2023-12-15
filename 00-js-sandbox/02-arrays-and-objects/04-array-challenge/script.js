// Challenge 1

const arr = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// Same result as above
arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr); //(7) [6, 5, 4, 3, 2, 1, 0]

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3); //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4); //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

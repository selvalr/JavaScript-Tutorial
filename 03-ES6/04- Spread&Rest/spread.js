//spread operator

const originalArray = [1, 2, 3, 4, 5];
const newArray = [...originalArray];
console.log(newArray); // [1, 2, 3, 4, 5]

//You can also use the spread operator to merge two arrays into a single array:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

//Similarly, you can use the spread operator to create a new object with all of the properties of an existing object:

const originalObject = { a: 1, b: 2, c: 3 };
const newObject = { ...originalObject };
console.log(newObject); // {a: 1, b: 2, c: 3}

//You can also use the spread operator to merge two objects into a single object

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // {a: 1, b: 2, c: 3, d: 4}

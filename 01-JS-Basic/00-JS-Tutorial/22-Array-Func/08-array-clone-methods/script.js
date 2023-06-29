//Method-1

let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
console.log(clonedArray); // [1, 2, 3]

//Method-2
let originalArray1 = [1, 2, 3];
let clonedArray1 = originalArray1.slice();
console.log(clonedArray1); // [1, 2, 3]

//Method-3
let originalArray2 = [1, 2, 3];
let clonedArray2 = [].concat(originalArray2);
console.log(clonedArray2); // [1, 2, 3]

//Method-4
let originalArray3 = [1, 2, 3];
let clonedArray3 = Array.from(originalArray3);
console.log(clonedArray3); // [1, 2, 3]

//Method-5
let originalArray4 = [1, 2, 3];
let clonedArray4 = JSON.parse(JSON.stringify(originalArray4));
console.log(clonedArray4); // [1, 2, 3]

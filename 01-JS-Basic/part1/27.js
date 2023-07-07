// array push pop

// array shift unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits); //["apple", "mango", "grapes"]
// push
fruits.push("banana");
console.log(fruits); //["apple", "mango", "grapes","banana"]
// pop
let poppedFruit = fruits.pop();
console.log(fruits); //["apple", "mango", "grapes"]
console.log("popped fruits is", poppedFruit); //banana

// unshift
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits); //["myfruit","banana","apple","mango","grapes"]

// shift
let removedFruit = fruits.shift();
console.log(fruits); //["banana","apple", "mango", "grapes"]
console.log("removed fruits is ", removedFruit); //myfruit

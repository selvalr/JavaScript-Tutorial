// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

console.log(fruits.length); //4
console.log(fruits[fruits.length - 2]); //"grapes"

let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2); //["APPLE", "MANGO","GRARPES","BANANA"]

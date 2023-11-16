//method1--Spread operator: 
let originalArray=[1,2,3];
let clone1=[...originalArray];
console.log(clone1);

//method2--slice() method: 
let originalArray1=[1,2,3];
let clone2=originalArray.slice();
console.log(clone2);

//method3--Concat() method
let originalArray3=[1,2,3];
let clone3=[].concat(originalArray3);
console.log(clone3);

//method4--Array.from() method
let originalArray4=[1,2,3];
let clone4=Array.from(originalArray4);
console.log(clone4);

//method5--JSON.parse() and JSON.stringify()

let originalArray5=[1,2,3];
let clone5=JSON.parse(JSON.stringify(originalArray5));
console.log(clone5);
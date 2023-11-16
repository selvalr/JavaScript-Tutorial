//1.Array Destructuring
/*
let [variable1, variable2, ..., variableN] = array;
*/


let numbers = [10, 20, 30, 40, 50];
let [a1, b1, c1] = numbers;
console.log(a1); //10
console.log(b1); //20
console.log(c1); //30


let nestedArray = [[1, 2], [3, 4], [5, 6]];
let [[a, b], [c, d], [e, f]] = nestedArray;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
console.log(e); //5
console.log(f); //6


let number = [10, 20, 30, 40, 50];
let [a2, b2, ...c2] = number;
console.log(a2); //10
console.log(b2); //20
console.log(c2); // [30,40,50]


//2.Array Destructuring in Javascript Object

/*
let {property1: variable1, property2: variable2, ..., propertyN: variableN} = object;
*/

let person = {name: "Tiya", age: 5, gender: "female"};
let {name, age, gender} = person;
console.log(name); // "Tiya"
console.log(age); // 5
console.log(gender); // "female"


let address = {street: "Cherry Road", city: "Salem", state: "Tamil Nadu", zip: "636007"};
let employee = {name: "Tiya", age: 12, gender: "female", address};
let {name1, age1, gender1, address: {city, state, zip}} = employee;
console.log(name1); // "Tiya"
console.log(age1); // 30
console.log(gender1); // "female"
console.log(city); // "Salem"
console.log(state); // "Tamil Nadu"
console.log(zip); // "636007"



let {name2 = "guest", age2 = 25, gender2 = "unknown"} = person;
console.log(name2); // "John"
console.log(age2); // 30
console.log(gender2); // "male"

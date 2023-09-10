//Destructing

//1.Array Destructing

//syntax array destructuring:
//let [variable1, variable2, ..., variableN] = array;

//i.
let numbers = [10, 20, 30, 40, 50];
let [a, b, c] = numbers;
console.log(a); //10
console.log(b); //20
console.log(c); //30

//ii.You can also use destructuring to extract elements from nested arrays. For example, you can de-structure an array of arrays like this:

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let [[a1, b1], [c1, d1], [e1, f1]] = nestedArray;
console.log(a1); //1
console.log(b1); //2
console.log(c1); //3
console.log(d1); //4
console.log(e1); //5
console.log(f1); //6

//iii.You can also use destructuring to extract elements from the end of an array like this:

let numbers2 = [10, 20, 30, 40, 50];
let [a2, b2, ...c2] = numbers2;
console.log(a2); //10
console.log(b2); //20
console.log(c2); // [30,40,50]

//2.Object Destructuring

//syntax:
//let {property1: variable1, property2: variable2, ..., propertyN: variableN} = object;

//i.
let person = { name: "Tiya", age: 5, gender: "female" };
let { name, age, gender } = person;
console.log(name); // "Tiya"
console.log(age); // 5
console.log(gender); // "female"

//ii.You can also use destructuring to extract values from nested objects. For example, you can de-structure an object with nested objects like this:

let address = {
  street: "Cherry Road",
  city: "Salem",
  state: "Tamil Nadu",
  zip: "636007",
};
let employee = { name: "Tiya", age: 12, gender: "female", address };
let {
  name2,
  age2,
  gender2,
  address: { city, state, zip },
} = employee;
console.log(name2); // "Tiya"
console.log(age2); // 30
console.log(gender2); // "female"
console.log(city); // "Salem"
console.log(state); // "Tamil Nadu"
console.log(zip); // "636007"

//iv.You can also use destructuring to set default values for properties that might be missing from the object. For example, you can destructure an object and set default values for properties like this:

let { name3 = "guest", age3 = 25, gender3 = "unknown" } = person3;
console.log(name3); // "John"
console.log(age3); // 30
console.log(gender3); // "male"

/*
//1.
function foo() {
  return [1, 2, 3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

//2.

function getCar() {
  return {
    make: "Tesla",
    model: "g95",
    metadata: {
      vin: "123abc",
      miles: "12000",
    },
  };
}

const { make, model } = getCar();
console.log(make, model); // Tesla g95
*/
/*
const {make, metadata: {miles}} = getCar();
console.log(make, miles); // Tesla 12000
*/

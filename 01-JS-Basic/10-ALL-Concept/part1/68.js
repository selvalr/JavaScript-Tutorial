// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string
// key -> symbol
const person = {
  firstName: "harshit",
  age: 7,
  1: "one",
};
// console.log(person.firstName); //harshit
// console.log(person["firstName"]); //harshit
// console.log(person[1]); //one

for (let key in person) {
  console.log(typeof key); //string
}

// key value pair

const person11 = new Map();
person11.set("firstName", "Harshit");
person11.set("age", 7);
person11.set(1, "one");
person11.set([1, 2, 3], "onetwothree");
person11.set({ 1: "one" }, "onetwothree");
console.log(person11);
/*
Output
0:{"firstName" => "Harshit"}
1:{"age" => 7}
2:{1 => "one"}
3:{Array(3) => "onetwothree"}
4:{Object => "onetwothree"}
*/

console.log(person11.get(1)); //one

for (let key of person11.keys()) {
  console.log(key, typeof key);
}
/*
Output
firstName => string
age => string
1  =>number
[1,2,3] =>object
{1:"one"}=>object

*/

for (let [key, value] of person11) {
  // console.log(Array.isArray(key));
  console.log(key, value); //
}
/*
output 
firstName Harshit
 age 7
1 'one'
 (3) [1, 2, 3] 'onetwothree'
 {1: 'one'} 'onetwothree'


*/
const person1 = {
  id: 1,
  firstName: "harshit",
};
const person2 = {
  id: 2,
  firstName: "harshta",
};

const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });
extraInfo.set(person2, { age: 9, gender: "female" });
console.log(extraInfo); //0:{Object => Object},1: {Object => Object}
console.log(person1.id); //1
console.log(extraInfo.get(person1).gender); //male
console.log(extraInfo.get(person2).gender); //female

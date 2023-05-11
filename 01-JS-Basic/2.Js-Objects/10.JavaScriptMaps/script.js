/*
How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
*/

//1.new Map()
//You can create a Map by passing an Array to the new Map() constructor:

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits.get("apples"));

//2.Map.set()
//You can add elements to a Map with the set() method:

// Create a Map
const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

console.log(fruits.get("apples"));


//The set() method can also be used to change existing Map values:

fruits.set("apples", 200);
console.log(fruits.get("apples"));

//2.Map.get()
//The get() method gets the value of a key in a Map:

//Example
fruits.get("apples");    // Returns 500

//3.Map.size
//The size property returns the number of elements in a Map:

//Example
fruits.size;
console.log(fruits.size);


//4.Map.delete()
//The delete() method removes a Map element:

//Example
//fruits.delete("apples");

//console.log(fruits);

//5.Map.clear()
//The clear() method removes all the elements from a Map:

//Example
//fruits.clear();
//console.log(fruits.clear());

//6,Map.has()
//The has() method returns true if a key exists in a Map:

//Example
console.log(fruits.has("oranges"));

//Try This:

//fruits.delete("apples");

//fruits.has("apples");

//7.Maps are Objects
//typeof returns object:

//Example
// Returns object:
console.log(typeof fruits);

//instanceof Map returns true:

//Example
// Returns true:
console.log(fruits instanceof Map);


//8.Map.forEach()
//The forEach() method invokes a callback for each key/value pair in a Map:

//Example
// List all entries
let text1 = "";
fruits.forEach (function(value, key) {
  text1 += key + ' = ' + value;
})
console.log(text1);

//9.Map.entries()
//The entries() method returns an iterator object with the [key,values] in a Map:

//Example
// List all entries
let text2 = "";
for (const x of fruits.entries()) {
  text2 += x;
}
console.log(text2);

//10.Map.keys()
//The keys() method returns an iterator object with the keys in a Map:

//Example
// List all keys
let text3 = "";
for (const x of fruits.keys()) {
  text3 += x;
}
console.log(text3);


//11.Map.values()
//The values() method returns an iterator object with the values in a Map:

//Example
// List all values
let text = "";
for (const x of fruits.values()) {
  text += x;
}
console.log(text);
//You can use the values() method to sum the values in a Map:

//Example
// Sum all values
let total = 0;
for (const x of fruits.values()) {
  total += x;
}
console.log(total);

//12.Objects as Keys
//Being able to use objects as keys is an important Map feature.

//Example
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits2 = new Map();

// Add new Elements to the Map
fruits2.set(apples, 500);
fruits2.set(bananas, 300);
fruits2.set(oranges, 200);
console.log(fruits2.get(apples));
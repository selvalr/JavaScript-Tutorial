//The new Set() Method
/*
A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

A Set can hold any value of any data type.
 */



// Create a Set
const letters = new Set(["a","b","c"]);

// Display set.size
console.log(letters.size);


//2.Create a Set and add literal values:


// Create a Set
const letters1 = new Set();

// Add Values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");
console.log(letters1.size);


//3.Create a Set and add variables:


// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letters2 = new Set();

// Add Variables to the Set
letters2.add(a);
letters2.add(b);
letters2.add(c);
console.log(letters2.size);



//4.The add() Method

// Create a new Set
const letters3 = new Set(["a","b","c"]);

// Add a new Element
letters3.add("d");
letters3.add("e");

// Display set.size
console.log(letters3);



//5.The forEach() Method
//The forEach() method invokes a function for each Set element:

//Example
// Create a Set
const letters4 = new Set(["a","b","c"]);

// List all entries
let text = "";
letters4.forEach (function(value) {
  text += value;
})
console.log(text);


//6.The values() Method
//The values() method returns an Iterator object containing all the values in a Set:

//Example
console.log(letters4.values());   // Returns [object Set Iterator]--->innnerHTML output is


//Now you can use the Iterator object to access the elements:

//Example
// Create an Iterator
const myIterator = letters4.values();

// List all Values
let text1 = "";
for (const entry of myIterator) {
  text1 += entry;
}
console.log(text1);


//7.The keys() Method
//A Set has no keys.

//keys() returns the same as values().

//This makes Sets compatible with Maps.

//Example
console.log(letters4.keys());   // Returns [object Set Iterator]--->inneerHTML is


//8.The entries() Method
//A Set has no keys.

//entries() returns [value,value] pairs instead of [key,value] pairs.

//This makes Sets compatible with Maps:

//Example
// Create an Iterator
const myIterator1 = letters4.entries();

// List all Entries
let text2 = "";
for (const entry of myIterator1) {
  text2 += entry;
}
console.log(text2);

//9.Sets are Objects
//For a Set, typeof returns object:

typeof letters4;      // Returns object
console.log(typeof letters4); // Returns object

//For a Set, instanceof Set returns true:

letters instanceof Set;  // Returns true

console.log(letters4 instanceof Set); // Returns true

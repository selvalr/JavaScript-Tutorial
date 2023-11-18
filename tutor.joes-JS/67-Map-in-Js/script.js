//Map

//1,Creating a Map Object:
const userMap = new Map();


//2.Adding Elements to a Map:
userMap.set("name", "Joes"); 
userMap.set("age", 30); 
userMap.set("city", "Salem"); 
userMap.set("contact", "9043017689");

//3.Printing a Map Object:
console.log(userMap);

//4.Updating the Value of a Map:
userMap.set("age", 31); 
console.log(userMap);

//5.Map size
console.log("Map Size: ", userMap.size);

//6.Deleting a Key-Value Pair from a Map:
console.log("Before Delete :", userMap);
userMap.delete("city"); 
console.log("After Delete :", userMap);


//6.Retrieving a Value from a Map:

console.log(userMap.get("name"));

//7.Checking if a Key Exists in a Map:

console.log(userMap.has("name")); 
console.log(userMap.has("city"));

//8.Iterating a Map with for...of:

for (const [key, value] of userMap) 
{ 
console.log(`${key} = ${value}`); 
}

//9.Retrieving Keys from a Map:

for (const key of userMap.keys()) 
{ 
console.log(key); 
}

//10.Retrieving Values from a Map:

for (const value of userMap.values()) 
{ 
   console.log(value); 
}

//11.Retrieving Entries from a Map:
/*
for (const value of userMap.entries ()) 
{ 
   console.log(`${key}  = ${value}`); 
}
*/

//12.Retrieving Key-value from a Map using forEach():

userMap.forEach((value, key) => {
    console.log(`${key}  = ${value}`);
  });

//13.Clear all values from a Map:

userMap.clear();
console.log("After Clear :", userMap);


//14.Relation with Array objects

const arr = [
    ["key1", "value1"],
    ["key2", "value2"],
  ];
  const myMap = new Map(arr);
  console.log(myMap);
  console.log(myMap.get("key1"));

  //Array.from() method. Here's an example:
  console.log(Array.from(myMap));


  //
  console.log([...myMap]);

  //keys and values of a Map object:

console.log(Array.from(myMap.keys()));
console.log(Array.from(myMap.values()));


//15.Using Maps in JavaScript: Common Mistakes and Best Practices

//Mistake 1: Using the wrong syntax to set values

//One common mistake is to use the wrong syntax to set values in a Map. This can happen when developers try to set values using the same syntax as they would use for an object. For example:

const wrongMap = new Map();
wrongMap["key1"] = "Data1";
wrongMap["key2"] = "Data2";

//This is incorrect because Maps are not meant to be accessed like objects. Instead, you should use the set() method to add key-value pairs to a Map:

const correctMap = new Map();
correctMap.set("key1", "Data1");
correctMap.set("key2", "Data2");

//Mistake 2: Not using the has() method to check if a key exists
const myMap2 = new Map();
myMap2.set("key1", "value1");

if (myMap2.has("key1")) {
  console.log(myMap2.get("key1"));
}


//Mistake 3: Treating keys as strings when they are not

const myMap4 = new Map();
const objKey = {};
const arrKey = [];

myMap4.set(objKey, "value1");
myMap4.set(arrKey, "value2");

console.log(myMap4.get(objKey)); // "value1"
console.log(myMap4.get({})); // undefined
console.log(myMap4.get(arrKey)); // "value2"
console.log(myMap4.get([])); // undefined



//7.Using NaN as a Key in JavaScript Maps
//Code Explanation
console.log(Number("Ram"));
const myMaps = new Map();
myMaps.set(NaN, "Not a Number");
console.log(myMaps.get(NaN));

//Challenges of Using NaN as a Key
const myMap7 = new Map();
myMap7.set(NaN, "Not a Number");

console.log(myMap7.has(NaN)); // false
console.log(isNaN([...myMap7.keys()][0])); // true


//Another challenge of using NaN as a key is that it can cause unexpected behavior when used with certain operations, such as sorting:

const myMap8 = new Map();
myMap8.set(NaN, "Not a Number");
myMap8.set(1, "One");
myMap8.set(2, "Two");

console.log([...myMap8.entries()].sort()); // [[1, "One"], [2, "Two"], [NaN, "Not a Number"]]


//Merging Maps in JavaScript

//Maps can be merged with Arrays
const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  const second = new Map([
    [1, "first"],
    [2, "second"],
  ]);
  const merged = new Map([...first, ...second, [1, "Ist"]]);
  console.log(merged);
  console.log(merged.get(1));
  console.log(merged.get(2));
  console.log(merged.get(3));


  //8.Counting Word Frequency in JavaScript

  const sentence = "Fear leads to anger anger leads to hatred hatred leads to conflict";
const words = sentence.split(" ");
console.log(words);


//increment the value of the corresponding key in the map using the get() and set() methods. If it does not exist, we set the value of the corresponding key to 1

const wordFrequency = new Map();
for (let word of words) {
  if (wordFrequency.has(word)) {
wordFrequency.set(word, wordFrequency.get(word) + 1);
  } else {
wordFrequency.set(word, 1);
  }
}
console.log(wordFrequency);


//10.Grouping Objects by Property Value in JavaScript
const people = [
    { name: "Raja", age: 30 },
    { name: "Sara", age: 25 },
    { name: "Suresh", age: 30 },
    { name: "Sundar", age: 25 },
    ];

    const peopleByAge = new Map();


    for (let person of people) {
        const age = person.age;
        if (peopleByAge.has(age)) {
      peopleByAge.get(age).push(person);
        } else {
      peopleByAge.set(age, [person]);
        }
      }

      console.log(peopleByAge);


    //11.Counting the Frequency of Elements in an Array with JavaScript
    function frequencyCounter(arr) {
        const map = new Map();
        for (let i = 0; i<arr.length; i++) {
          const element = arr[i];
      map.set(element, (map.get(element) || 0) + 1);
        }
        return map;
      }



      //i.Here are a couple of examples of using the frequencyCounter function:

const array = [1, 2, 3, 1, 2, 2, 4];
console.log(frequencyCounter(array));
// Output: Map(4) { 1 => 2, 2 => 3, 3 => 1, 4 => 1 }

const array2 = [1, 54, 1, 52];
console.log(frequencyCounter(array2));
// Output: Map(3) { 1 => 2, 54 => 1, 52 => 1 }
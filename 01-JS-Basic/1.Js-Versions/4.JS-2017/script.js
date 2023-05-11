//1.JavaScript String Padding
//ECMAScript 2017 added two string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.


let text = "5";
text = text.padStart(4,0);
console.log(text);

let text1 = "5";
text1 = text1.padEnd(4,0);
console.log(text1);

//2.JavaScript Object Entries
//ECMAScript 2017 added the Object.entries() method to objects.

//Object.entries() returns an array of the key/value pairs in an object:

const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text2 = Object.entries(person);
console.log(text2);

//Object.entries() makes it simple to use objects in loops:

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text3 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text3 += fruit + ": " + value + "<br>";
}
console.log(text3);


//Object.entries() also makes it simple to convert objects to maps:

const fruits1 = {Bananas:300, Oranges:200, Apples:500};

const myMap = new Map(Object.entries(fruits1));

console.log(myMap);



//4.JavaScript Object Values
//Object.values() are similar to Object.entries(), but returns a single dimension array of the object values:

const person1 = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let tex2 = Object.values(person1);
console.log(tex2);


//5.JavaScript Async Functions

//Waiting for a Timeout

async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  console.log(await myPromise);
}

myDisplay();
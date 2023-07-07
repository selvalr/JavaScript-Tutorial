//Accessing JavaScript Properties
/*

The syntax for accessing the property of an object is:

objectName.property      // person.age

or

objectName["property"]   // person["age"]

or

objectName[expression]   // x = "age"; person[x]


*/

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
  "likes birds": true, // multiword property name must be quoted
};
console.log(person.age); //dot
console.log(person["firstname"]); //brackeet
console.log(person["likes birds"]);

//2.JavaScript for...in Loop

const person1 = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

let txt = "";
for (let x in person1) {
  txt += person1[x] + " ";
}

console.log(txt);

//3.Adding New Properties
const person2 = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
};

person2.nationality = "English";

console.log(person2);

//3.Deleting Properties
const person4 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person4.age; //(or) delete person["age"];
console.log(person4);

//4.Nested Object

const myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
console.log(myObj.cars.car2); //(or )  myObj.cars["car2"]; (or)  myObj["cars"]["car2"]; (or)  let p1 = "cars";let p2 = "car2"; myObj[p1][p2];

//5.Nested Arrays and Objects
let x = "";
const myObj1 = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let i in myObj1.cars) {
  x += "<h2>" + myObj1.cars[i].name + "</h2>";
  for (let j in myObj1.cars[i].models) {
    x += myObj1.cars[i].models[j] + "<br>";
  }
}

console.log(x);

//Square brackets

let user = {
  name: "John",
  age: 30,
  "likes birds": true, // multi word property name must be quoted
};

// this would give a syntax error
//user.likes birds = true

let user1 = {};
// set
user1["likes birds"] = true;
// get
alert(user1["likes birds"]); // true
// delete
delete user1["likes birds"];

let key = prompt("What do you want to know about the user?", "name");
// access by variable
alert(user[key]); // John (if enter "name")

/*
let key = "name";
alert( user.key ) // undefined
*/

//5.Computed properties

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"

//Essentially, that works the same as:
/*
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
*/

//We can use more complex expressions inside square brackets:
/*
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
*/

//6.Property value shorthand

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user5 = makeUser("John", 30);
alert(user5.name); // John

//same as
/*
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
*/

//7.Property names limitations

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6

//For instance, a number 0 becomes a string "0" when used as a property key:
/*
let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)
*/

/*
There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

*/

//8.Property existence test, “in” operator

/*The syntax is:

"key" in object */

let user6 = { name: "John", age: 30 };

alert("age" in user6); // true, user.age exists
alert("blabla" in user6); // false, user.blabla doesn't exist

/*

let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists

*/

/*
It’s when an object property exists, but stores undefined:

let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!

*/

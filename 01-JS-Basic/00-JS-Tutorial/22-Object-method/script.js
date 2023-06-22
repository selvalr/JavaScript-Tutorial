//1.// methods
// function inside object

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person01 = {
  firstName: "harsh",
  age: 8,
  about: personInfo,
};
const person2 = {
  firstName: "mohit",
  age: 18,
  about: personInfo,
};
const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};

person01.about();
person2.about();
person3.about();

//2.objectName.methodName(arguments)

const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log("The engine sputters...");
  },
};

engine.start("noisily");
engine.sputter();

//Object.assign: To copy an object without modifying the original object

const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};
//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

//1.Getting object keys using Object.keys()

//Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']

//2.Getting object values using Object.values()

//Object.values:To get values of an object as an array
const values = Object.values(copyPerson);
console.log(values);

//3.Getting object keys and values using Object.entries()

//Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson);
console.log(entries);

//4.Checking properties using hasOwnProperty()

//hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));

//object using for loop

let person1 = {
  firstName: "selva",
  work: "none",
  study: "BCA",
};

delete person1.study; //delete object

for (let hi in person1) {
  console.log(hi + " :" + person1[hi]);
}

//Object.fromEntries: Object from Map

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2

//3. clone using Object.assign

// memory

const obj = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

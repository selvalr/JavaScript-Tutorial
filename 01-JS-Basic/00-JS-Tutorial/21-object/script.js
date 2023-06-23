// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

//object Syntax:
//key-value pairs in curly braces
/*
let object_name = {
    key_name : value,
    ...
}
*/

//1.Creating an empty object

const person1 = {};

//2.Creating an objecting with values

//i.

let person = {
  firstName: "selva",
  lastName: "manan",
};
console.log(person);
console.log(typeof person); //object

// how to access data from objects
console.log(person.firstName); //selva
console.log(person["lastName"]); //manan //getter

// how to add key value pair to objects
person["age"] = 23; //setter age but already age is object to overwrite
console.log(person);

//length calculate in object
let ke = Object.keys(person);
console.log(ke["length"]); //3

//ii.
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

//ii.

const person2 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person2);

//3.Getting values from an object

const person3 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};

// accessing values using .
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.age);
console.log(person3.location); // undefined

// value can be accessed using square bracket and key name
console.log(person3["firstName"]);
console.log(person3["lastName"]);
console.log(person3["age"]);
console.log(person3["age"]);
console.log(person3["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person3["phone number"]);

//dot and square notation

let babyName = { boy: "selva", girl: "trisha" };
let baby = "boy";

console.log(babyName[baby]); //selva is using array notation working dynamically
console.log(babyName.baby); //undefined is not notation is not supported static

//4.Creating object methods

const perso = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(perso.getFullName());
// Asabeneh Yetayeh

//5.Setting new key for an object

const pers = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
pers.nationality = "Ethiopian";
pers.country = "Finland";
pers.title = "teacher";
pers.skills.push("Meteor");
pers.skills.push("SasS");
pers.isMarried = true;

pers.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(pers);
console.log(pers.getPersonInfo());

//========================================

//Object Methods
//There are different methods to manipulate an object. Let us see some of the available methods.

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

//i.Getting object keys using Object.keys()
//Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']

//ii.Getting object values using Object.values()
//Object.values:To get values of an object as an array

const values = Object.values(copyPerson);
console.log(values);

//iii.Getting object keys and values using Object.entries()
//Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson);
console.log(entries);

//iv.Checking properties using hasOwnProperty()
//hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

//Object

//ObjectName
let student = {
  //list of properties and value
  firstName: "selva",
  lastName: "manan",
  age: 23,
  height: 170,
  //object function
  fullName: function () {
    return this.firstName + "" + this.lastName;
  },
};
student.age = 27; //setting value
student[age]++; //incrementing
name = student.fullName(); //call object function

// 1.javascript code demonstrating a simple object
let school = {
  name: "Vivekananda School",
  location: "Delhi",
  established: "1971",
  displayInfo: function () {
    console.log(`${school.name} was established
              in ${school.established} at ${school.location}`);
  },
};
school.displayInfo();

//2)By creating instance of Object

var emp = new Object();
emp.id = 101;
emp.name = "Ravi Malik";
emp.salary = 50000;
document.write(emp.id + " " + emp.name + " " + emp.salary);

//3) By using an Object constructor

function emp(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
e = new emp(103, "Vimal Jaiswal", 30000);

document.write(e.id + " " + e.name + " " + e.salary);

//.4 inherite the object

let objName1 = {
  name: "hello",
  lname: "selva",
  fname: function () {
    return `${this.name} ${this.lname}`;
  },
};

console.log(objName1.fname());

let anotherObj = Object.create(objName1);
anotherObj.sName = "manan";
anotherObj.fname = function () {
  return "hello";
};

console.log(anotherObj);
console.log(anotherObj.lname);
console.log(anotherObj.fname());

//array--->array

let sName = ["hello", "hello", "hello", "hello"];
let lName = ["welcome"];

let finalArr = [sName, lName];
console.log(finalArr);

//object--->object

let oName = { name: "Selva", age: 21 };
let olName = { isFinite: true };

let finalObj = { firstObject: oName, secondObject: olName }; //{oName,olName}--->keyy and value same in browser read
console.log(finalObj);

//array--->object

let oName1 = { name: "Selva", age: 21 };
let olName1 = { isFinite: true };

let finalObj1 = [oName1, olName1];
console.log(finalObj1);

//object--->array

let oName2 = ["Selva", 21];
let olName2 = [true];

let finalObj2 = { firstKeyName: oName2, sKeyName: olName2 };
console.log(finalObj2);

//1.How to iterate object

const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// for in loop
// Object.keys

for (let key in person) {
  console.log(`${key} : ${person[key]}`);
  console.log(key, " : ", person[key]);
}

console.log(typeof Object.keys(person));
const val = Array.isArray(Object.keys(person));
console.log(val);

for (let key of Object.keys(person)) {
  console.log(person[key]);
}

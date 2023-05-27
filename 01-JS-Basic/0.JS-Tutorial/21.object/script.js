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
console.log(person.firstName); //selva
console.log(person["lastName"]);//manan //getter
person["age"]=23;//setter age but already age is object to overwrite
console.log(person);

//length calculate in object
let ke=Object.keys(person);
console.log(ke["length"]);//3

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

let babyName={boy:"selva",girl:"trisha"}
let baby="boy";

console.log(babyName[baby]);//selva is using array notation working dynamically
console.log(babyName.baby);//undefined is not notation is not supported static


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
  }
}

console.log(objName1.fname());

let anotherObj = Object.create(objName1);
anotherObj.sName = "manan";
anotherObj.fname = function () { return 'hello' }

console.log(anotherObj);
console.log(anotherObj.lname);
console.log(anotherObj.fname());
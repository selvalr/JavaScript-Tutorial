//ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
//JavaScript Classes are templates for JavaScript Objects.

//syntex
/*
class classname {
  constructor(parameter) {
    this.classname = parameter;
  }
}
*/

class class_name {
  constructor(value) {
    this.classes = value;
  }
}

myvalue = new class_name("GeeksforGeeks");

document.getElementById("demo").innerHTML = myvalue.classes;

//1.Defining a classes

// // syntax
// class ClassName {
//   //  code goes here
// }

// //example:
// /*
// class Person {
//   // code goes here
// }
// */

//2.Class Instantiation

class Person {
  // code goes here
}
const person = new Person();
console.log(person); //Person{}

//3.Class Constructor

class Person1 {
  constructor(firstName, lastName) {
    console.log(this); // Person1{}
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const person1 = new Person1();
console.log(person1); //Person1 {firstName: undefined, lastName: undefined}

//.
class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const person2 = new Person2("Asabeneh", "Yetayeh");
console.log(person2); //Person2 {firstName: 'Asabeneh', lastName: 'Yetayeh'}

//.
class Person3 {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here Person3{} Person3{} Person3{}
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person11 = new Person3("Asabeneh", "Yetayeh");
const person21 = new Person3("Lidiya", "Tekle");
const person31 = new Person3("Abraham", "Yetayeh");

console.log(person11); //Person3 {firstName: 'Asabeneh', lastName: 'Yetayeh'}
console.log(person21); //Person3 {firstName: 'Lidiya', lastName: 'Tekle'}
console.log(person31); //Person3 {firstName: 'Abraham', lastName: 'Yetayeh'}

//.
class Person4 {
  constructor(firstName, lastName, age, country, city) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person4 = new Person4("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
console.log(person4); //Person4 {firstName: 'Asabeneh', lastName: 'Yetayeh', age: 250, country: 'Finland', city: 'Helsinki'}

//4.Default values with constructor

class Person5 {
  constructor(
    firstName = "Asabeneh",
    lastName = "Yetayeh",
    age = 250,
    country = "Finland",
    city = "Helsinki"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person5 = new Person5(); // it will take the default values
const person6 = new Person5("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(person5); //Person5 {firstName: 'Asabeneh', lastName: 'Yetayeh', age: 250, country: 'Finland', city: 'Helsinki'}
console.log(person6); //Person5 {firstName: 'Lidiya', lastName: 'Tekle', age: 28, country: 'Finland', city: 'Espoo'}

//5.Class methods

class Person6 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const perso1 = new Person6("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const perso2 = new Person6("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(perso1.getFullName()); // Asabeneh Yetayeh
console.log(perso2.getFullName()); //Lidiya Tekle

//6.Properties with initial value

class Person7 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const pers1 = new Person7("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const pers2 = new Person7("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(pers1.score); //0
console.log(pers2.score); //0

console.log(pers1.skills); //[]
console.log(pers2.skills); //[]

//i.getter
class Person8 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 10;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
}

const person8 = new Person8("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person9 = new Person8("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(person8.getScore); // We do not need parenthesis to call a getter method
console.log(person9.getScore); //10

console.log(person8.city); //helsinki
console.log(person9.city); //Espoo

//ii.setter

class Person0 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
}

const person01 = new Person0("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person02 = new Person0("Lidiya", "Tekle", 28, "Finland", "Espoo");

person01.setScore = 1;
person01.setSkill = "HTML";
person01.setSkill = "CSS";
person01.setSkill = "JavaScript";

person02.setScore = 1;
person02.setSkill = "Planning";
person02.setSkill = "Managing";
person02.setSkill = "Organizing";

console.log(person01.score); //1
console.log(person02.score); //1

console.log(person01.skills); //['HTML', 'CSS', 'JavaScript']
console.log(person02.skills); //['Planning', 'Managing', 'Organizing']

//.
/*

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())
*/

// //7.Static method

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
//   static favoriteSkill() {
//     const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
//     const index = Math.floor(Math.random() * skills.length);
//     return skills[index];
//   }
//   static showDateTime() {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() + 1;
//     let date = now.getDate();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     let dateMonthYear = date + "." + month + "." + year;
//     let time = hours + ":" + minutes;
//     let fullTime = dateMonthYear + " " + time;
//     return fullTime;
//   }
// }

// console.log(Person.favoriteSkill());
// console.log(Person.showDateTime());

//8.Inheritance
/*
// syntax
class ChildClassName extends {
  // code goes here
 }
*/

/*
class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
}

const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

//9.Overriding methods

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const s1 = new Student(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki",
  "Male"
);
const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
s1.setScore = 1;
s1.setSkill = "HTML";
s1.setSkill = "CSS";
s1.setSkill = "JavaScript";

s2.setScore = 1;
s2.setSkill = "Planning";
s2.setSkill = "Managing";
s2.setSkill = "Organizing";

console.log(s1);

console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

console.log(s2.saySomething());
console.log(s2.getFullName());
console.log(s2.getPersonInfo());
*/

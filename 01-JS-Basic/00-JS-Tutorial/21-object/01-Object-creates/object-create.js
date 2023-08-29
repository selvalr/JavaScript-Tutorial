//1.Object Literal Notation

const student = {
  fullName: "Ram",
  father: "Sam",
  age: 12,
  address: "cherry road",
  city: "salem",
  about: function () {
    return `${this.fullName} is from ${this.city}`;
  },
  eligibility: function () {
    return this.age >= 18;
  },
};
console.log(student);

//2.Code 2: Factory Function
//Another approach to creating objects is using a factory function. This involves creating a function that returns a new object with the desired properties and methods. Here's an example:

const studentMethod = {
  about: function () {
    return `${this.fullName} is from ${this.city}`;
  },
  eligibility: function () {
    return this.age >= 18;
  },
};

function addStudent(fullName, father, age, address, city) {
  const user = {};
  user.fullName = fullName;
  user.father = father;
  user.age = age;
  user.age = age;
  user.address = address;
  user.city = city;
  user.about = studentMethod.about;
  user.eligibility = studentMethod.eligibility;
  return user;
}

console.log(addStudent("Sam", "Raja", 25, "Gandhi Road", "Salem"));

//3.Code 3: Prototype Inheritance
//A third approach is using prototype inheritance. This involves creating a prototype object with shared methods and properties, and then creating new objects that inherit from the prototype. Here's an example:

const studentMethod1 = {
  about: function () {
    return `${this.fullName} is from ${this.city}`;
  },
  eligibility: function () {
    return this.age >= 18;
  },
};

function addStudent(fullName, father, age, address, city) {
  const user = Object.create(studentMethod1);
  user.fullName = fullName;
  user.father = father;
  user.age = age;
  user.age = age;
  user.address = address;
  user.city = city;
  return user;
}

console.log(addStudent("Sam", "Raja", 25, "Gandhi Road", "Salem"));

//example1
const obj1 = {
  key1: "value1",
  key2: "value2",
};
console.log(obj1);

//const obj2={key3:"value3"}

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
//obj1.key1 = "new value1";
console.log(obj2);
console.log(obj2.key3);

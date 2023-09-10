// methods
// function inside object

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
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

person1.about(); //person name is harsh and age is 8
person2.about(); //person name is mohit and age is 18
person3.about(); //person name is nitish and age is 17

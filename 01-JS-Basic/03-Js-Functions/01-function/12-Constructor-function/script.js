//Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  /*
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  */
  this.getFullName = function () {
    return `${this.firstName}${lastName}`;
  };
}

//methods in function constructor
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

//Instantiate object
const person1 = new Person("selva", "manan", "21-02-2000");

console.log(person1.firstName);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

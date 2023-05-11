// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
// Display data from the object:
console.log(person.fullName());



//1.Adding a Method to an Object

person.name = function () {
    return this.id + " " + this.lastName;
  };
console.log(person.name());

//2.Using Built-In Methods

person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  console.log(person.name());
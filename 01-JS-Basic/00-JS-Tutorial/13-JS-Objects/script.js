// Create an object:
const car = { type: "Fiat", model: "500", color: "white" };
console.log("The car type is " + car.type);

//2.Object Definition
//You define (and create) a JavaScript object with an object literal:

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person.firstName + " is " + person.age + " years old.");

//3.Accessing Object Properties

//objectName.propertyName
console.log(person.firstName);

//objectName["propertyName"]
console.log(person["lastName"]);

//4.Object Methods:

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
//Accessing Object Methods

//objectName.methodName()
console.log(person1.fullName());

/*
Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

*/

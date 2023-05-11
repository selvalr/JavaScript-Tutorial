// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
console.log("The car type is " + car.type);



// Create an object:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName + " is " + person.age + " years old.");




//Object Methods:

const person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


  /*
  x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
  
  */
//using ES5 syntax.

// Define parent class
function Person(name) {
    this.name = name;
  }
  
  // Add method to prototype
  Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
  };
  
  // Define child class that inherits from parent class
  function Student(name, age) {
  Person.call(this, name); // Call parent constructor with this instance
  this.age = age;
  }
  
  // Set up prototype chain for inheritance
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  // Add method to child class
  Student.prototype.eligiblity = function () {
  console.log (this.name +" age is "+this.age +" " + (this.age>= 18? "Eligible":"no"));
  };
  
  // Create instances of classes
  var person = new Person("Joes");
  var student = new Student("Joes", 35);
  
  // Call methods on instances
  person.sayHello(); // Output: Hello, my name is Joes
  student.sayHello(); // Output: Hello, my name is Joes
  student.eligiblity(); // Output: Joes age is 35 Eligible






//using ES6 syntax.

// Define parent class
class Person {
    constructor(name) {
      this.name = name;
    }
  
    // Add method to class
  sayHello() {
  console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  // Define child class that inherits from parent class
  class Student extends Person {
  constructor(name, age) {
      super(name); // Call parent constructor with this instance
  this.age = age;
    }
  
    // Add method to child class
  eligiblity() {
    console.log (this.name +" age is "+this.age +" " + (this.age>= 18? "Eligible": "Not Eligable"));
   }
  }
  
  // Create instances of classes
  let person = new Person("Joes");
  let student = new Student("Joes", 35);
  
  // Call methods on instances
  person.sayHello(); // Output: Hello, my name is Joes
  student.sayHello(); // Output: Hello, my name is Joes
  student.eligiblity(); // Output: Joes age is 35 Eligible
//JavaScript Object Constructors

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
console.log( "My father is " + myFather.age + "."); 


  //2.Adding a Property to an Object


  // Constructor function for Person objects
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather1 = new Person1("John", "Doe", 50, "blue");
  const myMother = new Person1("Sally", "Rally", 48, "green");
  
  // Add nationality to first object
  myFather.nationality = "English";
  
  // Display nationality 
  console.log(
  "My father is " + myFather.nationality); 



  //3.Adding a Method to an Object

  // Constructor function for Person objects
function Person2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather2 = new Person2("John", "Doe", 50, "blue");
  const myMother2 = new Person2("Sally", "Rally", 48, "green");
  
  // Add a name method to first object
  myFather2.name = function() {
    return this.firstName + " " + this.lastName;
  };
  
  // Display full name
  console.log("My father is " + myFather2.name());
  
  

  //4.Adding a Property to a Constructor

  // Constructor function for Person objects
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // You can NOT add a new property to a constructor function
  Person1.nationality = "English";
  
  // Create 2 Person objects
  const myFather11 = new Person1("John", "Doe", 50, "blue");
  const myMother1 = new Person1("Sally", "Rally", 48, "green");
  
  // Display nationality
  console.log("The nationality of my father is " + myFather11.nationality); 

  //To add a new property to a constructor, you must add it to the constructor function:


  //Example

  // Constructor function for Person objects
function Person2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
  }
  
  // Create 2 Person objects
  const myFather02 = new Person2("John", "Doe", 50, "blue");
  const myMother02 = new Person2("Sally", "Rally", 48, "green");
  
  // Display nationality
  console.log("My father is " + myFather02.nationality + ". My mother is " + myMother02.nationality);



  //6.Adding a Method to a Constructor



// Constructor function for Person objects
function Person4(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
      return this.firstName + " " + this.lastName
    };
  }
  
  // Create a Person object
  const myFathe = new Person4("John", "Doe", 50, "blue");
  
  // Display full name
 console.log("My father is " + myFathe.name()); 

  


//Adding methods to an object constructor must be done inside the constructor function

  // Constructor function for Person objects
function Person5(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    }
  }
  // Create a Person object
  const myMoth = new Person5("Sally","Rally",48,"green");
  
  // Change last name
  myMoth.changeName("Doe");
  
  // Display last name
console.log("My mother's last name is " + myMother.lastName);


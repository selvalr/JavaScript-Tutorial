//Prototype Inheritance

//1.Using the prototype Property

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "English";
  
  const myFather = new Person("John", "Doe", 50, "blue");
  console.log("The nationality of my father is " + myFather.nationality); 


  //The JavaScript prototype property also allows you to add new methods to objects constructors:


function Person1(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

const myFather1 = new Person1("John", "Doe", 50, "blue");
console.log("My father is " + myFather.name()); 

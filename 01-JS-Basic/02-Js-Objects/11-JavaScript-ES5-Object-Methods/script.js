/*
Managing Objects
// Create object with an existing object as prototype
Object.create()

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)

Protecting Objects
// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)




*/


//1.Changing a Property Value
/*
Syntax
Object.defineProperty(object, property, {value : value})
This example changes a property value:
*/

//Example
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change a property
Object.defineProperty(person, "language", {value : "NO"});



/*
Changing Meta Data
ES5 allows the following property meta data to be changed:

writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured
writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable : false // Property can be not reconfigured
ES5 allows getters and setters to be changed:

// Defining a getter
get: function() { return language }
// Defining a setter
set: function(value) { language = value }
This example makes language read-only:

Object.defineProperty(person, "language", {writable:false});
This example makes language not enumerable:

Object.defineProperty(person, "language", {enumerable:false});


*/


//1.Listing All Properties

// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  }
  
  // Change Property
  Object.defineProperty(person, "language", {enumerable:false});
  
  // Display Properties
  console.log(Object.getOwnPropertyNames(person));


//2.Listing Enumerable Properties
//This example list only the enumerable properties of an object:

//Example


// Create an object:
const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
}

// Change Property
Object.defineProperty(person1, "language", {enumerable:false});

// Display Properties
console.log(Object.keys(person1));

//3.Adding a Property
//This example adds a new property to an object:

// Create an object:
const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  };
  
  // Add a property
  Object.defineProperty(person2, "year", {value:"2008"})
console.log(person2.year);


//4.Adding Getters and Setters
//The Object.defineProperty() method can also be used to add Getters and Setters:

// Create an object:
const person = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(person, "fullName", {
  get: function () {return this.firstName + " " + this.lastName;}
});

// Display full name
document.getElementById("demo").innerHTML = person.fullName;



//***A Counter Example**** */


// Define an object
const obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo").innerHTML = obj.counter;
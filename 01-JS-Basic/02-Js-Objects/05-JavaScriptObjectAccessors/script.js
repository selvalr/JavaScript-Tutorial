//JavaScript Object Accessors

//1.JavaScript Getter (The get Keyword)
//This example uses a lang property to get the value of the language property.


// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
console.log(person.lang);//en


//2.JavaScript Setter (The set Keyword)
//This example uses a lang property to set the value of the language property.


const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person2.lang = "en";

// Display data from the object:
console.log(person2.language);//en





//***JavaScript Function or Getter? */

//Example 1
const person3 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a method:
  console.log(person3.fullName());


  //Example 2
  const person4 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a getter:
 console.log(person4.fullName);


  //3.Data Quality
//Example

  // Create an object:
const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language.toUpperCase();
    }
  };
  
  // Display data from the object using a getter:
  console.log(person1.lang);

//Example 
  const perso2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };
  
  // Set an object property using a setter:
  perso2.lang = "en";
  
  // Display data from the object:
 console.log(perso2.language);



  //5.Object.defineProperty()
//The Object.defineProperty() method can also be used to add Getters and Setters:

  // Define an object
const obj = {counter : 0};

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
console.log(obj.counter);
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
console.log("My father is " + myFather.age + ".");

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
console.log("My father is " + myFather.nationality);

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
myFather2.name = function () {
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
console.log(
  "My father is " +
    myFather02.nationality +
    ". My mother is " +
    myMother02.nationality
);

//6.Adding a Method to a Constructor

// Constructor function for Person objects
function Person4(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

// Create a Person object
const myFathe = new Person4("John", "Doe", 50, "blue");

// Display full name
console.log("My father is " + myFathe.name());

//Adding methods to an object constructor must be done inside the constructor function

// Constructor function for Person objects
function Person5(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}
// Create a Person object
const myMoth = new Person5("Sally", "Rally", 48, "green");

// Change last name
myMoth.changeName("Doe");

// Display last name
console.log("My mother's last name is " + myMother.lastName);

//2.
// function (that function create object)
// 2.) add key value pair
// 3.) object ko return krega
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);

//3.
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user01 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  9,
  "my address"
);
const user02 = createUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);
const user03 = createUser(
  "mohit",
  "vashsitha",
  "harshit@gmail.com",
  17,
  "my address"
);
console.log(user01.about());
console.log(user03.about());

//4.
/*
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "toon na na na la la ";
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // {}
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

const user1 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  9,
  "my address"
);
const user2 = createUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);
const user3 = createUser(
  "mohit",
  "vashsitha",
  "harshit@gmail.com",
  17,
  "my address"
);
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());

*/

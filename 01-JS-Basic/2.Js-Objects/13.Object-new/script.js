//Constructor function
/*
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.
For instance:
*/


function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false


/*
In other words, new User(...) does something like:

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}
So let user = new User("Jack") gives the same result as:

let user = {
  name: "Jack",
  isAdmin: false
};


*/


/*
new function() { … }
If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

// create a function and immediately call it with new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};


*/


//Constructor mode test: new.target
/*
function User() {
    alert(new.target);
  }
  
  // without "new":
  User(); // undefined
  
  // with "new":
  new User(); // function User { ... }
  */



  /*
  We can also make both new and regular calls to do the same, like this:

function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John
  
  */


//Return from constructors

function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  alert( new BigUser().name );  // Godzilla, got that obje



//And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):

function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}

alert( new SmallUser().name );  // John


//4.Methods in constructor

function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi(); // My name is: John
  
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */
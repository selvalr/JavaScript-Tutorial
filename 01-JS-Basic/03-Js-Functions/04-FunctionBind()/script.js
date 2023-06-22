//Function Borrowing
/*
With the bind() method, an object can borrow a method from another object.

The example below creates 2 objects (person and member).

The member object borrows the fullname method from the person object:
*/

//Example
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
console.log(fullName());

//Preserving this

//Sometimes the bind() method has to be used to prevent losing this.

//In the following example, the person object has a display method. In the display method, this refers to the person object:

//Example
const person1 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = this.firstName + " " + this.lastName;
    console.log(x);
  },
};

person1.display();

//This example will try to display the person name after 3 seconds, but it will display undefined instead:

//Example
const person2 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = this.firstName + " " + this.lastName;
    console.log(x);
  },
};

setTimeout(person2.display, 3000);

//solved
//The bind() method solves this problem.

//In the following example, the bind() method is used to bind person.display to person.

//This example will display the person name after 3 seconds:

//Example
const person3 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = this.firstName + " " + this.lastName;
    console.log(x);
  },
};

let display = person3.display.bind(person3);
setTimeout(display, 3000);

//4.
const user1 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();

//5.// arrow functions

const user12 = {
  firstName: "harshit",
  age: 8,
  about: () => {
    console.log(this.firstName, this.age);
  },
};

user12.about(user1);

//6.
// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }
// }

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }
// }

user1.about();

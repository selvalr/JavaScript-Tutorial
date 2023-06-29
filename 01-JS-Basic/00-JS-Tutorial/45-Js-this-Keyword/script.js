// console.log(window);
// "use strict";
// function myFunc(){

//     console.log(this);
// }
// myFunc();

//For example:

const obj = {
  name: "John",
  printName: () => {
    console.log(this.name);
  },
};

obj.printName(); //undefined

//In this example, the this keyword inside the arrow function refers to the this of the global scope, which is undefined because the name property is not defined on the global object.

//2.Another example:

const obj1 = {
  name: "John",
  printName() {
    console.log(this.name);
  },
  printNameWithArrow: () => {
    console.log(this.name);
  },
};

obj1.printName(); //John
obj1.printNameWithArrow(); //undefined

//Class Inheritance
//To create a class inheritance, use the extends keyword.

//A class created with a class inheritance inherits all the methods from another class:

//Example
//Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);//The super() method refers to the parent class.
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log( myCar.show());

//Getters and Setters

class Car2 {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
  const myCar2 = new Car2("Ford");
  
  console.log( myCar2.cnam);


  //Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

//Example
//You can use the underscore character to separate the getter/setter from the actual property:

class Car3 {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar3 = new Car3("Ford");

console.log(myCar3.carname);


//To use a setter, use the same syntax as when you set a property value, without parentheses:

//Example
//Use a setter to change the carname to "Volvo":

/*
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;
*/



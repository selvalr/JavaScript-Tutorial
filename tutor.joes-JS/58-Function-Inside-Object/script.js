const object = {
    method: function() {
console.log("Hello, I'm a method!");
    }
};

object.method(); // prints "Hello, I'm a method!"

//2.Or which uses the function keyword.

const object1 = {
    method() {
    console.log("Hello, I'm a method!");
        }
    };
    
    object1.method(); // prints "Hello, I'm a method!"


//3
const object3 = {
    method: () => {
console.log("Hello, I'm a method!");
    }
};

object3.method(); // prints "Hello, I'm a method!"


//4.
const object4 = {
    property: "I'm a property",
    method: function() {
        console.log(this.property);
    }
};

object4.method(); // prints "I'm a property"

//5.
const object5 = {
    method: function(a, b) {
        return a + b;
    }
};

console.log(object5.method(1, 2)); // prints 3


//6.
class Object {
    constructor(){
    this.property = "I'm a property";
        }
    method(){
    console.log("Hello, I'm a method!");
        }
    }
    const obj = new Object();
    console.log(obj.property);
    obj.method();

//7.

function checkEligiblity(){
    if(this.age>=18){
        console.log(`${this.firstname} age is ${this.age} eligible for vote`);
    }else{
        console.log(`${this.firstname} age is ${this.age} not eligible for vote`);
    }
}

const user1={
    firstname:"Joes",
    age:35,
    eligiblity:checkEligiblity
}
user1.eligiblity();

const user2={
    firstname:"Sara",
    age:12,
    eligiblity:checkEligiblity
}
user2.eligiblity();
//1.Using object literals:

const person = {
    name: "John",
    age: 30,
    job: "Developer"
};
console.log(person);

//2.Using the object constructor:

const person1 = new Object();
person1.name = "John";
person1.age = 30;
person1.job = "Developer";
console.log(person1);

//3. Using the Object.create() method:

const personProto = {
    sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
        }
    };
    const person2 = Object.create(personProto);
    person2.name = "John";
    person2.age = 30;
    person2.job = "Developer";
    console.log(person2);

    //4.Using class:
    class Person {
        constructor(name, age, job) {
                this.name = name;
        this.age = age;
        this.job = job;
            }
        }
        const person3 = new Person("Tiya", 30, "Developer");
        console.log(person3);





//destruct
const {name,age,job} = person3;
console.log(name);
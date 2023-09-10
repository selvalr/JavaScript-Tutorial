// getter and setters
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("harshit", "sharma", 5);
//console.log(person1.fullName());//error message
console.log(person1.fullName); //harshit sharma
person1.fullName = "mohit vashistha";
console.log(person1); //Person {firstName: 'mohit', lastName: 'vashistha', age: 5}

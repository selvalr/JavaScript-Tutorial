//The JavaScript call() Method

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
 let x= person.fullName.call(person1);
 console.log(x);


 //2.example

 const person0 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person01 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person02 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
console.log(person0.fullName.call(person02));


//2.The call() Method with Arguments

//The call() method can accept arguments:

//Example
const perso = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const perso1 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(perso.fullName.call(perso1, "Oslo", "Norway"));

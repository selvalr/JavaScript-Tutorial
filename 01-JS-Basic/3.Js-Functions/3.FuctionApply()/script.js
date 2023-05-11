//JavaScript Function apply()


const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
console.log(person.fullName.apply(person1));
  
  
//The apply() Method with Arguments
//The apply() method accepts arguments in an array:

const person11 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person12 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  
  console.log(person11.fullName.apply(person12, ["Oslo", "Norway"]));


  //Compared with the call() method:

Example
const pers = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const pers1 = {
  firstName:"John",
  lastName: "Doe"
}

pers.fullName.call(pers1, "Oslo", "Norway");



//2.Simulate a Max Method on Arrays

//You can find the largest number (in a list of numbers) using the Math.max() method:

//Example
console.log(Math.max(1,2,3));  // Will return 3

//Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

//Example
console.log(Math.max.apply(null, [1,2,3])); // Will also return 3
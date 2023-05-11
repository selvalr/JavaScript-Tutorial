//Accessing JavaScript Properties
/*

The syntax for accessing the property of an object is:

objectName.property      // person.age

or

objectName["property"]   // person["age"]

or

objectName[expression]   // x = "age"; person[x]


*/

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
console.log(person.age);  //dot
console.log(person["firstname"]);//brackeet



//2.JavaScript for...in Loop

const person1 = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  
  let txt = "";
  for (let x in person1) {
    txt += person1[x] + " ";
  }
  
console.log(txt);


//3.Adding New Properties
const person2 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  person2.nationality = "English";

  console.log(person2);


  //3.Deleting Properties
  const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete person4.age;//(or) delete person["age"];
  console.log(person4);



  //4.Nested Object

  const myObj = {
    name: "John",
    age: 30,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
    }
  }
  console.log(myObj.cars.car2);//(or )  myObj.cars["car2"]; (or)  myObj["cars"]["car2"]; (or)  let p1 = "cars";let p2 = "car2"; myObj[p1][p2];


  //5.Nested Arrays and Objects
let x="";
  const myObj1 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  for (let i in myObj1.cars) {
    x += "<h2>" + myObj1.cars[i].name + "</h2>";
    for (let j in myObj1.cars[i].models) {
      x += myObj1.cars[i].models[j] + "<br>";
    }
  }
  
  console.log(x);
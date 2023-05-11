//How to Display JavaScript Objects?

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  document.getElementById("demo").innerHTML = person;
  console.log(person);
  

  //1.Displaying Object Properties
  console.log(person.name + ","  + person.city);

  //2.Displaying the Object in a Loop

  let txt = "";
for (let x in person) {
txt += person[x] + " ";
};

console.log(txt);

//3.Using Object.values()
//Any JavaScript object can be converted to an array using Object.values():


const myArray = Object.values(person);
console.log(myArray);// ['John', 30, 'New York']

//4.Using JSON.stringify()
let myString = JSON.stringify(person);
console.log(myString);


//5.Stringify Dates
//JSON.stringify converts dates into strings:

const person1 = {
    name: "John",
    today: new Date()
  };
  
  let myString1 = JSON.stringify(person1);
  console.log(myString1);
  

//6.Stringify Functions
//JSON.stringify will not stringify functions:

const person2 = {
    name: "John",
    age: function () {return 30;}
  };
  
  let myString2 = JSON.stringify(person2);
  console.log(myString2);



  const person3 = {
    name: "John",
    age: function () {return 30;}
  };
  person3.age = person3.age.toString();
  
  let myString3 = JSON.stringify(person3);
console.log(myString3);

  //7.Stringify Arrays
//It is also possible to stringify JavaScript arrays:

//Example
const arr = ["John", "Peter", "Sally", "Jane"];

let myString4 = JSON.stringify(arr);
console.log(myString4);
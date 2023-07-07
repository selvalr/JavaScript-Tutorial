// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {name:"Harshit",age:22};
const person = {
  name: "harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"],
};
console.log(person); //{name:"Harshit",age:"22",hobbies:["guitar", "sleeping", "listening music"]}

// how to access data from objects
console.log(person["name"]); //harhit
console.log(person["age"]); //22
console.log(person.hobbies); //["guitar", "sleeping", "listening music"]

// how to add key value pair to objects
person["person"] = "male";
console.log(person); //{name:"male",age:"22",hobbies:["guitar", "sleeping", "listening music],person:male}

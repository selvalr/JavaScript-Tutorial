// difference between dot and bracket notaion
const key = "email";
const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

console.log(person["person hobbies"]); //["guitar", "sleeping", "listening music"]
person[key] = "harshitvashisth@gmail.com";
console.log(person); //{name: "harshit", age::22,person hobbies: ["guitar", "sleeping", "listening music",email:person["person}

// how to iterate object
const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// for in loop
// Object.keys

for (let key in person) {
  // console.log(`${key} : ${person[key]}`);
  console.log(key, " : ", person[key]);
}

console.log(Object.keys(person)); //[name, age person hobbies]

const val = Array.isArray(Object.keys(person));
console.log(val); //true

for (let key of Object.keys(person)) {
  console.log(person[key]);
}

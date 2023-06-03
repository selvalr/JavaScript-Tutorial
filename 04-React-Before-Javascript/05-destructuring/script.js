const name = ["selva", "manan"];
const [firstName, secondName] = name;
console.log(firstName);

const person = {
  name: "karthi",
  age: 25,
  work: "police",
};
const { name: n, age, work } = person;
console.log(n, age, work);

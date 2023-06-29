//In JavaScript, objects can be iterated through using several methods, including the for-in loop, Object.keys(), Object.values(),and Object.entries().

//Example 1: Using the for-in loop

const user = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

//2.Example 2: Using Object.keys()
const user2 = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const keys2 = Object.keys(user2);
keys2.forEach((key) => {
  console.log(`${key}: ${user2[key]}`);
});

//3.Example 3: Using Object.values()
const user3 = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const values = Object.values(user3);
values.forEach((value) => {
  console.log(value);
});

//4.Example 4: Using Object.entries()
const user4 = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const entries4 = Object.entries(user4);
entries4.forEach((entry) => {
  console.log(`${entry[0]}: ${entry[1]}`);
});

//4.we can use many different ways to iterate through JavaScript objects using a for loop.iterate through an object is using the Object.keys() method. This method returns an array of the object's own property names. Here is an example:

const person5 = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const keys = Object.keys(person5);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ": " + person5[keys[i]]);
}

//In this example, we are using the Object.keys() method to get an array of the object's own property names. We can then use a traditional for loop to iterate through the array.

//5.Lastly, we can use the Object.entries() method to iterate through an object. This method returns an array of arrays, where each inner array is a key-value pair of the object's properties. Here is an example:

const person6 = {
  name: "Tiya",
  age: 30,
  job: "Programmer",
};

const entries6 = Object.entries(person6);
for (let i = 0; i < entries6.length; i++) {
  console.log(entries6[i][0] + ": " + entries6[i][1]);
}

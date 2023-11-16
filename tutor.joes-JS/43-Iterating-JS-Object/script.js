//Example 1: Using the for-in loop
const user = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

//Example 2: Using Object.keys()
const user1 = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

const keys = Object.keys(user1);
keys.forEach(key => {
    console.log(`${key}: ${user1[key]}`);
});


//Example 3: Using Object.values()
const user2 = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

const values = Object.values(user2);
values.forEach(value => {
    console.log(value);
});


//Example 4: Using Object.entries()
const user3 = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

const entries = Object.entries(user3);
entries.forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}`);
});


//we can use many different ways to iterate through JavaScript objects using a for loop.iterate through an object is using the Object.keys() method. This method returns an array of the object's own property names. Here is an example:

const person = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

const key = Object.keys(person);
for (let i = 0; i<key.length; i++) {
    console.log(key[i] + ": " + person[key[i]]);
}

//Lastly, we can use the Object.entries() method to iterate through an object. This method returns an array of arrays, where each inner array is a key-value pair of the object's properties. Here is an example:

const perso = {
    name: "Tiya",
    age: 30,
    job: "Programmer"
};

const entrie = Object.entries(perso);
for (let i = 0; i<entrie.length; i++) {
    console.log(entrie[i][0] + ": " + entrie[i][1]);
}
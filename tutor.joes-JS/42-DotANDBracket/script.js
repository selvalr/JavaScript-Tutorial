const user = {
    name: "Tutor Joes",
    age: 30,
    job: "Developer"
};

// Dot notation
console.log(user.name); // Output: "Tutor Joes"
user.name = "Joes";
console.log(user.name); // Output: "Joes"

// Bracket notation
console.log(user["age"]); // Output: 30
user["age"] = 25;
console.log(user["age"]); // Output: 25



//
const prop = "name";
console.log(user[prop]); // Output: "Joes"

//Keys with Space

let user = {
    "first name": "Tutor",
    "last name": "Joes"
    };

    console.log(user["first name"]); // "Tutor"
console.log(user["last name"]); // "Joes"

//console.log(user.first name); // This will throw a SyntaxError

//
let key = 'first name';
console.log(user[key]); // "Tutor"
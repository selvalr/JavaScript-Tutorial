// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = " harshit";

console.log(firstName.length); //8
firstName = firstName.trim(); // "harshit"
console.log(firstName); //harshit
console.log(firstName.length); //7
firstName = firstName.toUpperCase(); //HARSHIT
firstName = firstName.toLowerCase(); //harshit
console.log(firstName);

// start index
// end index

let newString = firstName.slice(1); // arshit
console.log(newString);

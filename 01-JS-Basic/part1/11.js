// undefined
// null

let firstName;
console.log(typeof firstName); //undefined
firstName = "Harshit";
console.log(typeof firstName, firstName); //string Harshit

let myVariable = null;
console.log(myVariable); //null
myVariable = "harshit";
console.log(myVariable, typeof myVariable); //harshit strring
console.log(typeof null); //object
// bug , error

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber); //12n
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(myNumber + sameMyNumber); //135n

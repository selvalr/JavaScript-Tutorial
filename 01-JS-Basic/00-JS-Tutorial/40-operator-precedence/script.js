let x = 2 + 5 * 10;
console.log(x); //52

x = (2 + 5) * 10;
console.log(x); //70

//2.precedence
let a = 1 * 2 + ((5 / 2) % 2);
console.log(a); //2.5

/*
let a = 1 * 2 + ((5 / 2) % 2)
let a = 2 + ((5 / 2) % 2)
let a = 2 + (2.5 % 2)
let a = 2 + 0.5
let a = 2.5
*/

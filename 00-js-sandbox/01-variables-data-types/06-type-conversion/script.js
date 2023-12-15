let amount = "hello";

// Convert string to number
amount = parseInt(amount);
console.log(amount); //Nan
amount = +amount;
console.log(amount); //Nan
amount = Number(amount);
console.log(amount); //Nan

// Convert number to string
amount = amount.toString();
console.log(amount); //Nan
amount = String(amount);
console.log(amount); //Nan

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1)); //Nan
console.log(1 + NaN); //Nan
console.log(undefined + undefined); //Nan
console.log("foo" / 3); //Nan

console.log(amount, typeof amount); //false 'boolean'

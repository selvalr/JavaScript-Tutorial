let amount = "hello";

// Convert string to number
amount = parseInt(amount);
console.log(amount);
amount = +amount;
console.log(amount);
amount = Number(amount);
console.log(amount);

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);

console.log(amount, typeof amount);

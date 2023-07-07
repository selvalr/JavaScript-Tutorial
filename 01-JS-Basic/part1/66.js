// iterables
// jispe hum for of loop laga sakein
// string , array are iterable

const firstName = "Harshit";
for (let char of firstName) {
  console.log(char); //H a r s h i t
}

const items = ["item1", "item2", "item3"];
for (let item of items) {
  console.log(item); //item1, item2, item3
}

// array like object
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string

const firstName1 = "harshit";
console.log(firstName1.length); //7
console.log(firstName1[2]); //r

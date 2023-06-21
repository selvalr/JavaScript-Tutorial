//Spread or Rest Operator

//When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

//1.Spread operator to get the rest of array elements

//i.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

//ii.
const countries = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];
let [gem, fra, , ...nordicCountries] = countries;
console.log(gem);
console.log(fra);
console.log(nordicCountries);

//2.Spread operator to copy array

//i
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

//ii.
const frontEnd = ["HTML", "CSS", "JS", "React"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);

//3.Spread operator to copy object

//We can copy an object using a spread operator

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};
const copiedUser = { ...user };
console.log(copiedUser);

//Modifying or changing the object while copying
const user1 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};
const copiedUser1 = { ...user1, title: "instructor" };
console.log(copiedUser1);

//4.Spread operator with arrow function

//i.
const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);

//ii.

const sumAllNums1 = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNums1(1, 2, 3, 4, 5));

// .
const newObject = { ..."abc" }; //(not work in number) {...1234}
console.log(newObject); //{0:"a",1:"b",2:"c"}

const newArray = [..."abc"]; //not no working [...123]
console.log(newArray);

const objArray = { ...["item1", "item2"] };
console.log(objArray); //

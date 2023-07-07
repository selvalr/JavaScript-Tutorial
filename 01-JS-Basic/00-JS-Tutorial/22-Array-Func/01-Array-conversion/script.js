//over write object inside prototype the toString()
let user = {
  name: "selva",
  sayHi: function () {
    return "hi";
  },
  toString: function () {
    return this.name + "says" + this.sayHi();
  },
  valueOf: function () {
    return true;
  },
  toLocaleString: function () {
    return "javascript manavan";
  },
};
console.log(user.toString()); //selvasayshi
console.log(user.valueOf()); //true
console.log(user.toLocaleString()); //javascript manavan

//2.
let fruits = ["apple", "banana", "stawbarrey"];
console.log(fruits); //[apple,banana,stawbarrey]
//array ah string ah convert panni string console display pannum
console.log(fruits.toLocaleString()); //browser oda local language
console.log(fruits.toString()); //apple,banana,stawbarrey
console.log(fruits.valueOf()); //['apple', 'banana', 'staw]

console.log(fruits.join("*")); //apple*banana*stawbarrey

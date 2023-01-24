//over write object inside prototype the toString()
let user = {
  name: 'selva',
  sayHi: function () {
    return 'hi';
  },
  toString: function () {
    return this.name + 'says' + this.sayHi();
  },
  valueOf: function () {
    return true;
  },
  toLocaleString: function () {
    return 'javascript manavan';
  },
};
console.log(user.toString());
console.log(user.valueOf());
console.log(user.toLocaleString());

let fruits = ['apple', 'banana', 'stawbarrey'];
console.log(fruits);
//array ah string ah convert panni string console display pannum
console.log(fruits.toLocaleString()); //browser oda local language
console.log(fruits.toString());
alert(fruits.valueOf());

console.log(fruits.join('*')); //apple*banana*stawbarrey

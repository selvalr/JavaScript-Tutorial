console.log(window);

//1.Map vs foreach

const users = ["selva", "karthi", "baskar"];

const result = users.forEach((user) => user.toUpperCase());
console.log(result); //undefined

const res = users.map((user) => user.toUpperCase());
console.log(res); //["SELVA","KARTHI","BASKAR"]

//2.function vs method

function funName() {
  console.log("selva");
}
funName(); //function

let login = {
  name: "selva",
  full: function () {
    console.log(this.name);
  },
};

login.full(); //this is a method

//3.undefined vs null method

let value1;
console.log(value1); //undefined
console.log(typeof value); //undefined

let value2 = null;
console.log(value2); //null
console.log(typeof value2); //object

//4.object literal vs constructor function

let login1 = {
  name: "selva",
  full: function () {
    console.log(this.name);
  },
};

function login2() {
  this.name = "nisha";
  this.full = function () {
    console.log(this.name);
  };
}

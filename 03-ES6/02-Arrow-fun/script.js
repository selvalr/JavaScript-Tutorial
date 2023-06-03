//1.

// Classical Function Expression
function addition(a, b) {
  return a + b;
}

// Implementation with arrow function
const addition = (a, b) => a + b;

// With single argument, no parentheses required
const add5 = (a) => 5 + a;

//2.

const arr = ["apple", "banana", "orange"];

const breakfast = arr.map((fruit) => {
  return fruit + "s";
});

console.log(breakfast); // ['apples', 'bananas', 'oranges']

//3.

function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}
var p = new Person();

//4.

function Person() {
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

//5.

function Person() {
  this.age = 0;

  setInterval(() => {
    setTimeout(() => {
      this.age++; // `this` properly refers to the person object
    }, 1000);
  }, 1000);
}

let p = new Person();

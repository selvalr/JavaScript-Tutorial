const sym = Symbol("some optional description");
console.log(typeof sym); // symbol

//.
const o = {
  val: 10,
  [Symbol("random")]: "I'm a symbol",
};

console.log(Object.getOwnPropertyNames(o)); // val

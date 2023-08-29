function* innerGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

function* outerGenerator() {
  yield* innerGenerator();
}

const generator = outerGenerator();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//example 2:
function* generator() {
  const value = yield 1;
  console.log(value);
}

const iter = generator();

iter.next();
iter.next("hello");

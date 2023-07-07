//Generator -generate value one by one

function* indexGenerator() {
  let index = 1;
  while (true) {
    yield index++; //return autor yield
  }
}

const gen = indexGenerator();
console.log(gen.next().value); //1

console.log(gen.next().value); //2

console.log(gen.next().value); //3

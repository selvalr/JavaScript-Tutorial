//Generator -generate value one by one

function* indexGenerator(){
    let index=1;
    while(true){
        yield index++;//return autor yield
    }

}

const gen=indexGenerator();
console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);
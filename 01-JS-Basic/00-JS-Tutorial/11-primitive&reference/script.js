//1.primitive:string,number,boolean,null,undefined,symbol,bigint

const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9

//2.Complex:object,array,function

const food = [1, 2];
const bars = food;

bars[0] = 9;

console.log(food[0], bars[0]); // => 9, 9

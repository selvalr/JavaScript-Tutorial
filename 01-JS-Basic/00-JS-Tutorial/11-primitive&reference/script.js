//1.primitive:string,number,boolean,null,undefined,symbol,bigint

const foo = 1;
let bar = foo;
console.log(foo); //1
console.log(bar); //1
foo++;
console.log(foo); //2
console.log(bar); //1

bar = 9;

console.log(foo, bar); // => 1, 9

//2.Complex:object,array,function

const food = [1, 2];
const bars = food;
console.log(food);
console.log(bars);
food.push(3);
console.log(food);
console.log(bars);

bars[0] = 9;

console.log(food[0], bars[0]); // => 9, 9

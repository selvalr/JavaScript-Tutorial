// hoisting

hello();

function hello() {
  console.log("hello world"); //hello world
}
console.log(hello); //{function hello(){console.log("hello world");}
const hello1 = "hello world";
console.log(hello1); //hello world

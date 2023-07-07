//1.array literal create method:
let a = [10, 20, 30, 40];
console.log(a); //[10, 20, 30, 40]
console.table(a);
console.log(a[1]); //20

//2.array constructor syntax:
let language = new Array();
console.log(language); //[]

let student = new Array(10);
console.log(student); //[empty x 10]

let b = new Array(10, 20, 30, 40);
console.log(b[1]); //Only Array access in square bracket using access a value
b[4] = 50;
console.log(b); //[10,20,30,40,50]
console.log(b.length); //5
console.log(b instanceof Array); //multiple frame some is not working instanceof
console.log(Array.isArray(b)); //isarray better of instance method

let c = new Array("Joes", 30, true, { m1: 100, m2: 75, m3: 65 });
console.table(c);

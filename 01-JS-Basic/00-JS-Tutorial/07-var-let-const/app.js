/*
  1997--->var
    
  2015 E6--->let,const
*/

/*
Block Scope

{
  let x = 2;
}
// x can NOT be used here


{
  var x = 2;
}
// x CAN be used here


*/

var a = 23;
var b = 26;
console.log(a + b);

//-----------------------------------

//1.Scope

if (true) {
  //var msg = 'selva'; //inside and outside block
  //let msg = 'Welcome to selva'; //inside block
  const msg = "selva"; //constant
  console.log(msg);
}
console.log(msg);

//2.Redeclarations

//Redeclaration Allowed var:

var a1 = 25;
console.log(a1);

var a1 = 45;
console.log(a1);

//ReDeclaration not allowed let const
// declare variable with let keyword
/*
let a=25;
a=26;
console.log(a);
 
 //error in let a in two time declared
let a=45;
 console.log(a);
 */

//Redeclaration and reasign is not allowed:

/*
const a=25;
console.log(a)
 //error to redeclared const to asign one time
const a=45;
 
*/

//-----------------------------------

//3.Value assignment

/*
var a=25;
console.log(a);
a=45;
console.log(a);
*/

/*
let a = 25;
console.log(a);
a = 45;
console.log(a);
*/

/*
const a=25;
console.log(a);
a=45;  //Constant Error
console.log(a);
*/

/*
//Change the elements of constant array
//Change the properties of constant object

const student = { name: "ram", age: 12 };
console.table(student);
console.log(student.name);
student.name = "selva";
console.table(student);


// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
console.log(cars);

*/

/*5,Let Hoisting */

carName = "Volvo";
console.log(carName); //working
var carName;

/*
carName = "Saab";
console.log(carName);//not-working
let carName = "Volvo";
*/

// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
  var c = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // Prints 1

//Redeclaring Variables

//1.var
var x4 = 10;
// Here x4 is 10
{
  var x4 = 2;
  // Here x4 is 2
}
// Here x4 is 2
console.log(x4);

//2.let

let x5 = 10;
// Here x5 is 10
{
  let x5 = 2;
  // Here x5 is 2
}
// Here x5 is 10
console.log(x5);

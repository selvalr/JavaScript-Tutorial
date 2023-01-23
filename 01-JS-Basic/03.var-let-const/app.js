/*
  1997--->var
    
  2015 E6--->let,const
*/

var a = 23;
var b = 26;
console.log(a + b);

//-----------------------------------

//1.Scope

if (true) {
  //var msg = 'selva'; //inside and outside block
  //let msg = 'Welcome to Tutor Joes'; //inside block
  const msg = 'Welcome to Tutor Joes'; //constant
  console.log(msg);
}
console.log(msg);

//2. Variable Redeclarations

//Redeclaration Allowed var:

var a1 = 25;
console.log(a1);

var a1 = 45;
console.log(a1);

//Redeclaration not allowed let
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
const student = { name: "ram", age: 12 };
console.table(student);
console.log(student.name);
student.name = "selva";
console.table(student);
*/

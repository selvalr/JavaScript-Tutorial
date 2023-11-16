//Data Types in JavaScript
/*
JS Dynamic Programming
 
String
Number   eg:  1.25,25
Boolean  eg:  True,False
Null
Undefinded 
Symbols  E6
 
 
Array
Object Literals
Date
*/
 
var a=25.5;
console.log(typeof a);
var fname="Tutor Joes";
console.log(typeof fname);
var isMarried=true;
console.log(typeof isMarried);
var phone=null;
console.log(typeof phone);
let b;
console.log(typeof b);
 
 
//ES6 2015
 
const s1=Symbol() //dlkfngsgs6565df6
console.log(s1)
 
const s2=Symbol() //fdfgdfg4345345
console.log(s2)
 
console.log(s1==s2);
 
 
var courses=['C','C++','Java'];
console.log(typeof courses);

var student={
  'name':'Joes',
  'age':22
}
console.log(typeof student);

var d=new Date();
console.log(d);
console.log(typeof d);
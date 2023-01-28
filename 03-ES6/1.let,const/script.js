//1.let

/*
var a = 2;
{
    let a = 3;
    console.log(a); // 3
    let a = 5; // TypeError: Identifier 'a' has already been declared
}
console.log(a); // 2

*/

//2.const

{
  const b = 5;
  b = 10; // TypeError: Assignment to constant variable

  const arr = [5, 6];
  arr.push(7);
  console.log(arr); // [5,6,7]
  arr = 10; // TypeError: Assignment to constant variable
  arr[0] = 3; // value is mutable
  console.log(arr); // [3,6,7]
}

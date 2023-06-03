

let a = 10;
let b = '23';
//23=="23"
console.log(a == b); //equal to  OUTPUT:false
//23==="23"
console.log(a === b); //equal value and equal type  OUTPUT:false
//23!="23"
console.log(a != b); //not equal  OUTPUT:true
//23!=="23"
console.log(a !== b); //not equal value or not equal type OUTPUT:true

alert(2 > 1); // true (correct)
alert(2 < 1); //false(wrong)
alert(2 <= 1); //false(wrong)
alert(2 >= 1); //true(correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)



console.log(3 > 2)    // true, because 3 is greater than 2
console.log(3 >= 2)  // true, because 3 is greater than 2
console.log(3 < 2)   // false,  because 3 is greater than 2
console.log(2 < 3)   // true, because 2 is less than 3
console.log(2 <= 3) // true, because 2 is less than 3
console.log(3 == 2)  // false, because 3 is not equal to 2
console.log(3 != 2)  // true, because 3 is not equal to 2
console.log(3 == '3')  // true, compare only value
console.log(3 === '3') // false, compare both value and data type
console.log(3 !== '3') // true, compare both value and data type
console.log(3 != 3)    // false, compare only value
console.log(3 !== 3)   // false, compare both value and data type
console.log(0 == false) // true, equivalent
console.log(0 === false) // false, not exactly the same
console.log(0 == '')     // true, equivalent
console.log(0 == ' ')  // true, equivalent
console.log(0 === '') // false, not exactly the same
console.log(1 == true) // true, equivalent
console.log(1 === true) // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)  // false, not equal
console.log(NaN === NaN) // false
console.log(typeof NaN)  // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

//string comparison is dictionary format search 
console.log('Alen'>'Anubu');//false
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

//comparison of different type
console.log('1'<5);//1<5; //true
console.log('01' == 1);//// true, string '01' becomes a number 1
console.log(true==1); //true
console.log(true==0);//false

console.log( 0 == false );//true
console.log('' == false);//true

console.log(0 === false);// false, because the types are different

//Comparison with null and undefined
console.log( null === undefined );// false
console.log(null == undefined );//true

//Strange result: null vs 0
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true


//An incomparable undefined

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)
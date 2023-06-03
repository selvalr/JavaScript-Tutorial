//Optional chaining '?.'

//1.The “non-existing property” problem

let user = {}; // a user without "address" property

alert(user.address.street); // Error!


// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null





//The obvious solution would be to check the value using if or the conditional operator ?, before accessing its property, like this:

let user1 = {};

alert(user1.address ? user1.address.street : undefined);


//Here’s how the same would look for document.querySelector:

let html1 = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;



//E.g. let’s get user.address.street.name in a similar fashion.

let user2 = {}; // user has no addresss

alert(user2.address ? user2.address.street ? user2.address.street.name : null : null);


//There’s a little better way to write it, using the && operator:
/*
let user = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)
*/


//2.Optional chaining

//Here’s the safe way to access user.address.street using ?.:

let use = {}; // user has no address

alert( use?.address?.street ); // undefined (no error)


//Here’s an example with document.querySelector:

let html4 = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

//Reading the address with user?.address works even if user object doesn’t exist:

let user4 = null;

alert( user4?.address ); // undefined
alert( user4?.address.street ); // undefined

//3.Short-circuiting
/*
let user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented

*/

//5.Other variants: ?.(), ?.[]

/*
For example, ?.() is used to call a function that may not exist.

In the code below, some of our users have admin method, and some don’t:

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)
*/

/*

The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

*/

//Also we can use ?. with delete:

delete user?.name; // delete user.name if user exists


/*
We can use ?. for safe reading and deleting, but not writing
The optional chaining ?. has no use on the left side of an assignment.

For example:

let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"
*/

//

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference



//2.Comparison by reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

/*
And here two independent objects are not equal, even though they look alike (both are empty):

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false


*/


//Const objects can be modified
/*
const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
  alert(user.name); // Pete
  */

  
  
//3.Cloning and merging, Object.assign
/*
let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user.name ); // still John in the original object

  */


  //8.We can also use the method Object.assign.

  /*
The syntax is:

Object.assign(dest, ...sources)
*/
/*
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true
*/

/*
If the copied property name already exists, it gets overwritten:

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }

*/


/*
We also can use Object.assign to perform a simple object cloning:

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
*/


//10.Nested cloning

let user5 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  alert( user5.sizes.height ); // 182


  /*
  Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one
  
  */


//12.structuredClone
/*
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related

  */

  /*
  For instance:

let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true
  */
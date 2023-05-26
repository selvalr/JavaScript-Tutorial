//Symbol type

/*
By specification, only two primitive types may serve as object property keys:

string type, or
symbol type.

Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].
*/

//1.Symbols

let id = Symbol();


// id is a symbol with the description "id"
let id1 = Symbol("id");


//For instance, here are two symbols with the same description – they are not equal:

let id2 = Symbol("id");
let id3 = Symbol("id");

alert(id2 == id3); // false

//For instance, this alert will show an error:

let id4 = Symbol("id");
alert(id4); // TypeError: Cannot convert a Symbol value to a string

//If we really want to show a symbol, we need to explicitly call .toString() on it, like here:

let id5 = Symbol("id");
alert(id5.toString()); // Symbol(id), now it works


//Or get symbol.description property to show the description only:

let id6 = Symbol("id");
alert(id6.description); // id


//Hidden” properties

let user = { // belongs to another code
    name: "John"
  };
  
  let id7 = Symbol("id");
  
  user[id7] = 1;
  
  alert( user[id7] ); // we can access the data using the symbol as the 
  

  //Then that script can create its own Symbol("id"), like this:

// ...
let id8 = Symbol("id");

user[id8] = "Their id value";


//But if we used a string "id" instead of a symbol for the same purpose, then there would be a conflict:

let user = { name: "John" };
// Our script uses "id" property
user.id = "Our id value";
// ...Another script also wants "id" for its purposes...
user.id = "Their id value"
// Boom! overwritten by another script!



//2.Symbols in an object literal
//If we want to use a symbol in an object literal {...}, we need square brackets around it.

//Like this:

let id9 = Symbol("id");

let user = {
  name: "John",
  [id9]: 123 // not "id": 123
};


//4.Symbols are skipped by for…in
//Symbolic properties do not participate in for..in loop.

//For instance:

let id0 = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id0]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id0] ); // Direct: 123


//In contrast, Object.assign copies both string and symbol properties:

let i = Symbol("id");
let user = {
  [i]: 123
};

let clone = Object.assign({}, user);

alert( clone[i] ); // 123




//6.Global symbols

// read from the global registry
let id00 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id00 === idAgain ); // true

//7.Symbol.keyFor

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id


//That said, all symbols have the description property.

//For instance:

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name



/*
System symbols
There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.

They are listed in the specification in the Well-known symbols table:

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
…and so on.
For instance, Symbol.toPrimitiv

*/
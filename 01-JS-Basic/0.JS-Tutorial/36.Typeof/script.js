//The typeof Operator

console.log(typeof "John");                 // Returns "string"
console.log(typeof 3.14 );                  // Returns "number"
console.log(typeof NaN   );                 // Returns "number"
console.log(typeof false    );              // Returns "boolean"
console.log(typeof [1,2,3,4]  );            // Returns "object"
console.log(typeof {name:'John', age:34} ); // Returns "object"
console.log(typeof new Date()     );        // Returns "object"
console.log(typeof function () {}  );       // Returns "function"
console.log(typeof myCar);                  // Returns "undefined" *
console.log(typeof null);                   // Returns "object"
console.log(typeof undefined );             // "undefined"
console.log(typeof 10n);                    //"BigInt" 
console.log(typeof Symbol("id"));           // "symbol"
console.log(typeof Math );                  // "object"  
console.log(typeof alert );                 // "function"  

//Primitive Data

console.log(typeof "John"      )        // Returns "string"
console.log(typeof 3.14);            // Returns "number"
console.log(typeof true);                // Returns "boolean"
console.log(typeof false );              // Returns "boolean"
console.log(typeof x  );                 // Returns "undefined" (if x has no value)


//Complex Data

console.log(typeof {name:'John', age:34});// Returns "object"
console.log(typeof [1,2,3,4]  );  // Returns "object" (not "array", see note below)

console.log(typeof null   );  // Returns "object"
console.log(typeof function myFunc(){} );// Returns "function"


//The constructor Property

console.log(
  "john".constructor + "<br>" + // Returns function String()  {[native code]}
  (3.14).constructor + "<br>" +// Returns function Number()  {[native code]}
  false.constructor + "<br>" +
  [1,2,3,4].constructor + "<br>" +
  {name:'john', age:34}.constructor + "<br>" +
  new Date().constructor + "<br>" +
  function () {}.constructor);


  //The instanceof Operator

  const cars = ["Saab", "Volvo", "BMW"];

console.log(cars instanceof Array);
console.log(cars instanceof Object);
console.log(cars instanceof String);
console.log(cars instanceof Number);
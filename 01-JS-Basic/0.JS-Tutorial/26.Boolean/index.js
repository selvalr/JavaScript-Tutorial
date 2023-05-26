//JavaScript Booleans

//Boolean Function

var a = 10, b = 20;

var b1 = Boolean('Hello'); // true

var b2 = Boolean('h'); // true

var b3 = Boolean(10); // true

var b4 = Boolean([]); // true

var b5 = Boolean(a + b); // true


//Example: Boolean() Function
var b1 = Boolean(''); // false

var b2 = Boolean(0); // false

var b3 = Boolean(null); // false

var a;
var b4 = Boolean(a); // false


//Example: Boolean Object
var bool = new Boolean(true);

alert(bool); // true


//Example: Boolean Object in Condition
var bool = new Boolean(false);

if(bool){
    alert('This will be executed.');
}


//Example: Boolean vs boolean
var b1 = new Boolean(true);
var b2 = true;

typeof b1; // object
typeof b2; // boolean

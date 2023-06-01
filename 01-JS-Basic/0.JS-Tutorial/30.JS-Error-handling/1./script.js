//try catch syntax:
/*

//syntax:

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}

*/

//The throw Statement
/*
throw "Too big";    // throw a text
throw 500;          // throw a number
 */

//The finally Statement
/*
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
*/

//Error Handling
//1.

try {

  alert('Start of try runs');  // (1) <--

  // ...no errors here

  alert('End of try runs');   // (2) <--

} catch (err) {

  alert('Catch is ignored, because there are no errors'); // (3)

}

//2.
try {

  alert('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`); // (3) <--

}

//3.try...catch only works for runtime errors
/*
try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}
*/

//4.try...catch works synchronously

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}


//i.
setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);

//2.
try {
  console.log(name1());
} catch (e) {
  console.log(e.message); //(OR) Sets or returns an error message (a string)
  console.log(e.stack); //(or)
  console.log(e.description); //(or)
  console.log(e.name); //Sets or returns an error name
}

//1.Error Object:
/*
//syntax:
try {
  // ...
} catch (err) { // <-- the "error object", could use another word instead of err
  // ...
}
*/

//i.
try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined
}

//ii.
try {
  adddlert("Welcome guest!");
} catch (err) {
  console.log(err.name + "<br>" + err.message);
}

//2.throw

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}

//3.finally:
function myFunction1() {
  const message = document.getElementById("p02");
  message.innerHTML = "";
  let x = document.getElementById("demo1").value;
  try {
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
  } catch (err) {
    message.innerHTML = "Input " + err;
  } finally {
    document.getElementById("demo1").value = "";
  }
}


//5.Optional “catch” binding

/*
try {
  // ...
} catch { // <-- without (err)
  // ...
}
*/

//Using “try…catch”

let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
alert( user.name ); // John
alert( user.age );  // 30



//ii.Let’s use try...catch to handle the error:
let json1 = "{ bad json }";

try {

  let user = JSON.parse(json1); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}



//6.Throwing our own errors

let json2 = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json2); // <-- no errors
  alert( user.name ); // no name!

} catch (err) {
  alert( "doesn't execute" );
}



//7.“Throw” operator


/*The syntax is:

throw <error object>
 */


/*
Their syntax is:

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...

*/


//i.
let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O

//ii.Let’s see what kind of error JSON.parse generates:

try {
  JSON.parse("{ bad json o_O }");
} catch (err) {
  alert(err.name); // SyntaxError
  alert(err.message); // Unexpected token b in JSON at position 2
}


//ii.As we can see, that’s a SyntaxError

let json3 = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json3); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}



//7.Rethrowing
//In the example above we use try...catch to handle incorrect data. But is it possible that another unexpected error occurs within the try {...} block? Like a programming error (variable is not defined) or something else, not just this “incorrect data” thing.

//For example:

let json4 = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json4); // <-- forgot to put "let" before user

  // ...
} catch (err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}


/*
Catch gets all errors.
In the catch (err) {...} block we analyze the error object err.
If we don’t know how to handle it, we do throw err.
*/

//Usually, we can check the error type using the instanceof operator:

try {
  user = { /*...*/ };
} catch (err) {
  if (err instanceof ReferenceError) {
    alert('ReferenceError'); // "ReferenceError" for accessing an undefined variable
  }
}

//We can also get the error class name from err.name property. All native errors have it. Another option is to read err.constructor.name.

//In the code below, we use rethrowing so that catch only handles SyntaxError:

let json5 = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json5);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert( user.name );

} catch (err) {

  if (err instanceof SyntaxError) {
    alert( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }

}
//The error throwing on line (*) from inside catch block “falls out” of try...catch and can be either caught by an outer try...catch construct (if it exists), or it kills the script.

//So the catch block actually handles only errors that it knows how to deal with and “skips” all others.

//The example below demonstrates how such errors can be caught by one more level of try...catch:

function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (err) {
    // ...
    if (!(err instanceof SyntaxError)) {
      throw err; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (err) {
  alert( "External catch got: " + err ); // caught it!
}


//8.try…catch…finally

/*
The extended syntax looks like this:

try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}
*/

/*

*/


try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}


//Here finally guarantees that the time will be measured correctly in both situations – in case of a successful execution of fib and in case of an error in it:
/*
let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` );
*/

/*
finally and return
The finally clause works for any exit from try...catch. That includes an explicit return.

In the example below, there’s a return in try. In this case, finally is executed just before the control returns to the outer code.
*/

function func() {

  try {
    return 1;

  } catch (err) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() ); // first works alert from finally, and then this one




//try...finally
//The try...finally construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized.

function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}

//8.Global catch

/*
The syntax:

window.onerror = function(message, url, line, col, error) {
  // ...
};
*/
/*
<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script>
*/


//Error Name Values:

//1.EvalError
//2.RangeError
//3.ReferenceError
//4.SyntaxError
//5.TypeError
//6.URIError

// --> study material- https://www.w3schools.com/js/js_errors.asp




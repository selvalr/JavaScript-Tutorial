//try catch syntax:
/*
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
try {
  console.log(name1());
} catch (e) {
  console.log(e.message); //(OR) Sets or returns an error message (a string)
  console.log(e.stack); //(or)
  console.log(e.description); //(or)
  console.log(e.name); //Sets or returns an error name
}

//1.Error Object:
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

//Error Name Values:

//1.EvalError
//2.RangeError
//3.ReferenceError
//4.SyntaxError
//5.TypeError
//6.URIError

// --> study material- https://www.w3schools.com/js/js_errors.asp

//try catch
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
Syntax
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


function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x.trim() == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10)   throw "is too high";
      if(x < 5)  throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("demo").value = "";
    }
  }
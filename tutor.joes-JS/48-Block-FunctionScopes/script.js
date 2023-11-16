//Block Scope

if (true) {
    let blockScopeVariable = 'I am a variable with block scope';
    console.log(blockScopeVariable); // Output: "I am a variable with block scope"
  }
  console.log(blockScopeVariable); // ReferenceError: blockScopeVariable is not defined


  //example:
  function myFunction() {
    var functionScopeVariable = 'I am a variable with function scope';
    console.log(functionScopeVariable); // Output: "I am a variable with function scope"
  }
  console.log(functionScopeVariable); // ReferenceError: functionScopeVariable is not defined



//Here's an example to demonstrate the difference between block scope and function scope in JavaScript:

function myFunction() {
    if(true){
      let fullname="Joes";
      console.log(fullname);
    }
    console.log(fullname);
  }
  myFunction()


  //

  function myFunction() {
    if(true){
      var fullname="Joes";
      console.log(fullname);
    }
    console.log(fullname);
  }
  myFunction()
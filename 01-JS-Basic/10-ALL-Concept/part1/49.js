// lexical scope
const myVar = "value1";

function myApp() {
  function myFunc() {
    // const myVar = "value59";
    const myFunc2 = () => {
      console.log("inside myFunc", myVar); //inside myFunc value1
    };
    myFunc2();
  }

  console.log(myVar); //value1
  myFunc();
}

myApp();

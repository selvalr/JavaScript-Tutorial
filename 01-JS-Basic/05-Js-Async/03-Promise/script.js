/*
    Promise state
    -------------
    1.Pending
    2.Fulfilled
    3.Failed

    Promise Syntax
    --------------
    let myPromise = new Promise(function(myResolve, myReject) { 
        
        myResolve();//when sucessful
        myReject();//when unsucessful
        
     } );


     myPromise.then(function(value){code is sucessfull}.catch(function(err){code if some error});


*/

let age = 19;
let promise = new Promise(function (resolve, reject) {
  if (age > 18) {
    resolve("eligible vote");
  } else {
    reject("not eligible");
  }
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  }).finally(function () {
    console.log("the finnaly");
  });



  //JavaScript Promise Examples
//To demonstrate the use of promises, we will use the callback examples from the previous chapter:

//1.Waiting for a Timeout
//2.Waiting for a File

//Example Using Callback
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}



//1.Waiting for a timeout
  //.Example Using Promise
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value);
  });
  
  
  //2.Waiting for a File

 // Example using Callback
/*
 function myDisplayer1(some) {
   console.log(some);
  }


function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer1);
*/

//Example using Promise

function myDisplayer2(some) {
    console.log(some);
  }

let myPromise1 = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise1.then(
    function(value) {myDisplayer2(value);},
    function(error) {myDisplayer2(error);}
  );
  
  
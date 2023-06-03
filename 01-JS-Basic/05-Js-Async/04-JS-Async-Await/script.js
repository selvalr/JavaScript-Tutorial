/*
Async & Await   Javascript

async makes a function return a Promise

await makes a function wait for a Promise
*/


let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let user={userName:"selva",userPassword:"123"};
    if(Object.keys(user)!==0){
        resolve(user);
    }
    else{
        reject("user not found",user);
    }
    },3000)
    
});


async function getData(){
    let userInfo=await promise;
          console.log(userInfo);
          console.log(userInfo.userName);

//     try{
//         let userInfo=await promise;
//         console.log(userInfo);
//     }
// catch(err){
//     console.log(err);
// }
}
getData().then(()=>{
    console.log("success");
}).catch(()=>{
    console.log("error");
})



/*
Async Syntax
The keyword async before a function makes the function return a promise:

Example
async function myFunction() {
  return "Hello";
}
Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}
Here is how to use the Promise:

myFunction().then(
  function(value) { //code if successful },
  function(error) { // code if some error  }
);



*/


function myDisplayer(some) {
    console.log(some);
  }
  
  async function myFunction() {return "Hello";}
  
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


  //Or simpler, since you expect a normal value (a normal response, not an error):

//Example
function myDisplayer2(some) {
    console.log(some);
  }

async function myFunction2() {
  return "Hello";
}
myFunction2().then(
  function(value) {myDisplayer2(value);}
);


/*
Await Syntax
The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

let value = await promise;


*/


//Example
//Let's go slowly and learn how to use it.

//Basic Syntax
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  console.log(await myPromise);
}

myDisplay();

/*
Note:
The two arguments (resolve and reject) are pre-defined by JavaScript.

We will not create them, but call one of them when the executor function is ready.

Very often we will not need a reject function.
*/



//Example without reject
async function myDisplay3() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  console.log(await myPromise);
}

myDisplay3();

//Waiting for a Timeout
async function myDisplay4() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    console.log(await myPromise);
  }
  
  myDisplay4();




  //Waiting for a File
async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    console.log(await myPromise);
  }
  
  getFile();
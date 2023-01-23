//1. Use Object Destructuring:

//with destucturing
const employee = {
  name: 'ANE01',
  email: 'Anna@example.com',
  phone: '0112–345–6789',
};

//without destucturing
const { name1, email1, phone1 } = employee;
const name = employee.name1;
const email = employee.email1;
const phone = employee.phone1;

//2. Use Multiple Parameters Over Single Object Parameter

//recommended
function CustomerDetail(CustomerName, CustomerType, Order) {
  console.log('This is ${CustomerName} of ${CustomerType} and need ${Order}');
}

//not-recommended
function CustomerDetail(User) {
  console.log(
    'This is ${User.CustomerName} of ${User.CustomerType} and need ${User.Order}'
  );
}


//3. Make Use of Arrow Functions

// Arrow function
const myOrder = order => console.log(`Customer need ${order}`);
// Regular Function
function(order){
   console.log(`Customer need ${order}`);
}


//4. Use Template Literals for String Concatenations

//before
var name2 = 'Peter';
var message = 'Hi'+ name2 + ',';

//after
var name2 = 'Peter';
var message = `Hi ${name2},`;


//5. Spread Extension Operator

let x = [car, bus,van];
let y = [bike, truck, ..x, lorry]
console.log (y);
// bike, truck, car, bus, van, lorry

//6. Avoid Callbacks:

//For example, the following code contains 4 callback functions, and it will become even harder as the code start to grow.


function1(function (err, data) { 
  ...  
  function2(user, function (err, data) {
    ...
     function3(profile, function (err, data) {
      ...
      function4(account, function (err, data) {
        ....
      }); 
    }); 
  });
});

/*
As a solution, ES6 and ES7 introduced, Promises and Async/Await to handle asynchronous functions, and they are much easier to use and makes your code easily understandable to others.

But, if you use Promises or Async/Await, your code will be clean and much easy to understand.

 */

// Promises
function1() 
.then(function2) 
.then(function3) 
.then(function2) 
.catch((err) => console.error(err));

// Async/Await
async function myAsyncFunction() {  
try {    
  const data1= await function1();    
  const data2= await function2(data1);    
  const data3= await function3(data2);    
  return function4(data4);  
} 
catch (e) {    
  console.error(err);  
}}


//7. Use Shorthand Whenever Possible

if (x !== “” && x !== null && x !== undefined) { ... }

//(OR)

if ( !!x ) { ... }
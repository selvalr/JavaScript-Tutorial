//1.Async and Await
//Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

const square = async function (n) {
  return n * n;
};

square(2);

//ii.How do we access the value from the promise? To access the value from the promise, we will use the keyword await.

const square1 = async function (n) {
  return n * n;
};
const value = await square1(2);
console.log(value);

//2.
//.async - always return a promise
//resolve is a async automatically take it function

/*
async function fun(){
  return 'hello';
}
console.log(fun());

fun().then((msg)=>{
  console.log(msg);
})
*/

//await

let rechA = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) {
    setTimeout(resolve, 1000, "selva reached");
  } else {
    reject("not reached");
  }
});

async function asyncstatus() {
  try {
    console.log("hi");
    res = await rechA; //await the promise call waiting true
    console.log(res);
    console.log("bye");
  } catch (err) {
    console.log(err);
  }
}

asyncstatus();

//
/*
const square = async function (n) {
  return n * n;
};
square(2);
*/

//.

/*
const square1 = async function (n) {
  return n * n;
};
const value = await square1(2);
console.log(value);
*/

//1.Let us fetch API data using both promise method and async and await method.

//i.promise
/*
const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));
*/

//ii.async and await
/*
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();
*/

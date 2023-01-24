//.
const square = async function (n) {
  return n * n;
};
square(2);

//.
const square1 = async function (n) {
  return n * n;
};
const value = await square1(2);
console.log(value);

//1.Let us fetch API data using both promise method and async and await method.

//i.promise
const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

//ii.async and await
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

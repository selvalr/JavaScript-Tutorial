// change text
// textContent and innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText);
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);

//3.)Adding Text to HTML element

let textValue = document.getElementById("first-title");
console.log((textValue.innerHTML = "<h4>helo</h4>"));
console.log(textValue.innerText);
console.log(textValue.textContent);

//i.Adding Text content using textContent
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";

//ii.Adding Text Content using innerHTML

//text content
const titles1 = document.querySelectorAll("h1");
titles1[3].textContent = "Fourth Title";

//inner html
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    
*/

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  const ul = document.querySelector('ul')
  ul.innerHTML = ''
    </script>
  </body>
</html>

*/

//5.// innerHtML
const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>"
// console.log(headline.innerHTML);

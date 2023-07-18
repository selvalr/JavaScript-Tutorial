//1.Text File Fetch:
const btnText = document.querySelector("#btn-text");
const outputText = document.querySelector("#txt-output");

btnText.addEventListener("click", getTextFile);

function getTextFile() {
  fetch("data.txt")
    .then((res) => res.text())
    .then((data) => {
      outputText.innerHTML = data;
    });
}

//2.JSON File Fetch:

const btnJson = document.querySelector("#btn-json");
const outputJson = document.querySelector("#json-output");

btnJson.addEventListener("click", getJsonData);

function getJsonData() {
  fetch("users.json")
    .then((res) => res.json())
    .then((users) => {
      let data = "<ul>";
      users.forEach((user) => {
        data += `<li>${user.name} : ${user.age}</li>`;
      });
      data += "</ul>";
      outputJson.innerHTML = data;
    });
}

//3.API Data Fetch:

const btnApi = document.querySelector("#btn-api");
const outputApi = document.querySelector("#api-output");

btnApi.addEventListener("click", getApiData);

async function getApiData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonData = await response.json();
  let output = "";
  jsonData.forEach((post) => {
    output += `<div class='post'>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
      </div>`;
  });

  outputApi.innerHTML = output;
}

//4.Console Output:

console.log("Start");

function hello() {
  console.log("Hello World");
}

console.log("end");

console.log("Start");
document.getElementById("btn").addEventListener("click", function callback() {
  console.log("Hello World");
});
console.log("end");

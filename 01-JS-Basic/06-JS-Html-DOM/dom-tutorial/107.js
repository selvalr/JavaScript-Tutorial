// get and set attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1)); //home
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href")); //<a href="https://codprog.com">home</a>

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type")); //text

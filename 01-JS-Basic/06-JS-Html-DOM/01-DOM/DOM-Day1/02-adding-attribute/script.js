// 1.get and set attributes

const link = document.querySelector("a");
//console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
//console.log(inputElement.getAttribute("type"));

//2.)Adding attribute

const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";
console.log(titles);

//i.Adding attribute using setAttribute
const title = document.querySelectorAll("h1");
title[3].setAttribute("class", "title");
title[3].setAttribute("id", "fourth-title");

//ii.Adding attribute without setAttribute
//another way to setting an attribute
title[3].className = "title";
title[3].id = "fourth-title";

//iii.Adding class using classList
//another way to setting an attribute: append the class, doesn't over ride
title[3].classList.add("title", "header-title");

//iv.Removing class using remove
//another way to setting an attribute: append the class, doesn't over ride

title[3].classList.remove("title", "header-title");

//3.getAttribute

console.log(title[3].getAttribute("id"));

//4.modifying attributes & classes
//title[3].classList.remove("title", "header-title");
//title[3].classList.add("title", "header-title");

console.log(title[3].classList.contains("title", "header-title")); //false the element

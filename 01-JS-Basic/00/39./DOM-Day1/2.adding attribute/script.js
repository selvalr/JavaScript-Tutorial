//2.)Adding attribute

const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";

//i.Adding attribute using setAttribute
const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "title");
titles[3].setAttribute("id", "fourth-title");

//ii.Adding attribute without setAttribute
//another way to setting an attribute
titles[3].className = "title";
titles[3].id = "fourth-title";

//iii.Adding class using classList
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add("title", "header-title");

//iv.Removing class using remove
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove("title", "header-title");

// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems); //HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item]
console.log(Array.isArray(navItems)); //false

const navItems1 = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems1[1]); //<li class=nav-item><a href>todo</a></li>

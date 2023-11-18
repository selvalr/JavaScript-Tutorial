let brand = document.getElementById("brand");
console.log(brand);
console.log(brand.nodeType);//1
console.log(brand.nodeName);//H3
brand.style.backgroundColor = "purple";
brand.style.color = "white";



let stitle = document.getElementsByClassName("sub-title");

console.log(stitle);//HTMLCollection

stitle[0].style.color = "Red";
stitle[1].style.color = "Red";

/*error:
stitle.forEach((element) => {
  element.style.color = "Red";
});
*/

for (let i = 0; i < stitle.length; i++) {
  stitle[i].style.color = "blue";
}

let para = document.getElementsByTagName("p");
console.log(para);

for (let i = 0; i < para.length; i++) {
  para[i].style.color = "purple";
}

let heading = document.querySelector("h1");
console.log(heading);
heading.style.color = "orange";

/*query selector ku foreach work aagum matha thuku not work */
let qpara = document.querySelectorAll("p");
console.log(qpara);
qpara.forEach((element) => {
  element.style.color = "blue";
});


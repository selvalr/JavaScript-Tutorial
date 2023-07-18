let brand = document.getElementById("brand");
console.log(brand);
console.log(brand.nodeType);
console.log(brand.nodeName);
brand.style.backgroundColor = "purple";
brand.style.color = "white";

let stitle = document.getElementsByClassName("sub-title");

console.log(stitle);

stitle[0].style.color = "Red";
stitle[1].style.color = "Red";
/*
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

let qpara = document.querySelectorAll("p");
console.log(qpara);
qpara.forEach((element) => {
  element.style.color = "blue";
});

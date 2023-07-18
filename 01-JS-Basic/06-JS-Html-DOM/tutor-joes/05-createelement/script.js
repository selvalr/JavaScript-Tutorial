//1.createElement

let para = document.createElement("p");
para.innerHTML = "This is a <i>Sample Paragraph</i>";
para.style.color = "brown";

//2.appendchild
const body = document.querySelector("body");
body.appendChild(para);

//3.insertBefore
//parentNode.insertBefore(newNode, referenceNode);

let h1 = document.createElement("h1");
h1.innerHTML = "This is Heading";
h1.style.color = "red";
body.insertBefore(h1, para);

//4.removeChild
//parent.parent(child);

const removeBtns = document.querySelectorAll(".btnRemove");
removeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const tr = this.parentNode.parentNode;
    let td = tr.childNodes[5];
    console.log(td);
    tr.removeChild(td);
  });
});

//5.remove
/*
const removeBtns = document.querySelectorAll(".btnRemove");
removeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const tr = this.parentNode.parentNode;
    //tr.remove();
  });
});
*/

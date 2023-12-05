//createElement

let para = document.createElement("p");
para.innerHTML = "This is a <i>Sample Paragraph</i>";
para.style.color = "brown";

//appendChild

const body = document.querySelector("body");
body.appendChild(para);


//insertBefore
//parentNode.insertBefore(newNode, referenceNode);

let h1 = document.createElement("h1");
h1.innerHTML = "This is Heading";
h1.style.color = "red";
body.insertBefore(h1, para);


//removeChild
//parent.parent(child);

const removeBtns = document.querySelectorAll(".btnRemove");
removeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const tr = this.parentNode.parentNode;
    let td = tr.childNodes[5];
    console.log(td);
    tr.removeChild(td)
  });
});



//remove

const removeBtns1 = document.querySelectorAll(".btnRemove");
removeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const tr = this.parentNode.parentNode;
    //tr.remove();
  });
});

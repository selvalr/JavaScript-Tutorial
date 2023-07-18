//style

const h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.backgroundColor = "palegreen";
h1.style.padding = "20px";

//2.innerHTML

const h1 = document.querySelector("h1");
h1.innerHTML = "Learn More <i>Be Smart</i>";

//3.innerText
const h1 = document.querySelector("h1");
h1.innerText = "Learn More <i>Be Smart</i>";

//4.clonenode

const h1 = document.querySelector("h1");
const body = document.querySelector("body");
let cloneH1 = h1.cloneNode(true);
let cloneH2 = h1.cloneNode(false);
body.appendChild(cloneH1);
body.appendChild(cloneH2);

//5.setInterval()

let clockDiv = document.querySelector(".clock");
clockDiv.style.fontSize = "30px";
function clock() {
  const date = new Date();

  const time =
    date.getHours() +
    " : " +
    date.getMinutes() +
    " : " +
    date.getSeconds() +
    " : " +
    date.getMilliseconds();
  clockDiv.innerHTML = time;
}

setInterval(clock, 1000);

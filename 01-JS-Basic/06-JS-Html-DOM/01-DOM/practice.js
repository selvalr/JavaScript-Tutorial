//1.
// event object
// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga
// js Engine --- line by line execute karta hai
// browser ---- js Engine + extra features
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
// browser ----- 2
// 1.) callback function hai vo js Engine ko degi ......
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi

const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons) {
  button.addEventListener("click", (e) => {
    console.log(e.currentTarget);
  });
}

//2.
/*
console.log("script start !!!!!");
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let num = 0;
    for (let i = 0; i <= 1000000000; i++) {
      num += i;
    }
    console.log(e.currentTarget.textContent, num);
  });
});

let outerVar = 0;
for (let i = 0; i <= 100000000; i++) {
  outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!");
*/

//3.
/*
// little practice with click event
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons.length);

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.style.backgroundColor = "yellow";
    e.target.style.color = "#333";
  });
});
*/

//7.
/*
const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}

mainButton.addEventListener("click", () => {
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});
*/

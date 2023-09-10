// event object

const firstButton = document.querySelector("#one");

firstButton.addEventListener("click", function (event) {
  console.log(event); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
});

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
    console.log(e.currentTarget); //<button id="one">my Button one</button>
  });
}

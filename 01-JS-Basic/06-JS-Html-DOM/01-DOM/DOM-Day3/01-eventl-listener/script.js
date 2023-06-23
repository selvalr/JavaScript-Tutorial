//Event Listeners:
//syntax:
/*
selectedElement.addEventListener("eventlistner", function (e) {
  // the activity you want to occur after the event will be in here
});

// or

selectedElement.addEventListener("eventlistner", (e) => {
  // the activity you want to occur after the event will be in here
});
*/

//2.// intro to events
// click
// event add karne ke 3 tarike hai
// 1.)
const btn = document.querySelector(".btn-headline");
// method --- addEventListener
// function clickMe(){
//     console.log("you clicked me !!!!!");
// }
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });

// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// });

//4.// this keyword
const btn2 = document.querySelector(".btn-headline");

btn2.addEventListener("click", function () {
  console.log("you clicked me !!!!");
  console.log("value of this");
  console.log(this);
});

//5.
const allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })

//6.
/*
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
*/

/*
!List of events:

click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page

*/

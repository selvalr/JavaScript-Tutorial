/*
Event Handlers 
  Inline event listeners
  Inline properties
  Event listeners.

Event
  1.Mouse
    click
    ,dblclick
    ,mousedown
    ,mouseout
    ,mouseup
    ,mouseover
  2.Keyboard
    Keydown
    keypress
    keyup
    keycode
    code
  3.Form
    focus
    submit
    blur
    change
  4.Touch
    touchstart
    touchmove
    touchend
    touchcancel
  5.Window
    scroll
    resize
    load
    haschange 
*/

const btn = document.querySelector(".btn");
/*
btn.addEventListener("click", function () {
  alert("Welcome to Tutor Joes");
});
*/

btn.addEventListener("dblclick", function () {
  alert("Your are dblclicked");
});

btn.addEventListener("mousedown", function () {
  this.style.backgroundColor = "Red";
});
btn.addEventListener("mouseout", function () {
  this.style.backgroundColor = "yellow";
});
btn.addEventListener("mouseup", function () {
  this.style.backgroundColor = "blue";
});

btn.addEventListener("mouseover", function () {
  this.style.backgroundColor = "orange";
});

/*
  4.Touch
    touchstart
    touchmove
    touchend
    touchcancel
*/

const touchArea = document.getElementById("touchArea");

touchArea.addEventListener("touchstart", function (e) {
  e.preventDefault();
  touchArea.style.backgroundColor = "blue";
  touchArea.textContent = "Touch Started !";
});

touchArea.addEventListener("touchmove", function (e) {
  e.preventDefault();
  touchArea.style.backgroundColor = "green";
  touchArea.textContent = "Touch Moved !";
});

touchArea.addEventListener("touchend", function (e) {
  e.preventDefault();
  touchArea.style.backgroundColor = "gray";
  touchArea.textContent = "Touch Ended !";
});

touchArea.addEventListener("touchcancel", function (e) {
  e.preventDefault();
  touchArea.style.backgroundColor = "red";
  touchArea.textContent = "Touch Cancelled !";
});
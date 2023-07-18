const game = document.getElementById("game");
const ball = document.getElementById("ball");
let startX, startY;

game.addEventListener("touchstart", function (e) {
  const touch = e.changedTouches[0];
  startX = touch.clientX;
  startY = touch.clientY;
});

game.addEventListener("touchmove", function (e) {
  const touch = e.changedTouches[0];
  const diffX = touch.clientX - startX;
  const diffY = touch.clientY - startY;
  ball.style.left = Math.max(0, Math.min(350, ball.offsetLeft + diffX)) + "px";
  ball.style.top = Math.max(0, Math.min(180, ball.offsetTop + diffY)) + "px";
  startX = touch.clientX;
  startY = touch.clientY;
  e.preventDefault();
});

//Appending child to a parent element

// creating multiple elements and appending to parent element
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "24px";
  title.textContent = i;
  document.body.appendChild(title);
}

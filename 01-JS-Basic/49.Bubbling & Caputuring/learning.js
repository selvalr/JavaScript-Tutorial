const formEl = document.querySelector("form");
const divEl = document.querySelector("form div");
const pEl = document.querySelector("form p");

formEl.addEventListener("click", (event) => {
  alert("Form");
  console.log(`Target: ${event.target.tagName}, this: ${formEl.tagName}`);
});

divEl.addEventListener("click", (event) => {
  alert("Div");

  // // Stop Bubbling
  event.stopPropagation();

  //Doesn't work,but another listener will work

  // Removes all active event listeners from that elements
  event.stopImmediatePropagation();
});

/*
//use to a another same event stop to immediate use

divEl.addEventListener("click", (event) => {
    alert("another Div");
})
*/

pEl.addEventListener("click", () => {
  alert("P");
});

// To catch an event on the capturing phase
formEl.addEventListener("click", () => {}, { capture: true }); // by default false in caputure third parameter change true,

// Task: Catch the Capturing & Bubbling Phrase
for (let elem of document.querySelectorAll("form, form *")) {
 console.log(elem);
  // Capturing Phase
  elem.addEventListener(
    "click",
    () => {
      console.log(`Capturing Phase: ${elem.tagName}`);
    },
    { capture: true }
  );

  // Bubbling Phase
  elem.addEventListener("click", () => {
    console.log(`Bubbling Phase: ${elem.tagName}`);
  });
}
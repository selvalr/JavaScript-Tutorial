const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

//Here, three elements with IDs "grandparent," "parent," and "child" are selected from the DOM and stored in variables.

grandparent.addEventListener("click", function () {
  console.log("Grandparent Clicked");
}, true)


//An event listener is attached to the grandparent element with the "click" event. The listener function logs "Grandparent Clicked" to the console. The third argument, true, indicates that the listener is registered for the capturing phase.

parent.addEventListener("click", function () {
    console.log("Parent Clicked");
  }, false);


  //An event listener is attached to the parent element with the "click" event. The listener function logs "Parent Clicked" to the console. The third argument, false, indicates that the listener is registered for the bubbling phase.

child.addEventListener("click", function (e) {
    console.log("Child Clicked");
    e.stopImmediatePropagation();
  }, true);

  //An event listener is attached to the child element with the "click" event. The listener function logs "Child Clicked" to the console. The third argument, true, indicates that the listener is registered for the capturing phase. Additionally, e.stopImmediatePropagation() is called to prevent further propagation of the event to other elements.

child.addEventListener("click", function (e) {
    console.log("Child Clicked2");
  }, true);


/*Example 2

This code demonstrates a simple modal behavior with event handling in JavaScript. Let's go through the code and understand its functionality.

const btnModal = document.querySelector("#btnModal");
const modal = document.querySelector("#modal");
const btnSubmit = document.querySelector("#btnSubmit");
const txtName = document.querySelector("#txtName");
Here, elements with IDs "btnModal," "modal," "btnSubmit," and "txtName" are selected from the DOM and stored in variables.

btnModal.addEventListener("click", function () {
  modal.style.display = "flex";
});
An event listener is attached to the btnModal element with the "click" event. When the button is clicked, the listener function is triggered, and it sets the display property of the modal element to "flex", making the modal visible.

modal.addEventListener("click", function () {
  modal.style.display = "none";
});
An event listener is attached to the modal element with the "click" event. When the modal is clicked, the listener function is triggered, and it sets the display property of the modal element to "none", hiding the modal.

btnSubmit.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Submit button Pressed");
});
An event listener is attached to the btnSubmit element with the "click" event. When the submit button is clicked, the listener function is triggered, and it logs "Submit button Pressed" to the console. Additionally, e.stopPropagation() is called to prevent further propagation of the event, ensuring that the modal doesn't close when clicking on the submit button.

txtName.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Input Click");
});


*/
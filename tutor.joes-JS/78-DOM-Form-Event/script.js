/*
  Form Events in JavaScript
      submit
      reset
      change

      checked
      blur
      focus
      input
     
*/

const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const course = document.querySelector("#course");
const checkbox = document.querySelector("#agree");
const radios = document.querySelectorAll('input[name="gender"]');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form Submitted");
  console.log("User Name : ", username.value);
  console.log("Email     : ", email.value);

  let selectedGender = "";
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedGender = radio.value;
    }
  });
  console.log("Gender :", selectedGender);
});

course.addEventListener("change", function (e) {
  const selectedCourse = e.target.value;
  console.log("Selected Course     : ", selectedCourse);
});

form.addEventListener("reset", function (e) {
  console.log("Reset or Clear Form Data");
});

checkbox.addEventListener("change", function (e) {
  if (e.target.checked) {
    console.log("Checkbox is checked.");
  } else {
    console.log("Checkbox is unchecked.");
  }
});

username.addEventListener("input", function (e) {
  console.log("Username input changed:", e.target.value);
});

username.addEventListener("focus", function (e) {
  username.style.borderColor = "orange";
});

username.addEventListener("blur", function (e) {
  username.style.borderColor = "black";
});
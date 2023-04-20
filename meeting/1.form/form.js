function validateEmail(email) {
    const reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\%\].)+[A-Z]{2,4}$/i;
    if (reg.test(email)) {
      return true;
    }
    return false;
  }
  function validateMobile(mobile) {
    console.log("validateMobile", mobile);
    if (isNaN(mobile) || mobile.length !== 10) {
      return false;
    }
    return true;
  }
  
  function validateForm(myForm) {
    //event.preventDefault();
    const firstName = myForm["firstName"].value;
    const lastName = myForm["lastName"].value;
    const email = myForm["email"].value;
    const mobile = myForm["mobile"].value;
    const message = myForm["message"].value;
  
    if (firstName === "" || lastName === "" || email === "" || mobile === "") {
      alert("Please fill all required fields");
      return false;
    } else if (!validateEmail(email)) {
      alert("Email is not valid");
      return false;
    } else if (!validateMobile(mobile)) {
      alert("Phone number is not valid");
      return false;
    }
  
    return true;
  }
  
  function emptyCheck(field) {
    const errorClassName = "error-" + field.name.toLowerCase();
    const errorSpan = document.querySelector("." + errorClassName);
    if (field.value === "") {
      if (!errorSpan) {
        const span = document.createElement("span");
        span.innerText = "This field is required";
        span.className = errorClassName;
        field.parentNode.appendChild(span);
      }
    } else {
      if (errorSpan) {
        field.parentNode.removeChild(errorSpan);
      }
    }
  }
  
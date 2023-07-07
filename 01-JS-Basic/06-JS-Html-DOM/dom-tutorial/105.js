// change text
// textContent and innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText); //Manage your tasks
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent); //This is something else

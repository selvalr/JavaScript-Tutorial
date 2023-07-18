const frm = document.getElementById("frm");

frm.addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

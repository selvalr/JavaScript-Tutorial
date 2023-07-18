const catagories = document.getElementById("catagories");

catagories.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.className == "product") {
    console.log(e.target.id);
    window.location.href = "/" + e.target.id;
  }
});

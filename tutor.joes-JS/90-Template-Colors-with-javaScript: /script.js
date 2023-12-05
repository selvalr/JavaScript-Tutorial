const btnToggle = document.getElementById("theme-toggle");

function toggleTheme() {
  const banner = document.getElementById("banner");
  banner.classList.toggle("dark");

  const isDarkTheme = banner.classList.contains("dark");

  localStorage.setItem("themePreference", isDarkTheme ? "dark" : "light");
}

btnToggle.addEventListener("click", toggleTheme);

window.addEventListener("DOMContentLoaded", function () {
  const themePreference = localStorage.getItem("themePreference");
  if (themePreference === "dark") {
    const banner = document.getElementById("banner");
    banner.classList.add("dark");
  }
});
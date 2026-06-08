const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

function setTheme(isDark) {
  document.documentElement.classList.toggle("dark-mode", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  if (themeIcon) {
    themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
  }
}

if (localStorage.getItem("theme") === "dark") {
  setTheme(true);
}

themeToggle?.addEventListener("click", () => {
  setTheme(!document.documentElement.classList.contains("dark-mode"));
});

const emailForm = document.getElementById("email-form");
const passwordForm = document.getElementById("password-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const displayEmail = document.getElementById("display-email");
const changeAccountBtn = document.getElementById("change-account");
const showPasswordCheckbox = document.getElementById("show-password");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  displayEmail.textContent = emailInput.value;
  emailForm.classList.add("hidden");
  passwordForm.classList.remove("hidden");
  passwordInput.focus();
});

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/code/index.html";
});

changeAccountBtn.addEventListener("click", () => {
  passwordForm.classList.add("hidden");
  emailForm.classList.remove("hidden");
  passwordInput.value = "";
  emailInput.focus();
});

showPasswordCheckbox.addEventListener("change", () => {
  passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
});

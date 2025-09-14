// -----------------------------
// Part 1: Event Handling
// -----------------------------

// Dark/Light mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Counter buttons
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// -----------------------------
// Part 2: Interactive Elements
// -----------------------------

// FAQ Accordion
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// -----------------------------
// Part 3: Form Validation
// -----------------------------

const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from refreshing the page

  let valid = true;

  // Name validation (at least 2 chars)
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (min 6 chars, must include a number)
  const password = document.getElementById("password").value.trim();
  const passwordError = document.getElementById("passwordError");
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!password.match(passwordPattern)) {
    passwordError.textContent =
      "Password must be at least 6 characters and include a number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Show success message if all valid
  const successMessage = document.getElementById("successMessage");
  if (valid) {
    successMessage.classList.remove("hidden");
    form.reset();
  } else {
    successMessage.classList.add("hidden");
  }
});

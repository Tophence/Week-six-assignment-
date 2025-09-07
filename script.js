// 🎮 Interactive Feature 1: Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') 
    ? 'Switch to Light Mode' 
    : 'Switch to Dark Mode';
});

// 🎯 Interactive Feature 2: Counter
let count = 0;
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counterValue.textContent = count;
});

// 📋✅ Part 3: Form Validation
const form = document.getElementById('signupForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual submission

  // Clear previous messages
  document.getElementById('formSuccess').textContent = '';
  ['nameError', 'emailError', 'passwordError'].forEach(id => {
    document.getElementById(id).textContent = '';
  });

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;

  // Name validation
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
    isValid = false;
  }

  // Email validation (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    form.reset();
  }
});

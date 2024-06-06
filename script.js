document.addEventListener('DOMContentLoaded', function () {
    // Get form and input elements
    const form = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');

    // Event listener for name input
    nameInput.addEventListener('input', function () {
        validateName();
    });

    // Event listener for email input
    emailInput.addEventListener('input', function () {
        validateEmail();
    });

    // Event listener for password input
    passwordInput.addEventListener('input', function () {
        validatePassword();
        checkPasswordStrength();
    });

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        if (validateForm()) {
            console.log('Form submitted successfully!');
            console.log(`Name: ${nameInput.value}, Email: ${emailInput.value}, Password: ${passwordInput.value}`);
            form.reset(); // Reset form fields
        }
    });

    // Function to validate name input
    function validateName() {
        const name = nameInput.value.trim();
        if (name === '') {
            setError(nameInput, 'Name is required');
            return false;
        } else {
            setSuccess(nameInput);
            return true;
        }
    }

    // Function to validate email input
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            setError(emailInput, 'Invalid email format');
            return false;
        } else {
            setSuccess(emailInput);
            return true;
        }
    }

    // Function to validate password input
    function validatePassword() {
        const password = passwordInput.value.trim();
        if (password.length < 6) {
            setError(passwordInput, 'Password must be at least 6 characters');
            return false;
        } else {
            setSuccess(passwordInput);
            return true;
        }
    }

    // Function to check password strength and display feedback
    function checkPasswordStrength() {
        const password = passwordInput.value.trim();
        if (password.length < 6) {
            passwordStrength.textContent = 'Weak';
            passwordStrength.className = 'strength-weak';
        } else if (password.length < 10) {
            passwordStrength.textContent = 'Medium';
            passwordStrength.className = 'strength-medium';
        } else {
            passwordStrength.textContent = 'Strong';
            passwordStrength.className = 'strength-strong';
        }
    }

    // Function to validate entire form
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        return isNameValid && isEmailValid && isPasswordValid;
    }

    // Function to set error feedback for input
    function setError(input, message) {
        const feedback = input.nextElementSibling;
        feedback.textContent = message;
        input.classList.add('is-invalid');
    }

    // Function to clear error feedback for input
    function setSuccess(input) {
        const feedback = input.nextElementSibling;
        feedback.textContent = '';
        input.classList.remove('is-invalid');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.innerText = '');

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address';
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long';
        isValid = false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        isValid = false;
    }

    // Validate age
    const age = document.getElementById('age').value;
    if (age < 18 || age > 100) {
        document.getElementById('ageError').innerText = 'Age must be between 18 and 100';
        isValid = false;
    }

    // Validate gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').innerText = 'Please select a gender';
        isValid = false;
    }

    // Validate country
    const country = document.getElementById('country').value;
    if (country === '') {
        document.getElementById('countryError').innerText = 'Please select a country';
        isValid = false;
    }

    // Validate terms and conditions
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = 'You must agree to the Terms and Conditions';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        // Submit the form (can add actual form submission here)
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.innerText = '');

    // Validate login email
    const loginEmail = document.getElementById('loginEmail').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(loginEmail)) {
        document.getElementById('loginEmailError').innerText = 'Enter a valid email address';
        isValid = false;
    }

    // Validate login password
    const loginPassword = document.getElementById('loginPassword').value;
    if (loginPassword.length < 8) {
        document.getElementById('loginPasswordError').innerText = 'Password must be at least 8 characters long';
        isValid = false;
    }

    if (isValid) {
        alert('Login successful!');
        // Submit the form (can add actual form submission here)
    }
});

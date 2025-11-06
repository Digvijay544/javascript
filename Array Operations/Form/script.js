document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('studentForm');
    
    // Select all input fields and error message divs
    const name = document.getElementById('name');
    const address = document.getElementById('address');
    const state = document.getElementById('state');
    const gender = document.getElementsByName('gender');
    const mobile = document.getElementById('mobile');
    const email = document.getElementById('email');
    
    const nameError = document.getElementById('nameError');
    const addressError = document.getElementById('addressError');
    const stateError = document.getElementById('stateError');
    const genderError = document.getElementById('genderError');
    const mobileError = document.getElementById('mobileError');
    const emailError = document.getElementById('emailError');
    
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();
        
        // Reset previous errors
        resetErrors();
        
        let isValid = true;
        
        // --- VALIDATIONS ---
        
        // 1. Name validation (not empty, only letters and spaces)
        if (name.value.trim() === '') {
            showError(name, nameError, 'Name is required.');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name.value)) {
            showError(name, nameError, 'Name can only contain letters and spaces.');
            isValid = false;
        }
        
        // 2. Address validation (not empty)
        if (address.value.trim() === '') {
            showError(address, addressError, 'Address is required.');
            isValid = false;
        }
        
        // 3. State validation (not empty)
        if (state.value === '') {
            showError(state, stateError, 'Please select a state.');
            isValid = false;
        }
        
        // 4. Gender validation (one must be selected)
        let genderSelected = false;
        for (const radio of gender) {
            if (radio.checked) {
                genderSelected = true;
                break;
            }
        }
        if (!genderSelected) {
            genderError.textContent = 'Please select a gender.';
            isValid = false;
        }
        
        // 5. Mobile number validation (not empty, 10 digits)
        if (mobile.value.trim() === '') {
            showError(mobile, mobileError, 'Mobile number is required.');
            isValid = false;
        } else if (!/^\d{10}$/.test(mobile.value)) {
            showError(mobile, mobileError, 'Please enter a valid 10-digit mobile number.');
            isValid = false;
        }
        
        // 6. Email validation (not empty, valid format)
        if (email.value.trim() === '') {
            showError(email, emailError, 'Email is required.');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
            showError(email, emailError, 'Please enter a valid email address.');
            isValid = false;
        }
        
        // --- FORM SUBMISSION ---
        if (isValid) {
            // Save data to session storage to display on the welcome page
            const formData = {
                name: name.value,
                email: email.value
            };
            sessionStorage.setItem('studentData', JSON.stringify(formData));
            
            // Redirect to the welcome page
            window.location.href = 'welcome.html';
        }
    });
    
    function showError(inputElement, errorElement, message) {
        inputElement.classList.add('error');
        errorElement.textContent = message;
    }
    
    function resetErrors() {
        const errorInputs = document.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));
        
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');
    }
});
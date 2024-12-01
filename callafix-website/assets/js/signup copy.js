let currentStep = 1;

function showStep(step) {
    const steps = document.querySelectorAll('fieldset');
    steps.forEach((stepElem, index) => {
        stepElem.style.display = (index + 1 === step) ? 'block' : 'none';
    });

    // Show Previous button on steps after the first one
    document.getElementById('prevBtn').style.display = (step === 1) ? 'none' : 'inline';
    // Show Next button on steps before the last one
    document.getElementById('nextBtn').style.display = (step === steps.length) ? 'none' : 'inline';
    // Show Submit button on the last step
    document.getElementById('submitBtn').style.display = (step === steps.length) ? 'inline' : 'none';
}

function moveStep(stepDiff) {
    if (!validateCurrentStep()) {
        return; // Prevent moving to the next step if validation fails
    }

    currentStep += stepDiff;
    showStep(currentStep);
}

function validateCurrentStep() {
    const currentFieldset = document.querySelectorAll('fieldset')[currentStep - 1]; // Get the current step
    let hasEmptyFields = false;

    // Loop through each input element within the current step
    for (const input of currentFieldset.querySelectorAll('input, textarea')) {
        if (input.required && input.value.trim() === '') {
            hasEmptyFields = true;
            input.classList.add('error'); // Highlight the empty fields with the 'error' class
        } else {
            input.classList.remove('error'); // Remove the error class if the field is filled
        }
    }

    if (hasEmptyFields) {
        alert('Please fill in all required fields before moving to the next step!');
    }

    return !hasEmptyFields; // Return false if there are empty fields, preventing moving to the next step

    function submitForm() {
        const form = document.getElementById('privatecontsignup');
        const formData = new FormData(form);
    
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show success message
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}
// Initialize the form by showing the first step
showStep(currentStep);
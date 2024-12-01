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
                document.getElementById('error-message').innerText = 'Please fill in all required fields before moving to the next step!';
            } else {
                document.getElementById('error-message').innerText = '';
            }

            return !hasEmptyFields; // Return false if there are empty fields, preventing moving to the next step
        }

        // Submit the form data via fetch on the final step
        function submitForm(event) {
            event.preventDefault(); // Prevent the default form submission

            const form = document.getElementById('registeredbiz');
            const formData = new FormData(form);

            // Send the form data to the Google Apps Script endpoint
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message || "Form submitted successfully!");
                console.log(data); // Log the response data
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while submitting the form.");
            });
        }

        // Initialize the form by showing the first step
        showStep(currentStep);
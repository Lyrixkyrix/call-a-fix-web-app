// This function will be triggered when the form is submitted
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const form = document.getElementById('registeredbiz');
    const formData = new FormData(form);

    // Handle file uploads
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(fileInput => {
        const file = fileInput.files[0];
        if (file) {
            // Convert file to Base64 before appending
            const reader = new FileReader();
            reader.onload = function(event) {
                formData.append(fileInput.name, event.target.result.split(',')[1]); // Exclude the base64 data URI part
                // Once all files are read, submit the form data
                if (fileInputs.every(input => input.files.length > 0)) {
                    submitData(formData);
                }
            };
            reader.readAsDataURL(file); // Convert to Base64
        }
    });

    // If no files are selected, submit the form without them
    if (fileInputs.length === 0 || fileInputs.every(input => input.files.length > 0)) {
        submitData(formData);
    }
}

// Function to send the form data to Google Apps Script endpoint using fetch
function submitData(formData) {
    fetch('https://script.google.com/macros/s/AKfycbyHFQeDW3y5LM3HTc6S0JbQdtfiAz3LKYeWeU0XNQGSTE-DjlupIeEpSF7SHIskYLQp5g/exec', {
        method: 'POST',
        body: formData, // Send form data with files and other data
    })
    .then(response => response.text())
    .then(data => {
        // Assuming the response is plain text
        console.log(data); // Log the response for debugging
        if (data.includes("success")) {
            showThankYouPage(data); // Show a thank you message or page
        } else {
            alert('Error: ' + data); // Show error if any
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
}

// Optional: Show thank you message or page upon successful submission
function showThankYouPage(message) {
    document.body.innerHTML = `
        <h2>Thank You for Registering!</h2>
        <p>${message}</p>
    `;
}

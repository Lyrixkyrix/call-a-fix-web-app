function submitForm() {
    const form = document.getElementById('registeredbiz');
    const myFileCACInput = document.getElementById('myFileCAC');
    const myFileInput = document.getElementById('myFile');

    // Convert files to Base64
    encodeFileToBase64(myFileCACInput.files[0], function(cacBase64) {
        encodeFileToBase64(myFileInput.files[0], function(fileBase64) {
            // Append the base64-encoded file data to the form
            const formData = new FormData(form);
            formData.append("myFileCAC", cacBase64);
            formData.append("myFile", fileBase64);

            // Send form data to Google Apps Script
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
        });
    });
}

function encodeFileToBase64(file, callback) {
    const reader = new FileReader();
    reader.onloadend = function() {
        const base64File = reader.result.split(',')[1]; // Remove the prefix part of the result
        callback(base64File);
    };
    reader.readAsDataURL(file);
}

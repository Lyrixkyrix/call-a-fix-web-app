function handleSubmit(event) {
    event.preventDefault();  // Prevent default form submission
  
    const form = document.getElementById('serReqForm');
    const formData = new FormData(form);
  
    // Handle file conversion to base64 (ensure the file input is selected)
    const fileInput = document.getElementById('myFile');
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const base64file = event.target.result.split(',')[1];  // Extract base64 part from the Data URL
        formData.append('base64file', base64file);
        formData.append('fileName', file.name);
  
        // Send the form data to the Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbzVvVASVsLl2D_yXsk_AuLaFHA8sC_VROEoSib385cj_CM-SnbPhe11y4HwFof5WCwddA/exec', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            alert('Request submitted successfully. Your Request ID is ' + data.message);
          } else {
            alert(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while submitting the form.');
        });
      };
      reader.readAsDataURL(file);  // Read the file as base64
    }
  }
  
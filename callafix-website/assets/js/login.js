const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (!username || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Authenticate user against Google Sheets (replace with your actual implementation)
  authenticateUser(username, password)
    .then(() => {
      // Login successful, redirect to admin page
      window.location.href = '/callafix-admin-dashboard/index.html'; 
    })
    .catch(error => {
      console.error('Authentication error:', error);
      // Handle authentication failure (e.g., display an error message)
    });
});

async function authenticateUser(username, password) {
  // Replace with your Google Sheets API implementation
  const sheet = SpreadsheetApp.openById('1FhIxm64U6EKhUeWI19hp4dSsc2jvKxB7l8eRcsF3bxg').getSheetByName('Sheet1');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === username && data[i][1] === password) {
      // Authentication successful
      return;
    }
  }

  throw new Error('Invalid username or password');
}
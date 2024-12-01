// Replace this with your actual Google Apps Script Web App URL
const scriptUrl = 'https://script.google.com/macros/s/AKfycbzqar4QgFeHYtkVFBtcJtDThmzM_FZPy84MQ1Rg0qRejic1yFTNyQn-qR6j47CeiF7Plw/exec'; 

// Fetch and display comments
function loadComments() {
    fetch(scriptUrl)
    .then(response => response.json())
    .then(data => {
        const commentsList = document.getElementById("commentsList");
        commentsList.innerHTML = ''; // Clear the existing list

        data.forEach(comment => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${comment.name}</strong>: ${comment.comment}`; // Format: Name: Comment
            commentsList.appendChild(li);
        });
    })
    .catch(error => console.error("Error loading comments:", error));
}

// Handle form submission (POST new comment)
const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const nameText = document.getElementById('name').value.trim();
    const commentText = document.getElementById('comment').value.trim();

    if (!nameText || !commentText) {
        alert("Please fill in both your name and comment.");
        return;
    }

    // Post the new comment to Google Apps Script
    fetch(scriptUrl, {
        method: 'POST',
        body: new URLSearchParams({
            name: nameText,
            comment: commentText
        })
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success or error message
        document.getElementById('name').value = ''; // Clear the name input field
        document.getElementById('comment').value = ''; // Clear the comment input field
        loadComments(); // Reload the comments list after posting
    })
    .catch(error => {
        console.error("Error posting comment:", error);
        alert("An error occurred. Please try again later.");
    });
});

// Load comments when the page loads
window.onload = loadComments;


// Add event listener to search button
document.getElementById('search-btn').addEventListener('click', function() {
    // Get search query
    var searchQuery = document.getElementById('search-input').value;

    // Redirect to search results page
    window.location.href = 'search.html?q=' + searchQuery;
});

// Add event listener to comment form
document.getElementById('comment-form').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get comment data
    var commentName = document.getElementById('comment-name').value;
    var commentEmail = document.getElementById('comment-email').value;
    var commentText = document.getElementById('comment-text').value;

    // Save comment data to local storage
    localStorage.setItem('comment-' + Date.now(), JSON.stringify({
        name: commentName,
        email: commentEmail,
        text: commentText
    }));

    // Display comment on page
    var commentList = document.getElementById('comment-list');
    var commentListItem = document.createElement('li');
    commentListItem.innerHTML = '<h3>' + commentName + '</h3><p>' + commentText + '</p>';
    commentList.appendChild(commentListItem);

    // Clear form fields
    document.getElementById('comment-name').value = '';
    document.getElementById('comment-email').value = '';
    document.getElementById('comment-text').value = '';
});
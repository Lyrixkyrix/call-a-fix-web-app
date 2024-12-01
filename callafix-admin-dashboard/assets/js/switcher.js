const navigationLinks = document.querySelectorAll('.navigation-link');
const contentContainer = document.getElementById('content');

navigationLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetUrl = this.getAttribute('href');

    fetch(targetUrl)
      .then(response => response.text())
      .then(content => {
        contentContainer.innerHTML = content;

        // Activate the clicked navigation link
        navigationLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      })
      .catch(error => {
        console.error('Error loading content:', error);
      });
  });
});

// Activate the first navigation link by default
navigationLinks[0].click();
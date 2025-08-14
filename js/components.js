document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('partials/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
      setActiveNavLink();
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
  
  // Load footer
  fetch('partials/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
  
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      
      // Handle root path
      if (currentPath === '/' || currentPath.endsWith('/index.html')) {
        if (linkPath === '../index.html' || linkPath === 'index.html') {
          link.classList.add('active');
        }
      } 
      // Handle pages in subdirectory
      else if (currentPath.includes('/pages/')) {
        const currentPage = currentPath.split('/').pop();
        if (linkPath === currentPage) {
          link.classList.add('active');
        }
      }
    });
  }
});
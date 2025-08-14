document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const formObject = {};
      
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      
      // Using Formspree or similar service
      // Replace 'your-form-id' with your actual Formspree form ID
      fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: JSON.stringify(formObject),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          showSuccessMessage();
          contactForm.reset();
        } else {
          showErrorMessage();
        }
      })
      .catch(error => {
        console.error('Form submission error:', error);
        showErrorMessage();
      });
    });
  }
  
  function showSuccessMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message success';
    messageDiv.textContent = 'Thank you for your message! We will get back to you soon.';
    
    const formContainer = document.querySelector('.contact-form');
    formContainer.appendChild(messageDiv);
    
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }
  
  function showErrorMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message error';
    messageDiv.textContent = 'There was an error sending your message. Please try again.';
    
    const formContainer = document.querySelector('.contact-form');
    formContainer.appendChild(messageDiv);
    
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }
});
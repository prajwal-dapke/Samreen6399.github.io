// Initialize EmailJS
(function(){
    emailjs.init("nwT8vUzUnmMkzQ7R0");  // Replace with your EmailJS public key
  })();
  
  // Wait for DOM content to load
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const formMessage = document.getElementById("form-message");
  
    // Listen for form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Send form data to EmailJS
      emailjs.sendForm("service_8njq0je", "template_sy3tcve", form)
        .then(() => {
          formMessage.textContent = "Message sent successfully!";
          formMessage.className = "success";  // Add success class
          form.reset();  // Reset the form after submission
        }, (error) => {
          formMessage.textContent = "Failed to send message. Please try again.";
          formMessage.className = "error";  // Add error class
          console.error(error);
        });
    });
  });
  
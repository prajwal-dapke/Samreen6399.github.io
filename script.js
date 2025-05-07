document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inquiryForm');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // In a real scenario, you would send this data to a server
        // using technologies like Fetch or XMLHttpRequest.

        // For this minimal dynamic change, we'll just display a success message.
        formMessage.textContent = 'Thank you for your inquiry! We will get back to you shortly.';
        formMessage.className = 'success-message'; // Add a class for potential styling
        form.reset(); // Clear the form
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

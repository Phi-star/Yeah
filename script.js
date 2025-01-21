  function validateForm() {
    const form = document.getElementById('info-form');
    const phone = document.getElementById('phone');
    
    // Check if form is valid
    if (form.checkValidity()) {
      window.open('https://wa.me/48459239068',); // Replace with Paola's WhatsApp number
    } else {
      // Check for specific fields and provide custom messages
      if (!phone.checkValidity()) {
        alert('Please enter a valid phone number with 10 to 15 digits. with your country code');
      } else {
        alert('Please fill in all required details.');
      }
    }
  }

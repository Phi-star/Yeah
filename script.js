
    function validateForm() {
      const form = document.getElementById('info-form');
      if (form.checkValidity()) {
        window.open('https://wa.me/1234567890', '_blank'); // Replace with Paola's WhatsApp number
      } else {
        alert('Please fill in all required details.');
      }
    }
 
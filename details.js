document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('userDetailsForm');
  const createButton = document.getElementById('submit-details');

  // Function to check if all required fields are filled and the checkbox is checked
  function isFormValid() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const zipCode = document.getElementById('zipCode').value;
    
    // Add validation checks for other fields here

    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const zipCodeError = document.getElementById('zipCodeError');
    
    // Add variables for other error spans here

    // Display error messages for empty fields
    if (!fullName) {
      fullNameError.style.display = 'block';
    } else {
      fullNameError.style.display = 'none';
    }

    if (!email) {
      emailError.style.display = 'block';
    } else {
      emailError.style.display = 'none';
    }

    if (!phone) {
      phoneError.style.display = 'block';
    } else{
      phoneError.style.display = 'none';
    }

    if (!zipCode) {
      zipCodeError.style.display = 'block';
    
    } else{
      zipCodeError.style.display = 'none';
    }

    // Add validation checks for other fields here

    // Check if all fields are valid
    return fullName && email && phone && zipCode; // Add the other field checks here as well
  }

  // Function to enable or disable the "Payment Page" button based on form validity
  function updateButtonState() {
    createButton.disabled = !isFormValid();
  }

  // Check button state on page load
  updateButtonState();

  // Add event listeners to form fields to update button state on input change
  const formFields = form.querySelectorAll('input');
  formFields.forEach(field => {
    field.addEventListener('input', function() {
      if (field.type === 'date') {
        // Check if the field has a value; if not, remove the "error" class.
        if (field.value === '') {
          field.classList.remove('error');
        } else {
          // If the field has a value, check for validity.
          if (!field.validity.valid) {
            field.classList.add('error');
          } else {
            field.classList.remove('error');
          }
        }
      } else {
        // For other fields (non-DOB fields), check for validity as before.
        if (!field.validity.valid) {
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      }
      updateButtonState();
    });
  });
  

  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (isFormValid()) {
      // Redirect the user to the payment page (replace "payment.html" with the actual payment page URL)
      window.location.href = 'payment.html';
    }
  });
});

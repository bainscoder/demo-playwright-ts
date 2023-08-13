document.addEventListener('DOMContentLoaded', function() {
  // Constants
  const CARD_NUMBER_REGEX = /^[0-9]{16}$/;
  const EXPIRY_DATE_REGEX = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
  const CVV_REGEX = /^[0-9]{3}$/;
  
  // Form elements
  const form = document.getElementById('paymentForm');
  const cardNumberInput = document.getElementById('cardNumber');
  const cardNameInput = document.getElementById('cardName');
  const expiryDateInput = document.getElementById('expiryDate');
  const cvvInput = document.getElementById('cvv');
  const payNowBtn = document.getElementById('payNowBtn');

  // Function to check if all required fields are filled with appropriate values
  function isFormValid() {
    const cardNumber = cardNumberInput.value;
    const cardName = cardNameInput.value;
    const expiryDate = expiryDateInput.value;
    const cvv = cvvInput.value;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(errorElement => {
      errorElement.textContent = '';
    });

    let isValid = true;

    if (!CARD_NUMBER_REGEX.test(cardNumber)) {
      document.getElementById('cardNumberError').textContent = 'Invalid card number (must be 16 digits)';
      isValid = false;
    }

    if (cardName.trim() === '') {
      document.getElementById('cardNameError').textContent = 'Cardholder name is required';
      isValid = false;
    }

    if (!EXPIRY_DATE_REGEX.test(expiryDate)) {
      document.getElementById('expiryDateError').textContent = 'Invalid expiry date (MM/YY)';
      isValid = false;
    }

    if (!CVV_REGEX.test(cvv)) {
      document.getElementById('cvvError').textContent = 'Invalid CVV (must be 3 digits)';
      isValid = false;
    }
  
    return isValid;
  }
  
  // Function to enable or disable the "Pay Now" button based on form validity
  function updateButtonState() {
    payNowBtn.disabled = !isFormValid();
  }
  
  // Check button state on page load
  updateButtonState();
  
  // Add event listeners to form fields to update button state on input change
  const formFields = [cardNumberInput, cardNameInput, expiryDateInput, cvvInput];
  formFields.forEach(field => {
    field.addEventListener('input', updateButtonState);
  });
  
  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    if (isFormValid()) {
      // Redirect the user to the "Order Created Successfully" page
      window.location.href = 'orderPlaced.html';
    } else {
      // Handle invalid form submission, e.g., display an error message
    }
  });
});

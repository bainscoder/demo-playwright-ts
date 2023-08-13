function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorDiv = document.getElementById("error");
    // Simulate a successful login (replace with your own authentication logic)
    if (username === "ClanAp" && password === "ClanAp@#1") {
      // Navigate to another page (replace 'dashboard.html' with your desired page)
      window.location.href = "index.html";

    } else if (username === "" && password === "") {
      alert("Provide input in the login field");

    }
    
      else {
        showError("Invalid Credential, check credential and try again")
    }
  }

  function cancel() {
    // Get the input fields by their IDs
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    // Clear the input field values
    usernameInput.value = "";
    passwordInput.value = "";
  }
  
function showError(errorMessage) {
            const errorDiv = document.getElementById("error");
            errorDiv.textContent = errorMessage;
            errorDiv.style.display = "block";

            // Hide the error message after 5 seconds
            setTimeout(function() {
                errorDiv.style.display = "none";
            }, 5000);
        }

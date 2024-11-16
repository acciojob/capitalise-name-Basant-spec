// Function to capitalize the input value when the input field loses focus
function capitalizeName() {
  const inputField = document.getElementById('fname');
  inputField.value = inputField.value.toUpperCase();
}

// Add event listener for the 'onblur' event
document.getElementById('fname').addEventListener('blur', capitalizeName);

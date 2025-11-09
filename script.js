
const inputField = document.getElementById('fname');


inputField.addEventListener('blur', function() {
  // Convert the input value to uppercase
  this.value = this.value.toUpperCase();
});


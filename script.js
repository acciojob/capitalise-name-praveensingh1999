//your JS code here. If required.
const inputField = document.getElementById("fname");

    // Add blur event listener to convert text to uppercase
    inputField.addEventListener("blur", function () {
      inputField.value = inputField.value.toUpperCase();
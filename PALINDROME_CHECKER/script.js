// Select input box, button, and info text element
const txtInput = document.querySelector(".inputs input"),
      checkBtn = document.querySelector(".inputs button"),
      infoTxt = document.querySelector(".info-text");

let filterInput; // Will hold cleaned input for checking

// When the user types in the input box
txtInput.addEventListener("keyup", () => {
  // Get value, convert to lowercase, remove all non-alphanumeric characters
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  
  if(filterInput) {
    // If input is not empty, activate the button
    checkBtn.classList.add("active");
  } else {
    // If input is empty, hide result text and disable button
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
  }
});

// When the user clicks the "Check Palindrome" button
checkBtn.addEventListener("click", () => {
  // Split the cleaned input, reverse it, and join it back
  let reverseInput = filterInput.split("").reverse().join("");
  
  // Show the result text box
  infoTxt.style.display = "block";
  
  // Compare cleaned input with its reverse
  if(filterInput !== reverseInput) {
    // Not a palindrome: show 'No' message with original input
    infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
  } else {
    // Is a palindrome: show 'Yes' message with original input
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
  }
});
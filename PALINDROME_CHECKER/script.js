const txtInput = document.querySelector(".inputs input"),
      checkBtn = document.querySelector(".inputs button"),
      infoTxt = document.querySelector(".info-text");
let filterInput; 

txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  
  if(filterInput) {
    checkBtn.classList.add("active");
  } else {
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
  }
});

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  if(filterInput !== reverseInput) {
    infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
  } else {
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
  }
});

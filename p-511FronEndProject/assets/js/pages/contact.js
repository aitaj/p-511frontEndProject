"use strict";

//contact page form started

let contactForm = document.querySelector("#contact .contact-form");
let errorBox = document.querySelector("#contact .error-message");
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexNumbers = /^[0-9]*$/;
const regexLetter = /^[a-zA-Z\s]*$/;

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const email = document.querySelector("#contact #email");
  const firstname = document.querySelector("#contact #firstname");
  const lastname = document.querySelector("#contact #lastname");
  const phone = document.querySelector("#contact #phone");
  const textArea = document.querySelector("#contact textarea");
  let successCounter = 0;
  if (email.value == "" || !regexEmail.test(email.value) || email.length > 50) {
    setError(email);
  } else {
    successCounter++;
    setSuccess(email);
  }

  if (
    firstname.value == "" ||
    !regexLetter.test(firstname.value) ||
    firstname.length > 50
  ) {
    setError(firstname);
  } else {
    successCounter++;
    setSuccess(firstname);
  }
  if (
    lastname.value == "" ||
    !regexLetter.test(lastname.value) ||
    lastname.length > 50
  ) {
    setError(lastname);
  } else {
    successCounter++;
    setSuccess(lastname);
  }
  if (phone.value == "" || !regexNumbers.test(phone.value)) {
    setError(phone);
  } else {
    successCounter++;
    setSuccess(phone);
  }
  if (textArea.value == "") {
    setError(textArea);
  } else {
    successCounter++;
    setSuccess(textArea);
  }
  //checking if all area success
  if (successCounter < 5) {
    errorBox.classList.remove("d-none");
    errorBox.innerHTML =
      "One or more fields have an error. Please check and try again.";
  } else {
    errorBox.classList.remove("d-none");
    errorBox.innerHTML = "Success";
  }
  function setError(inp) {
    inp.style.borderColor = "red";
  }
  function setSuccess(inp) {
    inp.style.borderColor = "";
  }
}

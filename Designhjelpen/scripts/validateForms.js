/*
FILE NAME: scripts/validateForms.js
WRITTEN BY: Ninni Kim Nhi Hoang
WHEN: November 2017
PURPOSE: Validates the workshop and the application forms
*/

var contact = document.getElementById("contact");
var telephone = document.getElementById("telephone");
var email = document.getElementById("email");
var website = document.getElementById("website");
var submit = document.getElementsByClassName("formSubmit");

function formValidation() {
  if (contact !== null && contact.checkValidity() === false) {
    alert("Vennligst fyll inn et gyldig navn");
    contact.focus();
  } else if (telephone !== null && telephone.checkValidity() === false) {
    alert("Vennligst fyll inn et gyldig telefonnummer");
    telephone.focus();
  } else if (email !== null && email.checkValidity() === false) {
    alert("Vennligst fyll inn en gyldig e-postadresse");
    email.focus();
  } else if (website !== null && website.checkValidity() === false) {
    alert("Vennligst fyll inn en gyldig nettside (Husk http://   )");
    website.focus();
  } else {
    alert("Takk for din henvendelse! \n Vi vil kontakte deg så fort som mulig!")
  }
}

for (var i = 0; i < submit.length; i++) {
  submit[i].addEventListener('click', formValidation);
}

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
        alert("Vennligst fyll inn en gyldig nettside");
        website.focus();
    } else {
        alert("Takk for din henvendelse! \n Vi vil kontakte deg så fort som mulig!")
    }
}

console.log(submit);
console.log(contact !== null);
console.log(contact.checkValidity() === false);

for (var i = 0; i < submit.length; i++) {
    submit[i].addEventListener('click', formValidation);
}
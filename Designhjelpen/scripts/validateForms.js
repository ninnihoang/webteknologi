var contact = document.getElementById("contact");
var telephone = document.getElementById("telephone");
var email = document.getElementById("email");
var website = document.getElementById("website");
var submit = document.getElementsByClassName("buttonPink");

function formValidation() {
    if (contact.checkValidity() === false) {
        alert("Vennligst fyll inn et gyldig navn");
        contact.focus();
    } else if (telephone.checkValidity() === false) {
        alert("Vennligst fyll inn et gyldig telefonnummer");
        telephone.focus();
    } else if (email.checkValidity() === false) {
        alert("Vennligst fyll inn en gyldig e-postadresse");
        email.focus();
    } else if (website.checkValidity() === false) {
        alert("Vennligst fyll inn en gyldig nettside");
        website.focus();
    } else {
        alert("Takk for din henvendelse! \n Vi vil kontakte deg så fort som mulig!")
    }
}

console.log(submit);

for (var i = 0; i < submit.length; i++) {
    submit[i].addEventListener('click', formValidation);
}
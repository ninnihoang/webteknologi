var name,
    telephone,
    email,
    website;

contact = document.getElementById("contact");
telephone = document.getElementById("telephone");
email = document.getElementById("email");
website = document.getElementById("website");

function formValidation() {
    if (contact.checkValidity() === false) {
        alert("Vennligst fyll inn et navn");
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
    console.log(contact);
    console.log(document.getElementById("contact"));
}

document.getElementById('submit').addEventListener('click', formValidation)
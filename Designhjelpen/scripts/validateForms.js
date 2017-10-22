var name,
    telephone,
    email,
    website;

name = document.getElementById("contact");
telephone = document.getElementById("telephone");
email = document.getElementById("email");
website = document.getElementById("website");

function formValidation() {
    if (telephone.checkValidity() == false) {
        alert("Vennligst fyll inn et gyldig telefonnummer");
        telephone.focus();
    } else if (email.checkValidity() == false) {
        alert("Vennligst fyll inn en gyldig e-postadresse");
        email.focus();
    } else if (website.checkValidity() == false) {
        alert("Vennligst fyll inn en gyldig nettside");
        website.focus();
    }
}


document.getElementById('submit').addEventListener('click', function () {
    if (formValidation()) {
        window.alert('Takk for din henvendelse! \n Vi vil kontakte deg så fort som mulig via email! \n');
    }
});
window.onload = initialize;

function initialize() {
    var formSignup = document.getElementById("form-signup");
    formSignup.addEventListener("submit", validateFormSignup);
}

function validateFormSignup(event) {
    var formSignup = event.target;

    // Nombre de usuario
    var username = formSignup["username"].value;
    if (!username || username == "") {
        event.preventDefault();
        document.getElementById("error-username-required").style.display = "block";
        console.log("* Error: nombre de usuario obligatorio");
    } else {
        document.getElementById("error-username-required").style.display = "none";
    }

    // Contraseña
    var password = formSignup["password"].value;
    if (!password || password == "") {
        event.preventDefault();
        document.getElementById("error-password-required").style.display = "block";
        console.log("* Error: contraseña obligatoria");
    } else {
        document.getElementById("error-password-required").style.display = "none";
    }

    // Confirmación de Contraseña
    var passwordConfirm = formSignup["password-confirm"].value;
    if (!passwordConfirm || passwordConfirm == "") {
        event.preventDefault();
        document.getElementById("error-password-confirm-required").style.display = "block";
        console.log("* Error: confirmar contraseña");
    } else {
        document.getElementById("error-password-confirm-required").style.display = "none";
    }

    // Comparar Contraseñas
    if (password !== passwordConfirm) {
        event.preventDefault();
        document.getElementById("error-password-match-required").style.display = "block";
        console.log("* Error: las contraseñas no coinciden");
    } else {
        document.getElementById("error-password-match-required").style.display = "none";
    }
}

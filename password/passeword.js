function validarPassword(password) {
    let errores = "";

    if (password.length<8 || password.length>16) {
        errores += "La longitud de la contraseña debe estar entre 8 y 16 caracteres.\n";
    }

    let tieneMayuscula = false;
    for (let i=0; i<password.length; i++) {
        if (esMayuscula(password.charAt(i))) {
            tieneMayuscula = true;
        }
    }

    if (!tieneMayuscula) {
        errores += "La contraseña debe contener al menos una letra mayúscula.\n";
    }

    let tieneDigito = false;
    for (let i = 0; i<password.length; i++) {
        if (esDigito(password.charAt(i))) {
            tieneDigito = true;
        }
    }

    if (!tieneDigito) {
        errores += "La contraseña debe contener al menos un dígito.\n";
    }

    let tieneCaracterEspecial = false;
    for (let i = 0; i<password.length; i++) {
        if (password.charAt(i) == "*" || password.charAt(i) == "-" || password.charAt(i) == "_") {
            tieneCaracterEspecial = true;
        }
    }

    if (!tieneCaracterEspecial) {
        errores += "La contraseña debe contener al menos un carácter especial (*, -, _).\n";
    }

    return errores;
}

function ejecutarValidacion() {
    let password = recuperarTexto("txtPassword");
    let errores = validarPassword(password);

    if (errores.length == 0) {
        mostrarTexto("lblResultado","Password Correcto");
    } else {
        mostrarTexto("lblResultado","Errores de validación:\n" + errores);
    }
}
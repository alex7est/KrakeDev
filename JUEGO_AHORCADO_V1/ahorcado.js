function esMayuscula(caracter){
    let code =  caracter.charCodeAt(0);
    if(code >= 65 && code <= 90){
        return true;
    } else {
        return false;
    }
}
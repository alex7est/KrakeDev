function esMayuscula(caracter){
    let code =  caracter.charCodeAt(0);
    if(code >= 65 && code <= 90){
        return true;
    } else {
        return false;
    }
}

function esDigito(caracter){
    let code =  caracter.charCodeAt(0);
    if(code >= 48 && code <= 57){
        return true;
    } else {
        return false;
    }
}

function  esGuion(caracter){
    let code =  caracter.charCodeAt(0);
    if(code == 45){
        return true;
    } else {
        return false;
    }
}


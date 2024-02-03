function validarEstructura(placa){
    let msgError = "";
    if(placa.length<7 || placa.length>8){
        msgError += "La placa debe tener 7 u 8 caracteres";
    }else{
        if(!esMayuscula(placa.charAt(0))){
            msgError += "- El primer caracter debe ser una letra mayuscula\n";
        }
        if(!esMayuscula(placa.charAt(1))){
            msgError += "- El segundo caracter debe ser una letra mayuscula\n";
        }
        if(!esMayuscula(placa.charAt(2))){
            msgError += "- El tercer caracter debe ser una letra mayuscula\n";
        }
        if(!esGuion(placa.charAt(3))){
            msgError += "- El cuarto caracter debe ser un guion\n";
        }
        if(!esDigito(placa.charAt(4))){
            msgError += "- El quinto caracter debe ser un digito\n";
        }
        if(!esDigito(placa.charAt(5))){
            msgError += "- El sexto caracter debe ser un digito\n";
        }
        if(!esDigito(placa.charAt(6))){
            msgError += "- El septimo caracter debe ser un digito\n";
        }
        if(placa.length==8 && !esDigito(placa.charAt(7))){            
            msgError += "- El octavo caracter debe ser un digito\n"; 
        }
    }

    if(msgError==""){
        return null;
    }else{
        return msgError;
    }
}

function obtenerProvincia(placa){
    let letra = placa.charAt(0);
    let provincia;
    
    if (letra == "A") {
        provincia = "Azuay";
    } else if (letra == "B") {
        provincia = "Bolívar";
    } else if (letra == "U") {
        provincia = "Cañar";
    } else if (letra == "C") {
        provincia = "Carchi";
    } else if (letra == "X") {
        provincia = "Cotopaxi";
    } else if (letra == "H") {
        provincia = "Chimborazo";
    } else if (letra == "O") {
        provincia = "El Oro";
    } else if (letra == "E") {
        provincia = "Esmeraldas";
    } else if (letra == "W") {
        provincia = "Galápagos";
    } else if (letra == "G") {
        provincia = "Guayas";
    } else if (letra == "I") {
        provincia = "Imbabura";
    } else if (letra == "L") {
        provincia = "Loja";
    } else if (letra == "R") {
        provincia = "Los Ríos";
    } else if (letra == "M") {
        provincia = "Manabí";
    } else if (letra == "V") {
        provincia = "Morona Santiago";
    } else if (letra == "N") {
        provincia = "Napo";
    } else if (letra == "S") {
        provincia = "Pastaza";
    } else if (letra == "P") {
        provincia = "Pichincha";
    } else if (letra == "K") {
        provincia = "Sucumbíos";
    } else if (letra == "Q") {
        provincia = "Orellana";
    } else if (letra == "T") {
        provincia = "Tungurahua";
    } else if (letra == "Z") {
        provincia = "Zamora Chinchipe";
    } else if (letra == "Y") {
        provincia = "Santa Elena";
    } else {
        provincia = null;
    }
    
    return provincia;
}
  
function obtenerTipoVehiculo(placa){
    let letra = placa.charAt(1);
    let tipo;
    
    if (letra == "A" || letra == "Z") {
        tipo = "Vehiculo comercial";
    } else if (letra == "E") {
        tipo = "Vehiculo gubernamental";
    } else if (letra == "X") {
        tipo = "Vehiculo de uso oficial";
    } else if (letra == "S") {
        tipo = "Vehiculo del gobierno provincial";
    } else if (letra == "M") {
        tipo = "Vehiculo municipal";
    } else {
        tipo = "Vehiculo particular";
    }
//A todas las letras les corresponde un tipo, por tanto, no hace falta retornar null
    return tipo;
}

function obtenerDiaPicoYPlaca(placa){
    let numero = placa.charAt(placa.length-1);
    let dia;
    
    if (numero == "1" || numero == "2") {
        dia = "Lunes";
    } else if (numero == "3" || numero == "4") {
        dia = "Martes";
    } else if (numero == "5" || numero == "6") {
        dia = "Miercoles";
    } else if (numero == "7" || numero == "8") {
        dia = "Jueves";
    } else if (numero == "9" || numero == "0") {
        dia = "Viernes";
    }

    return dia;
}
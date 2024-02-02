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
ejecutarPrueba1=function(){
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    //0123456 
    //Juanito
    let caracter;
    for(let posicion=0;posicion<cadena.length; posicion++){
        caracter=cadena.charAt (posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt (posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);
    }
}

invertirCadena = function(cadena) {
    let resultado = "";
    let letra;
    for (let i=cadena.length-1; i>=0; i--) {
        letra = cadena.charAt(i);
        resultado += letra;
    }
  
    return resultado;
}
ejecutarPrueba2 = function(){
    let cadena = recuperarTexto("txtCadena");
    let cadenaInvertida = invertirCadena(cadena);
    mostrarTexto("lblInvertida",cadenaInvertida);
}

buscarLetra = function(cadena,letra){
    let letralterada;
    let existeletra=false;
    
    for(let i=0;i<cadena.length;i++){
        letralterada=cadena.charAt(i);
        if(letraTterada==letra){
            existeletra=true;
        }
    }

    return existeletra;
}

contarMayusculas = function(cadena){
    let letra;
    let contadorMayusculas=0; 
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i); 
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas)
}
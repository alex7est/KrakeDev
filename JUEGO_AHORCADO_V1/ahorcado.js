let palabraSecerta;

function esMayuscula(caracter){
    let code =  caracter.charCodeAt(0);
    if(code >= 65 && code <= 90){
        return true;
    } else {
        return false;
    }
}

function guardarPalabra(){
    let palabra = recuperarTexto("txtSecreta");
    let error = false;
    for(let i=0;i<5;i++){
        if(!esMayuscula(palabra.charAt(i))){
            error = true;
        }
    }
    if (palabra.length != 5 || error){
        alert("Ingrese una palabra de 5 letras mayusculas")
    }else{
        palabraSecerta = palabra;
        console.log(palabraSecerta);
    }
}

function mostrarLetra(letra, posicion){
    mostrarTexto("div"+posicion,letra)
}

function validar(letra){
    let letrasEncontradas = 0;
    for(let i=0;i<5;i++){
        if(palabraSecerta.charAt(i) == letra){
            mostrarLetra(letra,i);
            letrasEncontradas++;
        }
    }
}

function ingresarLetra(){
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra)){
        validar(letra);
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }
}
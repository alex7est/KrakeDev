let palabraSecerta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

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
            coincidencias++;
        }
    }
    if(letrasEncontradas == 0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
        errores++;
        mostrarAhorcado();
    }
}

function ingresarLetra(){
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra)){
        validar(letra);
        intentos++;
        if(coincidencias==5){
            alert("HA GANADO")
        }else if(intentos==10){
            alert("HA PERDIDO")
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }
}

function mostrarAhorcado(){
    mostrarImagen("ahorcadoImagen","Ahorcado_0"+errores+".png")
}
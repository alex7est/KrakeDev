function obtenerAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    return numeroAleatorio;
}

function generarElemento() {
    let numeroAleatorio = obtenerAleatorio();
    let elemento;
  
    if (numeroAleatorio == 1) {
        elemento = "piedra";
    } else if (numeroAleatorio == 2) {
        elemento = "papel";
    } else if (numeroAleatorio == 3) {
        elemento = "tijera";
    }

    return elemento;
}

function determinarGanador(eleccionJugador1, eleccionJugador2) {
    let resultado;

    if (eleccionJugador1 == eleccionJugador2) {
        resultado = 0;
    } else {
        if (
            (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
            (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
            (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")
        ) {
            resultado = 1; 
        } else {
            resultado = 2;
        }
    }

    return resultado;
}

function generarRuta(nombre){
    let ruta = "imagenes/"+nombre+".png"
    return ruta;
}

function jugar(seleccionado) {
    let eleccionComputadora = generarElemento();
    let rutaImagenComputadora = generarRuta(eleccionComputadora);
    let resultado = determinarGanador(seleccionado, eleccionComputadora);    
    
    mostrarImagen("imgComputadora",rutaImagenComputadora);

    if (resultado == 0) {
        mostrarTexto("lblResultado","EMPATE");
    } else if (resultado == 1) {
        mostrarTexto("lblResultado","GANASTE LA PARTIDA!!");
    } else if (resultado == 2) {
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!");
    }
}

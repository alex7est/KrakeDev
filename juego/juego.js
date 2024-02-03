let puntosUsuario = 0;
let puntosComputadora = 0;

function jugar(seleccionado) {
    let eleccionComputadora = generarElemento();
    let rutaImagenComputadora = generarRuta(eleccionComputadora);
    let resultado = determinarGanador(seleccionado, eleccionComputadora);    
    
    mostrarImagen("imgComputadora",rutaImagenComputadora);

    if (resultado == 0) {
        mostrarTexto("lblResultado","EMPATE");
    } else if (resultado == 1) {
        mostrarTexto("lblResultado","GANASTE LA PARTIDA!!");
        puntosUsuario++;
        mostrarTexto("lblPuntajeUsuario",puntosUsuario);
    } else if (resultado == 2) {
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!");
        puntosComputadora++;
        mostrarTexto("lblPuntajeComputadora",puntosComputadora);
    }

    if (puntosUsuario >= 5) {
        mostrarTexto("lblFinJuego","HAS GANADO EL JUEGO");
    } else if (puntosComputadora >= 5) {
        mostrarTexto("lblFinJuego","LA COMPUTADORA TE HA VENCIDO");
    }
}

function limpiar(){
    puntosUsuario = 0;
    puntosComputadora = 0;
    mostrarImagen("imgComputadora","");
    mostrarTexto("lblResultado","");
    mostrarTexto("lblPuntajeUsuario",puntosUsuario);
    mostrarTexto("lblPuntajeComputadora",puntosComputadora);
    mostrarTexto("lblFinJuego","");
}
function recuperarTexto(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}
function recuperarInt(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
 function recuperarFloat(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorCaja);
    return valorFloat;
}
function mostrarTexto(idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente. innerText = mensaje;
}
function mostrarImagen(idComponente, rutaImagen){
    let componente;
    componente = document.getElementById(idComponente) ;
    componente.src = rutaImagen;
}
function mostrarTextoEnCaja(idComponente, mensaje) {
    let componente;
    componente=document.getElementById(idComponente) ;
    componente.value = mensaje;
}
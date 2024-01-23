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

function saludar(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienveniada = "Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienveniada);
    mostrarImagen("imgSaludo","imagenes/hola-pocoyo.gif")
}

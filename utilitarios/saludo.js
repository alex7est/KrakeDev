function saludar(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienveniada = "Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienveniada);
    mostrarImagen("imgSaludo","imagenes/hola-pocoyo.gif");
    mostrarTextoEnCaja("txtNombre","");
}

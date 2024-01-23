function recuperarTexto(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

function saludar(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido")
}
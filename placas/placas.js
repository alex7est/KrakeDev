function validarPlaca(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mostrarTexto("lblValidez","ESTRUCTURA VALIDA");
        mostrarTexto("lblErrores","")
    }else{
        mostrarTexto("lblValidez","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}
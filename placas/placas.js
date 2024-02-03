function validarPlaca(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mostrarTexto("lblValidez","ESTRUCTURA VALIDA");
        mostrarTexto("lblErrores","")
        let provincia = obtenerProvincia(placa);
        if(provincia != null){
            mostrarTexto("lblProvincia","PROVINCIA: "+provincia)
        }else{
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA")
        }
    }else{
        mostrarTexto("lblValidez","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
        mostrarTexto("lblProvincia","")
    }
}
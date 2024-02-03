function validarPlaca(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        let provincia = obtenerProvincia(placa);
        let tipo = obtenerTipoVehiculo(placa);
        let dia = obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lblValidez","ESTRUCTURA VALIDA");
        mostrarTexto("lblErrores","")
        if(provincia != null){
            mostrarTexto("lblProvincia","PROVINCIA: "+provincia)
        }else{
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA")
        }
        mostrarTexto("lblTipo",tipo);
        mostrarTexto("lblPicoYPlaca","Dia de pico y placa: "+dia)
    }else{
        mostrarTexto("lblValidez","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
        mostrarTexto("lblProvincia","")
        mostrarTexto("lblTipo","")
        mostrarTexto("lblPicoYPlaca","");
    }
}
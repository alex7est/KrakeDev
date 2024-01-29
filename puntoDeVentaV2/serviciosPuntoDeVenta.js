function calcularValorDescuento(monto,porcentajeDescuento){
    let descuento = monto*(porcentajeDescuento/100);
    return descuento;
}
function calcularIva(monto){
    let iva = parseFloat((monto*(12/100)).toFixed(2));
    return iva;
}
function calcularSubtotal(precio,cantidad){
    let subtotal = precio*cantidad;
    return subtotal;
}
function calcularTotal(subtotal,descuento,iva){
    let total = parseFloat((subtotal-descuento+iva).toFixed(2));
    return total;
}
function calcularDescuentoPorVolumen(subtotal,cantidad){
    let descuento;
    let valorDescuento;
    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3  && cantidad<=5){
        descuento=0.03;
    }else if(cantidad>=6  && cantidad<=11){
        descuento=0.04;
    }else{
        descuento=0.05;
    }
    valorDescuento = subtotal*descuento;
    return valorDescuento;
}
function esProductoValido(nombreProducto){
    let todoBien = true;
    if(nombreProducto==""){
        mostrarTexto("lblError1","CAMPO OBLIGATORIO");
        todoBien = false;
    }else if(nombreProducto.length>10){
        mostrarTexto("lblError1","MAXIMO 10 CARACTERES");
        todoBien = false;
    }else{
        mostrarTexto("lblError1","")
    }
    return todoBien;
}
function esCantidadValida(cantidad){
    let todoBien = true;
    if(isNaN(cantidad)){
        mostrarTexto("lblError2","CAMPO OBLIGATORIO");
        todoBien = false;
    }else if(cantidad<0 || cantidad>100){
        mostrarTexto("lblError2","CANTIDAD INVALIDA (0-100)");
        todoBien = false;
    }else{
        mostrarTexto("lblError2","")
    }
    return todoBien;
}
function esPrecioValido(precio){
    let todoBien = true;
    if(isNaN(precio)){
        mostrarTexto("lblError3","CAMPO OBLIGATORIO");
        todoBien = false;
    }else if(precio<0 || precio>50){
        mostrarTexto("lblError3","PRECIO INVALIDO (0-50)");
        todoBien = false;
    }else{
        mostrarTexto("lblError3","")
    }
    return todoBien;
}
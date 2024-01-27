function calcularTasaInteres(ingresoAnual){
    let tasaInteres;
    if(ingresoAnual<300000){
        tasaInteres=0.16;
    }else if(ingresoAnual>=300000  && ingresoAnual<500000){
        tasaInteres=0.15;
    }else if(ingresoAnual>=500000 &&  ingresoAnual<1000000) {
        tasaInteres=0.14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres=0.13;
    }else{
        tasaInteres=0.12;
    }
    return tasaInteres;
}

function calcularCapacidadPago(edad,ingresos,egresos){
    let cuota;
    if(edad>50){
        cuota = (ingresos-egresos)*0.30;
    }else{
        cuota = (ingresos-egresos)*0.40;
    }
    return cuota;
}

function calcularDescuento(precio,cantidad){
    let descuento;
    let valorProducto;
    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3  && cantidad<=5){
        descuento=0.02;
    }else if(cantidad>=6  && cantidad<=11){
        descuento=0.03;
    }else{
        descuento=0.04;
    }
    valorProducto = precio-(precio*descuento);
    return valorProducto;
}

function determinarColesterolLDL(nivelColesterol){
    let categoria;
    if(nivelColesterol < 100){
        categoria="Óptimo (lo mejor para su salud)";
    }else if(nivelColesterol >= 100 && nivelColesterol <= 129) {
        categoria="Casi óptimo";
    }else if(nivelColesterol >= 130 && nivelColesterol <= 159 ) {
        categoria="Límite superior del rango normal";
    }else if(nivelColesterol >= 160 && nivelColesterol <= 189 ) {
        categoria="Alto";
    }else{
        categoria="Muy alto";
    }
    return categoria;
}

function validarClave(clave){
    if(clave.length>=8 && clave.length<=16){
        return true;
    }else{
        return false;
    }
}

function esMayuscula(caracter){
    let code =  caracter.charCodeAt(0);
    if(code >= 65 && code <= 90){
        return true;
    } else {
        return false;
    }
}

function  esMinuscula(caracter){
    let code =  caracter.charCodeAt(0);
    if((code >= 97 && code <= 122) || code == 130 || (code >= 160 && code <= 163)){
        return true;
    } else {
        return false;
    }
}

function esDigito(caracter){
    let code =  caracter.charCodeAt(0);
    if(code >= 48 && code <= 57){
        return true;
    } else {
        return false;
    }
}

function darPermiso(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}

function otorgarPermiso(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica>90 || notaFisica>90) && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}

function dejarSalir(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica>90 || notaFisica>90 || notaGeometria>90) && notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}
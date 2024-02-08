let notas=[];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

probarAgregar = function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
    
agregarNota = function(nota){
    notas .push(nota);
}

recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR); 
    }
}

calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio;
    for(let i=0;i<notas.length;i++){
        sumaNotas += notas[i];
    }
    promedio = sumaNotas/notas.length;
    return promedio;
}

ejecutarPromedio = function(){
    promedio = calcularPromedio().toFixed(2);
    mostrarTexto("lblPromedio",promedio);
}
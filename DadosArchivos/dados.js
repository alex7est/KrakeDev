function jugar(){
    let aleatorio = lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
}

//Crear una funcion llamada lanzarDado
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6
function lanzarDado(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado
    aleatorio=Math.random(); //entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 5
    valorDado=numeroEntero+1;//entre 1 y 6

    return valorDado;
}
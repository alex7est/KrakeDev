function aleatorio(){
    let numero = Math.ceil(Math.random()*100);
    return numero;
}5

function generarAleatorios(){
    let aleatorios = [];
    let cantidad = recuperarInt("numCantidad");
    if(cantidad>=5 && cantidad<=20){
        for(let i=0;i<cantidad;i++){
            console.log(i);
            aleatorios.push(aleatorio());
        }
    }
    mostrarResultados(aleatorios);
}

function mostrarResultados(arregloNumeros){
    let cmpTabla = document.getElementById("idTabla");
    let tabla = "<table><tr><th>NUMEROS ALEATORIOS</th></tr>";
    for(let i=0;i<arregloNumeros.length;i++){
        tabla += "<tr><td>"+arregloNumeros[i]+"</td></tr>";
    }
    tabla += "<table/>";
    cmpTabla.innerHTML = tabla;
}
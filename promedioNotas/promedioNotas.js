function calcularPromedioNotas(){
    let n1 = recuperarFlotante("txtNota1");
    let n2 = recuperarFlotante("txtNota2");
    let n3 = recuperarFlotante("txtNota3");
    let promedio = calcularPromedio(n1,n2,n3).toFixed(2);
    cambiarTexto("lblPromedio","Promedio: "+promedio);

    if(promedio>=7){
        cambiarImagen("imgGif","gifs/funny-celebrate-56.gif");
    }else{
        cambiarImagen("imgGif","gifs/giphy.gif");
    }
}
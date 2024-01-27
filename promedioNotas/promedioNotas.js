function calcularPromedioNotas(){
    let n1 = recuperarFlotante("txtNota1");
    let n2 = recuperarFlotante("txtNota2");
    let n3 = recuperarFlotante("txtNota3");
    let promedio = calcularPromedio(n1,n2,n3).toFixed(2);
    cambiarTexto("lblPromedio","Promedio: "+promedio);

    if(promedio<5 && promedio>0){
        cambiarImagen("imgGif","gifs/giphy.gif");
        cambiarTexto("lblMensaje","REPROBADO");
    }else if(promedio>=5 && promedio<=8){
        cambiarImagen("imgGif","gifs/good-job-gif-1.gif");
        cambiarTexto("lblMensaje","BUEN TRABAJO");
    }else if(promedio>8 && promedio<=10){
        cambiarImagen("imgGif","gifs/funny-celebrate-56.gif");
        cambiarTexto("lblMensaje","EXCELENTE");
    }else{
        cambiarImagen("imgGif","gifs/INCORRECTO.gif");
        cambiarTexto("lblMensaje","DATOS INCORRECTOS");
    }
}
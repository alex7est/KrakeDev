let estudiantes = [
    {nombre:"Edwin", apellido:"Erazo", nota1:8.4, nota2:9.5, nota3:8.7, total:26.6, promedio:8.7},
    {nombre:"Maritza", apellido:"Rosero", nota1:5.4, nota2:8.5, nota3:9.7, total:23.6, promedio:9.7},
    {nombre:"Esteban", apellido:"Guaranda", nota1:9.4, nota2:10, nota3:9, total:28.4, promedio:9},
    {nombre:"Ricardo", apellido:"Batista", nota1:6.4, nota2:9.5, nota3:8.9, total:24.8, promedio:8.9}
]

function calcularTotal(n1,n2,n3){
    let suma = n1+n2+n3;
    return suma;
}

function calcularPromedio(p1,p2,p3){
    let promedio = (p1+p2+p3)/3;
    return promedio;
}

function calcular(){
    let error = false;
    let nota1 = recuperarFloat("txtNota1")
    let nota2 = recuperarFloat("txtNota2")
    let nota3 = recuperarFloat("txtNota3")
    let nombre = recuperarTexto("txtNombre")
    let msgError = ""

    if(nombre==""){
        msgError = "Campo Obligatorio"
        error = true
    }else if(nombre.length < 10){
        msgError = "El nombre debe tener almenos 10 caracteres"
        error = true
    }

    let total = calcularTotal(nota1,nota2,nota3)
    mostrarTexto("lblTotal",total.toFixed(2))
    
    let promedio = calcularPromedio(nota1,nota2,nota3)
    mostrarTexto("lblPromedio",promedio.toFixed(2))
    if(error == false){
        habilitarComponente("btnGuardar")
        mostrarTexto("error","")
    }else{
        mostrarTexto("error",msgError)
        deshabilitarComponente("btnGuardar")
    }
}

function guardar(){
    let nombre = recuperarTexto("txtNombre")
    let apellido = recuperarTexto("txtApellido")
    let nota1 = recuperarFloat("txtNota1")
    let nota2 = recuperarFloat("txtNota2")
    let nota3 = recuperarFloat("txtNota3")

    let estudiante = {}
    estudiante.nombre = nombre
    estudiante.apellido = apellido
    estudiante.nota1 = nota1
    estudiante.nota2 = nota2
    estudiante.nota3 = nota3
    estudiante.total = calcularTotal(nota1,nota2,nota3)
    estudiante.promedio = calcularPromedio(nota1,nota2,nota3)

    estudiantes.push(estudiante);
    mostrarEstudiantes();
    alert("Notas guardadas con exito")

    recuperarTexto("txtNombre","")
    mostrarTexto("txtApellido","")
    mostrarTexto("txtNota1","")
    mostrarTexto("txtNota2","")
    mostrarTexto("txtNota3","")
}

function mostrarEstudiantes(){
    let cmpTabla=document.getElementById("tabla")
    let contenidoTabla="<table><tr><th>NOMBRE</th><th>APELLIDO</th><th>NOTA 1</th><th>NOTA 2</th><th>NOTA 3</th><th>TOTAL</th><th>PROMEDIO</th></tr>"; 
    let estudiante;

    for(let i=0;i<estudiantes.length;i++){ 
        estudiante=estudiantes[i];
        contenidoTabla+="<tr><td>"+estudiante.nombre+"</td><td>"+estudiante.apellido+"</td><td>"+estudiante.nota1.toFixed(2)+"</td><td>"+estudiante.nota2.toFixed(2)+"</td><td>"+estudiante.nota3.toFixed(2)+"</td><td>"+estudiante.total.toFixed(2)+"</td><td>"+estudiante.promedio.toFixed(2)+"</td></tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
    deshabilitarComponente("btnGuardar")
}


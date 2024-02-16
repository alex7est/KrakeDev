let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0112345678",nombre:"María",apellido:"Martínez",sueldo: 700.0}
]

function mostrarOpcionEmpleado(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados()
}

function mostrarOpcionRol(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

function mostrarOpcionResumen(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

function mostrarEmpleados(){
    let cmpTabla=document.getElementById("tablaEmpleados"); 
    let contenidoTabla="<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>"; 
    let empleado;

    for(let i=0;i<empleados.length;i++){ 
        empleado=empleados[i];
        contenidoTabla+="<tr><td>"+empleado.cedula+"</td><td>"+empleado.nombre+"</td><td>"+empleado.apellido+"</td><td>"+empleado.sueldo+"</td></tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}
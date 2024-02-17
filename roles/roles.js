let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0112345678",nombre:"María",apellido:"Martínez",sueldo: 700.0}
]
let esNuevo = false;

function mostrarOpcionEmpleado(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados()
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
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

function ejecutarNuevo(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

function buscarEmpleado(cedula){
    let empleado;
    let EmpleadoEncontrado=null;
    for (let i=0;i<empleados.length;i++){
        empleado=empleados[i];
        if(empleado.cedula == cedula){
            EmpleadoEncontrado=empleado;
            break;
        }
    }
    return EmpleadoEncontrado;
}

function agregarEmpleado(empleado){
    let resultado=buscarEmpleado(empleado.cedula); 
    if(resultado==null){ 
        empleados.push(empleado);
        return true;
    }else{ 
        return false;
    }
}

function guardar(){
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    let errorCedula = false;
    if(cedula.length!=10){
        errorCedula = true;
    }else{
        for (let i = 0; i < cedula.length; i++) {
            if (cedula[i] < '0' || cedula[i] > '9') {
                errorCedula = true;
            }
        }
    }
    if(errorCedula){
        mostrarTexto("lblErrorCedula","Debe tener exactamente 10 digitos");
    }else{
        mostrarTexto("lblErrorCedula","");
    }
    
    let errorNombre = false;
    if(nombre.length<3 || nombre!=nombre.toUpperCase()){
        errorNombre = true;
    }
    if(errorNombre){
        mostrarTexto("lblErrorNombre","Minimo 3 letras, todas mayusculas");
    }else{
        mostrarTexto("lblErrorNombre","");
    }

    let errorApellido = false;
    if(apellido.length<3 || apellido!=apellido.toUpperCase()){
        errorApellido = true;
    }
    if(errorApellido){
        mostrarTexto("lblErrorApellido","Minimo 3 letras, todas mayusculas");
    }else{
        mostrarTexto("lblErrorApellido","");
    }

    let errorSueldo = false;
    if(sueldo<400 || sueldo>5000 || isNaN(sueldo)){
        errorSueldo = true;
    }
    if(errorSueldo){
        mostrarTexto("lblErrorSueldo","Un numero entre 400.00 y 5000.00");
    }else{
        mostrarTexto("lblErrorSueldo","");
    }

    if(!errorCedula && !errorNombre && !errorApellido && !errorSueldo){
        if(esNuevo){
            let empleado = {}
            empleado.cedula = cedula;
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            let guardado = agregarEmpleado(empleado);
            if(guardado){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
            }else{
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA: "+empleado.cedula);
            }
        }
    }
}


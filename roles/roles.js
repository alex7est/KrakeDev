let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0112345678",nombre:"María",apellido:"Martínez",sueldo: 700.0}
]
let roles = [];
let esNuevo = false;

function mostrarOpcionEmpleado(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados()
    deshabilitarCmpsEmpleado();
}

function mostrarOpcionRol(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
}

function mostrarOpcionResumen(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles();
    mostrarTotales();
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
                deshabilitarCmpsEmpleado();
                esNuevo = false;
            }else{
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA: "+empleado.cedula);
            }
        }else{
            let empleado = buscarEmpleado(cedula);
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitarCmpsEmpleado();
        }
    }

    if(!esNuevo){
        let empleado = buscarEmpleado(cedula);

    }
}

function deshabilitarCmpsEmpleado() {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

function ejecutarBusqueda(){
    let cedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(cedula);

    if(empleado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",empleado.cedula)
        mostrarTextoEnCaja("txtNombre",empleado.nombre)
        mostrarTextoEnCaja("txtApellido",empleado.apellido)
        mostrarTextoEnCaja("txtSueldo",empleado.sueldo)
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        deshabilitarComponente("txtCedula");
    }
}

function limpiar(){
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtApellido","")
    mostrarTextoEnCaja("txtSueldo","")
    mostrarTextoEnCaja("txtBusquedaCedula","")
    deshabilitarCmpsEmpleado();
    esNuevo=false;
}

function buscarPorRol(){
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(cedula);

    if(empleado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTexto("infoCedula",empleado.cedula);
        mostrarTexto("infoNombre",empleado.nombre+" "+empleado.apellido);
        mostrarTexto("infoSueldo",empleado.sueldo);
    }
}

function calcularAporteEmpleado(sueldo){
    return sueldo*0.0945;
}

function calcularValorAPagar(sueldo,aporte,descuento){
    return sueldo-aporte-descuento;
}
function calcularRol(){
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");

    let errorDescuento = false;
    if(descuento<0 || descuento>sueldo || isNaN(descuento)){
        errorDescuento = true;
    }
    if(errorDescuento){
        mostrarTexto("lblErrorDescuentos","Una cantidad entre 0.00 y "+sueldo);
        deshabilitarComponente("btnGuardarRol");
    }else{
        mostrarTexto("lblErrorDescuentos","");
        habilitarComponente("btnGuardarRol");
    }

    let aporte = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS",aporte);

    let pago = calcularValorAPagar(sueldo,aporte,descuento);
    mostrarTexto("infoPago",pago);
}

function buscarRol(cedula){
    let rol;
    let rolEncontrado=null;
    for (let i=0;i<roles.length;i++){
        rol=roles[i];
        if(rol.cedula == cedula){
            rolEncontrado=rol;
            break;
        }
    }
    return rolEncontrado;
}

function agregarRol(rol){
    let resultado = buscarRol(rol.cedula); 
    if(resultado==null){ 
        roles.push(rol);
        alert("ROL AGREGADO CORRECTAMENTE");
    }else{ 
        alert("YA EXISTE UN ROL CON CEDULA: "+rol.cedula);
    }
}

function calcularAporteEmpleador(sueldo){
    return parseFloat((sueldo*0.1115).toFixed(2));
}

function guardarRol(){
    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let valorAPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");
    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    let rol = {}
    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = sueldo;
    rol.valorAPagar = valorAPagar;
    rol.aporteEmpleado = aporteEmpleado;
    rol.aporteEmpleador = aporteEmpleador;

    agregarRol(rol);
    alert("ROL GUARDADO CORRECTAMENTE")
}

function mostrarRoles(){
    let cmpTabla=document.getElementById("tablaResumen"); 
    let contenidoTabla="<table><tr><th>CEDULA</th><th>NOMBRE</th><th>VALOR A PAGAR</th><th>APORTE EMPLEADO</th><th>APORTE EMPLEADOR</th></tr>"; 
    let rol;

    for(let i=0;i<roles.length;i++){ 
        rol=roles[i];
        contenidoTabla+="<tr><td>"+rol.cedula+"</td><td>"+rol.nombre+"</td><td>"+rol.valorAPagar+"</td><td>"+rol.aporteEmpleado+"</td><td>"+rol.aporteEmpleador+"</td></tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

function mostrarTotales(){
    let totalEmpleado = 0.0;
    let totalEmpleador = 0.0;
    let totalAPagar = 0.0;

    for(let i=0;i<roles.length;i++){
        totalEmpleado+=roles[i].aporteEmpleado;
        totalEmpleador+=roles[i].aporteEmpleador;
        totalAPagar+=roles[i].valorAPagar;
    }

    mostrarTexto("infoTotalPago",totalAPagar.toFixed(2));
    mostrarTexto("infoAporteEmpresa",totalEmpleador.toFixed(2));
    mostrarTexto("infoAporteEmpleado",totalEmpleado.toFixed(2));

    let totalNomina = totalAPagar+totalEmpleado+totalEmpleador;
    mostrarTexto("infoTotalNomina",totalNomina.toFixed(2));
}
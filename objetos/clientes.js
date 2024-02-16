let clientes=[
    {cedula: "123123" ,nombre: "Juan", edad:20},
    {cedula: "222222" ,nombre: "Mario" ,edad:50},
    {cedula: "333333", nombre: "Pepe" ,edad:22},
]

function mostrarClientes(){ 
    let cmpTabla=document.getElementById("tablaClientes"); 
    let contenidoTabla="<table><tr>"+ 
    "<th>CEDULA</th>"+ 
    "<th>NOMBRE</th>"+ 
    "<th>EDAD</th>"+ 
    "</tr>"; 
    
    let elementoCliente; 
    for(let i=0;i<clientes.length;i++){ 
        elementoCliente=clientes[i];
        contenidoTabla+= 
        "<tr><td>"+elementoCliente.cedula+"</td>" 
        +"<td>"+elementoCliente.nombre+"</td>" 
        +"<td>"+elementoCliente.edad+"</td>" 
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

function buscarCliente(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for (let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

function agregarCliente(cliente){
    let resultado=buscarCliente(cliente.cedula); 
    if(resultado==null){ 
        clientes.push(cliente);
        alert("cliente agregado");
        mostrarClientes();
    }else{ 
        alert("ya existe el cliente con la cedula: "+cliente.cedula);
    }
}

function crearCliente(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let nuevoCliente ={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    
    agregarCliente(nuevoCliente);
}

function ejecutarBusqueda(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
    let cliente=buscarCliente(valorCedula);
    
    if(cliente==null){
        alert ("cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}

function modificarCliente(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}

function guardarCambios(){
    let valorCedula=recuperarTexto("txtCedula"); 
    let valorNombre=recuperarTexto("txtNombre"); 
    let valorEdad=recuperarFloat("txtEdad"); 
    let datosCliente={}; 
    datosCliente.cedula=valorCedula; 
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad; 
    modificarCliente(datosCliente); 
    mostrarClientes(); 
}
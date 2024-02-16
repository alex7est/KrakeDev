function probarAtributos(){
    let persona = {
        nombre : "Pedro",
        apellido : "Morales",
        edad : 24,
        estaVivo: true
    }
    console. log(persona.nombre) ;
    console. log(persona.edad); 
    if(!persona.estaVivo){ 
        console.log("no esta vivo"); 
    }else{
        console.log("si esta vivo"); 
    }
}

function crearProducto(){
    let producto1 = {
        nombre: "lapiz",
        precio: 0.50,
        stock: 100
    }
    let producto2 = {
        nombre: "borrador",
        precio: 0.30,
        stock: 200
    }
    console.log(producto1.nombre)
    console.log(producto2.precio)
    if(producto2.stock > producto1.stock){
        console.log("Producto 2 tiene mayor stock")
    }
}

function modificarAtributos(){
    let cuenta={
    numero: "5323423423",
    saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

function crearCliente(){
    let cliente={ 
        cedula: "171231", 
        nombre: "Juan" 
    }     
    let clientel={};
    clientel.nombre="Romeo" ; 
    clientel.apellido="Salcedo"; 
    clientel.cedula="123123";
}

function incrementarSaldo(cuenta,monto){ 
    cuenta.saldo+=monto; 
}

function determinarMayor(personal, persona2){ 
    if(personal.edad>persona2.edad){ 
        return personal;
    }else if(persona2.edad>personal.edad){ 
        return persona2;    
    }else{ 
        return null; 
    } 
}

function probarIncrementoSaldo(){
    let cta={numero:"23424",saldo:34.0}
    incrementarSaldo(cta, 100);
    console.log(cta.saldo)
}

function probarDeterminarMayor(){ 
    let perl={nombre:"Daniel",edad:45}; 
    let per2={nombre:"Luisa",edad:48}; 
    let mayor; 
    mayor=determinarMayor (perl, per2); 
    
    if(mayor != null){ 
        console.log("El mayor es: "+mayor.nombre);
    } 
}
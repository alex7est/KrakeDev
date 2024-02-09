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
/* PRE ENTREGA PROYECTO FINAL */

//Cliente

class Cliente {
    constructor(nombre, direccion, departamento, observacion, telefono, email){
        this.nombre = nombre;
        this.direccion = direccion;
        this.departamento = departamento;
        this.observacion = observacion;
        this.telefono = telefono;
        this.email = email;
    }
}

const clienteUno = new Cliente("Marcos", "Francia 4260, Florida Oeste, Provincia de Buenos Aires", "PH fondo", "Ninguna", 5491156355415, "marcos@gmail.com");
const clienteDos = new Cliente("Vanesa", "Leloir 549, Marcos Paz, Provincia de Buenos Aires", "Casa", "No funciona timbre", 5492525321, "vanesa@gmail.com");

const arrayCliente = [clienteUno, clienteDos];

console.log(arrayCliente);

// PRODUCTOS


class Producto {
   constructor(prenda, talle, color, precio, url ){
       this.prenda = prenda;
       this.talle = talle;
       this.color = color;
       this.precio = precio,
       this.url = url;
   }
}

const buzoAzul = new Producto("Buzo1", "S", "Azul", 16000, "../img/productos/buzos/buzo-azul.jpg");
const buzoNegro = new Producto("Buzo2", "S", "Azul", 16000, "../img/productos/buzos/buzo-negro.jpg");
const buzoSalmon = new Producto("Buzo3", "S", "Salmon", 16000, "../img/productos/buzos/buzo-salmon.jpg");
const buzoVioleta = new Producto("Buzo4", "M", "Violeta", 18000, "../img/productos/buzos/buzo-violeta.jpg");

const producto = [buzoAzul, buzoVioleta, buzoNegro, buzoSalmon];


//Carrito de compra

const arrayCarrito = [];

//Función Bienvenidos y Opciones:

 function menu (){
     alert("Bienvenido a Tienda de Ropa");
     let opcion = parseInt(prompt("Ingrese una opción: \n1) Nuestra tienda.\n2) Consultar sus datos de cliente\n3)Salir."));
     return opcion;
   
 }


const contenedorProductos = document.getElementById("contenedorProductos");

function cargarProductos(){
    producto.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `
                        <img src= "${producto.url}" alt="${producto.titulo}">
                        <h2>${producto.prenda}</h2>
                        <p>Talle: ${producto.talle}</p>
                        <p>Color: ${producto.color}</p>
                        <h3>Precio: ${producto.precio}</h3>
                        <button class="producto-agregar">Agregar al carrito</button>
                         `;
            contenedorProductos.append(div);
    })
}

cargarProductos();

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll()
}



 function consultaCliente() {
     let telefono = parseInt(prompt("Ingrese su Número de telefóno: \n Agregando '549', ejemplo 5491156355415"));
     let cliente = arrayCliente.find(cliente => cliente.telefono === telefono);
     console.log(cliente); 
 }

 function salir(){
     alert("Gracias por visitarnos");
 }

 let opcion = menu();
 switch(opcion){
     case 1:
         compraProducto();
         break;
     case 2:
         consultaCliente();
         break;
     case 3:
         salir();
         break;
     default:
     alert("Opción incorrecta");
     break;
 }


/* CLIENTES */

class Cliente {
    constructor(nombre, direccion, telefono, email){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
}

const clienteUno = new Cliente("Marcos", "Francia 4260, Florida Oeste, Provincia de Buenos Aires", 5491156355415, "marcos@gmail.com");
const clienteDos = new Cliente("Vanesa", "Leloir 549, Marcos Paz, Provincia de Buenos Aires", 5492525321, "vanesa@gmail.com");

const arrayClientes = [clienteUno, clienteDos];


/* PRODUCTOS */

class Producto {
    constructor(nombre, precio, id){
        this.nombre = nombre;
        this.talle = precio;
        this.id = id;
    }
}

const buzoUno = new Producto("Buzo1", 12400,);
const buzoDos = new Producto("Buzo2", 13000,);
const buzoTres = new Producto("Buzo3", 12000,);
const buzoCuatro = new Producto("Buzo4", 13100,);

const arrayProductos = [buzoUno, buzoDos, buzoTres, buzoCuatro];

//Carrito

arrayCarrito = [];

console.log(arrayProductos);



function menu (){
    alert("Bienvenidos a Tienda de Ropa.");
    const opcion = parseInt(prompt("Ingrese una opción: \n1) Nuestra tienda.\n2) Consultar sus datos de cliente\n3)Salir."));
    return opcion;
}

function cargarProductos(){
    const todosLosProductos = arrayProductos.map((producto) => producto.nombre + " " + producto.precio + "$");
    const producto = parseInt(prompt(`Escoja un producto por su nombre:\n\nEjemplo: Buzo1 \n\n${todosLosProductos.join("\n")}`));
    return producto;
    
    
    
    // const carrito = arrayProductos.find(producto => producto.nombre === nombre );
    // alert(`El producto escogido es ${producto.nombre} y su precio es ${producto.precio}`);

}

let opcion = menu();
switch(opcion){
    case 1:
        cargarProductos();
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

let producto = cargarProductos();
switch(producto){
    case 1:
        `El precio de ${producto.nombre} es de ${producto.precio}`;
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
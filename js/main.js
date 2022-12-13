
class Cliente {
    constructor(nombre, direccion, telefono, mail){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.mail = mail;
    }
}

const clienteUno = new Cliente("Marcos", "Francia 4260, Florida Oeste, Provincia de Buenos Aires", 5491156355415, "marcos@gmail.com");
const clienteDos = new Cliente("Vanesa", "Leloir 549, Marcos Paz, Provincia de Buenos Aires", 5492525321, "vanesa@gmail.com");

const arrayClientes = [clienteUno, clienteDos];

/* PRODUCTOS */

class Producto {
    constructor(nombre, precio, id){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}

const buzoUno = new Producto("Buzo1", 12400, 1);
const buzoDos = new Producto("Buzo2", 13000, 2);
const buzoTres = new Producto("Buzo3", 12000, 3);
const buzoCuatro = new Producto("Buzo4", 13100, 4);

const articulos = [buzoUno, buzoDos, buzoTres, buzoCuatro];

const arrayProductos = [];

function menu (){
    alert("Bienvenidos a Tienda de Ropa.");
    const opcion = parseInt(prompt("Ingrese una opción: \n1) Nuestra tienda.\n2)Finalizar Compra\n3)Salir."));
    return opcion;
}


function carrito () {
    let usuarioCompra = parseInt(prompt("Escriba el id del producto que desea adquirir: "));
    let productoElegido = articulos.find (el => el.id === usuarioCompra);
    console.log(productoElegido);
    if(productoElegido === undefined){
        alert("Ingrese un numero valido por favor");
        carrito();
    }
    arrayProductos.push(productoElegido.precio)
}

function finalizarCompra () {
    let totalPrecio = arrayProductos.reduce((acumulador, producto) => acumulador + producto, 0);
    alert("El total de su compra es " + totalPrecio + " ETH")
    alert("Gracias por elegir Mi-Tienda para adquirir NFT's =)")
}

let opcion = menu();
switch(opcion){
    case 1:
        carrito();
        break;
    case 2:
        finalizarCompra();
        break;
    case 3:
        salir();
        break;
    default:
    alert("Opción incorrecta");
    break;
}


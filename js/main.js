/* TIENDA SHOP */

//1) Mostrar productos en el HTML de forma dinamica.
//2) Agregar productos en el carrito.
//3) Evitar la carga de productos repetidos en el carrito.
//4) Mostrar el carrito en el HTML de forma dinamica.
//5) Eliminar productos del carrito.
//6) Calcular el total de la compra.
//7) Vaciar carrito.
//8) Guardar el carrito en el localStorage.

/////////////////////////////////////

class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const productoUno = new Producto(1, "Buzo Azul", 14000, "../img/productos/buzos/buzo-azul.jpg");
const productoDos = new Producto(2, "Buzo Marrón", 14500, "../img/productos/buzos/buzo-marron.jpg");
const productoTres = new Producto(3, "Buzo Negro", 15000, "../img/productos/buzos/buzo-negro.jpg");
const productoCuatro = new Producto(4, "Puffer Blanco", 14000, "../img/productos/puffer/puffer-blanco.jpg");
const productoCinco = new Producto(5, "Puffer Rosa", 14500, "../img/productos/puffer/puffer-rosa.jpg");
const productoSeis = new Producto(6, "Puffer Violeta", 15000, "../img/productos/puffer/puffer-violeta.jpg");

const productos = [productoUno, productoDos, productoTres, productoCuatro, productoCinco, productoSeis];

//Creamos el Array del Carrito

let carrito = [];

/* localStorage */

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//Modificamos el DOM mostrando los productos:

const contenedorProductos = document.getElementById("contenedorProductos");

//Creamos una funcion para mostrar los productos:

const mostrarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("productos");
        card.innerHTML = `
                <div>
                <div>
                    <img src="${producto.img}" class="productos_img" alt="${producto.nombre}">
                    <div>
                        <h2>${producto.nombre}</h2>
                        <h3> $${producto.precio} </h3>
                        <button class="btn" id="boton ${producto.id}"> Agregar al Carrito </button>
                    </div>
                </div>
                </div>
                        `
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito:
        const boton = document.getElementById(`boton ${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })

    })
}

mostrarProductos();

//Creamos la funcion agregar al carrito:

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    //Trabajamos con el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}

//Mostrar el carrito de compras

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

//Funcion para mostrar el carrito:

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("productos");
        card.innerHTML = `
                <div>
                <div>
                    <img src="${producto.img}" class="productos_img" alt="${producto.nombre}">
                    <div>
                        <h2>${producto.nombre}</h2>
                        <h3> $${producto.precio} </h3>
                        <h3> Cantidad ${producto.cantidad} </h3>
                        <button class="btn" id="eliminar ${producto.id}">Eliminar producto</button>
                    </div>
                </div>
                </div>
                        `

        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito:

        const boton = document.getElementById(`eliminar ${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

//Funcion que elimina el producto del carrito:

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    //Trabajamos con el localStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vaciamos todo el carrito de compras.

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();

})

//Funcion que elimina todo del carrito: si lo hacen con const no funciona

function eliminarTodoElCarrito() {
    carrito = [];
    mostrarCarrito();

    //localStorage:
    localStorage.clear();
}

//Mostrar el total de la comprar

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
        //+= es igual a poner que total compra = totalCompra + producto.precio * producto.cantidad
    })
    total.innerHTML = `Total: $${totalCompra}`;
}
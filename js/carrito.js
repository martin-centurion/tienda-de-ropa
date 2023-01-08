const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
console.log(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".contenedor__carrito-productos-item-eliminar")

 
function cargarProductosCarrito() {
    if(productosEnCarrito){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                    <div class="contenedor__carrito-productos-item">
                        <img class="contenedor__carrito-productos-item-img" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="contenedor__carrito-productos-item-titulo">
                            <small>Titulo</small>
                            <h3>${producto.titulo}</h3>
                        </div>
                        <div class="contenedor__carrito-productos-item-cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="contenedor__carrito-productos-item-precio">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="contenedor__carrito-productos-item-subtotal">
                        <small>Sub Total</small>
                        <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="contenedor__carrito-productos-item-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
                    </div>
            `;

            contenedorCarritoProductos.append(div);

         })
        

    } else {

        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");

    }


    actualizarBotonesEliminar();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".contenedor__carrito-productos-item-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); 
}

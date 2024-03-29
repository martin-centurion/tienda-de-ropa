let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".contenedor__carrito-productos-item-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#comprar");
const cantidadLS = document.querySelector("#cantidad");

function actualizarCantidadLS() {
    let nuevaCantidadLS = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidadLS.innerText = nuevaCantidadLS;

    localStorage.setItem("cantidad-productos", JSON.stringify(nuevaCantidadLS));
};


function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("contenedor__carrito");
            div.innerHTML = `
                    <div class="contenedor__carrito-productos-item">
                        <button class="carrito-producto-eliminar contenedor__carrito-productos-item-eliminar" id="${producto.id}"><i class="bi bi-x-circle"></i></button>
                        <img class="contenedor__carrito-productos-item-img" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="contenedor__carrito-productos-item-titulo">
                            <small>Producto</small>
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
                    </div>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    actualizarBotonesEliminar();
    actualizarTotal();
	
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

}

cargarProductosCarrito();

function actualizarBotonesEliminar() {


    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
        
    });
}

function eliminarDelCarrito(e) {
    Toastify({
        text: `Producto Eliminado`,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "rgb(39, 39, 39)",
          color: "rgb(255, 255, 255)",
          textTransform: "uppercase",
          fontSize: ".75rem",
        },
        offset: {
            x: "1.5rem",
            y: "1.5rem" 
          },
        onClick: function(){}
      }).showToast();
      
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();
    actualizarCantidadLS();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html:`Se van a borrar ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
            actualizarCantidadLS();
        }
      })

    
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    Swal.fire(
        'Gracias por su compra!',
        'Tienda de Ropa',
        'success'
      )

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    actualizarCantidadLS();
    
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}



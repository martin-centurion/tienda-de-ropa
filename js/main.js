
const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorProductosListado = "../json/productos.json";
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const cantidad = document.querySelector("#cantidad");
let productos = [];

fetch(contenedorProductosListado)
    .then(response => response.json())
    .then(datos => {
        /* productos = datos;
        mostrarProductos(datos);
        console.log(datos);

    }) */

    productos = datos;
    mostrarProductos(datos);
    console.log(datos);
})
    .catch(error => console.log(error))
    .finally(()=> console.log("Carga de productos finalizada"));
    
function mostrarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("tienda");
        div.innerHTML = `
                        <div class="tienda__productos">
                            <div class="tienda__productos-content">
                                <div class="tienda__productos-content-img">
                                    <div>
                                        <img src="${producto.imagen}" alt="${producto.titulo}">
                                    </div>
                                    <div>
                                        <h2>${producto.titulo}</h2>
                                        <p>$${producto.precio}</p>
                                        <a class="btn producto-agregar" id="${producto.id}"><i class="bi bi-cart2"></i>Agregar al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
        
        contenedorProductos.append(div);
        
    })
    actualizarBotonesAgregar();
    
};


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e)=> {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id != "todos") {
            const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerHTML = productosCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            mostrarProductos(productosBoton);
        } else {
            tituloPrincipal.innerHTML = "Todos los Productos";
            mostrarProductos(productos);
        }
        
    })
});

function actualizarBotonesAgregar(botonesAgregar) {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
        
    });
};

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarCantidad();

} else {
    productosEnCarrito = [];
    
};


function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
        

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        
        
    }   

    actualizarCantidad();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};


function actualizarCantidad() {
    let nuevaCantidad = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidad.innerText = nuevaCantidad;

    localStorage.setItem("cantidad-productos", (nuevaCantidad));
};
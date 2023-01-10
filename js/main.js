//Productos
const productos = [
    // Buzos
    {
        id: "buzo-azul",
        titulo: "Buzo Azul",
        imagen: "../img/productos/buzos/buzo-azul.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 5000
    },
    {
        id: "buzo-marron",
        titulo: "Buzo marron",
        imagen: "../img/productos/buzos/buzo-marron.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 5500
    },
    {
        id: "buzo-negro",
        titulo: "Buzo Negro",
        imagen: "../img/productos/buzos/buzo-negro.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 5000
    },
    {
        id: "buzo-rojo-estampado",
        titulo: "Buzo Rojo Estampado",
        imagen: "../img/productos/buzos/buzo-rojo-estampado.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 5000
    },
    {
        id: "buzo-salmon",
        titulo: "Buzo salmon",
        imagen: "../img/productos/buzos/buzo-salmon.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 5000
    },
    {
        id: "buzo-violeta",
        titulo: "Buzo violeta",
        imagen: "../img/productos/buzos/buzo-violeta.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 5000
    },
    {
        id: "buzo-verde-oscuro",
        titulo: "Buzo Verde Oscuro",
        imagen: "../img/productos/buzos/buzo-verde-oscuro.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 5000
    },
    {
        id: "camisaco-blanco-negro",
        titulo: "Camisaco Negro y Blanco",
        imagen: "../img/productos/camisacos/camisaco-blanco-negro.jpg",
        categoria: {
            nombre: "Camisacos",
            id: "camisacos"
        },
        precio: 9000
    },
    {
        id: "camisaco-pastel-combinado",
        titulo: "Camisaco Pastel",
        imagen: "../img/productos/camisacos/camisaco-pastel-combinado.jpg",
        categoria: {
            nombre: "Camisacos",
            id: "camisacos"
        },
        precio: 9000
    },
    {
        id: "camisaco-pastel-oscuro",
        titulo: "Camisaco Pastel Oscuro",
        imagen: "../img/productos/camisacos/camisaco-pastel-oscuro.jpg",
        categoria: {
            nombre: "Camisacos",
            id: "camisacos"
        },
        precio: 9000
    },
    {
        id: "camisaco-rojo-negro",
        titulo: "Camisaco Rojo y Negro",
        imagen: "../img/productos/camisacos/camisaco-rojo-negro.jpg",
        categoria: {
            nombre: "Camisacos",
            id: "camisacos"
        },
        precio: 9000
    },

];

const contenedorProductos = document.getElementById("contenedorProductos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const cantidad = document.querySelector("#cantidad");

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
}

mostrarProductos(productos);

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

function actualizarBotonesAgregar() {
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
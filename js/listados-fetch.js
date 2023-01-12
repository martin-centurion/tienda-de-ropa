const listado = document.getElementById("listado");
const listadoProductos = "../json/productos.json";

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(producto => {
            
            const div = document.createElement("div");
            div.classList.add("tienda");
            listado.innerHTML += `
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
            `
        })
    })
    .catch(error => console.log(error))
    .finally(()=> console.log("Carga finalizada"));

    console.log(producto);

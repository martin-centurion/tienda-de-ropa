let nuevaCantidad = localStorage.getItem("cantidad-productos");
nuevaCantidad = JSON.parse(nuevaCantidad);


const actualizarCantidad = document.querySelector("#cantidad");
nuevaCantidad.cantidad = actualizarCantidad;
actualizarCantidad.innerText = nuevaCantidad;






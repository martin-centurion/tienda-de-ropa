//Clase 8 - DOM
/* PLANTILLAS LITERALES */
//Hasta el momento si queriamos concatenar datos haciamos esto:
let cliente = "Ricardo Fort";
let montoCompra = 10000;

let mensaje = cliente + " realizo una compra por $" + montoCompra;

console.log(mensaje);

//`` backsticks

let mensajePlantillaLiteral = `El cliente ${cliente} realizó la compra por $${montoCompra}`;

console.log(mensajePlantillaLiteral);

//DOM = Document Object Model = Modelo de Objetos del Documento.
//El DOM es una estructura de objetos generada por el navegador, la cual representa la página HTML actual.

//Con JS ahora vamos a poder acceder a esa estrucutura y modificarla de forma dinamica.

//¿Como funciona?

//En el modelo de objetos del documento, cada etiquera representa un objeto llamado nodo.

//Todos estos nodos son accesible para js a traves del objeto global "DOCUMENT".

//1) ACCEDEMOS AL DOM.

//A) ID: getElementById

const tituloPrincipal = document.getElementById("tituloPrincipal");
console.log(tituloPrincipal);

//B) CLASES:

const nombres = document.getElementsByClassName("nombres");
console.log(nombres);

//C) Nombre de etiquetas:

const meses = document.getElementsByTagName("li");
console.log("meses");

//El HTMLcollection lo puedo trabajar como un array:

for (let mes of meses){
    console.log(meses);
}

//D) querySelector: este metodo nos permite seleccionar nodos con la misma sintaxis que usamos en css.

const queryNombres = document.querySelector(".nombres");
console.log(queryNombres);

//Me trae el primer elemento que encuentre que coincida.

//E) querySelectorAll:

const queryNombresAll = document.querySelectorAll(".nombres");
console.log(queryNombresAll);

/* MODIFICAR NODOS */

//innerText = me permite acceder al contenido textual de algun elemento del DOM.

tituloPrincipal.innerText = "Modificamos el título con JS";

const divContenedor = document.getElementById("divContenedor");

divContenedor.innerHTML = `<div>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <button>Agregar al carrito</button>
                          </div>`;

//innerHTML: me permite agregar código HTML en un nodo.

//ClassName: me permite agregar un nombre de clase:

tituloPrincipal.className = "titulo";

//AGREGAR NODOS:

const contenedor = document.getElementById("contenedor");

const parrafo = document.createElement("p");
parrafo.innerText = "Este es un parrafo agregado desde de js";
parrafo.className = "titulo";

contenedor.appendChild(parrafo);

//ELIMINAR NODOS:

//remove() = elimina el nodo seleccionado.

//parrafo.remove();

//CREAMOS OBJETOS DE FORMA DINAMICA:

class Producto {
    constructor(nombre, precio, url){
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

const yerba = new Producto("Yerba", 360, "../img/card-1.jpg");
const harina = new Producto("Harina", 180, "../img/card-2.jpg");
const pan = new Producto("Pan", 200, "../img/card-3.jpg");
const leche = new Producto("Leche", 150, "../img/card-1.jpg");

const arrayProductos = [yerba, harina, pan, leche];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<p>Nombre: ${producto.nombre}</p>
                     <p>Precio: ${producto.precio}</p>
                     <img src= "${producto.url}" alt="Producto">
                     <button>Agregar al carrito</button>`
    contenedorProductos.appendChild(div);
})




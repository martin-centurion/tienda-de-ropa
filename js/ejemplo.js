function inicio () {
    // Solicito nombre de usuario
    let usuario = prompt("Hola! Ingrese su nombre de usuario por favor: ");
    // Si el usuario no ingresa nada lo vuelvo a solicitar
    if (usuario === "") {
      inicio();
    }
    let saludo = alert("¡Ya puedes comprar y vender " + usuario + "!");
    }
    
    inicio();
    
    // Constructor de productos
    class Producto {
      constructor (nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id
      }
    }
    
    // Productos
    const kanpaiPandas = new Producto ("Kanpai Pandas", 8.4, 1);
    const cryptoPunks = new Producto ("Crypto Punks", 7.6, 2);
    const boredApe = new Producto ("Bored Ape Yacht Club", 5.9, 3);
    const wonderPals = new Producto ("Wonder Pals", 3.2, 4);
    
    // Array de productos
    const articulos = [kanpaiPandas, cryptoPunks, boredApe, wonderPals];
    
    // Array de productos vacía en la cual se iran almacenando los precios de los productos seleccionados
    const arrayProductos = [];
    
    function elegirProducto () {
      // Le pido al usuario ingresar número del producto que quiere
      let eleccionUser = parseInt(prompt("Escriba el número del producto que desea: "));
      // Busco el producto solicitado
      let productoElegido = articulos.find (el => el.id === eleccionUser);
      console.log(productoElegido);
      // Si el usuario ingreso un dato inválido le vuelvo a pedir que ingrese el número del producto
      if (productoElegido === undefined) {
        alert("Ingrese un número válido por favor");
        elegirProducto();
      }
      // Armo la arrayProductos con los precios de los productos elegidos por el usuario
      arrayProductos.push(productoElegido.precio);
    }
    
    function finalizarCompra () {
      // Sumatoria de los precios de los productos elegidos por el usuario
      let totalPrecio = arrayProductos.reduce((acumulador, producto) => acumulador + producto, 0);
      // Alert con el monto total
      alert("El total de su compra es " + totalPrecio + " ETH")
      alert("Gracias por elegir Mi-Tienda para adquirir NFT's =)")
    };
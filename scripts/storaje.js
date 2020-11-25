/**
 * 
 * Crear una funcion constructora de un producto 
 * y guardar 
 * ese producto en
 * Localstorage

 * 
 */
// Funcion constructora de carrito de compras
function CarritoDeCompras(){
    // Aca es donde se guarda cada compra
    this.compra = []
    // Acá guardamos cada compra en el array de compra
    this.agregarCompra = function(compra) { 
       this.compra.push(compra)
       sessionStorage.setItem("carrito", JSON.stringify(this.compra));
    }
    this.tomarDatosIniciales = function() {
        if(sessionStorage.getItem('carrito') != null){
            this.compra = JSON.parse(sessionStorage.getItem('carrito'))
        } 
    }
}

// Funcion constructora de compras
function Compra(producto, precio, cantidad){
    // Inicializamos valores predeterminados. Podríamos agregar más elementos.
    this.producto = producto;
    this.precio = precio;
    this.cantidad = cantidad;

    delete this.cantidad;
}

// Le decimos a Javascript que vamos a crear un nuevo carrito de compras

// Simulamos que el cliente haya hecho click en el boton de agregar al carrito
var nuevaCompra = new Compra("Zapatillas", 2000, 1);

var nuevoCarritoDeCompras = new CarritoDeCompras();
nuevoCarritoDeCompras.tomarDatosIniciales();

nuevoCarritoDeCompras.agregarCompra(nuevaCompra);

console.log(nuevoCarritoDeCompras.compra);

 // Objeto a texto


localStorage.setItem("valorRandom", "1231321");

var resultado = localStorage.getItem("valorRandom");








// Nosotros deseamos que lo que agregó el cliente no se borre y quede por un tiempo guardado,
// podriamos usar una base de datos, pero si tenemos 10000 usuarios, esa base de dato ocuparía
// demasiado espacio y no es para nada recomendable. Por eso, llega nuestros amigos
// Localstorage y SessionStorage.
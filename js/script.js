const db = firebase.firestore()
////////////////////////////  IMPORTAR BASE DE DATOS  ///////////////////////////////////////////////
const getComidas = () => db.collection('Productos').get();

window.addEventListener('DOMContentLoaded', async (e) => {
    const querySnapshot = await getComidas()
    querySnapshot.forEach(doc => {
        var comida = doc.data().name
        var categoria1 = doc.data().categoria1
        var categoria2 = doc.data().categoria2
        var categoria3 = doc.data().categoria3
        var precioXUnidad = doc.data().precioXUnidad
        var precioXDocena = doc.data().precioXDocena
        var img = doc.data().img

        var texXunidad = '<div class="box"><div class="imgBx"><img src="' + img + '"class="fitBg1"></div><div class="content"><h2>' + comida + '<br><span>Pecio=' + precioXUnidad + '</span></h2></div></div>';
        ///////// Agregar Tarjeta de Producto /////////
        $("#comidass").append(texXunidad);
        console.log( comida,
            categoria1,
            categoria2,
            categoria3,
            precioXUnidad,
            precioXDocena,
            img);
    });
})
/////////////////////////    Usuario    ///////////////////////////////////////////////////
function Cliente(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
var Cliente1 = []
usuario()

function usuario() {

    var registro = localStorage.length
    if (registro != 0) {
        Cliente1 = JSON.parse(localStorage.getItem("name"))
        ImprimirNombreUno()
        ConsultarEdad()

    } else {

        Cliente1 = new Cliente(prompt("Diga Su Nombre"), prompt("Diga Su Edad"));
        localStorage.setItem("name", JSON.stringify(Cliente1))
        ImprimirNombre()
        ConsultarEdad()

    }
}

function ImprimirNombre() {
    alert("Hola " + Cliente1.nombre)
    $("#name").append("Hola " + Cliente1.nombre);
}

function ImprimirNombreUno() {
    alert("Hola de nuevo " + Cliente1.nombre)
    $("#name").append("Hola " + Cliente1.nombre);
}
//////////////////////////////// Bloquear Bebidas Alcholicas/////////////////////////////////////////////////////////////////
function ConsultarEdad() {
    if (Cliente1.edad > 17) {
        alert("Sos mayor de edad productos desbloquedados")
    } else {
        $("#Bebidasss").empty();
        $("#Bebidas").empty();
        $(".Bebidass").remove();

        alert("Sos menor de edad productos bloquedados")
    }
}

////////////////////////////////      Cancelar refresh   /////////////////////////////////////////////
const lista = document.getElementById("Consultor");
lista.addEventListener("submit", event => {
    event.preventDefault
});
const listaUno = document.getElementById("productoSeleccionado");
listaUno.addEventListener("submit", event => {
    event.preventDefault
});
///////////////////////////////////////////////////////////////////////
function MenuComidas(Comida, Precio) {
    this.Comida = Comida;
    this.Precio = Precio;
}
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
var comida1 = new MenuComidas("Sandwich de Milanesa", "$60");
var comida2 = {
    Comida: "Pancho",
    Precio: "$45"
}
var comida3 = {
    Comida: "Papuchas",
    Precio: "$30"
}
var bebida1 = {
    Comida: "corona",
    Precio: "$30"
}
var bebida2 = {
    Comida: "quilmes",
    Precio: "$30"
}
var bebida3 = {
    Comida: "salta",
    Precio: "$60"
}
var comidaEncontrada = 0
///////////////////////////////////////////////////////////////////////
var arrayDeMenu = [comida1, comida2, comida3, bebida1, bebida2, bebida3];
///////////////////////////////////////////////////////////////////////
function Ordenar() {
    var promptComida = document.getElementById('productoSeleccionado').value;
    for (var i = 0; i < arrayDeMenu.length; i++) {
        if (arrayDeMenu[i].Comida.toLowerCase().indexOf(promptComida.toLowerCase()) != -1) {
            var comidaSolisitada = arrayDeMenu[i]
            comidaEncontrada = 1
            alert("El precio es " + comidaSolisitada.Precio)
        }
    }
    if (comidaEncontrada == 0) {
        alert("La comida no se encontró")
    }
}

function limpiarStoraje() {
    localStorage.clear();
    location.reload();
}
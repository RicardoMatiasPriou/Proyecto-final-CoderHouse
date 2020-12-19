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

        var texXunidad = '<div class="box" data-name="'+comida+'"data-img="'+img+'" ><div class="imgBx"><img src="' + img + '" class="fitBg1"></div><div class="content"><h2>' + comida + '<br><span>Pecio=' + precioXUnidad + '</span></h2></div></div>';
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
    productosss =  document.querySelectorAll('div.box')
    console.log(productosss);
    productosss.forEach(function(item){
        item.addEventListener('click',function(){
            var compra = '<div class="overlay active" id="overlay"><div class="popup active" id="popup"><a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"onclick="Remove()"></i></a><form id="reguistroDeProductos" enctype="multipart/form-data"><div class="form-group"><h1>'+ item.dataset.name +'</h1><br><img src="'+item.dataset.img+'" alt="ProductoAComorar"><div class="form-row "><div class="col-sm-2 my-2"><label for="PrecioPorDocena">Cantidad</label><div class="input-group"></div><input type="number" class="form-control" id="PrecioPorDocena"placeholder="Precio por docena" min=0 autofocus></div></div></div><button class="btn btn-primary btn-lg btn-block" id="AgregarAlCarrito" onclick="Remove()">Comprar</button></form></div></div>'
            $("#PopUps").append(compra);
            console.log(item.dataset.name);

        })

    })
})
/////////////////////////    Usuario    ///////////////////////////////////////////////////
function Cliente(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
var Cliente1 = []
window.addEventListener('DOMContentLoaded', e => {
    usuario()
})
function usuario() {
        /////////////// Chequeo el Local Storaje   /////////////////////
    var registro = localStorage.length
    if (registro != 0) {
        Cliente1 = JSON.parse(localStorage.getItem("name"))
        ConsultarEdad()

    } else {

        Cliente1 = new Cliente(prompt("Diga Su Nombre"), prompt("Diga Su Edad"));
        localStorage.setItem("name", JSON.stringify(Cliente1))
        ConsultarEdad()

    }
}

function ImprimirNombre() {
var textPopupSaludo1 ='<div class="overlay active" id="overlay"><div class="popup active" id="popup"><a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times" onclick="Remove()"></i></a><h3>Hola '+ Cliente1.nombre+'</h3>'
var textPopupSaludo2 = '</div></div>'
    $("#PopUps").append(textPopupSaludo1,textPopupSaludo2);
    $("#name").append("Hola " + Cliente1.nombre);
}
function ImprimirNombreMenor18() {
    var textPopupSaludo1 ='<div class="overlay active" id="overlay"><div class="popup active" id="popup"><a href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times" onclick="Remove()"></i></a><h3>Hola '+ Cliente1.nombre+'</h3><h5>Sos menor de edad algunos productos han sido bloqueados</h5></div></div>'
        $("#PopUps").append(textPopupSaludo1);
        $("#name").append("Hola " + Cliente1.nombre);
    }
function Remove(){
	$("#PopUps").empty();
}
//////////////////////////////// Bloquear Bebidas Alcholicas/////////////////////////////////////////////////////////////////
function ConsultarEdad() {
    if (Cliente1.edad > 17) {
        ImprimirNombre()
    } else {
        $("#Bebidasss").empty();
        $("#Bebidas").empty();
        $(".Bebidass").remove();
        ImprimirNombreMenor18()
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

var productosss 


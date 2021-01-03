var firebaseConfig = {
    apiKey: "AIzaSyB3KhN4IO-eFSnW0-R5YCrjPY5iA1Xc-Yk",
    authDomain: "proyecto-final-71ed2.firebaseapp.com",
    databaseURL: "https://proyecto-final-71ed2.firebaseio.com",
    projectId: "proyecto-final-71ed2",
    storageBucket: "proyecto-final-71ed2.appspot.com",
    messagingSenderId: "551788436915",
    appId: "1:551788436915:web:ab3dfe2a1ed487953dffc6",
    measurementId: "G-FT6G73QBF7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var carrito = []

Array.prototype.unique = function (a) {
    return function () {
        return this.filter(a)
    }
}(function (a, b, c) {
    return c.indexOf(a, b + 1) < 0
})
const db = firebase.firestore()
////////////////////////////  IMPORTAR BASE DE DATOS  ///////////////////////////////////////////////
const getComidas = () => db.collection('Productos').get();
var productoSelect
var querySnapshot
window.addEventListener('DOMContentLoaded', async (e) => {
    querySnapshot = await getComidas()
    querySnapshot.forEach(doc => {
        var comida = doc.data().name
        var categoria1 = doc.data().categoria1
        var categoria2 = doc.data().categoria2
        /*  var categoria3 = doc.data().categoria3 */
        var precioXUnidad = doc.data().precioXUnidad
        var precioXDocena = doc.data().precioXDocena
        var img = doc.data().img
        var texXunidad = '<div class="box" data-name="' + comida + '"data-categoria1="' + categoria1 + '""data-categoria="' + categoria2 + '"data-img="' + img + '" ><div class="imgBx"><img src="' + img + '" class="fitBg1"></div><div class="content"><h2>' + comida + '<br><span>Pecio=$' + precioXUnidad + '</span></h2></div></div>';
        arrayCategoria2.push(doc.data().categoria2)
        ///////// Agregar Tarjeta de Producto /////////
        if (precioXDocena != '') {
            var texXdocena = '<div class="box" data-name="' + comida + '"data-categoria1="' + categoria1 + '""data-categoria="' + categoria2 + '" data-img="' + img + '"><div class="imgBx"><img src="' + img + '" class="fitBg1"></div><div class="content"><h2>' + comida + '<br><span>Pecio x Unidad=$' + precioXUnidad + '</span><br><span>Pecio X Docena=$' + precioXDocena + '</span></h2></div></div>';
            $("#comidass").append(texXdocena);

        } else {
            $("#comidass").append(texXunidad);
        }
    });
    CompraParcial()
    const AgregarCategoria2 = arrayCategoria2.unique()
    AgregarCategoria2.forEach(function (element) {
        $("#SelectorDeCAtegorias").prepend('<li><p class="dropdown-item" data-categroria1="' + element + '">' + element + '</p></li>');
    })
    usuario()
    var secciones = document.querySelectorAll('.dropdown-item')
    secciones.forEach(function (item) {
        item.addEventListener('click', function () {
            $("#comidass").empty()
            var categoriaselect = item.dataset.categroria1
            querySnapshot.forEach(doc => {
                var comida = doc.data().name
                var categoria1 = doc.data().categoria1
                var categoria2 = doc.data().categoria2
                var categoria3 = doc.data().categoria3
                var precioXUnidad = doc.data().precioXUnidad
                var precioXDocena = doc.data().precioXDocena
                var img = doc.data().img
                var texXunidad = '<div class="box" data-name="' + comida + '"data-categoria="' + categoria2 + '"data-img="' + img + '" ><div class="imgBx"><img src="' + img + '" class="fitBg1"></div><div class="content"><h2>' + comida + '<br><span>Pecio=$' + precioXUnidad + '</span></h2></div></div>';
                ///////// Agregar Tarjeta de Producto /////////
                if (categoria2 == categoriaselect) {
                    if (precioXDocena != '') {
                        var texXdocena = '<div class="box" data-name="' + comida + '"data-categoria="' + categoria1 + '" data-img="' + img + '"><div class="imgBx"><img src="' + img + '" class="fitBg1"></div><div class="content"><h2>' + comida + '<br><span>Pecio x Unidad=$' + precioXUnidad + '</span><br><span>Pecio X Docena=$' + precioXDocena + '</span></h2></div></div>';
                        $("#comidass").append(texXdocena);

                    } else {
                        $("#comidass").append(texXunidad);

                    }
                } else if ('all' == categoriaselect) {
                    if (precioXDocena != '') {
                        var texXdocena = '<div class="box" data-name="' + comida + '"data-categoria="' + categoria1 + '" data-img="' + img + '"><div class="imgBx"><img src="' + img + '" class="fitBg1"></div><div class="content"><h2>' + comida + '<br><span>Pecio x Unidad=$' + precioXUnidad + '</span><br><span>Pecio X Docena=$' + precioXDocena + '</span></h2></div></div>';
                        $("#comidass").append(texXdocena);

                    } else {
                        $("#comidass").append(texXunidad);

                    }
                }
                CompraParcial()
            });

        })

    })
})
/////////////////////////    Usuario    ///////////////////////////////////////////////////
function Cliente(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
var Cliente1 = []


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
    var textPopupSaludo1 = '<div class="overlay active" id="overlay"><div class="popup active" id="popup"><p id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times" onclick="Remove()"></i></p><h3>Hola ' + Cliente1.nombre + '</h3>'
    var textPopupSaludo2 = '</div></div>'
    $("#PopUps").append(textPopupSaludo1, textPopupSaludo2);
    $("#name").append("Hola " + Cliente1.nombre);
}

function ImprimirNombreMenor18() {
    var textPopupSaludo1 = '<div class="overlay active" id="overlay"><div class="popup active" id="popup"><p href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times" onclick="Remove()"></i></p><h3>Hola ' + Cliente1.nombre + '</h3><h5>Sos menor de edad algunos productos han sido bloqueados</h5></div></div>'
    $("#PopUps").append(textPopupSaludo1);
    $("#name").append("Hola " + Cliente1.nombre);
}

function Remove() {
    $("#PopUps").empty();
}
//////////////////////////////// Bloquear Bebidas Alcholicas/////////////////////////////////////////////////////////////////
function ConsultarEdad() {
    if (Cliente1.edad > 17) {
        ImprimirNombre()
        console.log(productosss);
    } else {
        console.log(productosss);
        productosss.forEach(function (item) {
            if (item.dataset.categoria1 == 'Bebida 18') {
                item.remove()
                console.log(productosss);
            } else {}

        })
        ImprimirNombreMenor18()
    }
}

///////////////////////////////////////////////////////////////////////
function MenuComidas(Comida, Precio) {
    this.Comida = Comida;
    this.Precio = Precio;
}
///////////////////////////////////////////////////////////////////////

function limpiarStoraje() {
    localStorage.clear();
    location.reload();
}
var productosss
var carrito = []
var MontoPretotal
var arrayCategoria2 = []

function AgreagrNuevaCompra(evt) {
    evt.preventDefault()
    const formDeCompra = document.getElementById("Compra")
    var NdeProductos = formDeCompra['Cantidad'].value
    if (NdeProductos != '') {
        Pretotal()
        console.log(productoSelect, NdeProductos)
        const name = productoSelect;
        const email = NdeProductos;
        const age = MontoPretotal;
        writeUserData(name, email, age);

        carrito.push(new NuevoProductoAlCarrito(name, email, age))
        Remove()
        console.log(carrito.length);
        console.log(carrito);
        
    
    
    
    } else {
        Remove()
    }
}
function NuevoProductoAlCarrito(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
}
function Pretotal() {
    const formDeCompra = document.getElementById("Compra")
    var NdeProductos = formDeCompra['Cantidad'].value
    var h5Detotal = $("#TotalaPagar")
    var price
    querySnapshot.forEach(doc => {
        if (productoSelect == doc.data().name) {
            price = doc.data().precioXUnidad
        } else {}
    })
    MontoPretotal = NdeProductos * price
    h5Detotal.empty()
    h5Detotal.append('Total $' + MontoPretotal)
}
function CompraParcial(){
    productosss = document.querySelectorAll('div.box')
    productosss.forEach(function (item) {
        item.addEventListener('click', function () {
            var compra = '<div class="overlay active" id="overlay"><div class="popup active" id="popup"><p id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times"onclick="Remove()"></i></p><form onchange="Pretotal()"id="Compra" enctype="multipart/form-data"><div class="form-group"><h1>' + item.dataset.name + '</h1><br><img src="' + item.dataset.img + '" height="267px" alt="Producto A Comprar"><div class="form-row "><div class="col-sm-2 my-2"><label for="Cantidad">Cantidad</label><div class="input-group"></div><input type="number" class="form-control" id="Cantidad"placeholder="Indique la cantidad deseada" min=0 autofocus><br><br><h5 id="TotalaPagar"><h5></div></div></div><button class="btn btn-primary btn-lg btn-block" id="AgregarAlCarrito" onclick="AgreagrNuevaCompra(event)">Comprar</button></form></div></div>'
            productoSelect = item.dataset.name
            $("#PopUps").append(compra);
        })
    })
}
function writeUserData(name, email, age) {
    const id = generateUUID();
    firebase.database().ref(`users/${id}`).set({
      name,
      email,
      age
    });
  }
function generateUUID() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

let tBody = '';
let TotalFianl = 0
const $usersList = document.getElementById('usersList');
function refreshTabla() {
    tBody = ''
    TotalFianl = 0
    carrito.forEach(function (e) {
       console.log( carrito);

       TotalFianl = TotalFianl + e.age
        const tRow =
            `
          <tr>
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>$ ${e.age}</td>
          </tr>
        `;
        tBody += tRow;
    });

    console.log(tBody);

}


///https://api.whatsapp.com/send?phone=5493876335621&text=
/////////////   CARITO DE COMPRAS    /////////////////////
///        window.location.assign('https://api.whatsapp.com/send?phone=5493876183456&text=Hola%20me%20llamo%20' + Cliente1.nombre + '%20quisiera%20pedir%20' + NdeProductos + '%20' + productoSelect + ',el total es $' + MontoPretotal)

/* function AgreagrNuevaCompra() {
    console.log(querySnapshot);
    const formDeCompra = document.getElementById("Compra")    
    var NdeProductos =formDeCompra['Cantidad'].value
    if(NdeProductos != ''){
    querySnapshot.forEach(doc => {        
        if(productoSelect == doc.data().name ){
        var comida = doc.data().name
        var categoria1 = doc.data().categoria1
        var categoria2 = doc.data().categoria2
        var categoria3 = doc.data().categoria3
        var precioXUnidad = doc.data().precioXUnidad
        var precioXDocena = doc.data().precioXDocena
        var img = doc.data().img
        var Compras = new Compra(comida,categoria1,categoria2,categoria3,precioXUnidad,precioXDocena,img,NdeProductos);
        console.log(Compras);

        }else{}
    })   
    }else{
        Remove()
    }
}
function Compra(comida, categoria1, categoria2, categoria3, precioXUnidad, precioXDocena,img, NdeProductos) {
    this.comida = comida;
    this.categoria1 = categoria1;
    this.categoria2 = categoria2;
    this.categoria3 = categoria3;
    this.precioXUnidad = precioXUnidad;
    this.precioXDocena = precioXDocena;
    this.img = img;
    this.NdeProductos = NdeProductos;

} */
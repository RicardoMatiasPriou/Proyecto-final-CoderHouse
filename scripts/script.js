///////////////////////////////////////////////////////////////////////////
function MenuComidass(Comida, Precio, Img,){
    this.Comida = Comida;
    this.Precio = Precio;
    this.Img = Img
}
var comidass1 = new MenuComidass("Pancho","$45","productos/destination1.jpg");
var comidass2 = new MenuComidass("Papuchas","$30","productos/destination2.jpg");
var comidass3 = new MenuComidass("Sandwich de Milanesa","$60","productos/destination3.jpg");

var comidas = [comidass1, comidass2, comidass3] ;



var Cliente1 = []
usuario()

function usuario(){

    var registro = localStorage.length
    if(registro != 0){
        Cliente1 = JSON.parse(localStorage.getItem("name"))
        ImprimirNombreUno()
        ConsultarEdad()
        New()

    }
    else
    {

    Cliente1 = new Cliente(prompt("Diga Su Nombre"), prompt("Diga Su Edad"));
    localStorage.setItem("name", JSON.stringify(Cliente1))
        ImprimirNombre()
        ConsultarEdad()
        New()
        
}}
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
function ImprimirNombre(){
    alert("Hola " + Cliente1.nombre)
    $(".logo").append("Hola " + Cliente1.nombre);
}
function ImprimirNombreUno(){
    alert("Hola de nuevo " + Cliente1.nombre)
    $(".logo").append("Hola " + Cliente1.nombre);
}
///////////////////////////////////////////////////////////////////////
function ConsultarEdad(){
    if(Cliente1.edad > 17){
        alert( "Sos mayor de edad productos desbloquedados")
}

    else{
        var div = document.getElementById("Bebidas");
        div.innerHTML = ""
        $("#Bebidass").remove();

        alert( "Sos menor de edad productos bloquedados")
}}
/////////////////////local estoraje/////////////////////////////






/////////////////////////////////////////////////////////////////////////////
const lista = document.getElementById("Consultor");
lista.addEventListener("submit", event =>{event.preventDefault});
const listaUno = document.getElementById("productoSeleccionado");
listaUno.addEventListener("submit", event =>{event.preventDefault});
///////////////////////////////////////////////////////////////////////
function Cliente(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
///////////////////////////////////////////////////////////////////////
function MenuComidas(Comida, Precio){
    this.Comida = Comida;
    this.Precio = Precio;
}
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
var comida1 = new MenuComidas("Sandwich de Milanesa", "$60");
var comida2 = { Comida:"Pancho", Precio:"$45"}
var comida3 = { Comida:"Papuchas", Precio:"$30"}
var bebida1 = { Comida:"corona", Precio:"$30"}
var bebida2 = { Comida:"quilmes", Precio:"$30"}
var bebida3 = { Comida:"salta", Precio:"$60"}
var comidaEncontrada = 0
///////////////////////////////////////////////////////////////////////
var arrayDeMenu = [comida1, comida2, comida3, bebida1, bebida2, bebida3];
///////////////////////////////////////////////////////////////////////
function Ordenar(){ 
    var promptComida = document.getElementById('productoSeleccionado').value;
        for(var i = 0; i < arrayDeMenu.length; i++){
            if(arrayDeMenu[i].Comida.toLowerCase().indexOf(promptComida.toLowerCase()) != -1){
                var comidaSolisitada = arrayDeMenu[i]
                comidaEncontrada = 1
                alert ("El precio es "+ comidaSolisitada.Precio )                   
            }
        }
        if(comidaEncontrada == 0){
        alert("La comida no se encontró")}
}




function New(){ 
    for(var i = 0; i < comidas.length; i++){
        var img = comidas[i].Img
        var comida = comidas[i].Comida
        var precio = comidas[i].Precio
        var tex1 = '<div class="box"><div class="imgBx"><img src="' +img+'"class="fitBg1"></div><div class="content"><h2>'+comida+'<br><span>Pecio='+precio+'</span></h2></div></div>';
        $("#comidass").append(tex1);
    }
}





var Cliente1 = new Cliente(prompt("Diga Su Nombre"), prompt("Diga Su Edad"));
ImprimirNombre()
function ImprimirNombre(){
$(".logo").append("Hola " + Cliente1.nombre);
ConsultarEdad()
}
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
var comida1 = new MenuComidas("Sandwich de Milanesa", "$60");
var comida2 = { Comida:"Pancho", Precio:"$45"}
var comida3 = { Comida:"Papuchas", Precio:"$30"}
var bebida1 = { Comida:"corona", Precio:"$30"}
var bebida2 = { Comida:"quilmes", Precio:"$30"}
var bebida3 = { Comida:"salta", Precio:"$60"}
///////////////////////////////////////////////////////////////////////
var arrayDeMenu = [comida1, comida2, comida3, bebida1, bebida2, bebida3];
///////////////////////////////////////////////////////////////////////
alert("Hola " + Cliente1.nombre)
///////////////////////////////////////////////////////////////////////
function Ordenar()
{ var promptComida = document.getElementById('productoSeleccionado');
for(var i = 0; i < arrayDeMenu.length; i++){
    if(arrayDeMenu[i].Comida.toLowerCase().indexOf(promptComida.toLowerCase()) != -1){
        var comidaSolisitada = arrayDeMenu[i]
        alert ("El precio es "+ comidaSolisitada.Precio )
    }
}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ConsultarEdad(){
if(Cliente1.edad > 17){
    alert( "Sos mayor de edad productos desbloquedados")
}
else{
    var div = document.getElementById("Bebidas");
div.innerHTML = ""
var div = document.getElementById("Bebidass");
div.innerHTML = ""
alert( "Sos menor de edad productos bloquedados")
}
}
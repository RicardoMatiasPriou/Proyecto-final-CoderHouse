const db = firebase.firestore()

////////////////////////////  IMPORTAR BASE DE DATOS  ///////////////////////////////////////////////

const getComidas = () => db.collection('Comidas').get();

window.addEventListener('DOMContentLoaded', async(e) => {
    const querySnapshot = await getComidas()
    querySnapshot.forEach(doc =>{
        console.log(doc.data());
        
        var img = doc.data().img
        var comida = doc.data().name
        var precio = doc.data().price
        var tex1 = '<div class="box"><div class="imgBx"><img src="' +img+'"class="fitBg1"></div><div class="content"><h2>'+comida+'<br><span>Pecio='+precio+'</span></h2></div></div>';
        $("#comidass").append(tex1);
    });
})



















////////////////////////////////////////////////////////////////////////////
var Cliente1 = []
usuario()

function usuario(){

    var registro = localStorage.length
    if(registro != 0){
        Cliente1 = JSON.parse(localStorage.getItem("name"))
        ImprimirNombreUno()
        ConsultarEdad()

    }
    else
    {

    Cliente1 = new Cliente(prompt("Diga Su Nombre"), prompt("Diga Su Edad"));
    localStorage.setItem("name", JSON.stringify(Cliente1))
        ImprimirNombre()
        ConsultarEdad()
        
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
        $("#Bebidasss").empty();
        $("#Bebidas").empty();
        $(".Bebidass").remove();

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









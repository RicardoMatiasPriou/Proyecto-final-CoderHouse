/////Funcion agregar productos desde una base de datos
////function New() {
////var test1 = '<div class="destinationList"><div class="box"><div class="imgBx"><img src="productos/destination1.jpg" class="fitBg1"></div><div class="content"><h2>Panchos <br> <span>Pecio= $45</span></h2></div></div></div>';
////$(".destination").append(test1);

//}
////////base de datos/////////////////
function MenuComidas(Comida, Precio, Img,){
    this.Comida = Comida;
    this.Precio = Precio;
    this.Img = Img
}
var comida1 = new MenuComidas("Pancho","$45","productos/destination1.jpg")
var comida2 = new MenuComidas("Papuchas","$30","productos/destination2.jpg")
var comida3 = new MenuComidas("Sandwich de Milanesa","$60","productos/destination3.jpg")
var comidas = [comida1, comida2, comida3] 




function New(){ 
    for(var i = 0; i < comidas.length; i++){
        var img = comidas[i].Img
        var comida = comidas[i].Comida
        var precio = comidas[i].Precio
        var tex1 = '<div class="box"><div class="imgBx"><img src="' +img+'"class="fitBg1"></div><div class="content"><h2>'+comida+'<br><span>Pecio='+precio+'</span></h2></div></div>';
        $("#destination").append(tex1);
    }
}











console.log(comida1)
console.log(comidas)
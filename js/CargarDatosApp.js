///////// Agrego .unique a Array /////// Esto me permite eliminar repetidos del arreglo ////////
Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0})
// Initialize Firebase
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore()
const storage = firebase.storage()
/////  ----Funciones----///////
///// Tomar array de produtos //////
const getComidas = () => db.collection('Productos').get();
////// Extraer categorias ///////
var arrayCategoria1 =[]
var arrayCategoria2 =[]
var arrayCategoria3 =[]
window.addEventListener('DOMContentLoaded', async (e) => {
    const querySnapshot = await getComidas()
    querySnapshot.forEach(doc => {
        arrayCategoria1.push(doc.data().categoria1)
        arrayCategoria2.push(doc.data().categoria2)
        arrayCategoria3.push(doc.data().categoria3)
    })
    const AgregarCategoria1 = arrayCategoria1.unique()
    AgregarCategoria1.forEach(function(element){
        console.log(element);
        $("#Categoria1").append('<option value="'+element +'"selected>' +element+'</option>');
    })
    const AgregarCategoria2 = arrayCategoria2.unique()
    AgregarCategoria2.forEach(function(element){
        $("#Categoria2").append('<option value="'+element +'"selected>' +element+'</option>');
        console.log(element);
    })
    const AgregarCategoria3 = arrayCategoria3.unique()
    AgregarCategoria3.forEach(function(element){
        $("#Categoria3").append('<option value="'+element +'"selected>' +element+'</option>');
        console.log(element);
    })
    console.log(arrayCategoria1);
    console.log(arrayCategoria2);
    console.log(arrayCategoria3);
});

//////////////////    Agregar categorias   //////////////////////////
const newCategoria1 = $('#new-Categoria1')
const newCategoria2 = $('#new-Categoria2')
const newCategoria3 = $('#new-Categoria3')
function NewCategoria1() {
    var categoria = prompt('Inserte el nombre de la categoria')
    $("#Categoria1").append('<option value="'+categoria +'"selected>'+categoria+'</option>');
    alert('La categoria ' + categoria +' fue agregada con exito' )
}
function NewCategoria2() {
    var categoria = prompt('Inserte el nombre de la categoria')
    $("#Categoria2").append('<option value="'+categoria +'"selected>'+categoria+'</option>');
    alert('La categoria ' + categoria +' fue agregada con exito' )
}
function NewCategoria3() {
    var categoria = prompt('Inserte el nombre de la categoria')
    $("#Categoria3").append('<option value="'+categoria +'"selected>'+categoria+'</option>');
    alert('La categoria ' + categoria +' fue agregada con exito' )
}

////// boton sumit ///////
var fichero
var linkImagen
const reguistroDeProductos = document.getElementById("reguistroDeProductos");

const saveComida = (name,categoria1,categoria2,categoria3,precioXUnidad,precioXDocena,img) =>
    db.collection('Productos').doc().set({
    name,
    categoria1,
    categoria2,
    categoria3,
    precioXUnidad,
    precioXDocena,
    img
    });



reguistroDeProductos.addEventListener('submit', async (e) => {
    e.preventDefault();
   

fichero = document.getElementById('comida-img').files[0]
if(!fichero){}
else{
    var storageRef = storage.ref('/imagenes de productos/'+fichero.name)
    var uploadTask = storageRef.put(fichero)


    
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
}, function(error) {
    
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
        case 'storage/unauthorized':
            console.log('User doesnt have permission to access the object')
            break;
            
            case 'storage/canceled':
                console.log ('User canceled the upload')
                break;
                
                
                case 'storage/unknown':
                    console.log ('Unknown error occurred, inspect error.serverResponse')
                    break;
                }
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                    linkImagen = downloadURL
                    const name = reguistroDeProductos["NombreDelNuevoProducto"].value 
                    const categoria1 = reguistroDeProductos["Categoria1"].value
                    const categoria2 = reguistroDeProductos["Categoria2"].value
                    const categoria3 = reguistroDeProductos["Categoria3"].value
                    const precioXUnidad = reguistroDeProductos["PrecioPorUnidad"].value
                    const precioXDocena = reguistroDeProductos["PrecioPorDocena"].value
                    const img = linkImagen
                    
                    saveComida(name,categoria1,categoria2,categoria3,precioXUnidad,precioXDocena,img)
                
                    reguistroDeProductos.reset();
                });
            });
        };
    })

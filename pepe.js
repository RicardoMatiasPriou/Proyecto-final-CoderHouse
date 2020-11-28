var fichero
var linkImagen

const db = firebase.firestore()
const storage = firebase.storage()

const reguistroDeProductos = document.getElementById("reguistroDeProductos");

const saveComida = (name, price, img) =>
    db.collection('Comidas').doc().set({
        name,
        price,
        img,
    });



reguistroDeProductos.addEventListener('submit', async (e) => {
    e.preventDefault();
   

/////////////////////////////////////////////////////////////////
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
                    const name =reguistroDeProductos['comida-name']
                    const price =reguistroDeProductos['comida-price']
                    const img = linkImagen
                    
                    saveComida(name.value, price.value, img)
                
                    reguistroDeProductos.reset();
                    name.focus()
                });
            });
        };
    })
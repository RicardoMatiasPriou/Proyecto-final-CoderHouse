const db = firebase.firestore()

const reguistroDeProductos = document.getElementById("reguistroDeProductos");

const saveComida = (name, price, img) =>
    db.collection('Comidas').doc().set({
        name,
        price,
        img,
    });



reguistroDeProductos.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name =reguistroDeProductos['comida-name']
    const price =reguistroDeProductos['comida-price']
    const img =reguistroDeProductos['comida-img']
    
    await saveComida(name.value, price.value, img.value)

    reguistroDeProductos.reset();
    name.focus()



    
})


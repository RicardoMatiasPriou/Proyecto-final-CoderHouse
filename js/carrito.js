db
function AbrirCarrito() {
    refreshTabla()
    const textoDeCarrito = `
    <div class="overlay active" id="overlay">
    <div class="popup active" id="popup">
        <p href="#" id="btn-cerrar-popup" class="btn-cerrar-popup"><i class="fas fa-times" onclick="Remove()"></i>
        </p>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">CANTIDAD</th>
                                <th scope="col">PRECIO TOTAL</th>
                            </tr>
                        </thead>
                        <tbody id="usersList">  
                        ${tBody} 
                        <tr>
                        <td>TOTAL</td>
                        <td></td>
                        <td>$ ${TotalFianl}</td>
                      </tr>     
                        </tbody>
                    </table> 
                </div>
            </div>
            </div>
            <button class="btn" onclick="PagoFinal()">Finalizar Compra</button>
    `
    $('#PopUps').append(textoDeCarrito)

    menuToggle()
   
}


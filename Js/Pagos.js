function mostrarTotalCarritoConProductos() {
    const obtenerCarrito = (nombre) => JSON.parse(localStorage.getItem(nombre)) || [];
    const carrito1 = obtenerCarrito('armados');
    const carrito2 = obtenerCarrito('carrito');

    const crearElementoProducto = ({ nombre, cantidad, precio }) => {
        const li = document.createElement('li');
        li.textContent = `${nombre} - Cantidad: ${cantidad} - Precio unitario: $${precio}`;
        return li;
    };

    const calcularTotalCarrito = (carrito, contenedorId) => {
        const contenedor = document.getElementById(contenedorId);
        contenedor.innerHTML = '';
        return carrito.reduce((total, item) => {
            contenedor.appendChild(crearElementoProducto(item));
            return total + item.precio * item.cantidad;
        }, 0);
    };

    const totalCarrito1 = calcularTotalCarrito(carrito1, 'productosCarrito1');
    const totalCarrito2 = calcularTotalCarrito(carrito2, 'productosCarrito2');
    const totalCombinado = totalCarrito1 + totalCarrito2;

    document.getElementById('totalCarrito').textContent = `Total del carrito: $${totalCombinado}`;
}

// Llamar a la función para mostrar el total del carrito con los productos cuando sea necesario
mostrarTotalCarritoConProductos();

function mostrarTarjetaDebito() {
    const detallePago = document.getElementById('detallePago');
    detallePago.innerHTML = `
        <form id="formTarjetaDebito">
            <label for="numTarjetaDebito">Número de Tarjeta:</label>
            <input placeholder="1234-5678-9123-4567" type="text" id="numTarjetaDebito" name="numTarjetaDebito" required pattern="[0-9]{16}" title="Ingrese un número de tarjeta válido de 16 dígitos">
            <label for="cvvDebito">CVV:</label>
            <input placeholder="***" type="password" id="cvvDebito" name="cvvDebito" required pattern="[0-9]{3}" title="Ingrese un CVV válido de 3 dígitos">
            <button type="button" onclick="validarPagoD('formTarjetaDebito')">Pagar</button>
        </form>
    `;
}


function mostrarTarjetaCredito() {
    const detallePago = document.getElementById('detallePago');
    detallePago.innerHTML = `
        <form id="formTarjetaCredito">
            <label for="numTarjetaCredito">Número de Tarjeta:</label>
            <input placeholder="1234-5678-9123-4567" type="text" id="numTarjetaCredito" name="numTarjetaCredito" required pattern="[0-9]{16}" title="Ingrese un número de tarjeta válido de 16 dígitos">
            <label for="cvvCredito">CVV:</label>
            <input placeholder="***" type="password" id="cvvCredito" name="cvvCredito" required pattern="[0-9]{3}" title="Ingrese un CVV válido de 3 dígitos">
            <label for="fechaExpiracion">Fecha de Expiración:</label>
            <input placeholder="MM/YY" type="text" id="fechaExpiracion" name="fechaExpiracion" required pattern="(0[1-9]|1[0-2])\/\d{2}" title="Ingrese una fecha de expiración válida en el formato MM/YY">
            <button type="button" onclick="validarPagoC('formTarjetaCredito')">Pagar</button>
        </form>
    `;
}


function mostrarTransferencia() {
    const detallePago = document.getElementById('detallePago');
    detallePago.innerHTML = `
            <div id="datosTransferencia">
            <h5>   
                Datos a trasferir  
            </h5>
            <h6>
                Nombre: Sebastian
            </h6>
            <h6>
                Tipo De cuenta: Vista
            </h6>
            <h6>
                Banco: 'BCI'
            </h6>
            <h6>
                Numero de cuenta: 0021060264
            </h6>
            <br>
            </div> 
            <button type="button" onclick="realizarPago()">Pagar</button>
    `;
}



function realizarPago() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu pago a sido aceptado con exito",
        showConfirmButton: false,
        timer: 1500
      });
}
function validarPagoD(formId) {
    const form = document.getElementById(formId);
    const numTarjetaDebito = form.querySelector("#numTarjetaDebito")
    const cvvInput = form.querySelector('#cvvDebito');
    const cvv = cvvInput.value;

    if(numTarjetaDebito.length !==16 ){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "El número de la tarjeta debe ser de 16 dígitos",
        });
    }
    else if (cvv.length !== 3) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, ingrese un CVV válido de 3 dígitos.",
        });
        return;
    }
    else if (form.checkValidity()) {
        realizarPago();
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor complete correctamente todos los campos.",
        });
    }
}
function validarPagoC(formId) {
    const form = document.getElementById(formId);
    const numTarjetaCredito = form.querySelector("#numTarjetaCredito")
    const cvvInput = form.querySelector('#cvvCredito');
    const fechaExpiracion = form.querySelector('#fechaExpiracion').value;

    const cvv = cvvInput.value;
    if(numTarjetaCredito=16 ){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "El número de la tarjeta debe ser de 16 dígitos",
        });
        return;
    }
    else if (cvv.length !== 3) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, ingrese un CVV válido de 3 dígitos.",
        });
        return;
    }
    else if (!validarFecha(fechaExpiracion)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, ingrese una fecha de expiración válida en el formato MM/YY y que sea una fecha futura.",
        });
        return;
    }
    else if (form.checkValidity()) {
        realizarPago();
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor complete correctamente todos los campos.",
        });
    }
}

function validarFecha(fecha) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    
    if (!regex.test(fecha)) {
        return false;
    }

    const partes = fecha.split('/');
    const mes = parseInt(partes[0], 10);
    const ano = parseInt(partes[1], 10);

    if (mes < 1 || mes > 12) {
        return false;
    }

    const anoActual = new Date().getFullYear() % 100;
    const mesActual = new Date().getMonth() + 1;

    if (ano < anoActual || (ano === anoActual && mes < mesActual)) {
        return false;
    }

    return true;
}
const contenedor = document.getElementById("PcArmados"),
      btnAgregar = document.querySelector(".btnAgregar"),
      contenedorCarrito = document.getElementById('carritoPC');


const ArrPcArmados = [
    {
        id: 1,
        nombre: "PC Gamer ASCENT",
        proce: "AMD RYZEN 5 7950X3D",
        placa: "B650M AORUS ELITE AX",
        memoriaRam: "64 GB 2 Módulos 32GB x 5600MHz DDR5",
        almacenamientoSSd: "2x Discos Sólido SSD M.2 1TB PCI-E ",
        almacenamientoHdd: "NO incluye",
        tarjetaGrafica: "RTX 4090",
        fuente: "1000W GOLD",
        case: "NZXT H9",
        refrigeracion: "Líquida NZXT 240mm ELITE con Pantalla LED",
        sistema:"Incluye Sistema Operativo Windows Original a Elección W10 o W11",
        precio: "4500990",
        img: "../Img/PcArmados/pc1.png"

    },
    {
      id: 2,
      nombre: "PC Gamer ASCENT",
      proce: " AMD RYZEN 5 5600G",
      placa: "Chipset B450M",
      memoriaRam: "16GB 2 Módulos 8GB x 3200MHz DDR4",
      almacenamientoSSd: "Almacenamiento Disco Sólido SSD M.2 500GB PCI-E",
      almacenamientoHdd: "NO incluye",
      tarjetaGrafica: "RTX 1090",
      fuente: "Fuente de poder 650W Bronce",
      case: "NZXT H9",
      refrigeracion: "Del Porcesador",
      sistema:"Incluye Sistema Operativo Windows Original a Elección W10 o W11",
      precio: "524.990",
      img: "../Img/PcArmados/pc2.png"

  },
  {
    id: 3,
    nombre: "PC Gamer ASCENT",
    proce: "AMD RYZEN 5 5800X",
    placa: " Chipset B550M",
    memoriaRam: "32GB 2 Módulos 16GB x 3733MHz DDR4",
    almacenamientoSSd: "Almacenamiento Disco Sólido SSD M.2 1TB PCI-E",
    almacenamientoHdd: "NO incluye",
    tarjetaGrafica: "Tarjeta de Video RTX 4060 Ti",
    fuente: "Fuente de poder 750W GOLD",
    case: "NZXT H5",
    refrigeracion: "Refrigeración Líquida Cooler Master 240mm 2 Ventiladores RGB",
    sistema:"Incluye Sistema Operativo Windows Original a Elección W10 o W11",
    precio: "1569990",
    img: "../Img/PcArmados/pc3.png"

  },
  
]
//console.log();

function mostrarArmadoPc(arrayArmados) {
  const contenedor = document.getElementById("pcArmados");

  arrayArmados.forEach(armado => {
      // Crear un div para el armado
      const armadoDiv = document.createElement('div');
      armadoDiv.classList.add('armado');

      // Crear la estructura HTML para el armado
      const armadoHTML = `
          <img src="${armado.img}" alt="${armado.nombre}">
          <div>
              <h3>${armado.nombre}</h3>
              <p><strong>Procesador:</strong> ${armado.proce}</p>
              <p><strong>Placa Base:</strong> ${armado.placa}</p>
              <p><strong>Memoria RAM:</strong> ${armado.memoriaRam}</p>
              <p><strong>Almacenamiento SSD:</strong> ${armado.almacenamientoSSd}</p>
              <p><strong>Almacenamiento HDD:</strong> ${armado.almacenamientoHdd}</p>
              <p><strong>Tarjeta Gráfica:</strong> ${armado.tarjetaGrafica}</p>
              <p><strong>Fuente de Poder:</strong> ${armado.fuente}</p>
              <p><strong>Gabinete:</strong> ${armado.case}</p>
              <p><strong>Refrigeración:</strong> ${armado.refrigeracion}</p>
              <p><strong>Sistema Operativo:</strong> ${armado.sistema}</p>
              <p><strong>Precio:</strong> $${armado.precio}</p>
              <button class="btnAgregar" data-id="${armado.id}">Agregar</button>
          </div>
      `;
      armadoDiv.innerHTML = armadoHTML;

      // Agregar el evento click al botón de agregar
      const btnAgregar = armadoDiv.querySelector('.btnAgregar');
      btnAgregar.addEventListener('click', () => {
          agregarLsPc(armado);
          vizualizarCarritoPCDOM(); // Actualizar el carrito inmediatamente después de agregar el producto
          Toastify({
              text: "El Producto se agregó correctamente",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", 
              position: "left", 
              stopOnFocus: true, 
              style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function(){}
          }).showToast();
      });

      // Agregar el armado al contenedor de armados
      contenedor.appendChild(armadoDiv);
  });
}

// Llamar a la función para mostrar los productos armados
mostrarArmadoPc(ArrPcArmados);

function agregarLsPc(armado) {
  // Obtener los armados del localStorage o crear uno nuevo si no existe
  let armadosEnLocalStorage = JSON.parse(localStorage.getItem('armados')) || [];

  // Verificar si el armado ya está en la lista de armados
  const armadoExistente = armadosEnLocalStorage.find(item => item.id === armado.id);

  if (armadoExistente) {
      // Si el armado ya está en la lista, aumentar su cantidad
      armadoExistente.cantidad++;
  } else {
      // Si el armado no está en la lista, agregarlo con una cantidad de 1
      armado.cantidad = 1;
      armadosEnLocalStorage.push(armado);
  }

  // Guardar la lista de armados actualizada en el localStorage
  localStorage.setItem('armados', JSON.stringify(armadosEnLocalStorage));
}
function actualizarCarrito(carrito) {
  localStorage.setItem('armados', JSON.stringify(carrito));
}

function vizualizarCarritoPCDOM() {
  const contenedor = document.getElementById('carritoPC');
  contenedor.innerHTML = '';

  // Obtener el carrito del localStorage
  const carrito = JSON.parse(localStorage.getItem('armados')) || [];

  if (carrito.length === 0) {
      contenedor.innerHTML = '<p>El carrito está vacío</p>';
      return;
  }

  // Crear un elemento de lista para mostrar los elementos del carrito
  const listaCarrito = document.createElement('ul');

  // Iterar sobre los elementos del carrito y crear un elemento de lista para cada uno
  carrito.forEach(item => {
      const li = document.createElement('li');

      // Estructura HTML para mostrar el nombre, precio, cantidad y botones de aumento/disminución
      li.innerHTML = `
          <span>${item.nombre} - Precio: $${item.precio}</span>
          <span>Cantidad: ${item.cantidad}</span>
          <button class="btnAumentar" data-id="${item.id}">+</button>
          <button class="btnDisminuir" data-id="${item.id}">-</button>
          <span>Total: $${(item.precio * item.cantidad).toFixed(3)}</span>
      `;

      // Agregar eventos click para los botones de aumento y disminución de cantidad
      const btnAumentar = li.querySelector('.btnAumentar');
      btnAumentar.addEventListener('click', () => aumentarCantidad(item.id));

      const btnDisminuir = li.querySelector('.btnDisminuir');
      btnDisminuir.addEventListener('click', () => disminuirCantidad(item.id));

      // Agregar el elemento de lista al contenedor
      listaCarrito.appendChild(li);
  });

  // Calcular el total del carrito sumando los precios de todos los productos
  const totalCarrito = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  
  // Mostrar el total del carrito al final de la lista de productos
  const totalLi = document.createElement('h5');
  totalLi.textContent = `Total del carrito: $${totalCarrito.toFixed(3)}`;
  listaCarrito.appendChild(totalLi);

  // Agregar un botón para ir a la página de pago
  const btnPagar = document.createElement('button');
  btnPagar.textContent = 'Pagar';
  btnPagar.setAttribute('id', 'btn-pagar');

  btnPagar.addEventListener('click', () => {
      
      window.location.href = '../Html/Pagos.html'; 
  });

  // Crear un contenedor para el total del carrito y el botón de pago
  const totalYBotonContenedor = document.createElement('div');
  totalYBotonContenedor.classList.add('contenedor-total');
  totalYBotonContenedor.appendChild(totalLi);
  totalYBotonContenedor.appendChild(btnPagar);

  // Agregar el contenedor del total del carrito y el botón de pago al contenedor principal
  contenedor.appendChild(listaCarrito);
  contenedor.appendChild(totalYBotonContenedor);
  contenedor.appendChild(btnPagar);
}


vizualizarCarritoPCDOM();

//funcion para aumentar la cantidad 
function aumentarCantidad(productoId) {
  Toastify({
      text: "!Aumento la cantidad!",
      duration: 1500,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      //close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();

  // Obtener el carrito del localStorage
  let carrito = JSON.parse(localStorage.getItem('armados')) || [];

  // Buscar el producto en el carrito por su ID
  const productoIndex = carrito.findIndex(item => item.id === productoId);

  // Si el producto está en el carrito, aumentar su cantidad en 1
  if (productoIndex !== -1) {
      carrito[productoIndex].cantidad += 1;
  }

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem('armados', JSON.stringify(carrito));

  // Actualizar la visualización del carrito
  vizualizarCarritoPCDOM();
}

// Función para disminuir la cantidad 
function disminuirCantidad(productoId) {
  Toastify({
      text: "!Disminuyo la cantidad!",
      duration: 1500,
      //destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      //close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #fa4242, #ff2600)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  // Obtener el carrito del localStorage
  let carrito = JSON.parse(localStorage.getItem('armados')) || [];

  // Buscar el producto en el carrito por su ID
  const productoIndex = carrito.findIndex(item => item.id === productoId);

  // Si el producto está en el carrito y su cantidad es mayor que 1, disminuir su cantidad en 1
  if (productoIndex !== -1 && carrito[productoIndex].cantidad > 1) {
      carrito[productoIndex].cantidad -= 1;
  } else {
      // Si la cantidad es 1, eliminar el producto del carrito
      carrito.splice(productoIndex, 1);
  }

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem('armados', JSON.stringify(carrito));

  // Actualizar la visualización del carrito
  vizualizarCarritoPCDOM();
}


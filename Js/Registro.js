
const inputUser = document.querySelector("#nombre"),
    inputNick = document.querySelector("#nick"),
    inputCorreo = document.querySelector("#correo"),
    inputPass = document.querySelector("#pass"),
    checkbox = document.querySelector("#check"),
    form = document.querySelector("form"),
    btnIniciarSesion = document.querySelector('#btnIniciarSesion');


function guardarUsuario(storage) {
    const usuario = {
        nombre: inputUser.value,
        nick: inputNick.value,
        correo: inputCorreo.value,
        pass: inputPass.value,
    };
    if (storage === "local") {
        localStorage.setItem("usuario", JSON.stringify(usuario));
    } else if (storage === "session") {
        sessionStorage.setItem("usuario", JSON.stringify(usuario));
    }
}

//funcion de validaciones para que los campos no esten vacios
function Validaciones() {
    const nombre = inputUser.value.trim();
    const pass = inputPass.value.trim();
    const nick = inputNick.value.trim();
    const correo = inputCorreo.value.trim();

    if (nombre.length === 0) {
        return "El nombre no puede estar vacío.";
    } 
    else if (nombre.length < 3) {
        return "El nombre debe tener al menos 3 caracteres.";
    } 
    else if (/[^a-zA-Z\s]/.test(nombre)) {
        return "El nombre solo puede contener letras y espacios.";
    }
    else if(nick.length===0){
        return "El nick no puede estar vacío.";
    }
    else if(correo.length === 0){
        return "El correo no puede estar vacío.";
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)){
        return "Ingrese un correo electrónico válido.";
    }
    else if (pass.length === 0) {
        return "La contraseña está vacía.";
    } 
    else if (pass.length < 5) {
        return "La contraseña debe tener al menos 5 caracteres.";
    }
    return true;
}

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const validar = Validaciones();
    
    if (validar !== true) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: validar,
        });
        return;
    }

    checkbox.checked ? guardarUsuario("local") : guardarUsuario("session");

    if (localStorage.getItem("sesionIniciada")) {

        window.location.href = "../Html/Inicio.html";
    } else {
        localStorage.setItem("sesionIniciada", true);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        window.location.href = "../Html/Inicio.html";
    }
});



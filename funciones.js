
function onSendClick() {
    const inputUserName = document.querySelector("#username");
    const inputPassword = document.querySelector("#password");

    if(inputUserName.value === "") {
        document.getElementById("username").style.borderColor = "#ff0000";
        document.getElementById("username-error-form").innerHTML = "Debe ingresar un usuario.";        
        return;
    }
    else{
        document.getElementById("username").style.borderColor = "#ccc";
        document.getElementById("username-error-form").innerHTML = "";
    }

    if(inputPassword.value === "") {
        document.getElementById("password").style.borderColor = "#ff0000";
        document.getElementById("password-error-form").innerHTML = "Debe ingresar la password del usuario.";
        return;
    }
    else{
        document.getElementById("password").style.borderColor = "#ccc";
        document.getElementById("password-error-form").innerHTML = "";
    }

    const infoPersona = personalAutorizado.find((persona) => persona.username === inputUserName.value && persona.password === inputPassword.value);
    
    document.getElementById("error-validacion-form").innerHTML = "";

    if(!infoPersona) {        
        document.getElementById("error-validacion-form").innerHTML = "Credenciales incorrectas, intente nuevamente.";
        return;
    }
    else{
        document.getElementById("welcome-validacion-form").innerHTML = `Bienvenido ${infoPersona.cargo} ${infoPersona.nombre}`;
    }
  }

function onCleanAction() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    document.getElementById("username").style.borderColor = "#ccc";
    document.getElementById("password").style.borderColor = "#ccc";

    document.getElementById("username-error-form").innerHTML = "";
    document.getElementById("password-error-form").innerHTML = "";

    document.getElementById("error-validacion-form").innerHTML = "";
    document.getElementById("welcome-validacion-form").innerHTML = "";
}

botonsenddata.addEventListener('click', onSendClick);
botoncleandata.addEventListener('click', onCleanAction);
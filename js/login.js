// Script del login

let loggedIn = false;

setTimeout(function() {
    while (!loggedIn) {
        const username = prompt("Usuario:");
        if (username === null) {
            break;
        }
        
        if (!username.trim()) {
            alert("Por favor ingrese un usuario válido.");
            continue;
        }

        const password = prompt("Contraseña:");
        
        if (password === null) {
            break;
        }

        if (username === "admin" && password === "admin") {
            loggedIn = true;
            window.location.href = "juego.html";
        } else {
            alert("Datos incorrectos. Inténtelo de nuevo.");
        }
    }
}, 500);


        

import { Usuario } from "./components/Usuario";
import { UsuarioClases } from "./components/UsuarioClases";
import { UsuarioFabrica } from "./components/UsuarioFabrica";


// Crea una instancia de usuario
const usuario = new UsuarioFabrica("Ana", "ana@gmail.com", "123456");

const app = document.getElementById("app");
app.innerHTML = `
<h2>Gestion de Usuarios</h2>
</p>${usuario.getInfo()}</p>
<button id="btn-login">Iniciar sesion</button>
<button id="btn-actualizar-email">Actualizar email</button>
<div id="form-container"></div>
`;

// gestiono los eventos

document.getElementById("btn-login").addEventListener("click", mostrarFormularioLogin);

document.querySelector("#btn-actualizar-email").addEventListener("click", mostrarFormularioUpdateEmail);

function mostrarFormularioLogin() {
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = `
        <input id="email-login" type="text" placeholder="Introduce el email" />
        <input id="password-login" type="password" placeholder="Introduce el password" />
        <button id="btn-login-submit">Login</button>
    `;
    document.getElementById("btn-enviar-login").addEventListener("click", () => {
        const email = document.getElementById("email-login").value.trim();
        const password = document.getElementById("password-login").value.trim();
        const resultado = usuario.login(email, password);
        alert(usuario.login(email, password));
    });
}


function mostrarFormularioUpdateEmail(){
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = `
    <input id="email-update" type="text" placeholder="Introduce el nuevo email" />
    <button id="btn-update-email-submit">Actualizar email</button>
    `;
    document.getElementById("btn-actualizar-email").addEventListener("click", () => {
        const newEmail = document.getElementById("email-update").value.trim();
        alert(usuario.updateEmail(newEmail));

    });
}


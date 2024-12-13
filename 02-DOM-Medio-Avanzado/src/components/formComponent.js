// inicio de sesión
export default function formComponent() {
    const divFormLogin = document.createElement("div");
    divFormLogin.classList.add("form-container-login");
    divFormLogin.id = "form-container-login";
    // crear un formulario
    const formEmail = document.createElement("form");
    formEmail.id = "form-login";
    //label username
    const labelUsername = document.createElement("label");
    labelUsername.textContent = "Username";
    // input username
    const inputUsername = document.createElement("input");
    inputUsername.id = "username";
    inputUsername.type = "text";
    inputUsername.name = "username";
    inputUsername.placeholder = "Escribe tu username";
    //label password
    const labelPassword = document.createElement("label");
    labelPassword.textContent = "Password";
    // input password
    const inputPassword = document.createElement("input");
    inputPassword.id = "password";
    inputPassword.type = "password";
    inputPassword.name = "password";
    inputPassword.placeholder = "Escribe tu password";
    
    //button
    const button = document.createElement("button");
    button.id = "button-login";
    button.type = "submit";
    button.textContent = "Iniciar sesión";
    // añadimos los TODOS los elementos al formulario
    formEmail.append(
        labelUsername,
        inputUsername,
        labelPassword,
        inputPassword,
        button
    );
    // añadimos el formulario al contenedor
    divFormLogin.appendChild(formEmail); //<--- form inyectado
    // exportamos el contenedor
    return divFormLogin;
}
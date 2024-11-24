//inicio de sesión
const formComponent = () => {
    
    const divFormLogin = document.createElement('div');
    
    divFormLogin.classList.add('form-container-login');
    divFormLogin.id = 'form-container-login';
    
    // crear un formulario
    const formEmail = document.createElement('form');
    formEmail.id = 'form-login';
    
    // crear el label username
    const labelUsername = document.createElement('label');
    labelUsername.textContent = 'Username';

    // input username
    const inputUsername = document.createElement('input');
    inputUsername.id = 'username';
    inputUsername.type = 'text';
    inputUsername.name = 'username';
    inputUsername.placeholder = 'Escribe tu username';
    
    //label password
    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Password';
    
    //input password
    const inputPassword = document.createElement('input');
    inputPassword.id = 'password';
    inputPassword.type = 'password';
    inputPassword.name = 'password';
    inputPassword.placeholder = 'Escribe tu password';
    
    //button
    const button = document.createElement('button');
    button.id = 'button-login';
    button.type = 'submit';
    button.textContent = 'Iniciar sesión';

    // añadimos los Todos los elementos al formulario
    formEmail.append(labelUsername, inputUsername, labelPassword, inputPassword, button);
    divFormLogin.appendChild(formEmail);
    

    return divFormLogin;
}

export default formComponent;
// hacer un sign in 
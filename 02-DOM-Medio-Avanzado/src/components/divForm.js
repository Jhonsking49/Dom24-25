
const divForm = () => {

    const divForm = document.createElement('div');
    divForm.classList.add('form-container');

    // crear un formulario
    const formEmail = document.createElement('form');
    formEmail.classList.add('form');

    // crear el label
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email';

    // <input type="email" name="email" id="email" required>
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.id = 'email';
    inputEmail.setAttribute('placeholder', 'Escribe tu email');
    formEmail.appendChild(inputEmail)

    // añadir el formulario al contenedor
    divForm.appendChild(formEmail)

    // creo parrafo de verificación del email
    const pEmailCheck = document.createElement('p');
    pEmailCheck.id = 'email-check';
    pEmailCheck.textContent = 'Email no valido';
    pEmailCheck.style.color = 'red';
    pEmailCheck.style.display = 'none';
    divForm.appendChild(pEmailCheck);

    // logica de validación del email
    // necesito una expresión regular para validar el email
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // añadir un evento al input
    inputEmail.addEventListener('input', function(e) {
        // si el email es valido
        const isValidEmail = regexEmail.test(inputEmail.value);
        pEmailCheck.style.display = isValidEmail ? 'none' : 'block';
        
    });

    return divForm;
}

export default divForm;
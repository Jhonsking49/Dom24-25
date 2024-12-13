const divForm = () => {
    const divForm = document.createElement("div");
    divForm.classList.add("form-container");
    // crear un formulario
    const formEmail = document.createElement("form");
    formEmail.classList.add("form");
    // crear el label
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email";
    // <input type="email" name="email" id="email" required>
    formEmail.appendChild(labelEmail); //<--- label inyectado
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("name", "email");
    inputEmail.id = "email";
    inputEmail.setAttribute("placeholder", "Escribe tu email");
    formEmail.appendChild(inputEmail); //<--- input inyectado
    // añadimos el formulario al contenedor
    divForm.appendChild(formEmail); //<--- form inyectado
    // creo label de verificación de email
    const pEmailCheck = document.createElement("p");
    pEmailCheck.id = "email-check";
    pEmailCheck.textContent = "Email no válido";
    pEmailCheck.style.color = "red";
    pEmailCheck.style.display = "none";
    divForm.appendChild(pEmailCheck); //<--- pEmailCheck inyectado
    
    // lógica de validación de email
    // necesito una expresión regular de validación del email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    inputEmail.addEventListener("input", () => {
        // si el email es válido
        const isValidEmail = emailRegex.test(inputEmail.value);
        pEmailCheck.style.display = isValidEmail ? "none" : "block";
    });
    // exportamos el contenedor
    return divForm;
  };
  
  export default divForm;
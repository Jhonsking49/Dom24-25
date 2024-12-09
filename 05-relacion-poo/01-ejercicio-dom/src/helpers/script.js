/**
 * Enunciado: Crea un formulario con un campo de email. Valida en tiempo real si el usuario ha introducido un correo válido (con formato correcto de email). Si el email no es válido, muestra un mensaje de error dinámico bajo el campo de texto. Conceptos clave: input , createElement , addEventListener , appendChild , regex , remove . Ejemplo: Detectar la validez del correo electrónico mientras el usuario escribe y mostrar/ocultar un mensaje de error.
 */

class User {
    constructor(name, password, email) {
        this.name = name;
        this.email = email;
        let _password = password;
    }

    validarEmail() {
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailRegex.test(this.email)) {
            return true;
        } else {
            return false;
        }
    }

    login() {
        if (this.validarEmail()) {
            
            console.log("Login exitoso");
        } else {
            console.log("El email no es válido");
        }
    }
}
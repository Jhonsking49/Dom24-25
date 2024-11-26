 export class UsuarioClases {
    #password;
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.#password = password;
    }

    login = function(mailIntroducido, passwordIntroducida) {
        // comprobar el email y el password

        if (this.email === mailIntroducido && this.#password === passwordIntroducida) {
            return `Bienvenido ${this.nombre}`
        }
        return `Error en las credenciales`
    }

    updateEmail = function(newEmail) {
        this.email = newEmail;
        return `Email actualizado ${this.email}`
    }

    getInfo = function() {
        return `Los datos del usuario son ${this.nombre} y ${this.email}`
    }
 }
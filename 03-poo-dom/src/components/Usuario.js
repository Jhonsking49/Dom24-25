
export function Usuario(nombre, email, password) {
    this.nombre = nombre;
    this.email= email;
    let _password = password; // guion bajo siempre que queramos hacer privada una variable

    //metodos publicos

    this.login = function(mailIntroducido, passwordIntroducida) {
        // comprobar el email y el password

        if(this.email === mailIntroducido && _password === passwordIntroducida){
            return `Bienvenido ${this.nombre}`
        }
        return `Error en las credenciales`
    }

    // actualizar el email

    this.updateEmail = function(newEmail) {
        this.email = newEmail;
        return `Email actualizado ${this.email}`
    }

    // Obtener toda la informacion del usuario

    this.getInfo = function() {
        return `Los datos del usuario son ${this.nombre} y ${this.email}`
    }
}


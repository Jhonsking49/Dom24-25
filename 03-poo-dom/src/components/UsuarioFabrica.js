export function UsuarioFabrica(nombre, email, password){
    let _password = password;
    return {
        nombre,
        email,
        login(emailIntroducido, passwordIntroducida) {
            // comprobar el email y el password

            if (this.email === mailIntroducido && this.#password === passwordIntroducida) {
                return `Bienvenido ${this.nombre}`
            }
            return `Error en las credenciales`
        },
        updateEmail(newEmail) {
            this.email = newEmail;
            return `Email actualizado ${this.email}`
        },
        getInfo() {
            return `Los datos del usuario son ${this.nombre} y ${this.email}`
        }

    }
}
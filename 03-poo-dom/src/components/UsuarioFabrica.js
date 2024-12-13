export function UsuarioFabrica(nombre, email, password) {
    let _password = password;
    return {
      nombre,
      email,
      login(emailIntroducido, passwordIntroducida) {
        // comprobar el email y el password.
        if (
          this.email === emailIntroducido &&
          _password === passwordIntroducida
        ) {
          return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales";
      },
      updateEmail(newEmail) {
        this.email = newEmail;
        return `Email actualizado ${this.email}`;
      },
      // obtener toda la información del USUARIO.
      getInfo() {
        return `Usuario: ${this.nombre} - email: ${this.email}`;
      },
    };
  }
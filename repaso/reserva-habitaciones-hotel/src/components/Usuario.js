

export class Usuario {

    constructor(id, nombre, email, password,){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        let _password = password;
    }

    login(nombreObtenido, passwordObtenido){
        // obtener el usuario del local storage
        let usuarios = JSON.parse(localStorage.getItem("usuario"));
        usuarios.forEach(usuario => {
            // validar si el usuario existe
            if(usuario !== null){
                // validar si el usuario existe y si los datos son correctos
                if(usuario.nombre === nombreObtenido && usuario.password === passwordObtenido){
                    // si los datos son correctos, devolver el usuario
                    localStorage.setItem("usuariologueado", JSON.stringify(usuario));
                    return usuario;
                }
            }
            
        });
        return false;
    }

    crearId(){
        // generar un id aleatorio
        let id = Math.floor(Math.random() * 10000);
        // si el id ya existe en el local storage, crear un nuevo id
        while(localStorage.getItem("usuario") !== null){
            id = Math.floor(Math.random() * 10000);
        }
        return id;
    }

    registrar(nombreObtenido, emailObtenido, passwordObtenido){
        // validar los datos obtenidos
        if(nombreObtenido === this.nombre && emailObtenido === this.email && passwordObtenido === this.password){
            // si los datos son correctos registrar el usuario en el local storage
            localStorage.setItem("usuario", JSON.stringify(
                new Usuario(this.crearId(), nombreObtenido, emailObtenido, passwordObtenido)
            ));
            return true;
        }
        return false;
    }
}
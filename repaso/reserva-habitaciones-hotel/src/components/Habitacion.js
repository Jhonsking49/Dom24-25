import { Usuario } from "./Usuario.js";

export class Habitacion {

    constructor(id, nombre, precio, foto, estado, usuario){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
        this.estado = estado;
        this.usuario = new Usuario(usuario.id, usuario.nombre, usuario.email, usuario.password);
    }

    crearId(){
        // generar un id aleatorio
        let id = Math.floor(Math.random() * 10000);
        // si el id ya existe en el local storage, crear un nuevo id
        while(localStorage.getItem("habitaciones") !== null){
            id = Math.floor(Math.random() * 10000);
        }
        return id;
    }

    registrar(nombreObtenido, precioObtenido, fotoObtenido, estadoObtenido, usuarioObtenido){
        // validar los datos obtenidos
        if(nombreObtenido === this.nombre && precioObtenido === this.precio && fotoObtenido === this.foto && estadoObtenido === this.estado && usuarioObtenido === this.usuario){
            // si los datos son correctos registrar la habitacion en el local storage
            localStorage.setItem("habitaciones", JSON.stringify(
                new Habitacion(this.crearId(), nombreObtenido, precioObtenido, fotoObtenido, estadoObtenido, usuarioObtenido)
            ));
            return true;
        }
        return false;
    }

    actualizar(nombreObtenido, precioObtenido, fotoObtenido, estadoObtenido, usuarioObtenido){
        // validar los datos obtenidos
        if(nombreObtenido === this.nombre && precioObtenido === this.precio && fotoObtenido === this.foto && estadoObtenido === this.estado && usuarioObtenido === this.usuario){
            // si los datos son correctos actualizar la habitacion en el local storage
            localStorage.setItem("habitaciones", JSON.stringify(
                new Habitacion(this.id, nombreObtenido, precioObtenido, fotoObtenido, estadoObtenido, usuarioObtenido)
            ));
            return true;
        }
        return false;
    }

    eliminar(){
        // validar si el usuario es el propietario de la habitacion
        if(this.usuario === localStorage.getItem("usuariologueado")){
            // si el usuario es el propietario de la habitacion, eliminar la habitacion en el local storage
            localStorage.setItem("habitaciones", JSON.stringify(
                new Habitacion(this.id, this.nombre, this.precio, this.foto, this.estado, this.usuario)
            ));
            return true;
        }
        return false;
    }
}
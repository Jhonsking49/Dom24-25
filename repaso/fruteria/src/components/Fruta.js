
export function Fruta (nombre, cantidad, precio){

    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;

    this.addFruta = function(nombreObtenido, cantidadObtenida, precioObtenido){
        localStorage.setItem("fruteria", new Fruta(nombreObtenido, cantidadObtenida, precioObtenido))
    }

    this.cambiarCantidad = function(nombreObtenido, cantidadObtenida) {
        const data = localStorage.getItem("fruteria");
        const fruta = data.find(fruta => fruta.nombre === nombreObtenido);
        fruta.cantidad = cantidadObtenida;
        localStorage.setItem("fruteria", data);
    }

    this.cambiarPrecio = function(nombreObtenido, precioObtenido) {
        const data = localStorage.getItem("fruteria");
        const fruta = data.find(fruta => fruta.nombre === nombreObtenido);
        fruta.precio = precioObtenido;
        localStorage.setItem("fruteria", data);
    }
}
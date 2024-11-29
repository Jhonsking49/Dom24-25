export class Producto {
    constructor(id, nombre, cantidad, precio) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    obtenerTotal(){
        return this.cantidad * this.precio;
    }

    obtenerInfo(){
        return `Nombre: ${this.nombre} --- Cantidad: ${this.cantidad} --- Precio: ${this.precio} --- Total: ${this.cantidad} 
        --- Total: ${this.obtenerTotal()}`
    }
    
}
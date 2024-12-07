export class Producto {
    constructor( nombre, cantidad, precio) {
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
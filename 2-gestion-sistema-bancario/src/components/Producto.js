
export function producto (id, nombre, precio, stock, imagen) {
    this.id = Math.random();
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;

    this.obtenerInformacion = function() {
        return `Los datos del producto son: Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}, Imagen: ${this.imagen}`;
    }

    this.cambiarStock = function(newStock) {
        if(newStock > stock) {
            this.stock = stock + newStock;
        } else if (newStock < stock) {
            this.stock = stock - newStock;
        } else {
            this.stock = stock;
            return "No se puede cambiar el stock";
        }
        return `El nuevo stock es: ${this.stock}`;
    } 
}
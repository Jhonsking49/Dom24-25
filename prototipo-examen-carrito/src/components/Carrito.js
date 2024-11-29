import { Producto } from "./Producto";

export default class Carrito {
    constructor(){
        this.productos = [];
    }

    // Metodos de la clase

    agregarProducto(nombre, cantidad, precio){
        this.productos.push(new Producto(nombre, cantidad, precio));
        // AMPLIACION: guardar en el localstorage
    }

    borrarProducto(index){
        this.productos.splice(index, 1);
        // AMPLIACION: guardar en el localstorage
    }

    editarProducto(index, newCantidad){
        if(newCantidad > 0){
            this.productos[index].cantidad= newCantidad;
        }
    }

    calcularTotal(){
        this.productos.reduce((total, producto) => total+=producto.calcularTotal(),0)
    }

    // AMPLIACION ----------- localstorage -------------

    guardarLocalStorage(){
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    cargarLocalStorage(){
        const carrito = JSON.parse(localStorage.getItem("carrito"));
        if(carrito){
            this.productos = carrito.map((producto) => new Producto(producto.nombre, producto.cantidad, producto.precio));
            // coger y guardar en productos un map creado de carrito con productos
            
        }

    }
}
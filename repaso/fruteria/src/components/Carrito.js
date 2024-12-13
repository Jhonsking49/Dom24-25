export class Carrito {
    constructor() {
      this.items = [];
    }
  
    agregarItem(item) {
      const existente = this.items.find((i) => i.nombre === item.nombre);
      if (existente) {
        existente.cantidad += item.cantidad;
      } else {
        this.items.push({ ...item });
      }
      this.actualizarLocalStorage();
    }
  
    eliminarItem(nombre) {
      this.items = this.items.filter((item) => item.nombre !== nombre);
      this.actualizarLocalStorage();
    }
  
    editarCantidad(nombre, nuevaCantidad) {
      const item = this.items.find((i) => i.nombre === nombre);
      if (item) {
        item.cantidad = nuevaCantidad;
        this.actualizarLocalStorage();
      }
    }
  
    obtenerItems() {
      return this.items;
    }
  
    limpiarCarrito() {
      this.items = [];
      this.actualizarLocalStorage();
    }
  
    calcularTotal() {
      return this.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
    }
  
    actualizarLocalStorage() {
      localStorage.setItem("carrito", JSON.stringify(this.items));
    }
  
    cargarDesdeLocalStorage() {
      const data = JSON.parse(localStorage.getItem("carrito"));
      if (data) {
        this.items = data;
      }
    }
  }
  
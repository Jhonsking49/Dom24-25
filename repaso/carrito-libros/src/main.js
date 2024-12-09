import { Libro } from "./components/Libro";
import { Carrito } from "./components/Carrito";
import { bdExamen } from "./assets/datos";
import { buscarLibro, menorStock, libroMasVendido } from "./helpers/script";
const carrito = new Carrito();


carrito.agregarProducto("978-0134685991",2)
carrito.agregarProducto("978-0135471944",3)
carrito.agregarProducto("978-1449337711",2)
carrito.agregarProducto("978-1492040736",5)

carrito.agregarDescuento()

//carrito.eliminarProducto("978-0134685991")

console.log(carrito.calcularTotalCarrito());


console.log(carrito)
console.log(buscarLibro("Addison-Wesley"))
console.log(menorStock())
carrito.validarCompra()

const app = document.getElementById("app");
app.innerHTML = `
<h1>Carrito de Libros</h1>
<div>
  <h2>Libros Disponibles</h2>
  <ul>
    ${bdExamen.libros.map((libro) => `
      <li>
        <h3>${libro.titulo}</h3>
        <p>Editorial: ${libro.editorial}</p>
        <p>ISBN: ${libro.ISBN}</p>
        <p>Precio: ${libro.precio}</p>
        <p>Valoracion: ${libro.valoracion}</p>
        <p>Stock: ${libro.stock}</p>
      </li>
    `).join("")}
  </ul>
</div>
<div>
  <h2>Carrito</h2>
  <ul>
    ${carrito._carrito.map((producto) => `
      <li>
        <h3>${producto.libro.titulo}</h3>
        <p>Cantidad: ${producto.cantidad}</p>
      </li>
    `).join("")}
  </ul>
</div>
`
import Carrito from "./components/Carrito";

// debo de crear instancias // cargar carrito localstorage

//  crear h1 carrito
// resto con innerHtml
// crear un contenedor <form></form>
// crear inputs nombre, cantidad, precio
// crear un boton agregar al carrito

// añadir un div para colocar los productos de mi carrito

const carrito = new Carrito();

const renderListaCarrito = () => {
  const lista = document.getElementById("lista-productos");
  const totalCarrito = document.getElementById("total-carrito");
  lista.innerHTML = carrito.productos
    .map(
      (producto, index) => `
      <li>
        ${producto.obtenerInfo()}
        <button data-id="${index}" class="editar">Editar</button>
        <button data-id="${index}" class="btn-borrar">Borrar</button>
      </li>
    `
    )
    .join("");
  totalCarrito.innerText = `Total del carrito: ${carrito.calcularTotal()}`;
};

const agregarProductoHandler = (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre-producto").value.trim();
  const cantidad = document.getElementById("cantidad-producto").value;
  const precio = document.getElementById("precio-producto").value;

  if (nombre && cantidad >= 0 && precio >= 0) {
    carrito.agregarProducto(nombre, cantidad, precio);
    renderListaCarrito();
  } else {
    alert("Por favor, rellena todos los campos correctamente.");
  }
  event.target.reset();
};

function renderCarrito(carrito) {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Limpia el contenido previo

  const tituloh1 = document.createElement("h1");
  tituloh1.innerText = "Carrito";
  app.appendChild(tituloh1);

  app.innerHTML += `
    <form id="form-producto">
      <input id="nombre-producto" type="text" placeholder="Nombre del producto" />
      <input id="cantidad-producto" type="number" placeholder="Cantidad" />
      <input id="precio-producto" type="number" placeholder="Precio" />
      <button id="agregar-producto">Agregar</button>
    </form>
    <div id="container-productos">
      <ul id="lista-productos"></ul>
    </div>
    <footer>
      <h2 id="total-carrito">Total del carrito: 0</h2>
    </footer>
  `;

  document
    .getElementById("form-producto")
    .addEventListener("submit", agregarProductoHandler);
}

const manejarAccionesHandler = (event) => {
  const indice = Number(event.target.dataset.id);
  if (event.target.classList.contains("btn-borrar")) {
    carrito.borrarProducto(indice);
    renderListaCarrito();
  }
  if (event.target.classList.contains("btn-editar")) {
    const newCantidad = prompt("Ingrese la nueva cantidad",carrito.productos[indice].cantidad);
    carrito.editarProducto(indice, newCantidad);
    renderListaCarrito();
  }
};

document.addEventListener("click", manejarAccionesHandler);

renderCarrito(carrito);
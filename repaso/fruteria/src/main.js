import { Fruta } from "./components/Fruta";
import { Carrito } from "./components/Carrito";

const app = document.getElementById("app");

app.innerHTML = `
  <div class="main">
    <h1>Fruteria</h1>
  </div>
`;

// Obtener frutas desde localStorage y parsearlas a un array
const frutasData = JSON.parse(localStorage.getItem("fruteria")) || [];

const mostrarFrutas = (frutas) => {
  // Eliminar elementos previos para evitar duplicados
  const prevFrutaDiv = document.querySelector(".fruta-lista");
  if (prevFrutaDiv) prevFrutaDiv.remove();

  const div = document.createElement("div");
  div.classList.add("fruta-lista");

  frutas.forEach((fruta, index) => {
    div.innerHTML += `
      <div class="fruta">
        <div class="nombreFruta">
          <h2>${fruta.nombre}</h2>
        </div>
        <div class="cantidadFruta">
          <h2>${fruta.cantidad}</h2>
        </div>
        <div class="precioFruta">
          <h2>${fruta.precio}</h2>
        </div>
        <div class="accionesFruta">
          <button class="editar" data-index="${index}">Editar</button>
          <button class="eliminar" data-index="${index}">Eliminar</button>
        </div>
      </div>
    `;
  });

  app.appendChild(div);

  document.querySelectorAll(".editar").forEach((btn) => {
    btn.addEventListener("click", (e) => editarFruta(e.target.dataset.index));
  });

  document.querySelectorAll(".eliminar").forEach((btn) => {
    btn.addEventListener("click", (e) => eliminarFruta(e.target.dataset.index));
  });
};

const agregarFruta = () => {
  const nombreInput = document.getElementById("nombre");
  const cantidadInput = document.getElementById("cantidad");
  const precioInput = document.getElementById("precio");

  const nombre = nombreInput.value.trim();
  const cantidad = cantidadInput.value.trim();
  const precio = precioInput.value.trim();

  if (!nombre || !cantidad || !precio) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const nuevaFruta = new Fruta(nombre, cantidad, precio);
  frutasData.push(nuevaFruta);
  localStorage.setItem("fruteria", JSON.stringify(frutasData));

  nombreInput.value = "";
  cantidadInput.value = "";
  precioInput.value = "";

  mostrarFrutas(frutasData);
};

const editarFruta = (index) => {
  const nuevaCantidad = prompt("Introduce la nueva cantidad:", frutasData[index].cantidad);
  if (nuevaCantidad !== null && !isNaN(nuevaCantidad)) {
    frutasData[index].cantidad = nuevaCantidad;
    localStorage.setItem("fruteria", JSON.stringify(frutasData));
    mostrarFrutas(frutasData);
  }
};

const eliminarFruta = (index) => {
  frutasData.splice(index, 1);
  localStorage.setItem("fruteria", JSON.stringify(frutasData));
  mostrarFrutas(frutasData);
};

const renderFormularioAgregarFruta = () => {
  const div = document.createElement("div");
  div.classList.add("agregarFruta");

  div.innerHTML = `
    <h1>Agregar fruta</h1>
    <input type="text" id="nombre" placeholder="Nombre de la fruta">
    <input type="number" id="cantidad" placeholder="Cantidad">
    <input type="number" id="precio" placeholder="Precio">
    <button id="agregar">Agregar</button>
  `;

  app.appendChild(div);

  const agregarButton = document.getElementById("agregar");
  agregarButton.addEventListener("click", agregarFruta);
};

const carrito = localStorage.getItem("carrito") || new Carrito();

const calcularTotalFrutas = () => {
  const total = frutasData.reduce((total, fruta) => total + fruta.cantidad * fruta.precio, 0);
  return total;
};

const mostrarTotalFrutas = () => {
  const total = calcularTotalFrutas();
  const div = document.createElement("div");
  div.classList.add("total-frutas");
  div.innerHTML = `
    <h1>Total de frutas: ${total}</h1>
  `;
  app.appendChild(div);
};


const init = () => {
  if (frutasData.length > 0) {
    mostrarFrutas(frutasData);
  } else {
    const div = document.createElement("div");
    div.classList.add("no-frutas");
    div.innerHTML = `
      <h1>No tienes frutas</h1>
    `;
    app.appendChild(div);
  }

  renderFormularioAgregarFruta();
  mostrarTotalFrutas();
};

init();

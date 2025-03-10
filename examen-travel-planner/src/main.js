/**
 * @description Archivo main del examen de JavaScript para un planificador de viajes
 * @author Juan Rey González
 */
import { Destination } from './classes/Destination';
import { TravelPlanner } from './classes/TravelPlanner';

const name = "Juan Rey González";
const date = new Date().toLocaleDateString();

const loadData = async () => {
  try {
    const response = await fetch('http://localhost:3500/destinations');
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const contadorDestinosTotales = (data) => {
  const contador = data.length;
  localStorage.setItem("contador-destinos", contador);
  return contador;
};

const createNavBar = (contador) => {
  const div = document.createElement("div");
  div.className = "nav-bar";
  div.innerHTML = `
    <div>
      <p>Destinos actuales: ${contador}</p>
      <button class="add-button">Agregar Destino</button>
    </div>
  `;
  return div;
};

const createFooter = (name, date) => {
  const footer = document.createElement("div");
  footer.className = "footer";
  footer.innerHTML = `
    <div>
      <p>Nombre del Usuario: ${name}</p>
      <p>Fecha actual: ${date}</p>
    </div>
  `;
  return footer;
};

function createDestinationForm() {
  const form = document.createElement("form");
  form.id = "destination-form";
  form.className = "destination-form";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Introduce el nombre del destino:";
  nameLabel.setAttribute("for", "input-destino");

  const nameInput = document.createElement("input");
  nameInput.id = "input-destino";
  nameInput.type = "text";
  nameInput.className = "input-destino";
  nameInput.required = true;

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Introduce la fecha del viaje:";
  dateLabel.setAttribute("for", "input-date");

  const dateInput = document.createElement("input");
  dateInput.id = "input-date";
  dateInput.type = "date";
  dateInput.className = "input-date";
  dateInput.required = true;

  const budgetLabel = document.createElement("label");
  budgetLabel.textContent = "Introduce el presupuesto del viaje:";
  budgetLabel.setAttribute("for", "input-presupuesto");

  const budgetInput = document.createElement("input");
  budgetInput.id = "input-presupuesto";
  budgetInput.type = "number";
  budgetInput.className = "input-presupuesto";
  budgetInput.required = true;

  const saveButton = document.createElement("button");
  saveButton.id = "save-button";
  saveButton.className = "save-button";
  saveButton.textContent = "Guardar";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(budgetLabel);
  form.appendChild(budgetInput);
  form.appendChild(saveButton);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const date = dateInput.value;
    const budget = parseFloat(budgetInput.value);

    if (name && date && budget) {
      const newDestination = new Destination(name, date, budget);
      await travelPlanner.addDestination(newDestination);
      alert("Destino agregado con éxito.");
      window.location.reload(); // Refrescar la página para actualizar la lista
    }
  });

  return form;
}

function renderDestinationList(data) {
  const list = document.createElement("div");
  list.id = "destinations-list";

  data.forEach(destino => {
    const destin = document.createElement("div");
    destin.className = "destination-card";
    destin.id = `destino-${destino.id}`;
    destin.innerHTML = `
      <p>Destino: ${destino.name}</p>
      <p>Fecha: ${destino.date}</p>
      <p>Presupuesto: ${destino.budget}</p>
      <button class="edit-destino" data-id="${destino.id}">Editar</button>
      <button class="delete-destino" data-id="${destino.id}">Eliminar</button>
    `;
    list.appendChild(destin);
  });

  return list;
}

const clickEditDestino = (id) => {
  const nuevoPresupuesto = prompt("Especifica el nuevo presupuesto del viaje:");
  if (nuevoPresupuesto && !isNaN(nuevoPresupuesto)) {
    fetch(`http://localhost:3500/destinations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ budget: nuevoPresupuesto })
    })
      .then(response => response.json())
      .then(data => console.log("El dato actualizado es:", data))
      .catch(error => console.error(error));
  }
};

const clickDeleteDestino = (id) => {
  fetch(`http://localhost:3500/destinations/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(() => console.log("El dato ha sido eliminado"))
    .catch(error => console.error(error));
};

const init = async () => {
  const data = await loadData();

  const app = document.getElementById("app");

  const footer = createFooter(name, date);
  app.appendChild(footer);

  const form = createDestinationForm();
  app.appendChild(form);

  const destinos = renderDestinationList(data);
  app.appendChild(destinos);

  const contador = contadorDestinosTotales(data);
  const navBar = createNavBar(contador);
  app.appendChild(navBar);

  document.querySelectorAll(".edit-destino").forEach(button => {
    button.addEventListener("click", () => clickEditDestino(button.dataset.id));
  });

  document.querySelectorAll(".delete-destino").forEach(button => {
    button.addEventListener("click", () => clickDeleteDestino(button.dataset.id));
  });
};

init();

/**
 * @description Archivo main del examen de javascript de un planificador de viajes
 * @author Juan Rey González
 */
import { Destination } from './classes/Destination';
import { TravelPlanner } from './classes/TravelPlanner';

const name = "Juan Rey Gonzalez";
const date = new Date(Date.now());

const loadData = async() => {
  try {
    const response = await fetch('http://localhost:3500/destinations');
    if(!response.ok){
      throw new Error("error al obtener la data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error){
    console.error(error);
  }
}


const app = document.getElementById("app");

const contadorDestinosTotales = (data) => {
    let contador = 0;
    for(let i = 0; i < data.length() ; i++){
      contador++;
    }
    localStorage.setItem("contador-destinos", contador);
    console.log(contador);
    return contador;
}

const createNavBar = (contador) =>{
  const div = document.createElement("div");
  div.className = "nav-bar";
  div.innerHTML = `
  <div>
    <p>Destinos actuales: ${contador} </p>
    <buttton class="add-button"> Agregar Destino</buttton>
  </div>
  `;
  return div;
}

const createFooter = (name, date) => {
  const footer = document.createElement("div")
  footer.className = "footer";
  footer.innerHTML = `
  <div>
    <p> Nombre del Usuario: ${name}</p>
    <p> Fecha actual: ${date}</p>
  </div>
  `
  return footer;

}

function createDestinationForm(){
  const form = document.createElement("form");
  form.id = "destination-form";
  form.hidden = false;
  form.className = "destination-form";

  const pDestino = document.createElement("p");
  pDestino.textContent = "Introduce el nombre del destino: ";

  form.appendChild(pDestino);
  
  const inputDestino = document.createElement("input");
  inputDestino.id = "input-destino";
  inputDestino.type = "text";
  inputDestino.className = "input-destino";
  inputDestino.required = true;

  form.appendChild(inputDestino);

  const pDate = document.createElement("p");
  pDate.textContent = "Introduce la fecha del viaje: ";
  form.appendChild(pDate);

  const inputDate = document.createElement("input");
  inputDestino.id = "input-date";
  inputDate.type = "date";
  inputDate.className = "input-date";
  inputDate.required = true;

  form.appendChild(inputDate);

  const pPresupuesto = document.createElement("p");
  pPresupuesto.textContent = "Introduce el presupuesto del viaje: ";
  form.append(pPresupuesto);

  const inputPresupuesto = document.createElement("input");
  inputDestino.id = "input-presupuesto";
  inputPresupuesto.type = "number";
  inputPresupuesto.className = "input-presupuesto";
  inputPresupuesto.required = true;

  form.appendChild(inputPresupuesto);

  const saveButton = document.createElement("button");
  inputDestino.id = "save-button";
  inputDestino.className = "save-button";
  inputDestino.textContent = "Guardar";

  form.appendChild(saveButton);

  console.log(form)
  return form;


}

const clickEditDestino = () => {
  const editDestino = document.getElementById("edit")
  editDestino.addEventListener("click", function() {
    const nuevoPresupuesto = prompt("Especifica el nuevo presupuesto del viaje: ");
    fetch(`http://localhost:3500/destinations/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({"budget": nuevoPresupuesto})
    }).then((response) => response.json())
    .then((data) => console.log("Los dato actualizado es: ", data))
    .catch((error) => console.error(error));
  })
}

const clickDeleteDestino = () =>{
  const deleteDestino = document.getElementById("delete");

  deleteDestino.addEventListener("delete-destino", function(){
    fetch(`http://localhost:3500/destinations/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    }).then((response) => response.json())
    .then((data) => console.log("Los data ha sido eliminada"))
    .catch((error) => console.error(error));
  })
}

function renderDestinationList(data) {

  const list = document.createElement("div");
  list.id = "destinations-list";

  console.log(typeof(data))
  data.forEach(destino => {
    const destin = document.createElement("div");
    destin.innerHTML = `
      <div id="${destino.id}">
        <p id="destino-${destino.id}">Destino: ${destino.name}</p>
        <p id="fecha-${destino.id}">Fecha: ${destino.date}</p>
        <p id="presupuesto-${destino.id}">Presupuesto: ${destino.budget}</p>
        <button id="edit" class="delete-destino" onclick={deleteDestino}>Eliminar</button>
        <button id="delete" class="edit-destino" onClick={editDestino}>Editar</button>
      </div>
    `
    list.appendChild(destin);
  });

  return destin;
}

const init = () =>{

  const data = loadData();
  
  const footer = createFooter(name, date);
  app.appendChild(footer)
  
  const form = createDestinationForm();
  app.appendChild(form);
  
  const destinos = renderDestinationList(data);
  app.appendChild(destinos)
  
  clickEditDestino();
  clickDeleteDestino();
  const contador = contadorDestinosTotales(data);
  const div = createNavBar(contador);
  app.appendChild(div);



}


init();
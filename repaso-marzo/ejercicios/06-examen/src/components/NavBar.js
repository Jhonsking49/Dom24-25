export function NavBar(nombre,date,toggleForm){
    const container = document.createElement("div");
    container.className = "nav-bar";

    const name = document.createElement("p");
    name.className = "author-name";
    name.textContent = `Nombre: ${nombre}`;

    const dateE = document.createElement("p");
    dateE.className = "date-exam";
    name.textContent = `Fecha: ${nombre}`;

    const toggleButton = document.createElement("button");
    toggleButton.style.display = "block" || "none";
    toggleButton.addEventListener("click",()=>{
        toggleForm()
    })

    container.appendChild(name);
    container.appendChild(dateE);
    container.appendChild(toggleButton);

    return container;
}
// seleccion de elementos del DOM

const appDiv = document.getElementById("app");

appDiv.innerHTML = "Hola Mundo";

// Añadir clases a un ejemplo del DOM
appDiv.classList.add("clase1", "clase2");

//Seleccion de classname
const items = document.getElementsByClassName("items");
items.length;
for (const i of items) {
    let n=1;
    i.textContent= `Hola Mundo ${+n}`;
}

// Seleccion por clase
const saludoP = document.querySelector(".saludo");

const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo, index) => {
    saludo.innerText = `Hola Mundo ${index + 1}`;
})

// añadimos  atributos a una etiqueta
const github = document.getElementById("github");
github.setAttribute("target", "_blank");
//github.removeAttribute("target");
github.innerText = "Ir a mi Github";
github.textContent = "Ir a Github";
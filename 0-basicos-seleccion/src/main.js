// # Ejercicios básicos de selección del DOM

// ### Ejercicio 1:

// Selecciona el elemento `h1` por su ID.

const elementH1 = document.getElementById("contenedorPrincipal").querySelector("h1");
console.log(elementH1);
elementH1.style.color = "red"; /// Estos son estilos en línea
elementH1.textContent = "Hola Mundo";

// ### Ejercicio 2:

// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.

const elementosParagrafo = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(elementosParagrafo);

// ### Ejercicio 3:

// Selecciona el elemento `img` por su atributo `src`.

const elementImg = document.querySelector("img[src = 'imagen.png']");
console.log(elementImg);

// ### Ejercicio 4:

// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.

const contenedorSpan = document.querySelectorAll("#contenedorSecundario span");
console.log(contenedorSpan);

// ### Ejercicio 5:

// Selecciona el primer párrafo con la clase "importante".

const primerParrafo = document.querySelector(".parrafo.importante");
console.log(primerParrafo);

// ### Ejercicio 6:

// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".

const parrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");
console.log(parrafosContenedorPrincipal);

// ### Ejercicio 7:

// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".

const elementosDataAtributo = document.querySelectorAll("[data-atributo = 'valor1']");
console.log(elementosDataAtributo);

// ### Ejercicio 8:

// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".

const parrafosImportantes = document.querySelectorAll(".parrafo.importante");
const segundoParrafoImportante2 = parrafosImportantes.length > 1 ? parrafosImportantes[1] : null;
console.log(segundoParrafoImportante2);
const segundoParrafoImportante = document.querySelector(".parrafo.importante:nth-child(2)");
console.log(segundoParrafoImportante);

// ### Ejercicio 9:

// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".

const elementosSpan = document.querySelectorAll(".contenedor span");
console.log(elementosSpan);

// ### Ejercicio 10:

// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".

const contenedorPrincipal = document.querySelectorAll("#contenedorPrincipal .parrafo");
const tercerParrafo = contenedorPrincipal.length > 2 ? contenedorPrincipal[2] : null;
console.log(tercerParrafo);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// # Relación II de básicos selección.

// ### Ejercicio 1:
// Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.

const contenedorSecundario = document.getElementById("contenedorSecundario");
const spans = contenedorSecundario.getElementsByTagName("span");
for (const span of spans) {
    span.addEventListener("click", () => {
        span.style.backgroundColor = Math.random() > 0.5 ? "red" : "blue";
    });
}

// ### Ejercicio 2:
// Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.

const parrafos = contenedorPrincipal.getElementsByClassName("parrafo");
for (const parrafo of parrafos) {
    parrafo.addEventListener("dblclick", () => {
        alert(parrafo.textContent);
    });
}

// ### Ejercicio 3:
// Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`. Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.

const select = document.getElementById("select");
select.addEventListener("change", () => {
    document.querySelector("h1").textContent = select.value;
});

// ### Ejercicio 4:
// Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").

const parrafos1 = contenedorSecundario.getElementsByClassName("parrafo");
for (const parrafo of parrafos1) {
    parrafo.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            parrafo.textContent = Math.random().toString();
        }
    });
}

// ### Ejercicio 5:

// Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.

// ### Ejercicio 6:

// Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.

// ### Ejercicio 7:

// Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".

// ### Ejercicio 8:

// Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.

// ### Ejercicio 9:

// Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.

// ### Ejercicio 10:

// Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.

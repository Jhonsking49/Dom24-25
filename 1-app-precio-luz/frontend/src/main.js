import { createSpinner } from "./components/Spinner/Spinner.js";
import { createLoadButton } from "./components/LoadButton/LoadButton.js";
// Declaracion de variables

// Declaracion de funciones

const handleClick = () => {
    const div = document.createElement("div");
};



document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const spinner = createSpinner();
    app.appendChild(spinner);
});

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const loadPricesBtn = createLoadButton();
    app.appendChild(loadPricesBtn);
    loadPricesBtn.addEventListener("click", handleClick);
});
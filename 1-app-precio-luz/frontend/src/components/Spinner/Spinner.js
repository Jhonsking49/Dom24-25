/**
 * Spinner con tres estados: 
 * - Crear el spinner
 * - Mostrar el spinner
 * - Ocultar el spinner
 */

export const createSpinner = () => {
    // Crear el spinner en el DOM
    const spinner = document.createElement("div");
    // Agregar un id al spinner para luego estilarlo
    spinner.id = "spinner";
    // Agregar clase al spinner
    spinner.classList.add("hidden", "spinner");
    spinner.textContent = "Cargando...";
    return spinner;
};

export function showSpinner() {
    //mostrar el spinner
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("hidden");
}

export function hideSpinner() {
    //ocultar el spinner
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");
}
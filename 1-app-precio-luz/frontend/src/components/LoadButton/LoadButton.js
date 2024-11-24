
export const createLoadButton = () => {
    const loadButton = document.createElement("button");
    loadButton.id = "load-prices-btn";
    loadButton.classList.add("load-btn");
    loadButton.textContent = "Cargar precios de la luz";
    return loadButton;
}


export class ProductList {
    #products;
    #apiurl;
    constructor(apiurl) {
        this.#apiurl = apiurl;
        this.#products = [];
        this.appContainer = document.getElementById("app");
    }

    async init() {
        try {
            this.#products = await this.#fetchDataProducts();
            this.#renderProducts();
        } catch (error) {
            this.renderError(error.message);
        }
    }

    async #fetchDataProducts() {
        try {
            const response = await fetch(this.#apiurl);
            if (!response.ok) throw new Error("Error al obtener los productos");
            return await response.json();
        } catch (error) {
            throw new Error("Error en la solicitud de datos: " + error.message);
        }
    }

    #renderProducts() {
        if (this.#products.length === 0) {
            this.renderError("No hay productos para mostrar");
            return;
        }

        const productsHTML = this.#products.map((product, index) => `
            <div class="product-card" data-id="${product.id}">
                <h3>${product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>Descripción: ${product.description}</p>
                <p>Categoría: ${product.category}</p>
                <button class="delete-btn" data-id="${product.id}">Eliminar</button>
                <button class="edit-btn" data-id="${product.id}">Editar</button>
            </div>
        `).join("");
    
        this.appContainer.innerHTML = `
            <button id="add-product-btn">Añadir Producto</button>
            <div class="product-list">${productsHTML}</div>
        `;

        document.getElementById("add-product-btn").addEventListener("click", () => this.addProductPrompt());

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", (e) => this.deleteProduct(e.target.dataset.id));
        });

        document.querySelectorAll(".edit-btn").forEach(button => {
            button.addEventListener("click", (e) => this.editProduct(e.target.dataset.id));
        });
    }

    renderError(message) {
        this.appContainer.innerHTML = `<div class="error"><p>Error: ${message}</p></div>`;
    }

    #validateData(product) {
        return product.name && product.price && product.description && product.category;
    }

    async addProduct(product) {
        if (!this.#validateData(product)) {
            throw new Error("Datos del producto incorrectos");
        }
        await this.#opFetchProductData(product, "POST");
        await this.init();
    }

    addProductPrompt() {
        const name = prompt("Nombre del producto:");
        const price = prompt("Precio del producto:");
        const description = prompt("Descripción del producto:");
        const category = prompt("Categoría del producto:");

        const newProduct = { name, price, description, category };
        if (!this.#validateData(newProduct)) {
            alert("Datos inválidos");
            return;
        }

        this.addProduct(newProduct);
    }

    async deleteProduct(id) {
        await this.#opFetchProductData({ id }, "DELETE");
        await this.init();
    }

    async editProduct(id) {
        const newName = prompt("Nuevo nombre del producto:");
        const newPrice = prompt("Nuevo precio del producto:");
        const newDescription = prompt("Nueva descripción:");
        const newCategory = prompt("Nueva categoría:");

        const updatedProduct = { id, name: newName, price: newPrice, description: newDescription, category: newCategory };
        if (!this.#validateData(updatedProduct)) {
            alert("Datos inválidos");
            return;
        }

        await this.#opFetchProductData(updatedProduct, "PUT");
        await this.init();
    }

    async #opFetchProductData(product, method) {
        try {
            const options = {
                method,
                headers: { "Content-Type": "application/json" },
                body: method !== "DELETE" ? JSON.stringify(product) : null
            };
            
            const response = await fetch(`${this.#apiurl}${method !== "POST" ? `/${product.id}` : ""}`, options);
            if (!response.ok) throw new Error("Error en la operación de productos");
        } catch (error) {
            throw new Error("Error en la operación: " + error.message);
        }
    }
}

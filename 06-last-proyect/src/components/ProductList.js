export class ProductList {
    #products;
    #apiurl;
    constructor(apiurl) {
        this.#apiurl = apiurl;
        this.#products = [];
        // donde renderizar
        this.appContainer = document.getElementById("app");
    }
    // método para inicializar
    async init() {
        try {
            this.#products = await this.#fetchDataProducts();
            this.#renderProducts();
        } catch (error) {
            this.renderError(error);
        }
    }

    // método privado para obtener los productos
    async #fetchDataProducts() {
        try {
            const response = await fetch(this.#apiurl);
            if (!response.ok) {
                throw new Error("Error al obtener los productos");
            }
            return await response.json();
        } catch (error) {
            throw new Error("Error fetch data ", error);
        }
    }
    // método público para obtener los productos
    #renderProducts() {
        if (this.#products.length === 0) {
            this.renderError("No hay productos para mostrar");
        }
        const productsHTML = this.#products
            .map((product, index) => {
            return `
            <div class="product-card" data-id="${index}">
            <h3>${product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <p data-id="${index}">Categoria: ${product.category}</p>
            </div>
        `;
            })
            .join("");
    
        this.appContainer.innerHTML = `
        <div class="product-list">
        ${productsHTML}
        </div>
        `;
    
        // const myDiv=document.createElement("div");
        // myDiv.className="product-list";
        // myDiv.innerHTML=productsHTML;
        // this.appContainer.appendChild(myDiv);
    
        const listaProductos = document.querySelector(".product-list");
        console.log(listaProductos);
        listaProductos.addEventListener("click", (e) => {
            if (e.target.dataset.id) {
            //poner de color verde la tarjeta
            const productCard = document.querySelector(
                `[data-id="${e.target.dataset.id}"]`
            );
            productCard.style.backgroundColor =
                productCard.style.backgroundColor === "" ? "green" : "";
            }
        });
    }

    renderError(message) {
        this.appContainer.innerHTML = `
        <div class="error" >
        <p>Error: ${message}</p>
        </div>
        `;
    }

    #validateData(product) {
        const { name, price, description, category } = product;
        if (!name || !price || !description || !category) {
            return false;
        }
        return true;
    }
    
    // getter
    get apiurl() {
        return this.#apiurl;
    }
    
    //setter
    set addProduct(product) {
        if (this.#validateData(product)) {
            //AÑADIMOS EL PRODUCTO
            // fecheamos en la api el producto
            this.#opFetchProductData(product, "post");
        } else {
            throw new Error("Datos del producto incorrectos");
        }
    }
    deleteProduct(product) {
        this.#opFetchProductData(product, "delete");
    }
    
    // método para (post,patch,delete,put) productos
    async #opFetchProductData(product, method) {
        try {
            switch (method) {
            case "post":
                const response = await fetch(this.#apiurl, {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json",
                },
                });
                break;
            case "delete":
                const id = product.id;
                const responseDelete = await fetch(`${this.#apiurl}/${id}`, {
                method: "DELETE",
                });
                if (!responseDelete.ok) {
                throw new Error("Error al obtener los productos");
                }
                console.log("Borrado Correctamente")
                break;
            case "put":
                const responsePut = await fetch(`${this.#apiurl}/${product.id}`, {
                method: "PUT",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json",
                },
                });
                break;
            case "patch":
                const responsePatch = await fetch(`${this.#apiurl}/${product.id}`, {
                method: "PATCH",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json",
                },
                });
                break;
            case "get":
                const responseGet = await fetch(this.#apiurl);
                if (!responseGet.ok) {
                throw new Error("Error al obtener los productos");
                }
                return await response.json();
                break;
            default:
                // pensar bien que hacer
                break;
            }
        } catch (error) {
            throw new Error("Error fetch data ", error);
        }
    }
}
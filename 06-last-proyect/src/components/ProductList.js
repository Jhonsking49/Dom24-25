
export class ProductList {
    #products = [];
    #apiUrl;

    constructor(apiUrl) {
        this.#apiUrl = apiUrl;
        this.#products = [];
        this.appContainer = document.getElementById('app');
    }

    // en el examen toda funcion de asincronia debe estar gestionada con un control de errores

    // metodo privado para obtener la data
    async #fetchData(){
        try {
            const response = await fetch(this.#apiUrl);
            if(!response.ok){
                throw new Error('Error al obtener la data');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    renderError(error){
        this.appContainer.innerHTML = `
        <div class="error">
            <h1>Error</h1>
            <p>${error.message}</p>
        </div>
        `;
    }

    renderProducts(){
        if(this.#products.length === 0){
            this.renderError(new Error('No hay productos'));
        }
        const productosHtml = this.#products.map((producto, index) => {
            return `
            <div class="product-card" data-id=${index}>
                <h3>${producto.name}</h3>
                <p>Precio: ${producto.price}</p>
                <p>Descripcion: ${producto.description}</p>
                <p data-id=${index}>Categoría: ${producto.category}</p>
            </div>
            `
        }).join("");// el join lo convierte en una cadena de texto

        // controlamos el click en el p de class category
        const clickCategory = event => {
            const target = event.target;
            if(target.classList.contains('category')){
                target.style.color = 'green';
            }
        }

        this.appContainer.innerHTML = `
        <div class="product-list">
        ${productosHtml}
        </div>
        `;

        const miDiv = document.createElement('div');
        miDiv.className = 'product-list';
        miDiv.innerHTML = productosHtml;
        this.appContainer.appendChild(miDiv);

    }

    async init(){
        try {
                this.#products = await this.#fetchData();
                this.renderProducts();
        } catch (error) {
            this.renderError(error);
        }
    }

    get apiUrl(){
        return this.#apiUrl;
    }

    #validarData(){
        const { name, price, description, category } = this.#products;
        if(!name || !price || !description || !category){
            return false;
        }
        return true;
    }

    set addProduct(product){
        if(this.#validarData()){
            this.#products.push(product);
        } else {
            throw new Error('Error al agregar producto');
        }
        
    }

    async #opFetchProductData(product, method){
        try {
            switch(method){
                case 'POST':
                    break;
                        case 'delete':
                            const id = product.id;
                            const responseDelete = await fetch(`${this.#apiUrl}/${id}`,{
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                            if(!responseDelete.ok){
                                throw new Error('Error al borrar producto');
                            }
                            return await responseDelete.json();
                    break;
                        case 'put':
                            const responsePut = await fetch(`${this.#apiUrl}/${product.id}`,{
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(product)
                            });
                            if(!responsePut.ok){
                                throw new Error('Error al actualizar producto');
                            }
                            return await responsePut.json();
                    break;
                        case 'get':
                            const responseGet = await fetch(this.#apiUrl);
                            if(!responseGet.ok){
                                throw new Error('Error al obtener producto');
                            }
                            return await responseGet.json();

                    break;
                        case 'patch':
                    break;
                    default:
                        break;
            }
            } catch (error) {
                console.error(error);
            }
    }
        
}
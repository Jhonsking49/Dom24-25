import { ProductList } from './components/ProductList.js';

const urlapi = 'http://localhost:4000/products';

const productList = new ProductList(urlapi);

productList.init();

const listaProductos = document.querySelector('.product-list');

listaProductos.addEventListener('click', (e) =>{
  if(e.target.dataset.id){
    const productCard = document.querySelector(
    `[data-id=${e.target.dataset.id}]`);
    productCard.style.backgroundColor ? "green" : "green";
  };
});

c
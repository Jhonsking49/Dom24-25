import { ProductList } from "./components/ProductList";

const urlApi = "http://localhost:4000/products";
const productList = new ProductList(urlApi);
productList.init();
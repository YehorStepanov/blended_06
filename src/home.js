//Логіка сторінки Home
import {getCategory,getProducts } from './js/products-api'
import { insertCategories, renderProducts } from './js/render-function'
import refs from "./js/refs";



document.addEventListener('DOMContentLoaded',async e => {
    const categories = await getCategory();
    
    const markup = insertCategories(categories);
    refs.categories.innerHTML = markup;

    const products = await getProducts();
    console.log(products);
    renderProducts(products);
})
 

//Логіка сторінки Home
import {getCategory} from './js/products-api'
import { insertCategories } from './js/modal'

const cargElem = document.querySelector('.categories');

document.addEventListener('DOMContentLoaded',async e => {
    const categories = await getCategory();
    const markup = insertCategories(categories);
    cargElem.innerHTML = markup;

    
})


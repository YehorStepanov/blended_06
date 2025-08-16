//Логіка сторінки Home
import {
  getCategory,
  getProducts,
  getProductsCategory,
} from './js/products-api';
import { insertCategories, renderProducts } from './js/render-function';
import refs from './js/refs';

document.addEventListener('DOMContentLoaded', async e => {
  const categories = await getCategory();

  const markup = insertCategories(categories);
  refs.categories.innerHTML = markup;

  const products = await getProducts();
  console.log(products);
  renderProducts(products);
});

let lastButton = null;

refs.categories.addEventListener('click', async e => {
  if (e.target.classList.contains('categories__btn')) {
    let listProducts = null;
    if (e.target.textContent != 'All') {
      listProducts = await getProductsCategory(e.target.textContent);
    } else {
      listProducts = await getProducts();
    }

    renderProducts(listProducts);
    e.target.classList.add('categories__btn--active');
    if (lastButton) {
      lastButton.classList.remove('categories__btn--active');
    }
    lastButton = e.target;
  }
});

import refs from './refs';

export function insertCategories(cat) {
  cat.unshift('All');
  return cat.map(insertCategory).join('');
}

export function insertCategory(cat) {
  return `<li class="categories__item">
   <button class="categories__btn" type="button">${cat}</button>
 </li>`;
}

export function renderProducts(products) {
  if (products.length === 0) {
    refs.div.classList.add('not-found--visible');
  } else {
    refs.div.classList.remove('not-found--visible');
  }
  const markup = products
    .map(
      product => ` 
    <li class="products__item" data-id="${product.id}">
    <img class="products__image" src="${product.thumbnail}" alt="${product.title}"/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${product.brand}</span></p>
    <p class="products__category">Category:${product.category}</p>
    <p class="products__price">Price: $${product.price}</p>
 </li>`
    )
    .join('');
  console.log(refs.products);
  refs.products.innerHTML = markup;
}

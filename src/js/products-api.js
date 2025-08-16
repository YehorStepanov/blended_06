import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';

export async function getCategory() {
  const answer = await axios('/products/category-list');
  return answer.data;
}

export async function getProducts(currentPage = 1) {
  const url = `/products?limit=12&skip=${(currentPage - 1) * 12}`;
  const answer = await axios(url);
  return answer.data.products;
}

export async function getProductsCategory(category, currentPage = 1) {
  const answer = await axios(
    `/products/category/${category}?limit=12&skip=${(currentPage - 1) * 12}`
  );
  return answer.data.products;
}

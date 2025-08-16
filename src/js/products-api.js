import axios from "axios"
axios.defaults.baseURL = 'https://dummyjson.com';

export async function getCategory() {
    const answer = await axios('/products/category-list');
    return answer.data;
}
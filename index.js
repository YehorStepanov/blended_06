import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-BkCUij8E.js";o.defaults.baseURL="https://dummyjson.com";async function n(){return(await o("/products/category-list")).data}async function c(t=1){const e=`/products?limit=12&skip=${(t-1)*12}`;return(await o(e)).data.products}const a={categories:document.querySelector(".categories "),products:document.querySelector(".products")};function i(t){return t.unshift("All"),t.map(u).join("")}function u(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>`}function d(t){const e=t.map(s=>` 
    <li class="products__item" data-id="${s.id}">
    <img class="products__image" src="${s.thumbnail}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${s.brand}</span></p>
    <p class="products__category">Category:${s.category}</p>
    <p class="products__price">Price: $${s.price}</p>
 </li>`).join("");console.log(a.products),a.products.innerHTML=e}document.addEventListener("DOMContentLoaded",async t=>{const e=await n(),s=i(e);a.categories.innerHTML=s;const r=await c();console.log(r),d(r)});
//# sourceMappingURL=index.js.map

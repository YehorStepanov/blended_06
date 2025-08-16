import"./assets/styles-JE8YjOlG.js";import{a as n}from"./assets/vendor-BkCUij8E.js";n.defaults.baseURL="https://dummyjson.com";async function l(){return(await n("/products/category-list")).data}async function i(t=1){const s=`/products?limit=12&skip=${(t-1)*12}`;return(await n(s)).data.products}async function d(t,s=1){return(await n(`/products/category/${t}?limit=12&skip=${(s-1)*12}`)).data.products}const a={categories:document.querySelector(".categories"),products:document.querySelector(".products"),div:document.querySelector(".not-found")};function u(t){return t.unshift("All"),t.map(g).join("")}function g(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>`}function c(t){t.length===0?a.div.classList.add("not-found--visible"):a.div.classList.remove("not-found--visible");const s=t.map(e=>` 
    <li class="products__item" data-id="${e.id}">
    <img class="products__image" src="${e.thumbnail}" alt="${e.title}"/>
    <p class="products__title">${e.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${e.brand}</span></p>
    <p class="products__category">Category:${e.category}</p>
    <p class="products__price">Price: $${e.price}</p>
 </li>`).join("");console.log(a.products),a.products.innerHTML=s}document.addEventListener("DOMContentLoaded",async t=>{const s=await l(),e=u(s);a.categories.innerHTML=e;const r=await i();console.log(r),c(r)});let o=null;a.categories.addEventListener("click",async t=>{if(t.target.classList.contains("categories__btn")){let s=null;t.target.textContent!="All"?s=await d(t.target.textContent):s=await i(),c(s),t.target.classList.add("categories__btn--active"),o&&o.classList.remove("categories__btn--active"),o=t.target}});
//# sourceMappingURL=index.js.map

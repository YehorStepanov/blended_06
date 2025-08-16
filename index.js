import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";e.defaults.baseURL="https://dummyjson.com";async function a(){return(await e("/products/category-list")).data}function s(t){return t.unshift("All"),t.map(r).join("")}function r(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>`}const i=document.querySelector(".categories");document.addEventListener("DOMContentLoaded",async t=>{const n=await a(),o=s(n);i.innerHTML=o});
//# sourceMappingURL=index.js.map

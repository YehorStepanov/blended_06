export function insertCategories(cat) {
    cat.unshift('All');
    return cat.map(insertCategory).join('');
}

export function insertCategory(cat) {
    return `<li class="categories__item">
   <button class="categories__btn" type="button">${cat}</button>
 </li>`
}
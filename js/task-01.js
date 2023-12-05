const categoriesList = document.querySelector('ul#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const item = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${item}`);
})
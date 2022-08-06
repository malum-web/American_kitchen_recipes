const recipes = document.getElementById('load_recipes');
const button = document.getElementById('more');

function load_more() {
    if (recipes.style.display === 'flex') {
        recipes.style.display = 'none';
        button.textContent = "Load More"
    } else {
        recipes.style.display = 'flex';
        button.textContent = "Close"
    }
}

button.addEventListener('click', load_more);


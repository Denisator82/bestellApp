// Template Funktionen auslagern
function createDishHTML(dish) {
    return `
        <div class="dish-item">
            <div class="dish-header">
                <h2>${dish.name}</h2>
                <button class="add-to-basket-button" onclick="addToBasket('${dish.name}', ${dish.price}, 1)">+</button>
            </div>
            <p>${dish.description}</p>
            <p>Preis: ${dish.price.toFixed(2)} €</p>
        </div>
    `;
}
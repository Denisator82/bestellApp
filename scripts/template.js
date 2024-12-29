// Template Funktionen auslagern
function createDishHTML(dish) {
    return `
        <div class="dishItem">
            <div class="dishHeader">
                <h2>${dish.name}</h2>
                <button class="addToBasketButton" onclick="addToBasket('${dish.name}', ${dish.price}, 1)">+</button>
            </div>
            <p>${dish.description}</p>
            <p>Preis: ${dish.price.toFixed(2)} €</p>
        </div>
    `;
}
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

// Funktion zum Rendern des Warenkorbs
function renderBasket() {
    const basketContainer = document.querySelector('.basket');
    basketContainer.innerHTML = '<h1>Warenkorb</h1>';

    let basketHTML = '';
    let totalPrice = 0;

    for (let i = 0; i < basket.length; i++) {
        const item = basket[i];  // Zugriff auf das Element des Arrays mit Index i
        totalPrice += item.price * item.amount;
        basketHTML += `
            <div class="basket-item">
                <div class="basket-item-name">
                    <p>${item.name}</p>
                </div>
                <div class="basket-item-controls">
                    <button onclick="decreaseAmount(${i})">-</button>
                    <p>${item.amount}x</p>
                    <button onclick="increaseAmount(${i})">+</button>
                    <p>Preis: ${item.price.toFixed(2)} €</p>
                    <button onclick="removeFromBasket(${i})">Entfernen</button>
                </div>
            </div>
        `;
    }

    const delivery = totalPrice > freeDeliveryThreshold ? 0 : deliveryCost;
    const finalPrice = totalPrice + delivery;

    const footerHTML = `
        <div class="basket-footer">
            <div class="total-price">
                <p><strong>Gesamtpreis:</strong> ${totalPrice.toFixed(2)} €</p>
                <p><strong>Lieferkosten:</strong> ${delivery.toFixed(2)} €</p>
                <p><strong>Endpreis:</strong> ${finalPrice.toFixed(2)} €</p>
            </div>
            <button class="place-order-button" onclick="placeOrder()">Bestellen</button>
            <p class="order-message"></p>
        </div>
    `;

    basketContainer.innerHTML += `<div class="basket-items">${basketHTML}</div>` + footerHTML;
}
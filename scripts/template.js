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
            <div class="basketItem">
                <div class="basketItemName">
                    <p>${item.name}</p>
                </div>
                <div class="basketItemControls">
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
        <div class="basketFooter">
            <div class="totalPrice">
                <p><strong>Gesamtpreis:</strong> ${totalPrice.toFixed(2)} €</p>
                <p><strong>Lieferkosten:</strong> ${delivery.toFixed(2)} €</p>
                <p><strong>Endpreis:</strong> ${finalPrice.toFixed(2)} €</p>
            </div>
            <button class="placeOrderButton" onclick="placeOrder()">Bestellen</button>
            <p class="orderMessage"></p>
        </div>
    `;

    basketContainer.innerHTML += `<div class="basketItems">${basketHTML}</div>` + footerHTML;
}
let basket = []; // Array für den Warenkorb
const deliveryCost = 5; // Lieferkosten
const freeDeliveryThreshold = 25; // Schwelle für kostenlose Lieferung

// Initialisierungsfunktion
function init() {
    renderData('Pizza', myDishes.Pizza); // Lade und rendere Pizza-Daten
    renderData('Pasta', myDishes.Pasta); // Lade und rendere Pasta-Daten
    renderData('Dessert', myDishes.Desserts); // Lade und rendere Dessert-Daten
    toggleSection("pizza"); // Standardmäßig Pizza anzeigen
    renderBasket(); // Warenkorb initialisieren
}

// Funktion zum Rendern von Daten für eine Kategorie
function renderData(categoryName, categoryData) {
    const container = document.getElementById(categoryName.toLowerCase());
    container.innerHTML = `
        <img src="${categoryData.img}" alt="${categoryName}" class="contentCategory${categoryName}Img">
    `;

    const dishes = categoryData.dishes;
    let categoryHTML = "";

    for (const dish of dishes) {
        categoryHTML += createDishHTML(dish);
    }

    container.innerHTML += categoryHTML;
}

// Funktion zum Hinzufügen eines Gerichts zum Warenkorb
function addToBasket(name, price, amount) {
    const existingItem = basket.find(item => item.name === name);
    if (existingItem) {
        existingItem.amount += amount;
    } else {
        basket.push({ name, price, amount });
    }
    renderBasket();
}

// Funktion zum Erhöhen der Menge eines Gerichts im Warenkorb
function increaseAmount(indexIncrease) {
    basket[indexIncrease].amount++;
    renderBasket();
}

// Funktion zum Verringern der Menge eines Gerichts im Warenkorb
function decreaseAmount(indexDecrease) {
    if (basket[indexDecrease].amount > 1) {
        basket[indexDecrease].amount--;
    } else {
        basket.splice(indexDecrease, 1); // Artikel entfernen, wenn die Menge 0 erreicht
    }
    renderBasket();
}

// Funktion zum Entfernen eines Gerichts aus dem Warenkorb
function removeFromBasket(indexRemove) {
    basket.splice(indexRemove, 1); // Entfernt ein Element aus dem Warenkorb
    renderBasket();
}

// Funktion zum Abschließen der Bestellung
function placeOrder() {
    basket = []; // Leert den Warenkorb
    renderBasket();
    document.querySelector(".order-message").innerText = "Vielen Dank für Ihre Testbestellung!";
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
                <p>${item.name}</p>
                <p>Preis: ${item.price.toFixed(2)} €</p>
                <button onclick="decreaseAmount(${i})">-</button>
                <p>${item.amount}x</p>
                <button onclick="increaseAmount(${i})">+</button>
                <button onclick="removeFromBasket(${i})">Entfernen</button>
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
            <button class="placeOrderButton" onclick="placeOrder()">Bestellen</button>
            <p class="order-message"></p>
        </div>
    `;

    basketContainer.innerHTML += `<div class="basket-items">${basketHTML}</div>` + footerHTML;
}

// Funktion zum Umschalten der Kategorien
function toggleSection(sectionId) {
    const sections = document.querySelectorAll(".contentRestaurantCategory");
    for (const section of sections) {
        section.classList.add("hidden");
    }

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove("hidden");
}

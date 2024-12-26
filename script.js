let basket = []; // Basket-Array

// Initialisierungsfunktion
function init() { 
    renderPizzaData(); // Lade und rendere Pizza-Daten
    renderPastaData(); // Lade und rendere Pasta-Daten
    renderDessertData(); // Lade und rendere Dessert-Daten
    toggleSection('pizza'); // Standardmäßig Pizza anzeigen
    renderBasket(); // Warenkorb initialisieren
}

//Funktionen zum Render von Daten
function renderPizzaData() {
    let pizzaContainer = document.getElementById('pizza');
    pizzaContainer.innerHTML = `
        <img src="${myDishes.Pizza.img}" alt="Pizza" class="contentCategoryPizzaImg">
    `;

    let pizzaDishes = myDishes.Pizza.dishes;
    let pizzaHTML = '';

    for (let i = 0; i < pizzaDishes.length; i++) {
        let dish = pizzaDishes[i];
        pizzaHTML += `
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

    pizzaContainer.innerHTML += pizzaHTML;
}

function renderPastaData() {
    let pastaContainer = document.getElementById('pasta');
    pastaContainer.innerHTML = `
        <img src="${myDishes.Pasta.img}" alt="Pasta" class="contentCategoryPastaImg">
    `;

    let pastaDishes = myDishes.Pasta.dishes;
    let pastaHTML = '';

    for (let i = 0; i < pastaDishes.length; i++) {
        let dish = pastaDishes[i];
        pastaHTML += `
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

    pastaContainer.innerHTML += pastaHTML;
}

function renderDessertData() {
    let dessertContainer = document.getElementById('dessert');
    dessertContainer.innerHTML = `
        <img src="${myDishes.Dessert.img}" alt="Dessert" class="contentCategoryDessertImg">
    `;

    let dessertDishes = myDishes.Dessert.dishes;
    let dessertHTML = '';

    for (let i = 0; i < dessertDishes.length; i++) {
        let dish = dessertDishes[i];
        dessertHTML += `
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

    dessertContainer.innerHTML += dessertHTML;
}

//Funktionen zum Verwalten des Warenkorbs
function addToBasket(name, price, amount) {
    // Überprüfen, ob das Gericht bereits im Warenkorb ist
    let existingItem = basket.find(item => item.name === name);
    if (existingItem) {
        // Wenn es bereits im Warenkorb ist, erhöhe den amount
        existingItem.amount += amount;
    } else {
        // Andernfalls füge das Gericht zum Warenkorb hinzu
        basket.push({ name, price, amount });
    }
    renderBasket();
}

function increaseAmount(indexIncrease) {
    basket[indexIncrease].amount++;
    renderBasket();
}

function decreaseAmount(indexDecrease) {
    if (basket[indexDecrease].amount > 1) {
        basket[indexDecrease].amount--;
    } else {
        basket.splice(indexDecrease, 1); // Artikel entfernen, wenn die Menge 0 erreicht
    }
    renderBasket();
}

function removeFromBasket(indexRemove) {
    basket.splice(indexRemove, 1); // Entfernt ein Element aus dem Warenkorb
    renderBasket();
}

function placeOrder() {
    basket = []; // Leert den Warenkorb
    renderBasket();
    document.querySelector('.order-message').innerText = "Vielen Dank für Ihre Testbestellung!";
}

// Funktion zum Rendern des Warenkorbs
function renderBasket() {
    let basketContainer = document.querySelector('.basket');
    basketContainer.innerHTML = '<h1>Warenkorb</h1>';

    let basketHTML = '';
    let totalPrice = 0;

    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        totalPrice += item.price * item.amount;
        basketHTML += `
            <div class="basket-item">
                <p>${item.name}</p>
                <p>Preis: ${item.price.toFixed(2)} €</p>
                <p>Menge: ${item.amount}</p>
                <button onclick="decreaseAmount(${i})">-</button>
                <button onclick="increaseAmount(${i})">+</button>
                <button onclick="removeFromBasket(${i})">Entfernen</button>
            </div>
        `;
    }

    let footerHTML = `
        <div class="basket-footer">
            <div class="total-price">
                <p><strong>Gesamtpreis:</strong> ${totalPrice.toFixed(2)} €</p>
            </div>
            <button class="placeOrderButton" onclick="placeOrder()">Bestellen</button>
            <p class="order-message"></p>
        </div>
    `;

    basketContainer.innerHTML += `<div class="basket-items">${basketHTML}</div>` + footerHTML;
}

// Funktion zum Umschalten der Kategorien
function toggleSection(sectionId) {
    let sections = document.querySelectorAll('.contentRestaurantCategory');
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }

    let activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}
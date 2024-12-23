// Basket-Array außerhalb der Funktionen definieren
let basket = [];

function init() { 
    renderPizzaData(); // Lade und rendere Pizza-Daten
    renderPastaData(); // Lade und rendere Pasta-Daten
    renderDessertData(); // Lade und rendere Dessert-Daten
    toggleSection('pizza'); // Standardmäßig Pizza anzeigen
    renderBasket(); // Warenkorb initialisieren
}

function renderPizzaData() {
    const pizzaContainer = document.getElementById('pizza');
    pizzaContainer.innerHTML = `
        <img src="${myDishes.Pizza.img}" alt="Pizza" class="contentCategoryPizzaImg">
    `;

    let pizzaDishes = myDishes.Pizza.dishes;
    let pizzaHTML = '';

    for (let i = 0; i < pizzaDishes.length; i++) {
        const dish = pizzaDishes[i];
        pizzaHTML += `
            <div class="dish-item">
                <h2>${dish.name}</h2>
                <p>${dish.description}</p>
                <p>Preis: ${dish.price.toFixed(2)} €</p>
                <button onclick="addToBasket('${dish.name}', ${dish.price}, 1)">In den Warenkorb</button>
            </div>
        `;
    }

    pizzaContainer.innerHTML += pizzaHTML;
}

function renderPastaData() {
    const pastaContainer = document.getElementById('pasta');
    pastaContainer.innerHTML = `
        <img src="${myDishes.Pasta.img}" alt="Pasta" class="contentCategoryPastaImg">
    `;

    let pastaDishes = myDishes.Pasta.dishes;
    let pastaHTML = '';

    for (let i = 0; i < pastaDishes.length; i++) {
        const dish = pastaDishes[i];
        pastaHTML += `
            <div class="dish-item">
                <h2>${dish.name}</h2>
                <p>${dish.description}</p>
                <p>Preis: ${dish.price.toFixed(2)} €</p>
                <button onclick="addToBasket('${dish.name}', ${dish.price}, 1)">In den Warenkorb</button>
            </div>
        `;
    }

    pastaContainer.innerHTML += pastaHTML;
}

function renderDessertData() {
    const dessertContainer = document.getElementById('dessert');
    dessertContainer.innerHTML = `
        <img src="${myDishes.Dessert.img}" alt="Dessert" class="contentCategoryDessertImg">
    `;

    let dessertDishes = myDishes.Dessert.dishes;
    let dessertHTML = '';

    for (let i = 0; i < dessertDishes.length; i++) {
        const dish = dessertDishes[i];
        dessertHTML += `
            <div class="dish-item">
                <h2>${dish.name}</h2>
                <p>${dish.description}</p>
                <p>Preis: ${dish.price.toFixed(2)} €</p>
                <button onclick="addToBasket('${dish.name}', ${dish.price}, 1)">In den Warenkorb</button>
            </div>
        `;
    }

    dessertContainer.innerHTML += dessertHTML;
}

function addToBasket(name, price, amount) {
    // Überprüfen, ob das Gericht bereits im Warenkorb ist
    const existingItem = basket.find(item => item.name === name);
    if (existingItem) {
        // Wenn es bereits im Warenkorb ist, erhöhe den amount
        existingItem.amount += amount;
    } else {
        // Andernfalls füge das Gericht zum Warenkorb hinzu
        basket.push({ name, price, amount });
    }
    renderBasket();
}

function renderBasket() {
    const basketContainer = document.querySelector('.basket');
    basketContainer.innerHTML = '<h1>Warenkorb</h1>';

    let basketHTML = '';
    for (let i = 0; i < basket.length; i++) {
        const item = basket[i];
        basketHTML += `
            <div class="basket-item">
                <p>${item.name}</p>
                <p>Preis: ${item.price.toFixed(2)} €</p>
                <p>Menge: ${item.amount}</p>
            </div>
        `;
    }

    basketContainer.innerHTML += basketHTML;
}

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.contentRestaurantCategory');
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}

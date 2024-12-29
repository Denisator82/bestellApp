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
    document.querySelector(".orderMessage").innerText = "Vielen Dank für Ihre Testbestellung!";
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

function toggleMobileBasket() {
    const basketSection = document.getElementById('basketSection');
    const restaurantContent = document.querySelector('.contentRestaurant');

    // Umschalten zwischen Warenkorb anzeigen und Restaurant-Content ausblenden
    basketSection.classList.toggle('hidden');
    restaurantContent.classList.toggle('hidden');
}

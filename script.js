let basket = []; // Array für den Warenkorb
const deliveryCost = 5; // Lieferkosten
const freeDeliveryThreshold = 25; // Schwelle für kostenlose Lieferung

// Initialisierungsfunktion
function init() {
    renderData('pizza', myDishes.pizza); // Lade und rendere Pizza-Daten
    renderData('pasta', myDishes.pasta); // Lade und rendere Pasta-Daten
    renderData('desserts', myDishes.desserts); // Lade und rendere Dessert-Daten
    toggleSection("pizza"); // Standardmäßig Pizza anzeigen
    renderBasket(); // Warenkorb initialisieren
}

// Funktion zum Rendern von Daten für eine Kategorie
function renderData(categoryName, categoryData) {
    const container = document.getElementById(categoryName.toLowerCase());
    container.innerHTML = `
        <img src="${categoryData.img}" alt="${categoryName}" class="content-category-${categoryName}-img">
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

// Funktion zum Umschalten der Kategorien
function toggleSection(sectionId) {
    const sections = document.querySelectorAll(".content-restaurant-category");
    for (const section of sections) {
        section.classList.add("hidden");
    }
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove("hidden");
}

function toggleMobileBasket() {
    const basketSection = document.querySelector('.basket-sticky-rail');
    const restaurantContent = document.querySelector('.content-restaurant');

    if (basketSection && restaurantContent) {
        // Prüfen, ob die Bildschirmbreite unter 920px liegt
        if (window.innerWidth <= 920) {
            basketSection.classList.toggle('visible');
            
            // Content halbtransparent machen, wenn der Warenkorb sichtbar ist
            if (basketSection.classList.contains('visible')) {
                restaurantContent.style.opacity = "0.5";
            } else {
                restaurantContent.style.opacity = "1";
            }
        }
    }
}
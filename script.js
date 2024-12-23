function init() { 
    renderPizzaData(); // Lade und rendere Pizza-Daten
    renderPastaData(); // Lade und rendere Pasta-Daten
    showSection('pizza'); // Standardmäßig Pizza anzeigen
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
            </div>
        `;
    }

    pastaContainer.innerHTML += pastaHTML;
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.contentRestaurantCategory');
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}

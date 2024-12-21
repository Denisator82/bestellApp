function loadPizzaData() {
    const pizzaContainer = document.getElementById('pizza');
    pizzaContainer.innerHTML = '';

    let pizzaDishes = myDishes.Pizza;
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
        pizzaContainer.innerHTML = pizzaHTML;
    }
}

function loadPastaData() {
    const pastaContainer = document.getElementById('pasta');
    pastaContainer.innerHTML = '';

    let pastaDishes = myDishes.Pasta;
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

    pastaContainer.innerHTML = pastaHTML;
}


function init() { 
    loadPizzaData(); 
    loadPastaData();
}
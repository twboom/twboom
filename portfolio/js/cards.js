const session = {}

function createCards() { // Creating cards
    cardElements = [];

    for (cardIndex in cards) {
        const card = cards[cardIndex]

        // Creating container (card itself)
        const container = document.createElement('div');
        container.setAttribute('class', 'card');
        container.setAttribute('data-card', card.name);

        // Creating title
        const title = document.createElement('p');
        title.setAttribute('class', 'card-title');
        title.innerText = card.name.toUpperCase();
        title.setAttribute('data-card', card.name);
        container.appendChild(title);

        // Adding the icon
        const iconContainer = document.createElement('p');
        iconContainer.setAttribute('class', 'icon-container');
        iconContainer.setAttribute('data-card', card.name);
        const icon = document.createElement('img');
        icon.setAttribute('class', `icon`);
        icon.setAttribute('src', `assets/icons/${card.icon}.svg`);
        icon.setAttribute('data-card', card.name);
        iconContainer.appendChild(icon)
        container.appendChild(iconContainer)

        // Adding event listeners
        container.addEventListener('click', displayModal);

        // Adding the completed card to the card elements
        cardElements.push(container)
    }

    return cardElements
}

function displayCards() {
    const cards = createCards();
    for (card in cards) {
        document.getElementById('cards').appendChild(cards[card])
    }
}

function buildPage() {
    displayCards()
}

window.onload = buildPage
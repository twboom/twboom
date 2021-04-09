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
        container.appendChild(title);

        // Adding event listeners
        container.addEventListener('click', displayModal)

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

window.onload = displayCards
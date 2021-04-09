function createModal(modal) { // Making a modal

    // Getting correct contents
    const html = fetchData.data.html[modal];

    // Checking if it exists
    if (modal === undefined || html === undefined) { console.error('No modal found'); return }

    // Making the fullscreen container
    const container = document.createElement('div');
    container.setAttribute('id', 'modal-container');

    // Making 'visible' part
    const content = document.createElement('div');
    content.setAttribute('id', 'modal-content');

    // Setting the contents of the modal
    content.innerHTML = 

    // Appending 'visible' par to fullscreen container
    container.appendChild(content)

    // Returning the finished modal elements
    return container
}

function displayModal(evt) {
    const modal = evt.target.getAttribute('data-card')
}
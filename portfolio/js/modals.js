function createModal(modal) { // Making a modal

    // Getting correct contents
    const html = fetchData.data.html[modal];

    // Checking if it exists
    if (modal === undefined || html === undefined) { console.error('No modal found'); return false }

    // Making the fullscreen container
    const container = document.createElement('div');
    container.setAttribute('id', 'modal-container');

    // Making 'visible' part
    const content = document.createElement('div');
    content.setAttribute('id', 'modal-content');

    // Setting the title
    const title = document.createElement('h1');
    title.setAttribute('id', 'modal-title');
    title.innerText = modal.toUpperCase();
    content.appendChild(title)

    // Setting the contents of the modal
    const contentContainer = document.createElement('section');
    contentContainer.setAttribute('id', 'modal-content-container');
    contentContainer.innerHTML += html;
    content.appendChild(contentContainer)

    // Making the close button
    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'modal-close');
    closeButton.innerText = `Close`;
    closeButton.addEventListener('click', removeModal)
    content.appendChild(closeButton)

    // Appending 'visible' par to fullscreen container
    container.appendChild(content)

    // Returning the finished modal elements
    return container
}

function displayModal(input, custom) {
    let modalName = input;
    if (!custom) { modalName = input.target.getAttribute('data-card') };
    const modal = createModal(modalName);
    if (!modal) { return }
    document.body.appendChild(modal);
    document.body.style.postition = 'sticky';
    document.body.style.top = 0;
};

function removeModal() {
    document.getElementById('modal-container').remove()
}
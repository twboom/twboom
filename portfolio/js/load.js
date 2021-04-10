function loadModal() {
    const thisModal = cards.find( ({ name }) => name === pm.modal )
    if (thisModal === undefined) { return };

    const fetchInterval = setInterval(_ => {
        if (fetchData.data.html[thisModal.name] === undefined) { return };
        clearInterval(fetchInterval)
        displayModal(thisModal.name, true)
    }, 100)
}

loadModal()
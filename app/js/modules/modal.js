const openModal = (classOverlay, classBodyVisible, classOverlayVisible) => {
    const modal = document.querySelector(classOverlay);

    modal.firstElementChild.classList.add(classBodyVisible);
    modal.classList.add(classOverlayVisible);
    document.body.style.overflow = 'hidden';
}

const closeModal = (classOverlay, classBodyVisible, classOverlayVisible) => {
    const modal = document.querySelector(classOverlay);

    modal.firstElementChild.classList.remove(classBodyVisible);
    modal.classList.remove(classOverlayVisible);
    document.body.style.overflow = '';
}


const modal = (triggerSelector, classOverlay, classBodyVisible, classOverlayVisible) => {
    const btns = document.querySelectorAll(triggerSelector);
    const popUp = document.querySelector(classOverlay);

    btns.forEach(btn => {
        btn.addEventListener('click', () => openModal(classOverlay, classBodyVisible, classOverlayVisible));
    });

    popUp.addEventListener('click', (e) => {
        if (e.target === popUp || e.target.getAttribute('data-close') == '') {
            closeModal(classOverlay, classBodyVisible, classOverlayVisible);
        }
    });

};
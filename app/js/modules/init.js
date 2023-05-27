// Инициализация нашей странички, где на неё идет отрисовка карточек с товарами

const renderCards = (parent, section) => {
    document.querySelector(parent).innerHTML = '';
    section.forEach(item => {
        new Cards(item.img, item.alt, item.prodName, item.dateAdded, parent).render();
    });
}

const init = (shop, menus, container, titleText, modalFunc, btn, classOverlay, classBodyVisible, classOverlayVisible) => {
    renderCards(container, shop.longboards);
    modalFunc(btn, classOverlay, classBodyVisible, classOverlayVisible);

    const lists = document.querySelectorAll(menus);

    lists.forEach(list => {
        list.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(titleText).textContent = e.target.textContent;
            switch (e.target.dataset.action) {
                case 'long':
                    renderCards(container, shop.longboards);
                    break;
                case 'skate':
                    renderCards(container, shop.skateboards);
                    break;
                case 'penny':
                    renderCards(container, shop.pennyboards);
                    break;
                case 'finger':
                    renderCards(container, shop.fingerboards);
                    break;
            }
            modalFunc(btn, classOverlay, classBodyVisible, classOverlayVisible);
        });
    });
}


// Функционал преднозначен для открытия бургер меню

const showBurgerMenu = (btn, toggleClass) => {
    const burgerBtn = document.querySelector(btn);

    burgerBtn.addEventListener('click', () => {
        document.querySelector('header').classList.toggle(toggleClass);
    });
}
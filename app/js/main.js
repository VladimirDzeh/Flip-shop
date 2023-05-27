window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    init(
        shopBase,
        '#categories',
        '.cards__items',
        '.cards__title',
        modal,
        '[data-modal="open"]',
        '.pop-up__overlay',
        'pop-up__body--visible',
        'pop-up__overlay--visible'
    );

    submissionForm(
        'form',
        '[data-action="minus"]',
        '[data-action="plus"]',
        '[data-counter]',
        '.pop-up__overlay',
        'pop-up__body',
        'pop-up__body--visible'
    );

    scrolling('.page__up', 'a[href*="#category"]', 'a[href*="#up"]');

    changingTheme('[data-action="theme"]', 'theme-light', 'theme-dark');

    showBurgerMenu('#burger', 'open');

});





// С помощью этого функционала реализован счетчик товаров на страничке

const counterProd = (minusBtn, plusBtn, amount) => {
    const btnMinus = document.querySelector(minusBtn);
    const btnPlus = document.querySelector(plusBtn);
    const counter = document.querySelector(amount);

    btnMinus.addEventListener('click', () => {
        if (+counter.innerText > 1) {
            counter.innerText = --counter.innerText;
        }
    });

    btnPlus.addEventListener('click', () => {
        counter.innerText = ++counter.innerText;
    });
}

// Функционал по показу благодарственного модального окна

const showThanksModal = (popupOverlay, popupBody, popupBodyVisible, form) => {
    const prevModalDialog = document.querySelector(popupOverlay);

    prevModalDialog.firstElementChild.classList.remove(popupBodyVisible);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add(popupBody, popupBodyVisible);
    thanksModal.innerHTML = `
            <div class="pop-up__close" data-close>&#10006</div>
            <div class="prod__choose thanks">Благодарим за покупку!</div>
    `;

    prevModalDialog.append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        form.reset();
        document.querySelector('[data-counter]').innerText = '1';
        closeModal(popupOverlay, popupBodyVisible, `${popupOverlay.slice(1)}--visible`);
    }, 2000);
}


const submissionForm = (formSelector, minusBtn, plusBtn, amount, popupOverlay, popupBody, popupBodyVisible) => {
    const form = document.querySelector(formSelector);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        showThanksModal(popupOverlay, popupBody, popupBodyVisible, form);
    });

    counterProd(minusBtn, plusBtn, amount);
};
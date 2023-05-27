// Это класс с помощью которого создаются карточки на сайт + есть метод,
// с помощью которого дата добавления на сайт превращается в более читаемый вид.

class Cards {
    constructor(src, alt, prodName, dateAdded, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.prodName = prodName;
        this.dateAdded = dateAdded;
        this.parent = document.querySelector(parentSelector);
    }

    getFormattedDateInfo(dateString) {
        const date = new Date(dateString.split('.').reverse().join());

        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const monthsOfYear = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const fullYear = date.getFullYear();

        let monthOfYear = monthsOfYear[date.getMonth()];
        if (monthOfYear === 'Март' || monthOfYear === 'Август') {
            monthOfYear = `${monthOfYear}а`;
        } else {
            monthOfYear = `${monthOfYear.slice(0, -1)}я`;
        }

        let weekNumber = Math.ceil(date.getDate() / 7);
        if (weekNumber === 5 && date.getDate() > 28) {
            weekNumber = 1;
        }

        return `${dayOfWeek}, ${weekNumber} неделя ${monthOfYear} ${fullYear} года`;

    }

    render() {
        const card = document.createElement('li');

        card.classList.add('cards__item');

        card.innerHTML = `
                <article class="card">
                    <div class="card__image">
                        <img src=${this.src} alt=${this.alt}>
                    </div>
                    <div class="card__content">
                    <h3 class="card__title">${this.prodName}</h3>
                    <p class="card__date">Добавлено: ${this.getFormattedDateInfo(this.dateAdded)}</p>
                    <button class="card__btn" data-modal="open">Купить</button>
                    </div>
                </article>
            `;


        this.parent.append(card);
    }
}
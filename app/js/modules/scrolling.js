// Реализован плавный скролл к началу странички или к категориям товаров

const scrolling = (upSelector, smoothScrollElements, arrow) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 400) {
            upElem.style.opacity = '1';
        } else {
            upElem.style.opacity = '0';
        }
    });

    const smoothScrolling = scrollElements => {
        const anchors = document.querySelectorAll(scrollElements);

        anchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                const idElem = anchor.getAttribute('href');
                document.querySelector(idElem).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }

    smoothScrolling(smoothScrollElements);
    smoothScrolling(arrow);

};
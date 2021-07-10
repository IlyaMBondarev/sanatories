let horTabs = document.querySelectorAll('._hor-tabs');

horTabs.forEach(horTabs => {
    let buttons = horTabs.querySelectorAll('._hor-tab-slide-button');
    let contents = horTabs.querySelectorAll('._hor-tab');
    let activeIndex = null;

    contents.forEach((content, index) => {
        if (content.classList.contains('active')) {
            activeIndex = index;
            return
        }
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            contents[activeIndex].classList.remove('active');
            activeIndex = button.dataset.slideto;
            contents[button.dataset.slideto].classList.add('active');
        })
    })
})
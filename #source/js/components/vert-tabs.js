
if (document.querySelector('._vert-tabs')) {
    let vertTabs = document.querySelectorAll('._vert-tabs');

    vertTabs.forEach(vertTabs => {
        let buttons = vertTabs.querySelectorAll('._vert-tabs-button');
        let contents = vertTabs.querySelectorAll('._vert-tabs-button + ._vert-tabs-content');
        let activeIndex = null;

        buttons.forEach((button, index) => {
            if (button.classList.contains('active')) {
                activeIndex = index;
                button.classList.add('active');
                contents[activeIndex].style.maxHeight = `${contents[activeIndex].scrollHeight}px`;
            }
            button.addEventListener('click', () => {
                if (activeIndex === index) {
                    contents[activeIndex].style.maxHeight = '0';
                    button.classList.remove('active');
                    activeIndex = null;
                } else {
                    activeIndex = index;
                    button.classList.add('active');
                    contents[activeIndex].style.maxHeight = `${contents[activeIndex].scrollHeight}px`;
                }
            })
        })
    })
}
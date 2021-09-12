
if (document.querySelector('._vert-tabs')) {
    let vertTabs = document.querySelectorAll('._vert-tabs');

    vertTabs.forEach(vertTabs => {
        let buttons = vertTabs.querySelectorAll('._vert-tabs-button');
        let contents = vertTabs.querySelectorAll('._vert-tabs-button + ._vert-tabs-content');

        if (!contents.length) {
            contents = vertTabs.querySelectorAll('._vert-tabs-content');
        }

        let activeIndex = null;

        buttons.forEach((button, index) => {
            if (button.classList.contains('active')) {
                activeIndex = index;
                button.classList.add('active');
                contents[activeIndex].style.maxHeight = `${contents[activeIndex].scrollHeight}px`;
            }
            button.addEventListener('click', () => {
                if (activeIndex === index) {
                    contents[activeIndex].style.maxHeight = '';
                    button.classList.remove('active');
                    contents[activeIndex].style.overflow = '';
                    setTimeout(() => {
                        contents[activeIndex].style.overflow = '';
                        activeIndex = null;
                    }, 300)
                } else {
                    activeIndex = index;
                    button.classList.add('active');
                    contents[activeIndex].style.maxHeight = `${contents[activeIndex].scrollHeight}px`;
                    setTimeout(() => {
                        contents[activeIndex].style.overflow = 'visible';
                    }, 300)
                }
            })
        })
    })
}
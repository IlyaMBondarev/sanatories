if (document.querySelectorAll('._tabs')) {
    let tabs = document.querySelectorAll('._tabs');

    tabs.forEach(tabs => {
        let inputs = tabs.querySelectorAll('._tabs-input');
        let contents = tabs.querySelectorAll('._tabs-content');
        let activeIndex = null;

        inputs.forEach((input, index) => {
            if (input.checked) {
                activeIndex = index;
                contents[activeIndex].classList.add('active');
                contents[activeIndex].style.maxHeight = `${contents[activeIndex].scrollHeight}px`;
            }
            input.addEventListener('change', () => {
                contents[activeIndex].style.maxHeight = '0';
                contents[activeIndex].classList.remove('active');
                activeIndex = index;
                contents[activeIndex].classList.add('active');
                contents[activeIndex].style.maxHeight = `${contents[activeIndex].scrollHeight}px`;
            })
        })
    })
}
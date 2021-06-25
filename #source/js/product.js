//@prepros-append swiper-bundle.min.js
//@prepros-append all.js


let tabs = document.querySelectorAll('._tabs');

tabs.forEach(tabs => {
    let inputs = tabs.querySelectorAll('._tabs-input');
    let contents = tabs.querySelectorAll('._tabs-content');

    inputs.forEach((input, index) => {
        if (input.checked) {
            activeIndex = index;
            contents[activeIndex].style.maxHeight = `${contents[activeIndex].scrollHeight}px`;
        }
        input.addEventListener('change', () => {
            contents[activeIndex].style.maxHeight = '0';
            activeIndex = index;
            contents[activeIndex].style.maxHeight = `${contents[activeIndex].scrollHeight}px`;
        })
    })
})
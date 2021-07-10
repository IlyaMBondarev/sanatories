if (document.querySelector('.item__images')) {
    const itemImagesSlider = new Swiper('.item__images', {
        navigation: {
            nextEl: '.item__arrow-right',
            prevEl: '.item__arrow-left'
        },
        simulateTouch: false,
        watchOverflow: true,
        slidesPerView: 1,
    });
}

if (document.querySelector('.interesting__slider')) {
    const interestingSlider = new Swiper('.interesting__slider', {
        navigation: {
            nextEl: '.interesting__arrow-right',
            prevEl: '.interesting__arrow-left'
        },
        simulateTouch: false,
        watchOverflow: true,
        slidesPerView: 4,
        spaceBetween: 24
    });
}
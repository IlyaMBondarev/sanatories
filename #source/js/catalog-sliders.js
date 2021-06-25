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
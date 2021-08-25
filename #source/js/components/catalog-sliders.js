if (document.querySelector('.item__images')) {
    const itemImagesSlider = new Swiper('.item__images', {
        navigation: {
            nextEl: '.item__arrow-right',
            prevEl: '.item__arrow-left'
        },
        watchOverflow: true,
        breakpoints: {
            320: {
                simulateTouch: true,
                slidesPerView: 'auto',
                spaceBetween: 23,
            },
            768: {
                simulateTouch: false,
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });
}
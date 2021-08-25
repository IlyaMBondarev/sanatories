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

if (document.querySelector('.interesting__slider')) {
    const interestingSlider = new Swiper('.interesting__slider', {
        navigation: {
            nextEl: '.interesting__arrow-right',
            prevEl: '.interesting__arrow-left'
        },
        watchOverflow: true,
        breakpoints: {
            320: {
                simulateTouch: true,
                slidesPerView: 'auto',
                spaceBetween: 14,
            },
            1230: {
                simulateTouch: false,
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });
}
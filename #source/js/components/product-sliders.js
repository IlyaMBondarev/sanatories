if (document.querySelector('.popup-room__slider > .swiper-container')) {
    const popupRoomImagesSlider = new Swiper('.popup-room__slider > .swiper-container', {
        navigation: {
            nextEl: '.popup-room__slider-arrow-right',
            prevEl: '.popup-room__slider-arrow-left'
        },
        watchOverflow: true,
        slidesPerView: 4,
        spaceBetween: 20
    });
}

if (document.querySelector('.popup-images > .swiper-container')) {
    const popupImagesSlider = new Swiper('.popup-images > .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        watchOverflow: true,
        slidesPerView: 1,
    });

    let popupImagesOpeners = document.querySelectorAll('._popup-images-opener');

    popupImagesOpeners.forEach((opener, index) => {
        opener.addEventListener('click', () => {
            popupImagesSlider.slideTo(index, 0);
        })
    })
}
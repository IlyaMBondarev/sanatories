if (document.querySelector('.popup-room__demo') && document.querySelector('.popup-room__slider')) {
    let demo = document.querySelector('.popup-room__demo > img');
    let images = document.querySelectorAll('.popup-room__slider .swiper-slide > img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (!mobile) {
                demo.src = image.src;
            }
        })
    })
}
if (document.querySelector('.slide-down') && document.querySelector('.slide-to')) {
    let slideDownBtn = document.querySelector('.slide-down');
    let slideToBlock = document.querySelector('.slide-to');

    slideDownBtn.addEventListener('click', () => {
        slideToBlock.scrollIntoView({
            behavior: 'smooth'
        })
    })
}


if (document.querySelector('._nav')) {
    let navBlock = document.querySelector('._nav');

    let links = navBlock.querySelectorAll('._nav-link');
    let items = document.querySelectorAll('._nav-item');
    let indexOfActiveLink = 0;

    links.forEach((link, index) => {
        if (link.classList.contains('active')) {
            indexOfActiveLink = index;
        }

        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('main.page').scrollBy({
                top: items[index].getBoundingClientRect().top - navBlock.scrollHeight,
                behavior: "smooth"
            })
        })
    })
    if (!mobile) {
        if (navBlock.parentElement.getBoundingClientRect().top < 0 && Math.abs(navBlock.parentElement.getBoundingClientRect().top) + navBlock.scrollHeight < navBlock.parentElement.scrollHeight) {
            navBlock.style.top = `${-navBlock.parentElement.getBoundingClientRect().top}px`;
        } else {
            navBlock.style.top = '0';
        }
    }
    
    document.querySelector('main.page').addEventListener('scroll', () => {
        if (!mobile) {
            if (navBlock.parentElement.getBoundingClientRect().top < 0 && Math.abs(navBlock.parentElement.getBoundingClientRect().top) - navBlock.scrollHeight < navBlock.parentElement.scrollHeight) {
                navBlock.style.top = `${-navBlock.parentElement.getBoundingClientRect().top}px`;
            } else {
                navBlock.style.top = '0';
            }

            items.forEach((item, index) => {
                if (item.getBoundingClientRect().top - navBlock.scrollHeight <= 0) {
                    links[indexOfActiveLink].classList.remove('active');
                    indexOfActiveLink = index;
                    links[indexOfActiveLink].classList.add('active');
                }
            })
        }
    })

}
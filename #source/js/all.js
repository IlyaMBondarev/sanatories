
if (document.querySelectorAll('.popups')) {
    let popups = document.querySelector('.popups');

    let popupCallback = popups.querySelector('.popup-callback');

    let popupCallbackOpeners = document.querySelectorAll('._popup-callback-opener');
    let popupCallbackClosers = document.querySelectorAll('._popup-callback-closer');

    
    popups.addEventListener('click', (event) => {
        if (event.target === popups) {
            popups.classList.remove('active');
            popupCallback.classList.remove('active');
        }
    })

    popupCallbackOpeners.forEach(opener => {
        opener.addEventListener('click', () => {
            popups.classList.add('active');
            popupCallback.classList.add('active');
        })
    })
    
    popupCallbackClosers.forEach(closer => {
        closer.addEventListener('click', () => {
            popups.classList.remove('active');
            popupCallback.classList.remove('active');
        })
    })
}

if (document.querySelector('._callbacktabs')) {
    let callbacktabs = document.querySelector('._callbacktabs');
    let inputs = callbacktabs.querySelectorAll('._callbacktabs-input');
    let contents = callbacktabs.querySelectorAll('._callbacktabs-content');
    let activeIndex = 0;

    inputs.forEach((input, index) => {
        if (input.checked) {
            activeIndex = index;
            contents[activeIndex].classList.add('active');
        }
        input.addEventListener('change', () => {
            contents[activeIndex].classList.remove('active');
            activeIndex = index;
            contents[activeIndex].classList.add('active');
        })
    })
}

if (document.querySelector('.select')) {
    let selects = document.querySelectorAll('.select');

    selects.forEach(select => {
        let block = select.querySelector('.select-block');
        let current = select.querySelector('.select-current');

        block.addEventListener('click', () => {
            select.classList.toggle('active');
        })

        document.addEventListener('click', (event) => {
            if (!(select.contains(event.target)) && select.classList.contains('active')) {
                select.classList.remove('active');
            }
        })

        if (select.querySelector('.select-list')) {
            let list = select.querySelector('.select-list');
            let items = list.querySelectorAll('.select-item');
            let activeIndex = 0;

            items.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    activeIndex = index;
                }
                item.addEventListener('click', () => {
                    items[activeIndex].classList.remove('active');
                    activeIndex = index;
                    items[activeIndex].classList.add('active');
                    current.innerHTML = items[activeIndex].textContent;
                    select.classList.remove('active');
                })
            })
        }

        if (select.querySelector('.select-count')) {
            function checkEnding(count, endings) {
                if (count === 1) {
                    return endings[0]
                }
                if (count < 5) {
                    return endings[1]
                }
                return endings[2]
            }


            let parentsBlock = select.querySelector('.select-parents');
            let parentsCountBlock = parentsBlock.querySelector('.select-parents-count');
            let parentsCount = +parentsCountBlock.textContent;
            let parentsBtnLess = parentsBlock.querySelector('.select-parents-less');
            let parentsBtnMore = parentsBlock.querySelector('.select-parents-more');
            let parentsEnding = ['взрослый', 'взрослых', 'взрослых'];
            let parentsSpan = '';

            if (parentsCount > 0) {
                parentsSpan = `${parentsCount} ${checkEnding(parentsCount, parentsEnding)}`;
            }

            let childsBlock = select.querySelector('.select-childs');
            let childsCountBlock = childsBlock.querySelector('.select-childs-count');
            let childsCount = +childsCountBlock.textContent;
            let childsBtnLess = childsBlock.querySelector('.select-childs-less');
            let childsBtnMore = childsBlock.querySelector('.select-childs-more');
            let childsEnding = ['ребёнок', 'ребёнка', 'детей'];
            let childsSpan = '';

            if (childsCount > 0) {
                childsSpan = `${childsCount} ${checkEnding(childsCount, childsEnding)}`;
            }

            if (parentsSpan && childsSpan) {
                current.innerHTML = `<span>${parentsSpan}</span>, <span>${childsSpan}</span>`;
            } else if (parentsSpan) {
                current.innerHTML = `<span>${parentsSpan}</span>`;
            } else if (childsSpan) {
                current.innerHTML = `<span>${childsSpan}</span>`;
            } else {
                current.innerHTML = `<span>Ничего не выбрано</span>`;
            }

            parentsBtnLess.addEventListener('click', () => {
                if (parentsCount > 0) {
                    parentsCount--;
                    parentsCountBlock.textContent = parentsCount;
                    if (parentsCount > 0) {
                        parentsSpan = `${parentsCount} ${checkEnding(parentsCount, parentsEnding)}`;
                    } else {
                        parentsSpan = '';
                    }
                    if (parentsSpan && childsSpan) {
                        current.innerHTML = `<span>${parentsSpan}</span>, <span>${childsSpan}</span>`;
                    } else if (parentsSpan) {
                        current.innerHTML = `<span>${parentsSpan}</span>`;
                    } else if (childsSpan) {
                        current.innerHTML = `<span>${childsSpan}</span>`;
                    } else {
                        current.innerHTML = `<span>Ничего не выбрано</span>`;
                    }
                }
            })

            parentsBtnMore.addEventListener('click', () => {
                parentsCount++;
                parentsCountBlock.textContent = parentsCount;
                parentsSpan = `${parentsCount} ${checkEnding(parentsCount, parentsEnding)}`;
                if (parentsSpan && childsSpan) {
                    current.innerHTML = `<span>${parentsSpan}</span>, <span>${childsSpan}</span>`;
                } else if (parentsSpan) {
                    current.innerHTML = `<span>${parentsSpan}</span>`;
                } else if (childsSpan) {
                    current.innerHTML = `<span>${childsSpan}</span>`;
                } else {
                    current.innerHTML = `<span>Ничего не выбрано</span>`;
                }
            })

            childsBtnLess.addEventListener('click', () => {
                if (childsCount > 0) {
                    childsCount--;
                    childsCountBlock.textContent = childsCount;
                    if (childsCount > 0) {
                        childsSpan = `${childsCount} ${checkEnding(childsCount, childsEnding)}`;
                    } else {
                        childsSpan = '';
                    }
                    if (parentsSpan && childsSpan) {
                        current.innerHTML = `<span>${parentsSpan}</span>, <span>${childsSpan}</span>`;
                    } else if (parentsSpan) {
                        current.innerHTML = `<span>${parentsSpan}</span>`;
                    } else if (childsSpan) {
                        current.innerHTML = `<span>${childsSpan}</span>`;
                    } else {
                        current.innerHTML = `<span>Ничего не выбрано</span>`;
                    }
                }
            })

            childsBtnMore.addEventListener('click', () => {
                childsCount++;
                childsCountBlock.textContent = childsCount;
                childsSpan = `${childsCount} ${checkEnding(childsCount, childsEnding)}`;
                if (parentsSpan && childsSpan) {
                    current.innerHTML = `<span>${parentsSpan}</span>, <span>${childsSpan}</span>`;
                } else if (parentsSpan) {
                    current.innerHTML = `<span>${parentsSpan}</span>`;
                } else if (childsSpan) {
                    current.innerHTML = `<span>${childsSpan}</span>`;
                } else {
                    current.innerHTML = `<span>Ничего не выбрано</span>`;
                }
            })
        }
    })
}
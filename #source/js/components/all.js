
if (document.querySelector('.popups')) {
    let popups = document.querySelector('.popups');
    let popupsClicked = false;

    let popupCallback = popups.querySelector('.popup-callback');

    let popupCallbackOpeners = document.querySelectorAll('._popup-callback-opener');
    let popupCallbackClosers = document.querySelectorAll('._popup-callback-closer');

    
    popups.addEventListener('mousedown', (event) => {
        if (event.target === popups) {
            popupsClicked = true;
        }
    })

    document.addEventListener('mouseup', (event) => {
        if (event.target === popups && popupsClicked) {
            let popupsChilds = document.querySelectorAll('.popups > *');

            popups.classList.remove('active');
            popupsChilds.forEach(child => child.classList.remove('active'));
            popupsClicked = false;
        } else {
            popupsClicked = false;
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

    let popupThanks = document.querySelector('.popup-thanks');
    
    let popupThanksClosers = document.querySelectorAll('._popup-thanks-closer');
    
    popupThanksClosers.forEach(closer => {
        closer.addEventListener('click', () => {
            popups.classList.remove('active');
            popupThanks.classList.remove('active');
        })
    })

    if (document.querySelectorAll('.popup-room')) {
        let popupRoom = document.querySelector('.popup-room');
        
        let popupRoomOpeners = document.querySelectorAll('._popup-room-opener');
        let popupRoomClosers = document.querySelectorAll('._popup-room-closer');

        popupRoomOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                popups.classList.add('active');
                popupRoom.classList.add('active');
            })
        })
        
        popupRoomClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupRoom.classList.remove('active');
            })
        })
    }

    if (document.querySelectorAll('.popup-pick-up')) {
        let popupPickUp = document.querySelector('.popup-pick-up');
        
        let popupPickUpOpeners = document.querySelectorAll('._popup-pick-up-opener');
        let popupPickUpClosers = document.querySelectorAll('._popup-pick-up-closer');

        popupPickUpOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                popups.classList.add('active');
                popupPickUp.classList.add('active');
            })
        })
        
        popupPickUpClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupPickUp.classList.remove('active');
            })
        })
    }

    if (document.querySelectorAll('.popup-pick-up-thanks')) {
        let popupPickUp = document.querySelector('.popup-pick-up-thanks');
        
        let popupPickUpClosers = document.querySelectorAll('._popup-pick-up-thanks-closer');
        
        popupPickUpClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupPickUp.classList.remove('active');
            })
        })
    }

    if (document.querySelectorAll('.popup-parameters')) {
        let popupParameters = document.querySelector('.popup-parameters');
        
        let popupParametersOpeners = document.querySelectorAll('._popup-parameters-opener');
        let popupParametersClosers = document.querySelectorAll('._popup-parameters-closer');

        popupParametersOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                popups.classList.add('active');
                popupParameters.classList.add('active');
            })
        })
        
        popupParametersClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupParameters.classList.remove('active');
            })
        })
    }

    if (document.querySelectorAll('.popup-choice')) {
        let popupChoice = document.querySelector('.popup-choice');
        let popupChoiceRoomName = document.querySelector('.popup-choice__title > span');
        
        let popupChoiceOpeners = document.querySelectorAll('._popup-choice-opener');
        let popupChoiceClosers = document.querySelectorAll('._popup-choice-closer');

        popupChoiceOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                popupChoiceRoomName.textContent = `${opener.dataset.roomname} / `
                popups.classList.add('active');
                popupChoice.classList.add('active');
            })
        })
        
        popupChoiceClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupChoice.classList.remove('active');
            })
        })
    }

    if (document.querySelectorAll('.popup-images')) {
        let popupImages = document.querySelector('.popup-images');
        
        let popupImagesOpeners = document.querySelectorAll('._popup-images-opener');
        let popupImagesClosers = document.querySelectorAll('._popup-images-closer');

        popupImagesOpeners.forEach((opener, index) => {
            opener.addEventListener('click', () => {
                popups.classList.add('active');
                popupImages.classList.add('active');
            })
        })
        
        popupImagesClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupImages.classList.remove('active');
            })
        })
    }
}

if (document.querySelector('._labeltabs')) {
    let labeltabs = document.querySelectorAll('._labeltabs');

    labeltabs.forEach(labeltabs => {
        let inputs = labeltabs.querySelectorAll('._labeltabs-input');
        let contents = labeltabs.querySelectorAll('._labeltabs-content');
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

if (document.querySelector('._pick-up-type')) {
    let types = document.querySelectorAll('._pick-up-type');

    types.forEach(type => {
        let list = type.querySelector('._pick-up-type_list');
        let items = list.querySelectorAll('._pick-up-type_item');
        let typeblocks = type.querySelectorAll('._pick-up-type_block');
        let indexOfActiveBlock = null;

        items.forEach((item, index) => {
            if (item.classList.contains('active')) {
                indexOfActiveBlock = index;
            }
            item.addEventListener('click', () => {
                typeblocks[indexOfActiveBlock].classList.add('hidden');
                indexOfActiveBlock = index;
                typeblocks[indexOfActiveBlock].classList.remove('hidden');
            })
        })
    })
}

if (document.querySelector('._pick-up__edit')) {
    let pickUpEdit = document.querySelector('._pick-up__edit');
    let pickUpEditBlock = pickUpEdit.querySelector('._pick-up__edit-block');
    let pickUpEditForm = pickUpEdit.querySelector('._pick-up__edit-form');
    
    let pickUpEditOpeners = pickUpEdit.querySelectorAll('._pick-up__edit-opener');
    let pickUpEditClosers = pickUpEdit.querySelectorAll('._pick-up__edit-closer');

    pickUpEditOpeners.forEach(opener => {
        opener.addEventListener('click', () => {
            pickUpEditBlock.classList.remove('active');
            pickUpEditForm.classList.add('active');
        })
    })

    pickUpEditClosers.forEach(closer => {
        closer.addEventListener('click', () => {
            pickUpEditBlock.classList.add('active');
            pickUpEditForm.classList.remove('active');
        })
    })
}
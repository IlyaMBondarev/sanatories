window.addEventListener('load', () => {
    let loader = document.querySelector('.loader');

    loader.style.opacity = '0';

    setTimeout(() => {
        loader.style.display = 'none';
    }, 300);
})

let mobile = document.documentElement.clientWidth < 768;

document.addEventListener('resize', () => {
    mobile = document.documentElement.clientWidth < 768;
})

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
            if (opener.dataset.slideto) {
                let inputs = popupCallback.querySelectorAll('._labeltabs-input');
                let contents = popupCallback.querySelectorAll('._labeltabs-content');
                let activeIndex = +opener.dataset.slideto;

                inputs.forEach((input, index) => {
                    if (index !== activeIndex) {
                        input.checked = false;
                        contents[index].classList.remove('active');
                    } else {
                        input.checked = true;
                        contents[activeIndex].classList.add('active');
                    }
                })
            }
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

    let popupError = document.querySelector('.popup-error');
    
    let popupErrorClosers = document.querySelectorAll('._popup-error-closer');
    
    popupErrorClosers.forEach(closer => {
        closer.addEventListener('click', () => {
            popups.classList.remove('active');
            popupError.classList.remove('active');
        })
    })

    if (document.querySelector('.popup-room')) {
        let popupRoom = document.querySelector('.popup-room');
        let popupRoomRoomName = popupRoom.querySelector('.popup-room__title');
        
        let popupRoomOpeners = document.querySelectorAll('._popup-room-opener');
        let popupRoomClosers = document.querySelectorAll('._popup-room-closer');

        popupRoomOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                if (opener.dataset.roomname) {
                    popupRoomRoomName.textContent = `${opener.dataset.roomname}`;
                } else {
                    popupRoomRoomName.textContent = '';
                }
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

    if (document.querySelector('.popup-procedure')) {
        let popupProcedure = document.querySelector('.popup-procedure');
        
        let popupProcedureOpeners = document.querySelectorAll('._popup-procedure-opener');
        let popupProcedureClosers = document.querySelectorAll('._popup-procedure-closer');

        popupProcedureOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                popups.classList.add('active');
                popupProcedure.classList.add('active');
            })
        })
        
        popupProcedureClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupProcedure.classList.remove('active');
            })
        })
    }

    if (document.querySelector('.popup-pick-up')) {
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

    if (document.querySelector('.popup-pick-up-thanks')) {
        let popupPickUp = document.querySelector('.popup-pick-up-thanks');
        
        let popupPickUpClosers = document.querySelectorAll('._popup-pick-up-thanks-closer');
        
        popupPickUpClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupPickUp.classList.remove('active');
            })
        })
    }

    if (document.querySelector('.popup-parameters')) {
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

    if (document.querySelector('.popup-settings')) {
        let popupSettings = document.querySelector('.popup-settings');
        
        let popupSettingsOpeners = document.querySelectorAll('._popup-settings-opener');
        let popupSettingsClosers = document.querySelectorAll('._popup-settings-closer');

        popupSettingsOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                popups.classList.add('active');
                popupSettings.classList.add('active');
            })
        })
        
        popupSettingsClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupSettings.classList.remove('active');
            })
        })
    }

    if (document.querySelector('.popup-choice')) {
        let popupChoice = document.querySelector('.popup-choice');
        let popupChoiceRoomName = document.querySelector('.popup-choice__title > span:first-child');
        let popupChoiceSanatoryName = document.querySelector('.popup-choice__title > span:last-child');
        
        let popupChoiceOpeners = document.querySelectorAll('._popup-choice-opener');
        let popupChoiceClosers = document.querySelectorAll('._popup-choice-closer');

        popupChoiceOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                if (opener.dataset.roomname) {
                    popupChoiceRoomName.textContent = `${opener.dataset.roomname} / `;
                } else {
                    popupChoiceRoomName.textContent = '';
                }
                if (opener.dataset.sanatoryname) {
                    popupChoiceSanatoryName.textContent = `${opener.dataset.sanatoryname}`;
                } else {
                    popupChoiceSanatoryName.textContent = '';
                }
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

    if (document.querySelector('.popup-stock')) {
        let popupStock = document.querySelector('.popup-stock');
        let popupStockName = document.querySelector('.popup-stock__title > span');
        
        let popupStockOpeners = document.querySelectorAll('._popup-stock-opener');
        let popupStockClosers = document.querySelectorAll('._popup-stock-closer');

        popupStockOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                if (opener.dataset.stockname) {
                    popupStockName.textContent = `${opener.dataset.stockname}`;
                } else {
                    popupStockName.textContent = '';
                }
                popups.classList.add('active');
                popupStock.classList.add('active');
            })
        })
        
        popupStockClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupStock.classList.remove('active');
            })
        })
    }

    if (document.querySelector('.popup-subscribe')) {
        let popupSubscribe = document.querySelector('.popup-subscribe');
        
        let popupSubscribeOpeners = document.querySelectorAll('._popup-subscribe-opener');
        let popupSubscribeClosers = document.querySelectorAll('._popup-subscribe-closer');

        popupSubscribeOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                popups.classList.add('active');
                popupSubscribe.classList.add('active');
            })
        })
        
        popupSubscribeClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupSubscribe.classList.remove('active');
            })
        })
    }

    if (document.querySelector('.popup-reply')) {
        let popupReply = document.querySelector('.popup-reply');
        
        let popupReplyOpeners = document.querySelectorAll('._popup-reply-opener');
        let popupReplyClosers = document.querySelectorAll('._popup-reply-closer');

        popupReplyOpeners.forEach(opener => {
            opener.addEventListener('click', () => {
                popups.classList.add('active');
                popupReply.classList.add('active');
            })
        })
        
        popupReplyClosers.forEach(closer => {
            closer.addEventListener('click', () => {
                popups.classList.remove('active');
                popupReply.classList.remove('active');
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
                activeIndex = index;
                contents.forEach((content, index) => {
                    if (index !== activeIndex) {
                        content.classList.remove('active');
                    } else {
                        content.classList.add('active');
                    }
                })
            })
        })
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

if (document.querySelector('._tel')) {
    let phoneInputs = document.querySelectorAll('._tel');

    phoneInputs.forEach(phone => {
        phone.addEventListener('focus', () => {
            if (!(phone.value.length)) {
                phone.value = '+7 (';
            }
        })
        phone.addEventListener('input', (event) => {
            if (event.inputType && event.inputType.split('')[0] === 'i') {
                let valueArr = phone.value.split('').filter(sym => !isNaN(sym) && sym !== ' ');
                switch (valueArr.length) {
                    case 0: {
                        phone.value = '+7 (';
                        break;
                    }
                    case 1: {
                        phone.value = '+7 (';
                        break;
                    }
                    case 2: {
                        phone.value = `+7 (${valueArr[1]}`;
                        break;
                    }
                    case 3: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}`;
                        break;
                    }
                    case 4: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) `;
                        break;
                    }
                    case 5: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}`;
                        break;
                    }
                    case 6: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}`;
                        break;
                    }
                    case 7: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-`;
                        break;
                    }
                    case 8: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}`;
                        break;
                    }
                    case 9: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}${valueArr[8]}-`;
                        break;
                    }
                    case 10: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}${valueArr[8]}-${valueArr[9]}`;
                        break;
                    }
                    case 11: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}${valueArr[8]}-${valueArr[9]}${valueArr[10]}`;
                        break;
                    }
                    default: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}${valueArr[8]}-${valueArr[9]}${valueArr[10]}`;
                        break;
                    }
                }
            } else {
                let valueArr = phone.value.split('').filter(sym => !isNaN(sym) && sym !== ' ');
                switch (valueArr.length) {
                    case 0: {
                        phone.value = '+7 (';
                        break;
                    }
                    case 1: {
                        phone.value = '+7 (';
                        break;
                    }
                    case 2: {
                        phone.value = `+7 (${valueArr[1]}`;
                        break;
                    }
                    case 3: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}`;
                        break;
                    }
                    case 4: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}`;
                        break;
                    }
                    case 5: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}`;
                        break;
                    }
                    case 6: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}`;
                        break;
                    }
                    case 7: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}`;
                        break;
                    }
                    case 8: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}`;
                        break;
                    }
                    case 9: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}${valueArr[8]}`;
                        break;
                    }
                    case 10: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}${valueArr[8]}-${valueArr[9]}`;
                        break;
                    }
                    case 11: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}${valueArr[8]}-${valueArr[9]}${valueArr[10]}`;
                        break;
                    }
                    default: {
                        phone.value = `+7 (${valueArr[1]}${valueArr[2]}${valueArr[3]}) ${valueArr[4]}${valueArr[5]}${valueArr[6]}-${valueArr[7]}${valueArr[8]}-${valueArr[9]}${valueArr[10]}`;
                        break;
                    }
                }
            }
        })
    })
}

if (document.querySelector('.burger')) {
    let burger = document.querySelector('.burger');
    
    let burgerOpeners = document.querySelectorAll('._burger-opener');
    let burgerClosers = document.querySelectorAll('._burger-closer');

    burgerOpeners.forEach(opener => {
        opener.addEventListener('click', () => {
            burger.classList.add('active');
            document.querySelector('main.page').style.position = 'fixed';
            document.querySelector('main.page').style.overflow = 'hidden';
            document.querySelector('main.page > header.header').scrollIntoView(false);
        })
    })
    
    burgerClosers.forEach(closer => {
        closer.addEventListener('click', () => {
            burger.classList.remove('active');
            document.querySelector('main.page').style.position = '';
            document.querySelector('main.page').style.overflow = '';
        })
    })
}

if (document.querySelector('._burger-drop')) {
    let drops = document.querySelectorAll('._burger-drop');

    drops.forEach(drop => {
        let dropBtn = drop.querySelector('._burger-drop-btn');
        let dropBlock = drop.querySelector('._burger-drop-block');
        dropBtn.addEventListener('click', () => {
            if (dropBlock.style.maxHeight) {
                dropBlock.style.maxHeight = '';
                dropBtn.classList.remove('active');
            } else {
                dropBlock.style.maxHeight = `${dropBlock.scrollHeight}px`;
                dropBtn.classList.add('active');
            }
        })
    })
}
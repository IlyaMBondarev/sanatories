function isValid(input) {
    if (input.name === 'dates') {
        return !!input.value
    }
    if (input.name === 'tickets') {
        return input.value !== '0'
    }
    if (input.name === 'name') {
        return !!input.value
    }
    if (input.name === 'phone') {
        return input.value.length === 18
    }
    if (input.name === 'reply') {
        return !!input.value
    }
    if (input.name === 'message') {
        return !!input.value
    }
    if (input.name === 'mail') {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input.value).toLowerCase());
    }
}

if (document.getElementById('mainPickUpForm')) {
    let mainPickUpForm = document.getElementById('mainPickUpForm');

    mainPickUpForm.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
        }
    })

    let requiredInputs = mainPickUpForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    mainPickUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(mainPickUpForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо за обращение';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы вам перезвоним в течение года';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('mainPickUpFormMobile')) {
    let mainPickUpForm = document.getElementById('mainPickUpFormMobile');

    mainPickUpForm.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
        }
    })

    let requiredInputs = mainPickUpForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    mainPickUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(mainPickUpForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо за обращение';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы вам перезвоним в течение года';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('popupQuizForm') && document.getElementById('popupQuizThanksForm')) {
    let popupQuizForm = document.getElementById('popupQuizForm');
    let popupQuizThanksForm = document.getElementById('popupQuizThanksForm');

    let requiredInputs = popupQuizThanksForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    popupQuizThanksForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(popupQuizForm);
            let formDataAdding = new FormData(popupQuizThanksForm);
            for (var pair of formDataAdding.entries()) {
                formData.append(pair[0], pair[1]);
            }

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо за заполнение опроса';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы вам перезвоним в течение полугода';
                document.querySelector('.popups .popup-pick-up-thanks').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-pick-up-thanks').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('callbackForm')) {
    let callbackForm = document.getElementById('callbackForm');

    let requiredInputs = callbackForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    callbackForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(callbackForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы с вами свяжемся после додичка в четверг';
                document.querySelector('.popups .popup-callback').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-callback').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('popupChoiceForm')) {
    let popupChoiceForm = document.getElementById('popupChoiceForm');

    let requiredInputs = popupChoiceForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    popupChoiceForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let popupChoiceTitle = document.querySelector('.popup-choice .popup-choice__title').textContent;
            let formData = new FormData(popupChoiceForm);
            formData.append('choice', popupChoiceTitle);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы с вами свяжемся после додичка в четверг';
                document.querySelector('.popups .popup-choice').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-choice').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('popupStockForm')) {
    let popupStockForm = document.getElementById('popupStockForm');

    let requiredInputs = popupStockForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    popupStockForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let popupStockName = document.querySelector('.popup-choice .popup-choice__title > span').textContent;
            let formData = new FormData(popupStockForm);
            formData.append('choice', popupStockName);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы с вами свяжемся после додичка в четверг';
                document.querySelector('.popups .popup-stock').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-stock').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('footerSubscribeForm')) {
    let footerSubscribeForm = document.getElementById('footerSubscribeForm');

    let requiredInputs = footerSubscribeForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    footerSubscribeForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(footerSubscribeForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо за подписку';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = '';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('pickUpForm')) {
    let pickUpForm = document.getElementById('pickUpForm');

    pickUpForm.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
        }
    })

    let requiredInputs = pickUpForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    pickUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(pickUpForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('catalogConsultationForm')) {
    let catalogConsultationForm = document.getElementById('catalogConsultationForm');

    let requiredInputs = catalogConsultationForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    catalogConsultationForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(catalogConsultationForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо за обращение';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы вам перезвоним в течение года';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('popupSubscribeForm')) {
    let popupSubscribeForm = document.getElementById('popupSubscribeForm');

    let requiredInputs = popupSubscribeForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    popupSubscribeForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let popupChoiceTitle = document.querySelector('.popup-choice .popup-choice__title').textContent;
            let formData = new FormData(popupSubscribeForm);
            formData.append('choice', popupChoiceTitle);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы с вами свяжемся после додичка в четверг';
                document.querySelector('.popups .popup-subscribe').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-subscribe').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('consultationForm')) {
    let consultationForm = document.getElementById('consultationForm');

    let requiredInputs = consultationForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    consultationForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let popupChoiceTitle = document.querySelector('.popup-choice .popup-choice__title').textContent;
            let formData = new FormData(consultationForm);
            formData.append('choice', popupChoiceTitle);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы с вами свяжемся после додичка в четверг';
                document.querySelector('.popups .popup-choice').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-choice').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('searchProductForm')) {
    let searchProductForm = document.getElementById('searchProductForm');

    searchProductForm.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
        }
    })

    let requiredInputs = searchProductForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    searchProductForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(searchProductForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (!result.ok) {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('parametersProductForm')) {
    let parametersProductForm = document.getElementById('parametersProductForm');

    parametersProductForm.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
        }
    })

    let requiredInputs = parametersProductForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    parametersProductForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(parametersProductForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups').classList.remove('active');
                document.querySelector('.popups .popup-parameters').classList.remove('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-parameters').classList.remove('active');
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('pricesProductForm') && document.getElementById('pricesProductLastForm')) {
    let pricesProductForm = document.getElementById('pricesProductForm');
    let pricesProductLastForm = document.getElementById('pricesProductLastForm');

    let requiredInputs = pricesProductLastForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    pricesProductLastForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(pricesProductForm);
            let formDataAdding = new FormData(pricesProductLastForm);
            for (var pair of formDataAdding.entries()) {
                formData.append(pair[0], pair[1]);
            }

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.product-prices._hor-tabs ._hor-tab:nth-child(2)').classList.remove('active');
                document.querySelector('.product-prices._hor-tabs ._hor-tab:last-child').classList.add('active');
            } else {
                document.querySelector('.product-prices._hor-tabs ._hor-tab:nth-child(2)').classList.remove('active');
                document.querySelector('.product-prices._hor-tabs ._hor-tab:first-child').classList.add('active');
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('popupSettingsForm')) {
    let popupSettingsForm = document.getElementById('popupSettingsForm');

    let requiredInputs = popupSettingsForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    popupSettingsForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(popupSettingsForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-settings').classList.remove('active');
                document.querySelector('.popups').classList.remove('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-settings').classList.remove('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('popupReplyForm')) {
    let popupReplyForm = document.getElementById('popupReplyForm');

    let requiredInputs = popupReplyForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    popupReplyForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(popupReplyForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Отзыв добавлен!';
                document.querySelector('.popups .popup-settings').classList.remove('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups .popup-settings').classList.remove('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}

if (document.getElementById('contactsForm')) {
    let contactsForm = document.getElementById('contactsForm');

    let requiredInputs = contactsForm.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('change', () => {
            req.classList.remove('_error');
        })
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    contactsForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            let formData = new FormData(contactsForm);

            //отправка

            /*
            let response = await fetch('/path', {
                method: 'POST',
                body: new FormData(formElem)
                });

            let result = await response.json();
            */
            let result = {
                ok: true,
            }

            if (result.ok) {
                document.querySelector('.popups .popup-thanks .popup-thanks__title').textContent = 'Спасибо';
                document.querySelector('.popups .popup-thanks .popup-thanks__content').textContent = 'Мы с вами свяжемся после додичка в четверг';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-thanks').classList.add('active');
            } else {
                document.querySelector('.popups .popup-error .popup-error__title').textContent = 'Произошла какая-то ошибка. Попробуйте еще раз';
                document.querySelector('.popups').classList.add('active');
                document.querySelector('.popups .popup-error').classList.add('active');
            }
        }
        
    })
}
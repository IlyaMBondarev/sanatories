if (document.querySelector('._popup-quiz')) {
    let quiz = document.querySelector('._popup-quiz');
    let questions = quiz.querySelectorAll('._popup-quiz-question');
    let stepsCurr = quiz.querySelector('._popup-quiz-steps-curr');
    let stepsLength = quiz.querySelector('._popup-quiz-steps-length');
    let line = quiz.querySelector('._popup-quiz-line');
    let prev = quiz.querySelector('._popup-quiz-prev');
    let next = quiz.querySelector('._popup-quiz-next');
    let indexOfActiveQuestion = null;
    stepsLength.textContent = questions.length;

    questions.forEach((question, i) => {
        if (question.classList.contains('active')) {
            indexOfActiveQuestion = i;
            stepsCurr.textContent = indexOfActiveQuestion + 1;
            line.style.width = `${(indexOfActiveQuestion + 1) * 25}%`;
        }
    })

    prev.addEventListener('click', () => {
        if (indexOfActiveQuestion > 0) {
            questions[indexOfActiveQuestion].classList.remove('active');
            indexOfActiveQuestion--;
            stepsCurr.textContent = indexOfActiveQuestion + 1;
            line.style.width = `${(indexOfActiveQuestion + 1) * 25}%`;
            questions[indexOfActiveQuestion].classList.add('active');
            next.classList.add('_popup-thanks-opener');
            next.classList.add('_popup-pick-up-closer');
        }
    })

    next.addEventListener('click', () => {
        questions[indexOfActiveQuestion].classList.remove('active');
        if (indexOfActiveQuestion < questions.length - 1) {
            indexOfActiveQuestion++;
        } else {
            document.querySelector('.popup-pick-up').classList.remove('active');
            document.querySelector('.popup-pick-up-thanks').classList.add('active');
            indexOfActiveQuestion = 0;
        }
        stepsCurr.textContent = indexOfActiveQuestion + 1;
        line.style.width = `${(indexOfActiveQuestion + 1) * 25}%`;
        questions[indexOfActiveQuestion].classList.add('active');
    })
}
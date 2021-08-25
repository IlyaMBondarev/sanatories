

let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
let daysInYear = 365;
let maxCountDays = 21;

/**
 * Функция вставляет даты заезда/выезда в календарь, 
 * находящийся в выпадающем списке select с соответствующим id
 * @param {string} id 
 * @param {string || number} enterYear 
 * @param {string || number} exitYear 
 * @param {string || number} enterMonth 
 * @param {string || number} exitMonth 
 * @param {string || number} enterDate 
 * @param {string || number} exitDate 
 */
function pullDatesInCalendar(id, enterYear, exitYear, enterMonth, exitMonth, enterDate, exitDate) {
    let select = document.querySelector(`#${id}`);
    let calendarBlock = select.querySelector('.select-calendar');
    let calendarTable = calendarBlock.querySelector('.select-calendar-table');
    let calendarMonth = calendarBlock.querySelector('.select-calendar-month');
    let calendarCurr = select.querySelector('.select-calendar-current');
    let calendarCurrInput = select.querySelector('.select-current-input-dates');
    let calendarArrowLeft = calendarBlock.querySelector('.select-calendar-arrow-left');
    let calendarArrowRight = calendarBlock.querySelector('.select-calendar-arrow-right');
    let calendarEnterDay = calendarBlock.querySelector('.select-calendar-enter-input');
    let calendarEnterMonth = calendarBlock.querySelector('.select-calendar-enter-select');
    let calendarEnterMonthCurr = calendarEnterMonth.querySelector('.select-current');
    let calendarEnterMonthList = calendarEnterMonth.querySelector('.select-list');
    let calendarEnterMonthItems = calendarEnterMonth.querySelectorAll('.select-item');
    let calendarExitDay = calendarBlock.querySelector('.select-calendar-exit-input');
    let calendarExitMonth = calendarBlock.querySelector('.select-calendar-exit-select');
    let calendarExitMonthCurr = calendarExitMonth.querySelector('.select-current');
    let calendarExitMonthList = calendarExitMonth.querySelector('.select-list');
    let calendarExitMonthItems = calendarExitMonth.querySelectorAll('.select-item');
    let calendarCountDays = calendarBlock.querySelector('.select-calendar-count-days');
    let startDayAfterToday = 0;
    let startCountDays = 0;

    let calendarObj = {
        calendarBlock,
        calendarTable,
        calendarMonth,
        calendarCurr,
        calendarCurrInput,
        calendarArrowLeft,
        calendarArrowRight,
        calendarEnterDay,
        calendarEnterMonth,
        calendarEnterMonthCurr,
        calendarEnterMonthList,
        calendarEnterMonthItems,
        calendarExitDay,
        calendarExitMonth,
        calendarExitMonthCurr,
        calendarExitMonthList,
        calendarExitMonthItems,
        calendarCountDays,
        startDayAfterToday,
        startCountDays
    }

    pullDates(calendarTable.dataset.year, enterYear, exitYear, enterMonth, exitMonth, enterDate, exitDate, calendarObj);
}

/**
 * Функция вставляет дату заезда в календарь, 
 * находящийся в выпадающем списке select с соответствующим id
 * @param {string} id
 * @param {string || number} currYear
 * @param {string || number} currMonth
 * @param {string || number} currDate
 */
function pullDateInCalendar(id, currYear, currMonth, currDate) {
    let select = document.querySelector(`#${id}`);
    let calendarBlock = select.querySelector('.select-calendar');
    let calendarTable = calendarBlock.querySelector('.select-calendar-table');
    let calendarMonth = calendarBlock.querySelector('.select-calendar-month');
    let calendarCurr = select.querySelector('.select-calendar-current');
    let calendarCurrInput = select.querySelector('.select-current-input-dates');
    let calendarArrowLeft = calendarBlock.querySelector('.select-calendar-arrow-left');
    let calendarArrowRight = calendarBlock.querySelector('.select-calendar-arrow-right');
    let startDayAfterToday = 0;

    let calendarObj = {
        calendarBlock,
        calendarTable,
        calendarMonth,
        calendarCurr,
        calendarCurrInput,
        calendarArrowLeft,
        calendarArrowRight,
        startDayAfterToday
    }

    pullDate(currYear, currMonth, currDate, calendarObj);
}

function fillTable(currYear, currMonth, calendarObj) {
    if (currMonth === 12) {
        currYear++;
        currMonth = 0;
    } else if (currMonth === -1) {
        currYear--;
        currMonth = 11;
    }
    let Dlast = new Date(currYear,currMonth+1,0).getDate();
    let D = new Date(currYear,currMonth,Dlast);
    let DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay();
    let DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay();
    let calendar = '<tr>';
    let startActiveDateTime = new Date(+calendarObj.calendarEnterMonthCurr.dataset.year, +calendarObj.calendarEnterMonthCurr.dataset.month, +calendarObj.calendarEnterDay.value).getTime();
    let endActiveDateTime = new Date(+calendarObj.calendarExitMonthCurr.dataset.year, +calendarObj.calendarExitMonthCurr.dataset.month, +calendarObj.calendarExitDay.value).getTime();
    if (DNfirst != 0) {
        for(let i = 1; i < DNfirst; i++) calendar += '<td></td>';
    } else {
        for(let i = 0; i < 6; i++) calendar += '<td></td>';
    }
    if (calendarObj.calendarTable.dataset.nextyear === 'true') {
        for(let i = 1; i <= Dlast; i++) {
            if (startActiveDateTime <= new Date(+currYear, +currMonth, i).getTime() && endActiveDateTime >= new Date(+currYear, +currMonth, i).getTime()) {
                if (+currYear === new Date().getFullYear() && +currMonth === new Date().getMonth() && i === new Date().getDate()) {
                    calendar += '<td class="date active today">' + i + '</td>';
                } else {
                    calendar += '<td class="date active">' + i + '</td>';
                }
            } else {
                if (+currYear === new Date().getFullYear() && +currMonth === new Date().getMonth() && i === new Date().getDate()) {
                    calendar += '<td class="date today">' + i + '</td>';
                } else {
                    calendar += '<td class="date">' + i + '</td>';
                }
            }
            if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
                calendar += '</tr><tr>';
            }
        }
    } else {
        for(let i = 1; i <= Dlast; i++) {
            if (startActiveDateTime <= new Date(+currYear, +currMonth, i).getTime() && endActiveDateTime >= new Date(+currYear, +currMonth, i).getTime()) {
                if (+currYear === new Date().getFullYear() && +currMonth === new Date().getMonth() && i === new Date().getDate()) {
                    calendar += '<td class="date active today">' + i + '</td>';
                } else {
                    calendar += '<td class="date active">' + i + '</td>';
                }
            } else {
                if (+currYear === new Date().getFullYear() && +currMonth === new Date().getMonth() && i === new Date().getDate()) {
                    calendar += '<td class="date today">' + i + '</td>';
                } else {
                    calendar += '<td class="date">' + i + '</td>';
                }
            }
            if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
                calendar += '</tr><tr>';
            }
        }
    }
    
    for(let i = DNlast; i < 7; i++) calendar += '<td></td>';

    calendarObj.calendarTable.querySelector('tbody').innerHTML = calendar;
    calendarObj.calendarTable.dataset.month = D.getMonth();
    calendarObj.calendarTable.dataset.year = D.getFullYear();

    calendarObj.calendarMonth.innerHTML = month[D.getMonth()];
}

function pullDates(currYear, enterYear, exitYear, enterMonth, exitMonth, enterDate, exitDate, calendarObj) {

    if (Math.ceil(new Date(enterYear, enterMonth, enterDate).getTime() - new Date().getTime())/24/60/60/1000 < 0) {
        enterYear = 1 + +enterYear;
    }

    if (Math.ceil(new Date(exitYear, exitMonth, exitDate).getTime() - new Date().getTime())/24/60/60/1000 < 0) {
        exitYear = 1 + +exitYear;
    }
    
    let startDate = new Date(enterYear, enterMonth, enterDate);
    let endDate = new Date(exitYear, exitMonth, exitDate);
    let datesDifference = Math.round((endDate.getTime() - startDate.getTime())/1000/60/60/24);

    if (exitYear > enterYear) {
        calendarObj.calendarTable.dataset.nextyear = true;
    } else {
        calendarObj.calendarTable.dataset.nextyear = false;
    }

    if (datesDifference <= 0) {
        [startDate, endDate] = [endDate, startDate];
        [enterYear, enterMonth, enterDate] = [exitYear, exitMonth, exitDate];
        datesDifference = Math.round((endDate.getTime() - startDate.getTime())/1000/60/60/24);
    }

    if (new Date().getFullYear() % 4 === 0) {
        daysInYear = 366;
    }

    if (datesDifference > daysInYear) {
        exitYear = exitYear - 1;
        endDate = new Date(exitYear, exitMonth, exitDate);
        datesDifference = Math.round((endDate.getTime() - startDate.getTime())/1000/60/60/24);
    }

    if (datesDifference > maxCountDays) {
        exitYear--;
        datesDifference = maxCountDays;
        endDate = new Date(startDate.getTime() + datesDifference*24*60*60*1000);
        [exitYear, exitMonth, exitDate] = [endDate.getFullYear(), endDate.getMonth(), endDate.getDate()];
    }

    calendarObj.calendarEnterDay.value = enterDate;
    calendarObj.calendarExitDay.value = exitDate;

    calendarObj.calendarEnterMonthItems[calendarObj.calendarEnterMonthCurr.dataset.month].classList.remove('active');
    calendarObj.calendarEnterMonthCurr.dataset.month = enterMonth;
    calendarObj.calendarEnterMonthCurr.dataset.year = enterYear;
    calendarObj.calendarEnterMonthCurr.textContent = month[enterMonth];
    calendarObj.calendarEnterMonthItems[calendarObj.calendarEnterMonthCurr.dataset.month].classList.add('active');

    calendarObj.calendarExitMonthItems[calendarObj.calendarExitMonthCurr.dataset.month].classList.remove('active');
    calendarObj.calendarExitMonthCurr.dataset.month = exitMonth;
    calendarObj.calendarExitMonthCurr.dataset.year = exitYear;
    calendarObj.calendarExitMonthCurr.textContent = month[exitMonth];
    calendarObj.calendarExitMonthItems[calendarObj.calendarExitMonthCurr.dataset.month].classList.add('active');

    calendarObj.calendarCountDays.value = datesDifference;
    fillTable(+currYear, +calendarObj.calendarTable.dataset.month, calendarObj);
    
    calendarObj.calendarCurr.textContent = `${enterDate} ${month[enterMonth].slice(0,3).toLowerCase()} - ${exitDate} ${month[exitMonth].slice(0,3).toLowerCase()} / ${calendarObj.calendarCountDays.value} дн.`;
    calendarObj.calendarCurrInput.value = "true";
    calendarObj.calendarCurrInput.classList.remove('_error');
}

function startFillTable(currDate, currMonth, currYear, calendarObj) {

    let Dlast = new Date(currYear,currMonth+1,0).getDate();
    let mouseMovingOnCalendar = false;
    let startDayOnMoving = null;
    let mouseDidNotMove = null;
    let firstClick = true;

    if (currDate + calendarObj.startDayAfterToday + calendarObj.startCountDays <= Dlast) {
        calendarObj.calendarEnterDay.value = currDate + calendarObj.startDayAfterToday;
        calendarObj.calendarExitDay.value = currDate + calendarObj.startDayAfterToday + calendarObj.startCountDays;

        calendarObj.calendarEnterMonthCurr.textContent = month[currMonth];
        calendarObj.calendarEnterMonthCurr.dataset.month = currMonth;
        calendarObj.calendarEnterMonthCurr.dataset.year = currYear;
        calendarObj.calendarEnterMonthItems[currMonth].classList.add('active');
        let currentEnterInput = calendarObj.calendarEnterMonth.querySelector('.select-current-input');
        currentEnterInput.value = calendarObj.calendarEnterMonthItems[currMonth].textContent;

        calendarObj.calendarExitMonthCurr.textContent = month[currMonth];
        calendarObj.calendarExitMonthCurr.dataset.month = currMonth;
        calendarObj.calendarExitMonthCurr.dataset.year = currYear;
        calendarObj.calendarExitMonthItems[currMonth].classList.add('active');
        let currentExitInput = calendarObj.calendarExitMonth.querySelector('.select-current-input');
        currentExitInput.value = calendarObj.calendarExitMonthItems[currMonth].textContent;

    } else if (currDate + calendarObj.startDayAfterToday <= Dlast) {
        calendarObj.calendarEnterDay.value = currDate + calendarObj.startDayAfterToday;
        calendarObj.calendarExitDay.value = calendarObj.startCountDays - (Dlast - currDate - calendarObj.startDayAfterToday);
        
        calendarObj.calendarEnterMonthCurr.textContent = month[currMonth];
        calendarObj.calendarEnterMonthCurr.dataset.month = currMonth;
        calendarObj.calendarEnterMonthCurr.dataset.year = currYear;
        calendarObj.calendarEnterMonthItems[currMonth].classList.add('active');

        if (month[currMonth + 1]) {
            calendarObj.calendarExitMonthCurr.textContent = month[currMonth + 1];
            calendarObj.calendarExitMonthCurr.dataset.month = currMonth + 1;
            calendarObj.calendarExitMonthCurr.dataset.year = currYear;
            calendarObj.calendarExitMonthItems[currMonth + 1].classList.add('active');
        } else {
            calendarObj.calendarExitMonthCurr.textContent = month[0];
            calendarObj.calendarExitMonthCurr.dataset.month = 0;
            calendarObj.calendarExitMonthCurr.dataset.year = currYear + 1;
            calendarObj.calendarExitMonthItems[0].classList.add('active');
        }
    } else {
        calendarObj.calendarEnterDay.value = calendarObj.startDayAfterToday - (Dlast - currDate);
        calendarObj.calendarExitDay.value = calendarObj.startDayAfterToday - (Dlast - currDate) + calendarObj.startCountDays;

        if (month[currMonth + 1]) {
            calendarObj.calendarEnterMonthCurr.textContent = month[currMonth + 1];
            calendarObj.calendarEnterMonthCurr.dataset.month = currMonth + 1;
            calendarObj.calendarEnterMonthCurr.dataset.year = currYear;
            calendarObj.calendarExitMonthCurr.textContent = month[currMonth + 1];
            calendarObj.calendarExitMonthCurr.dataset.month = currMonth + 1;
            calendarObj.calendarExitMonthCurr.dataset.year = currYear;
        } else {
            calendarObj.calendarEnterMonthCurr.textContent = month[0];
            calendarObj.calendarEnterMonthCurr.dataset.year = currYear + 1;
            calendarObj.calendarEnterMonthCurr.dataset.month = currMonth + 1;
            calendarObj.calendarExitMonthCurr.textContent = month[0];
            calendarObj.calendarExitMonthCurr.dataset.year = currYear + 1;
            calendarObj.calendarExitMonthCurr.dataset.month = currMonth + 1;
        }
    }

    calendarObj.calendarCountDays.value = calendarObj.startCountDays;
    calendarObj.calendarCountDays.max = maxCountDays;
    
    pullDates(calendarObj.calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, calendarObj.calendarExitMonthCurr.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.month, calendarObj.calendarExitMonthCurr.dataset.month, calendarObj.calendarEnterDay.value, calendarObj.calendarExitDay.value, calendarObj);

    calendarObj.calendarTable.querySelector('tbody').addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('date')) {
            if (+calendarObj.calendarTable.dataset.year < new Date().getFullYear() || (+calendarObj.calendarTable.dataset.year === new Date().getFullYear() && +calendarObj.calendarTable.dataset.month < new Date().getMonth()) || (+calendarObj.calendarTable.dataset.year === new Date().getFullYear() && +calendarObj.calendarTable.dataset.month === new Date().getMonth() && +event.target.textContent < new Date().getDate())) {
                return
            }
            mouseMovingOnCalendar = true;
            mouseDidNotMove = true;
            startDayOnMoving = event.target.textContent;
        }
    })

    calendarObj.calendarTable.querySelector('tbody').addEventListener('mousemove', (event) => {
        mouseDidNotMove = false;
        if (mouseMovingOnCalendar && event.target.classList.contains('date')) {
            if (+calendarObj.calendarTable.dataset.year < new Date().getFullYear() || (+calendarObj.calendarTable.dataset.year === new Date().getFullYear() && +calendarObj.calendarTable.dataset.month < new Date().getMonth()) || (+calendarObj.calendarTable.dataset.year === new Date().getFullYear() && +calendarObj.calendarTable.dataset.month === new Date().getMonth() && +event.target.textContent < new Date().getDate())) {
                return
            }
            firstClick = true;
            if (+event.target.textContent >= startDayOnMoving) {
                pullDates(calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.month, calendarObj.calendarTable.dataset.month, startDayOnMoving, event.target.textContent, calendarObj);
            } else {
                pullDates(calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.month, calendarObj.calendarTable.dataset.month, event.target.textContent, startDayOnMoving, calendarObj);
            }
        }
    })

    calendarObj.calendarTable.querySelector('tbody').addEventListener('mouseup', (event) => {
        if (mouseDidNotMove) {
            if (+calendarObj.calendarTable.dataset.year < new Date().getFullYear() || (+calendarObj.calendarTable.dataset.year === new Date().getFullYear() && +calendarObj.calendarTable.dataset.month < new Date().getMonth()) || (+calendarObj.calendarTable.dataset.year === new Date().getFullYear() && +calendarObj.calendarTable.dataset.month === new Date().getMonth() && +event.target.textContent < new Date().getDate())) {
                return
            }
            if (firstClick) {
                pullDates(calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.month, calendarObj.calendarTable.dataset.month, event.target.textContent, event.target.textContent, calendarObj);
            } else {
                if (+event.target.textContent >= +calendarObj.calendarEnterDay.value && +calendarObj.calendarEnterMonthCurr.dataset.month === +calendarObj.calendarTable.dataset.month && +calendarObj.calendarEnterMonthCurr.dataset.year === +calendarObj.calendarTable.dataset.year || +calendarObj.calendarEnterMonthCurr.dataset.month < +calendarObj.calendarTable.dataset.month && +calendarObj.calendarEnterMonthCurr.dataset.year === +calendarObj.calendarTable.dataset.year || +calendarObj.calendarEnterMonthCurr.dataset.year < +calendarObj.calendarTable.dataset.year){
                    pullDates(calendarObj.calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, calendarObj.calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.month, calendarObj.calendarTable.dataset.month, +calendarObj.calendarEnterDay.value, event.target.textContent, calendarObj);
                } else {
                    pullDates(calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.year, calendarObj.calendarExitMonthCurr.dataset.year, calendarObj.calendarTable.dataset.month, calendarObj.calendarExitMonthCurr.dataset.month, event.target.textContent, +calendarObj.calendarExitDay.value, calendarObj);
                }
            }
            firstClick = !firstClick;
        }
        mouseMovingOnCalendar = false;
    })
}

function fillTable2(currYear, currMonth, currDate, calendarObj) {
    let Dlast = new Date(currYear,currMonth+1,0).getDate();
    let D = new Date(currYear,currMonth,Dlast);
    let DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay();
    let DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay();
    let calendar = '<tr>';
    if (DNfirst != 0) {
        for(let i = 1; i < DNfirst; i++) calendar += '<td></td>';
    } else {
        for(let i = 0; i < 6; i++) calendar += '<td></td>';
    }
    for(let i = 1; i <= Dlast; i++) {
        if (+calendarObj.calendarCurr.dataset.year === +currYear && +calendarObj.calendarCurr.dataset.month === +currMonth && +currDate === +i) {
            if (+currYear === new Date().getFullYear() && +currMonth === new Date().getMonth() && i === new Date().getDate()) {
                calendar += '<td class="date active today">' + i + '</td>';
            } else {
                calendar += '<td class="date active">' + i + '</td>';
            }
        } else {
            if (+currYear === new Date().getFullYear() && +currMonth === new Date().getMonth() && i === new Date().getDate()) {
                calendar += '<td class="date today">' + i + '</td>';
            } else {
                calendar += '<td class="date">' + i + '</td>';
            }
        }
        if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
            calendar += '</tr><tr>';
        }
    }
    
    for(let i = DNlast; i < 7; i++) calendar += '<td></td>';

    calendarObj.calendarTable.querySelector('tbody').innerHTML = calendar;
    calendarObj.calendarTable.dataset.date = currDate;
    calendarObj.calendarTable.dataset.month = D.getMonth();
    calendarObj.calendarTable.dataset.year = D.getFullYear();

    calendarObj.calendarMonth.innerHTML = month[D.getMonth()];
}

function pullDate(currYear, currMonth, currDate, calendarObj) {

    calendarObj.calendarCurr.dataset.date = currDate;
    calendarObj.calendarCurr.dataset.month = currMonth;
    calendarObj.calendarCurr.dataset.year = currYear;

    fillTable2(+calendarObj.calendarTable.dataset.year, +calendarObj.calendarTable.dataset.month, +calendarObj.calendarCurr.dataset.date, calendarObj);
    
    calendarObj.calendarCurr.textContent = `${currDate}.${('00' + (+currMonth + 1)).slice(-2)}.${currYear}`;
    calendarObj.calendarCurrInput.value = "true";
    calendarObj.calendarCurrInput.classList.remove('_error');
}

function startFillTable2(currYear, currMonth, currDate, calendarObj) {
    let Dlast = new Date(currYear,currMonth+1,0).getDate();

    if (calendarObj.startDayAfterToday) {
        currDate = +currDate + +calendarObj.startDayAfterToday;
    }

    if (currDate > +Dlast) {
        currDate = +currDate - +Dlast;
        if (+currMonth === 11) {
            currMonth = 0;
            currYear = +currYear + 1;
        } else {
            currMonth = +currMonth + 1;
        }
    }
    
    pullDate(currYear, currMonth, currDate, calendarObj);

    calendarObj.calendarTable.querySelector('tbody').addEventListener('click', (event) => {
        if (event.target.classList.contains('date')) {
            if (+calendarObj.calendarTable.dataset.year < new Date().getFullYear() || (+calendarObj.calendarTable.dataset.year === new Date().getFullYear() && +calendarObj.calendarTable.dataset.month < new Date().getMonth()) || (+calendarObj.calendarTable.dataset.year === new Date().getFullYear() && +calendarObj.calendarTable.dataset.month === new Date().getMonth() && +event.target.textContent < new Date().getDate())) {
                return
            }
            pullDate(calendarObj.calendarTable.dataset.year, calendarObj.calendarTable.dataset.month, event.target.textContent, calendarObj);
        }
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
            if ((!(select.contains(event.target)) || event.target === select) && select.classList.contains('active')) {
                select.classList.remove('active');
            }
        })

        if (select.querySelector('.select-pick-date')) {
            let calendarBlock = select.querySelector('.select-calendar');
            let calendarTable = calendarBlock.querySelector('.select-calendar-table');
            let calendarMonth = calendarBlock.querySelector('.select-calendar-month');
            let calendarCurr = select.querySelector('.select-calendar-current');
            let calendarCurrInput = select.querySelector('.select-current-input-dates');
            let calendarArrowLeft = calendarBlock.querySelector('.select-calendar-arrow-left');
            let calendarArrowRight = calendarBlock.querySelector('.select-calendar-arrow-right');
            let startDayAfterToday = 7;

            let calendarObj = {
                calendarBlock,
                calendarTable,
                calendarMonth,
                calendarCurr,
                calendarCurrInput,
                calendarArrowLeft,
                calendarArrowRight,
                startDayAfterToday
            }
            
            calendarTable.dataset.month = new Date().getMonth();
            calendarTable.dataset.year = new Date().getFullYear();

            // первоначальное заполнение календаря
            startFillTable2(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), calendarObj);

            // переключатель минус месяц
            calendarArrowLeft.addEventListener('click', () => {
                fillTable2(calendarTable.dataset.year, +calendarTable.dataset.month - 1, +calendarTable.dataset.date, calendarObj);
            })
            // переключатель плюс месяц
            calendarArrowRight.addEventListener('click', () => {
                fillTable2(calendarTable.dataset.year, +calendarTable.dataset.month + 1, +calendarTable.dataset.date, calendarObj);
            })


        } else if (select.querySelector('.select-calendar')) {
            let calendarBlock = select.querySelector('.select-calendar');
            let calendarTable = calendarBlock.querySelector('.select-calendar-table');
            let calendarMonth = calendarBlock.querySelector('.select-calendar-month');
            let calendarCurr = select.querySelector('.select-calendar-current');
            let calendarCurrInput = select.querySelector('.select-current-input-dates');
            let calendarArrowLeft = calendarBlock.querySelector('.select-calendar-arrow-left');
            let calendarArrowRight = calendarBlock.querySelector('.select-calendar-arrow-right');
            let calendarEnterDay = calendarBlock.querySelector('.select-calendar-enter-input');
            let calendarEnterMonth = calendarBlock.querySelector('.select-calendar-enter-select');
            let calendarEnterMonthCurr = calendarEnterMonth.querySelector('.select-current');
            let calendarEnterMonthList = calendarEnterMonth.querySelector('.select-list');
            let calendarEnterMonthItems = calendarEnterMonth.querySelectorAll('.select-item');
            let calendarExitDay = calendarBlock.querySelector('.select-calendar-exit-input');
            let calendarExitMonth = calendarBlock.querySelector('.select-calendar-exit-select');
            let calendarExitMonthCurr = calendarExitMonth.querySelector('.select-current');
            let calendarExitMonthList = calendarExitMonth.querySelector('.select-list');
            let calendarExitMonthItems = calendarExitMonth.querySelectorAll('.select-item');
            let calendarCountDays = calendarBlock.querySelector('.select-calendar-count-days');
            let startDayAfterToday = 7;
            let startCountDays = 3;

            let calendarObj = {
                calendarBlock,
                calendarTable,
                calendarMonth,
                calendarCurr,
                calendarCurrInput,
                calendarArrowLeft,
                calendarArrowRight,
                calendarEnterDay,
                calendarEnterMonth,
                calendarEnterMonthCurr,
                calendarEnterMonthList,
                calendarEnterMonthItems,
                calendarExitDay,
                calendarExitMonth,
                calendarExitMonthCurr,
                calendarExitMonthList,
                calendarExitMonthItems,
                calendarCountDays,
                startDayAfterToday,
                startCountDays
            }
            
            calendarTable.dataset.month = new Date().getMonth();
            calendarTable.dataset.year = new Date().getFullYear();

            // первоначальное заполнение календаря
            startFillTable(new Date().getDate(), new Date().getMonth(), new Date().getFullYear(), calendarObj);

            // переключатель минус месяц
            calendarArrowLeft.addEventListener('click', () => {
                fillTable( calendarTable.dataset.year, +calendarTable.dataset.month - 1, calendarObj);
            })
            // переключатель плюс месяц
            calendarArrowRight.addEventListener('click', () => {
                fillTable( calendarTable.dataset.year, +calendarTable.dataset.month + 1, calendarObj);
            })
            
            calendarEnterDay.addEventListener('input', () => {
                if (calendarEnterDay.value > new Date(calendarTable.dataset.year, +calendarEnterMonthCurr.dataset.month + 1, 0).getDate()) {
                    calendarEnterDay.value = new Date(calendarTable.dataset.year, +calendarEnterMonthCurr.dataset.month + 1, 0).getDate();
                } else if (calendarExitDay.value == '') {
                    calendarExitDay.value = '';
                } else if (calendarExitDay.value < 1 && calendarExitDay.value !== '') {
                    calendarExitDay.value = 1;
                }
                pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, calendarObj.calendarExitMonthCurr.dataset.year, calendarEnterMonthCurr.dataset.month, calendarExitMonthCurr.dataset.month, calendarEnterDay.value, calendarExitDay.value, calendarObj);
            })
            
            calendarEnterDay.addEventListener('blur', () => {
                if (calendarEnterDay.value == '') {
                    calendarEnterDay.value = 1;
                    pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, calendarObj.calendarExitMonthCurr.dataset.year, calendarEnterMonthCurr.dataset.month, calendarExitMonthCurr.dataset.month, calendarEnterDay.value, calendarExitDay.value, calendarObj);
                }
            })
            
            calendarExitDay.addEventListener('input', () => {
                if (calendarExitDay.value > new Date(calendarTable.dataset.year, +calendarExitMonthCurr.dataset.month + 1, 0).getDate()) {
                    calendarExitDay.value = new Date(calendarTable.dataset.year, +calendarExitMonthCurr.dataset.month + 1, 0).getDate();
                } else if (calendarExitDay.value == '') {
                    calendarExitDay.value = '';
                } else if (calendarExitDay.value < 1 && calendarExitDay.value !== '') {
                    calendarExitDay.value = 1;
                }
                pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, calendarObj.calendarExitMonthCurr.dataset.year, calendarEnterMonthCurr.dataset.month, calendarExitMonthCurr.dataset.month, calendarEnterDay.value, calendarExitDay.value, calendarObj);
            })
            
            calendarExitDay.addEventListener('blur', () => {
                if (calendarExitDay.value == '') {
                    calendarExitDay.value = 1;
                    pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, calendarObj.calendarExitMonthCurr.dataset.year, calendarEnterMonthCurr.dataset.month, calendarExitMonthCurr.dataset.month, calendarEnterDay.value, calendarExitDay.value, calendarObj);
                }
            })

            calendarEnterMonthItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    if (calendarEnterDay.value > new Date(calendarTable.dataset.year, +index + 1, 0).getDate()) {
                        calendarEnterDay.value = new Date(calendarTable.dataset.year, +index + 1, 0).getDate();
                    }
                    pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, calendarObj.calendarExitMonthCurr.dataset.year, index, calendarExitMonthCurr.dataset.month, calendarEnterDay.value, calendarExitDay.value, calendarObj);
                })
            })

            calendarExitMonthItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    if (calendarExitDay.value > new Date(calendarTable.dataset.year, +index + 1, 0).getDate()) {
                        calendarExitDay.value = new Date(calendarTable.dataset.year, +index + 1, 0).getDate();
                    }
                    pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, calendarObj.calendarExitMonthCurr.dataset.year, calendarEnterMonthCurr.dataset.month, index, calendarEnterDay.value, calendarExitDay.value, calendarObj);
                })
            })
            
            calendarCountDays.addEventListener('blur', () => {

                let startDate = new Date(calendarEnterMonthCurr.dataset.year, calendarEnterMonthCurr.dataset.month, calendarEnterDay.value);
                let endDate = new Date(startDate.getTime()+((+calendarObj.calendarCountDays.value + 1)*24*60*60*1000));

                if (startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth() && startDate.getDate() === endDate.getDate()) {
                    pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, endDate.getFullYear(), startDate.getMonth(), endDate.getMonth(), startDate.getDate(), endDate.getDate(), calendarObj);
                } else if (+endDate.getDate() === 1) {
                    pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, endDate.getFullYear(), startDate.getMonth(), endDate.getMonth()-1, startDate.getDate(), new Date(calendarTable.dataset.year, endDate.getMonth(), 0).getDate(), calendarObj);
                } else {
                    pullDates(calendarTable.dataset.year, calendarObj.calendarEnterMonthCurr.dataset.year, endDate.getFullYear(), startDate.getMonth(), endDate.getMonth(), startDate.getDate(), endDate.getDate()-1, calendarObj);
                }
            })
            
        } else if (select.querySelector('.select-list-multiple')) {
            let list = select.querySelector('.select-list');
            let currentInput = select.querySelector('.select-current-input');
            let items = list.querySelectorAll('.select-item');
            let activeItems = {};

            items.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    activeItems[index] = item.textContent;
                }
                item.addEventListener('click', () => {
                    if (activeItems[index]) {
                        item.classList.remove('active');
                        delete activeItems[index];
                    } else {
                        item.classList.add('active');
                        activeItems[index] = item.textContent;
                    }

                    let values = Object.values(activeItems);

                    if (values.length > 1) {
                        current.innerHTML = 'Выбрано ' + values.length + ' профиля';
                    } else if (values.length === 1) {
                        current.innerHTML = values[0];
                    } else {
                        current.innerHTML = 'Ничего не выбрано';
                    }
                    
                    currentInput.value = values.join(',');
                    if (mobile) {
                        select.classList.remove('active');
                    }
                })
            })
        } else if (select.querySelector('.select-list')) {
            let list = select.querySelector('.select-list');
            let currentInput = select.querySelector('.select-current-input');
            let items = list.querySelectorAll('.select-item');
            let activeIndex = 0;

            items.forEach((item, index) => {
                if (item.classList.contains('active')) {
                    activeIndex = index;
                }
                item.addEventListener('click', () => {
                    if (current.dataset.month) {
                        select.classList.remove('active');
                        return
                    }
                    items[activeIndex].classList.remove('active');
                    activeIndex = index;
                    items[activeIndex].classList.add('active');
                    current.innerHTML = items[activeIndex].textContent;
                    currentInput.value = items[activeIndex].textContent;
                    select.classList.remove('active');
                })
            })
        } else if (select.querySelector('.select-count')) {
            function checkEnding(count, endings) {
                if (count === 1) {
                    return endings[0]
                }
                if (count < 5) {
                    return endings[1]
                }
                return endings[2]
            }

            let ticketsCurrentInput = select.querySelector('.select-current-input-tickets');

            let parentsBlock = select.querySelector('.select-parents');
            let parentsCurrentInput = select.querySelector('.select-current-input-parents');
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
            let childsCurrentInput = select.querySelector('.select-current-input-childs');
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
            parentsCurrentInput.value = parentsCount;
            childsCurrentInput.value = childsCount;
            ticketsCurrentInput.value = +childsCount + +parentsCount;
            ticketsCurrentInput.classList.remove('_error');

            parentsBtnLess.addEventListener('click', () => {
                if (parentsCount > 1) {
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
                    parentsCurrentInput.value = parentsCount;
                    ticketsCurrentInput.value = +childsCount + +parentsCount;
                    ticketsCurrentInput.classList.remove('_error');
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
                parentsCurrentInput.value = parentsCount;
                ticketsCurrentInput.value = +childsCount + +parentsCount;
                ticketsCurrentInput.classList.remove('_error');
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
                    childsCurrentInput.value = childsCount;
                    ticketsCurrentInput.value = +childsCount + +parentsCount;
                    ticketsCurrentInput.classList.remove('_error');
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
                childsCurrentInput.value = childsCount;
                ticketsCurrentInput.value = +childsCount + +parentsCount;
                ticketsCurrentInput.classList.remove('_error');
            })
        }
    })
}
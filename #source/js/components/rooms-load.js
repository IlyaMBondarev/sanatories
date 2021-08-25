if (document.querySelector('._rooms')) {
    let rooms = document.querySelector('._rooms');
    let roomsItems = rooms.querySelector('._rooms-items');
    let roomsLoadBtn = rooms.querySelector('._rooms-load');

    roomsLoadBtn.addEventListener('click', () => {
        if (roomsLoadBtn.classList.contains('_rooms-load')) {
            roomsItems.style.maxHeight = `${roomsItems.scrollHeight}px`;

            //загрузка новых блоков
            let item = roomsItems.children[0].outerHTML;
            let randomCountItems = Math.ceil(Math.random()*5);
            for (let i = 0; i < randomCountItems; i++) {
                roomsItems.innerHTML += item;
            }
            //конец загрузки

            setTimeout(() => {
                roomsItems.style.maxHeight = `${roomsItems.scrollHeight}px`;
            }, 0)
            roomsLoadBtn.classList.remove('_rooms-load');
            roomsLoadBtn.classList.add('hidden');
        }
    })
}
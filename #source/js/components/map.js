if (document.querySelector('._map')) {
    let maps = document.querySelectorAll('._map');

    maps.forEach(map => {
        map.addEventListener('click', () => {
            if (map.classList.contains('_map')) {

                // загрузка карты по каким-то параметрам
                // TODO

                map.classList.remove('_map');
            }
        })
    })
}
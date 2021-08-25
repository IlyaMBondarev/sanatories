if (document.querySelector('._medical-base')) {
    let medicalBase = document.querySelector('._medical-base');
    let medicalBaseItems = medicalBase.querySelector('._medical-base-items');
    let medicalBaseLoadBtn = medicalBase.querySelector('._medical-base-load');

    medicalBaseLoadBtn.addEventListener('click', () => {
        if (medicalBaseLoadBtn.classList.contains('_medical-base-load')) {
            medicalBaseItems.style.maxHeight = `${medicalBaseItems.scrollHeight}px`;

            //загрузка новых блоков
            let item = medicalBaseItems.children[0].outerHTML;
            let randomCountItems = Math.floor(Math.random()*10) + 2;
            for (let i = 0; i < randomCountItems; i++) {
                medicalBaseItems.innerHTML += item;
            }
            //конец загрузки

            setTimeout(() => {
                medicalBaseItems.style.maxHeight = `${medicalBaseItems.scrollHeight}px`;
            }, 0)
            medicalBaseLoadBtn.classList.remove('_medical-base-load');
            medicalBaseLoadBtn.classList.add('hidden');
        }
    })
}
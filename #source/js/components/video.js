if (document.querySelector('._video')) {
    let videos = document.querySelectorAll('._video');

    videos.forEach(video => {
        video.addEventListener('click', () => {
            if (video.classList.contains('_video')) {
                video.innerHTML = `<iframe src="${video.dataset.linktovideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="height: 100%; width: 100%"></iframe>`;
                video.classList.remove('_video');
            }
        })
    })
}
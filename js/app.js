fetch('https://picsum.photos/v2/list?page=1&limit=10').then(response => response.json()).then(data => {
    const gallery = document.getElementById('gallery');
    data.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        imgElement.alt = image.author;
        imgElement.classList.add('gallery-image');
        gallery.appendChild(imgElement);
    });
});

document.getElementById('loadMore').addEventListener('click', () => {
    fetch('https://picsum.photos/v2/list?page=2&limit=10').then(response => response.json()).then(data => {
        const gallery = document.getElementById('gallery');
        data.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.download_url;
            imgElement.alt = image.author;
            imgElement.classList.add('gallery-image');
            gallery.appendChild(imgElement);
        });
    });
});
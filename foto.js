// Función para crear elementos de imagen
function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

// Función para manejar clic en miniatura
function onThumbnailClick(event) {
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.classList.remove('hidden');
    modalView.appendChild(image);
}

// Función para manejar clic en modal
function onModalClick() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}

// Cargar miniaturas en el álbum
const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
}

// Configurar modal
const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);
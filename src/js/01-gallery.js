// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryItemsBasic = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
</div>`;
  })
  .join('');
gallery.innerHTML = galleryItemsBasic;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

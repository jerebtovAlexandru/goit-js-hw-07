import { galleryItems } from './gallery-items.js';


const galleryRef = document.querySelector(".gallery");
const gallery = galleryItems
  .map(
    (i) =>
      `<li class="gallery__item"><a class="gallery__link" href= "${i.original}"><img class="gallery__image"src="${i.preview}" alt="${i.description}"/></a></li>`,
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", gallery);

let instance = new SimpleLightbox(".gallery a", {
  overlayOpacity: 1,
  captionSelector: ".gallery__image",
  captionsData: "alt",
  captionDelay: 250,
    animationSpeed:350,
});


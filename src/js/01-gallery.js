import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector(".gallery");
const gallery = galleryItems
  .map(
    (i) =>
      `<li class="gallery__item"><a class="gallery__link" href= "${i.original}"><img class="gallery__image"src="${i.preview}"data-source="${i.original}"alt="${i.description}"/></a></li>`,
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", gallery);
galleryRef.addEventListener("click", validation);
let instance = '';

function validation(e) {
    e.preventDefault();
    if (e.target.tagName !== "IMG") {
        return;
 }
    const url = e.target.dataset.source;
    const description = e.target.alt;

     doModal(url, description)
}


function doModal(url, description) {
    instance = basicLightbox.create(`
    <img src="${url}" alt="${description}" width="800" height="600">
`);
    instance.show();
    window.addEventListener("keydown" , closeModal);
}
  


function closeModal(e) {
    if (e.code === "Escape") {
        instance.close();
    }
    window.removeEventListener('keydown' , closeModal)
 }


 
//<li class="gallery__item">
//  <a class="gallery__link" href="large-image.jpg">
//    <img
//      class="gallery__image"
//      src="small-image.jpg"
//      data-source="large-image.jpg"
//      alt="Image description"
//    />
//  </a>
//</li>
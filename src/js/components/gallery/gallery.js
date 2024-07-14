import "./gallery.css";

export default class Gallery {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._element = element;

    this._element.addEventListener("click", this._deleteImage);
  }

  _renderImage(name, url) {
    return `
      <article class="item-container">
        <div class="image-container">
          <img src="${url}" class="image">
        </div>
        <span class="name-img">${name}</span>
        <span class="delete-image">X</span>
      </article>
    `;
  }

  _deleteImage(e) {
    if (e.target.classList.contains("delete-image")) {
      e.target.closest(".item-container").remove();
    }
  }
}

import "./add-widget.css";

export default class AddWidget {
  constructor(element, imageHandler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._element = element;
    this._imageHandler = imageHandler;

    this.validationLinkImage = this.validationLinkImage.bind(this);
    this.onAddImage = this.onAddImage.bind(this);
    this.onThrowError = this.onThrowError.bind(this);
    this.deleteErrorMessage = this.deleteErrorMessage.bind(this);

    this.nameImage = this._element.querySelector(".name-image");
    this.linkImage = this._element.querySelector(".link-image");

    this._element.addEventListener("submit", this.validationLinkImage);
  }

  validationLinkImage(e) {
    e.preventDefault();

    const elementImg = document.createElement("img");
    elementImg.src = this.linkImage.value.trim();

    elementImg.addEventListener("load", this.onAddImage);
    elementImg.addEventListener("error", this.onThrowError);
  }

  onAddImage() {
    const item = this._imageHandler(
      this.nameImage.value.trim(),
      this.linkImage.value.trim(),
    );

    document.querySelector(".gallery").insertAdjacentHTML("beforeEnd", item);

    this.clearInput();
  }

  onThrowError() {
    const errorMessage = `<span class="error-message">Неверный URL изображения</span>`;

    this._element
      .querySelector(".add-button")
      .insertAdjacentHTML("beforeBegin", errorMessage);

    this.clearInput();

    this.nameImage.addEventListener("focus", this.deleteErrorMessage);
    this.linkImage.addEventListener("focus", this.deleteErrorMessage);
  }

  clearInput() {
    this.nameImage.value = "";
    this.linkImage.value = "";
  }

  deleteErrorMessage() {
    const errorMessage = this._element.querySelector(".error-message");

    if (errorMessage) {
      errorMessage.remove();
    }
  }
}

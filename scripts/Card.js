import { buttonClosePopupImage, popupImage, template } from "./utils.js";

export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
  }

  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__text");
    this._buttonlike = this._card.querySelector(".element__like-button");
    this._buttonDelete = this._card.querySelector(".element__delete-button");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
  }

  handleLike() {
    this._buttonlike.classList.toggle("element__like-button_active");
  }

  handleOpenPopupImage() {
    popupImage.classList.add("popup__image_show");
    this._popupImageFull = document.querySelector("#popup-image-full");
    this._popupImageTitle = document.querySelector("#popup-image-title");
    this._popupImageFull.src = this._cardImage.src;
    this._popupImageTitle.textContent = this._cardTitle.textContent;
    this._popupImageFull.alt = this._cardTitle.textContent;
  }
  handleClosePopupImage() {
    popupImage.classList.remove("popup__image_show");
  }

  setEventListeners() {
    this._buttonlike.addEventListener("click", () => {
      this.handleLike();
    });

    this._buttonDelete.addEventListener("click", () => {
      this._card.remove();
    });

    this._cardImage.addEventListener("click", () => {
      this.handleOpenPopupImage();
    });
  }

  generateCard() {
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}

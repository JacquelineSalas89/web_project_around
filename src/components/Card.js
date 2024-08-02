import {
  buttonClosePopupImage,
  popupImage,
  template,
} from "../scripts/utils.js";

export default class Card {
  constructor(
    item,
    userId,
    handleCardClick,
    handleAddLike,
    handleRemoveLike,
    handleDeleteCard
  ) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._userId = userId;
    this._id = item._id;
    this.owner = item.owner;
    this._card = this.getTemplate();
    this._handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this.handleDeleteCard = handleDeleteCard;
  }

  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__text");
    this._buttonlike = this._card.querySelector(".element__like-button");
    this._likesCounter = this._card.querySelector(".element__like-counter");
    this._buttonTrashCard = this._card.querySelector(".element__delete-button");
    if (this.owner._id !== this._userId) {
      this._buttonTrashCard.remove();
    }
    this._likesCounter.textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;

    if (this._likes.some((like) => like._id === this._userId)) {
      this._buttonlike.classList.toggle("element__like-button_active");
    }
  }

  /* handleLike() {
    const userLiked = this._likes.some((like) => like._id === this._userId);
    if (userLiked) {
      this._handleAddLike(this._id).then((response) => {
        this._likes = response.likes;
        this._likesCounter.textContent = response.likes.length;
        this._buttonlike.classList.toggle("elements__heart-active");
      });
    } else {
      this._handleRemoveLike(this._id);
      this._likesCounter.textContent = response.likes.length;
      this._buttonlike.classList.toggle("elements__heart-active");
    }
  }*/

  _handleOpenCard() {
    this._handleCardClick();
    popupImage.classList.add("popup__image_show");
    this._popupImageFull = document.querySelector("#popup-image-full");
    this._popupImageTitle = document.querySelector("#popup-image-title");
    this._popupImageFull.src = this._cardImage.src;
    this._popupImageTitle.textContent = this._cardTitle.textContent;
    this._popupImageFull.alt = this._cardTitle.textContent;
  }

  removeCard() {
    this._card.remove();
  }

  handleLike() {
    if (!this._likes.some((like) => like._id === this._userId)) {
      this._handleAddLike(this._id).then((response) => {
        this._buttonlike.classList.toggle("element__like-button_active");
        this._likesCounter.textContent = response.likes.length;
        this._likes = response.likes;
      });
    } else {
      this._handleRemoveLike(this._id).then((response) => {
        this._buttonlike.classList.toggle("element__like-button_active");
        this._likesCounter.textContent = response.likes.length;
        this._likes = response.likes;
      });
    }
  }

  setEventListeners() {
    this._buttonlike.addEventListener("click", () => {
      this.handleLike();
    });

    this._buttonTrashCard.addEventListener("click", () => {
      this.handleDeleteCard(this._id);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleOpenCard(this._name, this._link);
    });
  }

  generateCard() {
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector("#popup-image-full");
    this._title = this._popupElement.querySelector("#popup-image-title");
  }

  open(name, link) {
    super.open();
    this._image.src = link;
    this._title.textContent = name;
  }
}

import { buttonClose } from "../scripts/utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose;
  }

  open() {
    this._popupElement.classList.add("popup_show");
  }

  close() {
    this._popupElement.classList.remove("popup_show");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }

  /*handleButtonClose()
buttonClose.addEventListener("click", () => {
  this.close();
});*/
}

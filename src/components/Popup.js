export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_show");
    this._popupElement.classList.remove("popup__image_show");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  savebutton() {
    this._buttonSaveInfo.textContent = "Guardar";
  }
  _saveChangesButton() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
      this._buttonSaveInfo.textContent = "Guardando...";
    });
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}

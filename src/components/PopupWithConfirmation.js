import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector("#form-card-delete");
    this._handleFormSubmit = handleFormSubmit;
  }

  open(id) {
    super.open();
    this._userId = id;
  }
  setHandleFormSubmit(formSubmit) {
    this._handleFormSubmit = formSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._userId);
    });
  }

  close() {
    super.close();
  }
}

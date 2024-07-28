import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this.inputList = this._formElement.querySelectorAll("popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    this.formValues = {};
    this.inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  /* savebutton() {
    this._buttonSaveInfo.textContent = "guardar";
  }

  _saveChangesButton() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
      this._buttonSaveInfo.textContent = "Guardando...";
    });
  }*/

  close() {
    super.close();
    this._formElement.reset();
    this._buttonSaveInfo.textContent = "Guardar";
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
      this._saveChangesButton().then(() => {
        this.close();
      });
    });
  }
}

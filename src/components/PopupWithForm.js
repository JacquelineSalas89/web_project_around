import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this.inputList = this._formElement.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSaveInfo = document.querySelector(".popup__button-save");
  }

  getInputValues() {
    this.formValues = {};
    console.log("this.inputList", this.inputList);
    this.inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    console.log("this.formValues", this.formValues);
    return this.formValues;
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

  close() {
    super.close();
    this._formElement.reset();
    this._buttonSaveInfo.textContent = "Guardar";
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      (this._buttonSaveInfo.textContent = "Guardando..."),
        this._handleFormSubmit(this.getInputValues());
      this._saveChangesButton().then(() => {
        this.close();
      });
    });
  }
}

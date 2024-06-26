import popup from "./Popup.js";

export default class PopupWithForm extends popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.formElement = this._popupElement.querySelector(".popup__form");
    this.inputList = this.formElement.querySelectorAll("popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    this.formValues = {};
    this.inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  setEventListeners() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
      super.close();
    });
  }
}

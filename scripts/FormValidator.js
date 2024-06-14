export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._settings = settings;
  }

  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._settings.errorMessageClass);
  }

  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    this._errorElement.classList.remove(this._settings.errorMessageClass);
    this._errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      formElement.querySelectorAll(this._settings.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this._settings.submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  /*_formValidation() {
    formList.forEach((formElement) => {
      const validator = new FormValidator(formElement, settings);
      validator.enableValidation();
    });
  }*/

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

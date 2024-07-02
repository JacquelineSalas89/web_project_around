export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._settings = settings;
  }

  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
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
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this.inputList)) {
      this.buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      this.buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this.inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    this.buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
    this._toggleButtonState();

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this.inputList);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

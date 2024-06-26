import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";

import {
  buttonEdit,
  profileName,
  profileAbout,
  formSaveProfile,
  buttonSave,
  buttonClose,
  buttonOpenCardForm,
  inputCardName,
  buttonCloseCard,
  inputCardLink,
  formSaveCard,
  template,
  cardsContainer,
  popupImage,
  popupImageFull,
  popupImageTitle,
  buttonClosePopupImage,
} from "./utils.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach(function (element) {
  const newCard = new Card(element.name, element.link);
  cardsContainer.append(newCard.generateCard());
});

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  profileName.textContent = inputs.name;
  profileAbout.textContent = inputs.job;
});

const popupCard = new PopupWithForm("#popup-card", (inputs) => {
  const newCard = new Card(inputs.title, inputs.link).generateCard();
  cardsContainer.prepend(newCard);
});

popupProfile.setEventListeners();
popupCard.setEventListeners();

buttonEdit.addEventListener("click", () => {
  popupProfile.open();
});

buttonOpenCardForm.addEventListener("click", () => {
  popupCard.open();
});

/*buttonClose.addEventListener("click", () => {
  popupProfile.close();
});
*/

function handleCloseImage() {
  popupImage.classList.remove("popup__image_show");
  buttonClosePopupImage.addEventListener("click", handleCloseImage);
}
/*
buttonCloseCard.addEventListener("click", () => {
  popupCard.close();
});*/
/*document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    handleCloseCardForm();
    handleCloseImage();
    //popupProfile.close();
  }
});

/*popupCard.addEventListener("click", function (evt) {
  if (evt.target === popupCard) {
    handleCloseCardForm();
  }
});
*/
/*popupProfile.addEventListener("click", function (evt) {
  if (evt.target === popupProfile) {
    handleCloseProfile();
  }
});*/

popupImage.addEventListener("click", function (evt) {
  if (evt.target === popupImage) {
    handleCloseImage();
  }
});

const validator = new FormValidator(formSaveCard, {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorMessageClass: "popup__input-error",
});

validator.enableValidation();

const validatorProfile = new FormValidator(formSaveProfile, {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorMessageClass: "popup__input-error",
});

validatorProfile.enableValidation();

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

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

function createCard(item) {
  const card = new Card(item.name, item.link);
  return card.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);
cardSection.renderItems();

/*const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, () => {
      popupImage.open(newCard._name, newCard._link);
    }).generateCard();*/

//const cardElement = card.generateCard();
//cardSection.addItem(cardElement);
//},

//cardSection.renderer()
//});
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__about",
});

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  userInfo.setUserInfo({ name: inputs.name, job: inputs.job });
  /*rofileName.textContent = inputs.name;
  profileAbout.textContent = inputs.job;*/
});

const popupCard = new PopupWithForm("#popup-card", (inputs) => {
  const newCard = new Card(inputs.title, inputs.link, () => {
    popupImage.open(newCard._name, newCard._link);
  }).generateCard();
  cardsContainer.prepend(newCard);
});

const popupImage = new PopupWithImage("#popup-image");

popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();

buttonEdit.addEventListener("click", () => {
  popupProfile.open();
});

buttonOpenCardForm.addEventListener("click", () => {
  popupCard.open();
});
buttonClosePopupImage.addEventListener("click", () => {
  popupImage.close();
});

buttonClose.addEventListener("click", () => {
  popupProfile.close();
});

buttonCloseCard.addEventListener("click", () => {
  popupCard.close();
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

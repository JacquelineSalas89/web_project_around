export const initialCards = [
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

export const popupProfile = document.querySelector("#popup-profile");
export const buttonEdit = document.querySelector(".profile__edit-button");
export const buttonClose = document.querySelector("#close-profile-form");
export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");
export const inputName = document.querySelector("#input-name");
export const inputAbout = document.querySelector("#input-about");
export const formSaveProfile = document.querySelector("#form-profile");
export const buttonSave = document.querySelector("#profile-button-save");
export const buttonOpenCardForm = document.querySelector(
  ".profile__add-button"
);

export const popupCard = document.querySelector("#popup-card");
export const inputCardName = document.querySelector("#input-card");
export const buttonCloseCard = document.querySelector("#close-card-form");
export const inputCardLink = document.querySelector("#input-link");
export const formSaveCard = document.querySelector("#form-card");
export const template = document.querySelector(".template__card");
export const cardsContainer = document.querySelector(".elements");

export const popupImage = document.querySelector("#popup-image");
export const popupImageFull = document.querySelector("#popup-image-full");
export const popupImageTitle = document.querySelector("#popup-image-title");
export const buttonClosePopupImage =
  document.querySelector("#close-popup-image");

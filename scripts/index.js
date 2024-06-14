import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

import {
  initialCards,
  popupProfile,
  buttonEdit,
  buttonClose,
  profileName,
  profileAbout,
  inputName,
  inputAbout,
  formSaveProfile,
  buttonSave,
  buttonOpenCardForm,
  popupCard,
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

/*function createCard(name, link) {
  const card = template.cloneNode(true).content.querySelector(".element");
  const cardImage = card.querySelector(".element__image");
  const cardTitle = card.querySelector(".element__text");
  const buttonlike = card.querySelector(".element__like-button");
  const buttonDelete = card.querySelector(".element__delete-button");

  buttonDelete.addEventListener("click", function () {
    card.remove();
  });

  buttonlike.addEventListener("click", function () {
    buttonlike.classList.toggle("element__like-button_active");
  });

  cardImage.addEventListener("click", function () {
    popupImage.classList.add("popup__image_show");
    popupImageFull.src = cardImage.src;
    popupImageTitle.textContent = cardTitle.textContent;
    popupImageFull.alt = cardTitle.textContent;
  });

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  return card;
}*/

initialCards.forEach(function (element) {
  const newCard = new Card(element.name, element.link);
  cardsContainer.append(newCard.generateCard());
});

function handleCloseImage() {
  popupImage.classList.remove("popup__image_show");
  buttonClosePopupImage.addEventListener("click", handleCloseImage);
}
function handleOpenCardForm() {
  popupCard.classList.add("popup_show-card");
}

function handleCloseCardForm() {
  popupCard.classList.remove("popup_show-card");
}

buttonOpenCardForm.addEventListener("click", handleOpenCardForm);
buttonCloseCard.addEventListener("click", handleCloseCardForm);

function handleOpenProfile() {
  popupProfile.classList.add("popup_show");
}

function handleCloseProfile() {
  popupProfile.classList.remove("popup_show");
}

buttonEdit.addEventListener("click", handleOpenProfile);
buttonClose.addEventListener("click", handleCloseProfile);

formSaveProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handleCloseProfile();
});

formSaveCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const newCard = new Card(
    inputCardName.value,
    inputCardLink.value
  ).generateCard();

  cardsContainer.prepend(newCard);
  handleCloseCardForm();
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    handleCloseCardForm();
    handleCloseProfile();
    handleCloseImage();
  }
});

popupCard.addEventListener("click", function (evt) {
  if (evt.target === popupCard) {
    handleCloseCardForm();
  }
});

popupProfile.addEventListener("click", function (evt) {
  if (evt.target === popupProfile) {
    handleCloseProfile();
  }
});

popupImage.addEventListener("click", function (evt) {
  if (evt.target === popupImage) {
    handleCloseImage();
  }
});

const validator = new FormValidator(formElement, {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorMessageClass: "popup__input-error",
});

validator.enableValidation();

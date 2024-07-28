import "./pages/index.css";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";

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
  buttonTrashCard,
  inputCardLink,
  formSaveCard,
  template,
  cardsContainer,
  popupImageFull,
  popupImageTitle,
  buttonDeleteConfirmation,
  buttonClosePopupImage,
  buttonCloseDeleteImage,
  buttonAvatarClose,
  editAvatarButton,
  inputAvatar,
} from "./scripts/utils.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "32f87aad-b5d6-486a-8cf8-15bc7c265d11",
    "Content-Type": "application/json",
  },
});

api.getInitialCards().then((result) => {
  const cardSection = new Section(
    {
      items: result,
      renderer: (item) => {
        const cardElement = createCard(item);
        cardSection.addItem(cardElement);
      },
    },
    ".elements"
  );
  cardSection.renderItems();
});
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
  avatarSelector: ".profile__avatar",
});

api.getUserInfo().then((result) => {
  userInfo.setUserInfo(result);
});

const popupChangeAvatar = new PopupWithForm("#popup-avatar", (inputs) => {
  api.editAvatar(inputs).then((result) => {
    userInfo.setUserInfo(result);
  });
});

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  api.editProfile(inputs).then((res) => {
    profileName.textContent = res.name;
    profileAbout.textContent = res.about;
  });
});
const popupDeleteImage = new PopupWithConfirmation(
  "#popup-delete-card",
  (cardId) => {
    api.removeCards(cardId).then((result) => {
      return result;
    });
  }
);

function createCard(item) {
  const card = new Card(
    item,
    userInfo._userId,
    () => {
      popupImage.open(item.name, item.link);
    },
    () => {},
    () => {},
    () => {
      /*const popupDeleteImage = new PopupWithConfirmation(
        "#popup-delete-card",
        () => {
          api.removeCard(item._userId).then((result) => {
            return result;
          });
        }
      );*/
      popupDeleteImage.open(card._id);
      popupDeleteImage.setHandleFormSubmit(() => {
        api.removeCards(card._id).then((result) => {
          card.removeCard();
        });
      });
    }
  );
  return card.generateCard();
}
buttonDeleteConfirmation.addEventListener("click", () => {
  popupDeleteImage.close();
});
const popupImage = new PopupWithImage("#popup-image");

const popupCard = new PopupWithForm("#popup-card", (inputs) => {
  api.createNewCard(inputs).then((result) => {
    const card = createCard(result);
    cardsContainer.prepend(card);
  });
});

popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();
popupDeleteImage.setEventListeners();
popupChangeAvatar.setEventListeners();

editAvatarButton.addEventListener("click", () => {
  popupChangeAvatar.open();
});

buttonAvatarClose.addEventListener("click", () => {
  popupChangeAvatar.close();
});

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
buttonCloseDeleteImage.addEventListener("click", () => {
  popupDeleteImage.close();
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
const numbers = [2, 3, 5];

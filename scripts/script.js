const popupProfile = document.querySelector("#popup-profile");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector("#close-profile-form");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formSaveProfile = document.querySelector("#form-profile");
const buttonSave = document.querySelector("#profile-button-save");
const buttonOpenCardForm = document.querySelector(".profile__add-button");

const popupCard = document.querySelector("#popup-card");
const inputCardName = document.querySelector("#input-card");
const buttonCloseCard = document.querySelector("#close-card-form");
const inputCardLink = document.querySelector("#input-link");
const formSaveCard = document.querySelector("#form-card");
const template = document.querySelector(".template__card");
const cardsContainer = document.querySelector(".elements");

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

const popupImage = document.querySelector("#popup-image");
const popupImageFull = document.querySelector(".popup-image__full");
const popupImageTitle = document.querySelector(".popup-image__title");
const buttonClosePopupImage = document.querySelector("#close-popup-image");

function createCard(name, link) {
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
    popupImage.classList.add("popup-image_show");
    popupImageFull.src = cardImage.src;
    popupImageTitle.textContent = cardTitle.textContent;
  });

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  return card;
}

function handleCloseImage() {
  popupImage.classList.remove("popup-image_show");
}

buttonClosePopupImage.addEventListener("click", handleCloseImage);

initialCards.forEach(function (element) {
  const initialCard = createCard(element.name, element.link);
  cardsContainer.append(initialCard);
});

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
  const newCard = createCard(inputCardName.value, inputCardLink.value);
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

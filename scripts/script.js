const popupProfile = document.querySelector(".popup");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector(".popup__close-icon");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup__input-name");
const inputAbout = document.querySelector(".popup__input-about");
const formSaveProfile = document.querySelector(".popup__form");
const buttonSave = document.querySelector(".popup__button-save");

function handleOpenProfile(evt) {
  popupProfile.classList.add("popup_show");
}

function handleCloseProfile(evt) {
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

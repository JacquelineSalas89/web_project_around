export default class UserInfo {
  constructor({ nameSelector, aboutSelector, userId }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._userId = userId;
    this.avatar = document.querySelector(".profile__avatar");
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      //avatar: this.avatar.src,
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._userAbout = data.about;
    this._userId = data._id;
    this.avatar.src = data.avatar;
  }

  getUserId() {
    return {
      user: this._userId,
    };
  }
}

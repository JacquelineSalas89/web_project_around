export default class Section {
  constructor( {data}, cardContainer) {
    this._renderItems =  data;
    this._container = document.querySelector(cardContainer)
  }

  addItem(element) {
    this._container.append(element);
  }

  renderer()
}

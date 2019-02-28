
const MunrosView = function (container, munro) {
  this.munroContainer = container;
  this.munro = munro;
};

MunrosView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const munrosList = this.createMunroList();
  munroContainer.appendChild(munrosList);

  this.munroContainer.appendChild(munroContainer);
};

MunrosView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  if (!this.munro.name) {
    name.textContent = "Misc";
  } else {
    name.textContent = this.munro.name;
  }
  return name;

};

MunrosView.prototype.createMunroList = function () {
  const munrosList = document.createElement('ul');
  munrosList.classList.add('munro-info');
  this.populateList(munrosList);
  return munrosList;
};

MunrosView.prototype.populateList = function (list) {
    munr = this.munro;
    let munroListItem = document.createElement('li');
    munroListItem.textContent = munr.meaning;
    list.appendChild(munroListItem);

    munroListItem = document.createElement('li');
    munroListItem.textContent = munr.height;
    list.appendChild(munroListItem);

};

module.exports = MunrosView;

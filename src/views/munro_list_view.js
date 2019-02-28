const PubSub = require('../helpers/pub_sub.js');
const MunrosView = require('./wrapper_view.js');

const MunroListView = function (container) {
  this.container = container;
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:data-ready', (evt) => {
    this.munros = evt.detail;
    this.render();
  });
};

MunroListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new MunrosView(this.container, munro);
    munroView.render();
  })
};

module.exports = MunroListView;

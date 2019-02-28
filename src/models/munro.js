const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munro = function () {
  this.munros = [];
}

Munro.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/munros');
  requestHelper.get().
                then((data) => {
  this.munros = data;
  PubSub.publish('Munro:data-ready', this.munros);
});
};

// Munro.prototype.handleDataReady = function (munros) {
//   this.munros = this.getMunroNames(munros);
//   info = this.getMunroInfo(munros);
//   this.munros.push(info)
//
// };
//
// Munro.prototype.getMunroNames = function (munros) {
//   const names = [];
//   munros.forEach( (munro) => {
//     const name = munro.name;
//     names.push(name)
//   })
//   return names;
// };
//
// Munro.prototype.getMunroInfo = function (munros) {
//   var info = [];
//   munros.forEach( (munro) => {
//     const height = munro.height;
//     const meaning = munro.meaning;
//     info.push(height, meaning);
//   })
//   return info;
// };

module.exports = Munro;

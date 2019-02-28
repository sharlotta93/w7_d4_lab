const MunroListView = require('./views/munro_list_view.js');
const Munro = require('./models/munro.js');

document.addEventListener('DOMContentLoaded', () => {
  const munrosListContainer = document.querySelector('#munro');
  const munrosListView = new MunroListView(munrosListContainer);
  munrosListView.bindEvents();

  const munros = new Munro();
  munros.getData();
});
